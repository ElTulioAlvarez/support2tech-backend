import type { PrismaClient } from "@prisma/client";
import type {
  UpdateUserInput,
  UserEntity,
  UserFilters,
} from "../../domain/entities/User.js";
import type {
  PaginatedUsersResult,
  UserRepository,
} from "../../domain/repositories/UserRepository.js";

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async list(filters: UserFilters): Promise<PaginatedUsersResult> {
    const page = filters.page ?? 1;
    const pageSize = filters.pageSize ?? 20;
    const skip = (page - 1) * pageSize;

    const where: any = {};

    if (filters.rol) where.rol = filters.rol;
    if (filters.estado) where.estado = filters.estado;

    if (filters.query) {
      where.OR = [
        { id: { contains: filters.query, mode: "insensitive" } },
        { nombre: { contains: filters.query, mode: "insensitive" } },
        { telefono: { contains: filters.query, mode: "insensitive" } },
        {
          users: {
            email: {
              contains: filters.query,
              mode: "insensitive",
            },
          },
        },
      ];
    }

    const [items, total] = await Promise.all([
      this.prisma.profiles.findMany({
        where,
        orderBy: { created_at: "desc" },
        skip,
        take: pageSize,
        include: {
          users: true,
        },
      }),
      this.prisma.profiles.count({ where }),
    ]);

    return {
      items: items.map((item) => this.toEntity(item)),
      total,
      page,
      pageSize,
      totalPages: Math.max(1, Math.ceil(total / pageSize)),
    };
  }

  async findById(id: string): Promise<UserEntity | null> {
    const item = await this.prisma.profiles.findUnique({
      where: { id },
      include: {
        users: true,
      },
    });

    return item ? this.toEntity(item) : null;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const item = await this.prisma.profiles.findFirst({
      where: {
        users: {
          email: {
            equals: email,
            mode: "insensitive",
          },
        },
      },
      include: {
        users: true,
      },
    });

    return item ? this.toEntity(item) : null;
  }

  async create(input: {
    id: string;
    nombre?: string | null;
    telefono?: string | null;
    rol: "admin" | "tecnico";
    estado: "activo" | "inactivo";
  }): Promise<UserEntity> {
    try {
      const created = await this.prisma.profiles.create({
        data: {
          id: input.id,
          nombre: input.nombre ?? null,
          telefono: input.telefono ?? null,
          rol: input.rol,
          estado: input.estado,
        },
        include: {
          users: true,
        },
      });

      return this.toEntity(created);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new Error("Ya existe un perfil para este usuario.");
      }

      throw error;
    }
  }

  async update(id: string, input: UpdateUserInput): Promise<UserEntity | null> {
    const exists = await this.prisma.profiles.findUnique({
      where: { id },
    });

    if (!exists) return null;

    const updated = await this.prisma.profiles.update({
      where: { id },
      data: {
        ...(input.nombre !== undefined ? { nombre: input.nombre } : {}),
        ...(input.telefono !== undefined ? { telefono: input.telefono } : {}),
        ...(input.rol !== undefined ? { rol: input.rol } : {}),
        ...(input.estado !== undefined ? { estado: input.estado } : {}),
      },
      include: {
        users: true,
      },
    });

    return this.toEntity(updated);
  }

  async delete(id: string): Promise<boolean> {
    const exists = await this.prisma.profiles.findUnique({
      where: { id },
      select: {
        id: true,
        estado: true,
      },
    });

    if (!exists) return false;

    if (exists.estado === "inactivo") {
      return true;
    }

    await this.prisma.profiles.update({
      where: { id },
      data: {
        estado: "inactivo",
      },
    });

    return true;
  }

  private toEntity(item: any): UserEntity {
    return {
      id: item.id,
      email: item.users?.email ?? "",
      nombre: item.nombre ?? null,
      telefono: item.telefono ?? null,
      rol: item.rol,
      estado: item.estado,
      createdAt: item.created_at ? new Date(item.created_at) : null,
    };
  }
}