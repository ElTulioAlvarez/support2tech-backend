import type { PaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
import type { CreateTechnicianInput, TechnicianCalendarTask, TechnicianFilters, TechnicianSummary, UpdateTechnicianInput } from "../entities/Technician.js";
export interface TechnicianRepository {
    findMany(filters: TechnicianFilters): Promise<PaginatedResult<TechnicianSummary>>;
    findById(id: string): Promise<TechnicianSummary | null>;
    findCalendarByTechnician(id: string, start?: Date, end?: Date): Promise<TechnicianCalendarTask[]>;
    create(input: CreateTechnicianInput): Promise<TechnicianSummary>;
    update(id: string, input: UpdateTechnicianInput): Promise<TechnicianSummary | null>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=TechnicianRepository.d.ts.map