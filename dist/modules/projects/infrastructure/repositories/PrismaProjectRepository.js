import { buildPaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
function mapProject(row) {
    return {
        id: row.id,
        nombre: row.nombre,
        alias: row.alias,
        tipo: row.tipo,
        cliente: row.cliente,
        ciudad: row.ciudad,
        estado: row.estado,
        direccion: row.direccion,
        codigoPostal: row.codigo_postal,
        fechaOperacion: row.fecha_operacion ? new Date(row.fecha_operacion) : null,
        notas: row.notas,
        polizaAdquirida: row.poliza_adquirida ? new Date(row.poliza_adquirida) : null,
        polizaVence: row.poliza_vence ? new Date(row.poliza_vence) : null,
        creadoPor: row.creado_por,
        creadoFecha: new Date(row.creado_fecha),
        modificadoPor: row.modificado_por,
        modificadoFecha: new Date(row.modificado_fecha),
    };
}
export class PrismaProjectRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    async findMany(filters) {
        const where = {
            ...(filters.query
                ? {
                    OR: [
                        { nombre: { contains: filters.query, mode: "insensitive" } },
                        { alias: { contains: filters.query, mode: "insensitive" } },
                        { cliente: { contains: filters.query, mode: "insensitive" } },
                    ],
                }
                : {}),
            ...(filters.cliente ? { cliente: { contains: filters.cliente, mode: "insensitive" } } : {}),
            ...(filters.ciudad ? { ciudad: { contains: filters.ciudad, mode: "insensitive" } } : {}),
            ...(filters.estado ? { estado: { contains: filters.estado, mode: "insensitive" } } : {}),
        };
        const skip = (filters.page - 1) * filters.pageSize;
        const [rows, total] = await Promise.all([
            this.db.proyectos.findMany({ where, orderBy: [{ nombre: "asc" }], skip, take: filters.pageSize }),
            this.db.proyectos.count({ where }),
        ]);
        return buildPaginatedResult({
            items: rows.map(mapProject),
            total,
            page: filters.page,
            pageSize: filters.pageSize,
        });
    }
    async findById(id) {
        const row = await this.db.proyectos.findUnique({ where: { id } });
        return row ? mapProject(row) : null;
    }
    async create(input) {
        const row = await this.db.proyectos.create({
            data: {
                nombre: input.nombre,
                alias: input.alias ?? null,
                tipo: input.tipo ?? null,
                cliente: input.cliente ?? null,
                ciudad: input.ciudad ?? null,
                estado: input.estado ?? null,
                direccion: input.direccion ?? null,
                codigo_postal: input.codigoPostal ?? null,
                fecha_operacion: input.fechaOperacion ?? null,
                notas: input.notas ?? null,
                poliza_adquirida: input.polizaAdquirida ?? null,
                poliza_vence: input.polizaVence ?? null,
                creado_por: input.creadoPor ?? null,
                modificado_por: input.creadoPor ?? null,
            },
        });
        return mapProject(row);
    }
    async update(id, input) {
        const row = await this.db.proyectos.updateManyAndReturn({
            where: { id },
            data: {
                ...(input.nombre !== undefined ? { nombre: input.nombre } : {}),
                ...(input.alias !== undefined ? { alias: input.alias } : {}),
                ...(input.tipo !== undefined ? { tipo: input.tipo } : {}),
                ...(input.cliente !== undefined ? { cliente: input.cliente } : {}),
                ...(input.ciudad !== undefined ? { ciudad: input.ciudad } : {}),
                ...(input.estado !== undefined ? { estado: input.estado } : {}),
                ...(input.direccion !== undefined ? { direccion: input.direccion } : {}),
                ...(input.codigoPostal !== undefined ? { codigo_postal: input.codigoPostal } : {}),
                ...(input.fechaOperacion !== undefined ? { fecha_operacion: input.fechaOperacion } : {}),
                ...(input.notas !== undefined ? { notas: input.notas } : {}),
                ...(input.polizaAdquirida !== undefined ? { poliza_adquirida: input.polizaAdquirida } : {}),
                ...(input.polizaVence !== undefined ? { poliza_vence: input.polizaVence } : {}),
                ...(input.modificadoPor !== undefined ? { modificado_por: input.modificadoPor } : {}),
            },
            limit: 1,
        });
        return row[0] ? mapProject(row[0]) : null;
    }
    async delete(id) {
        const deleted = await this.db.proyectos.deleteMany({ where: { id } });
        return deleted.count > 0;
    }
}
//# sourceMappingURL=PrismaProjectRepository.js.map