import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
import type { CreateTechnicianInput, TechnicianCalendarTask, TechnicianFilters, TechnicianSummary, UpdateTechnicianInput } from "../../domain/entities/Technician.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
export declare class PrismaTechnicianRepository implements TechnicianRepository {
    private readonly db;
    constructor(db: PrismaClient);
    findMany(filters: TechnicianFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<TechnicianSummary>>;
    findById(id: string): Promise<TechnicianSummary | null>;
    findCalendarByTechnician(id: string, start?: Date, end?: Date): Promise<TechnicianCalendarTask[]>;
    create(input: CreateTechnicianInput): Promise<TechnicianSummary>;
    update(id: string, input: UpdateTechnicianInput): Promise<TechnicianSummary | null>;
    delete(id: string): Promise<boolean>;
    private countPending;
}
//# sourceMappingURL=PrismaTechnicianRepository.d.ts.map