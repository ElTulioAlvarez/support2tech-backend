import type { PaginationParams } from "../../../../shared/domain/pagination/Pagination.js";
export interface Project {
    id: string;
    nombre: string;
    alias: string | null;
    tipo: string | null;
    cliente: string | null;
    ciudad: string | null;
    estado: string | null;
    direccion: string | null;
    codigoPostal: string | null;
    fechaOperacion: Date | null;
    notas: string | null;
    polizaAdquirida: Date | null;
    polizaVence: Date | null;
    creadoPor: string | null;
    creadoFecha: Date;
    modificadoPor: string | null;
    modificadoFecha: Date;
}
export interface CreateProjectInput {
    nombre: string;
    alias?: string | null | undefined;
    tipo?: string | null | undefined;
    cliente?: string | null | undefined;
    ciudad?: string | null | undefined;
    estado?: string | null | undefined;
    direccion?: string | null | undefined;
    codigoPostal?: string | null | undefined;
    fechaOperacion?: Date | null | undefined;
    notas?: string | null | undefined;
    polizaAdquirida?: Date | null | undefined;
    polizaVence?: Date | null | undefined;
    creadoPor?: string | null | undefined;
}
export interface UpdateProjectInput {
    nombre?: string | undefined;
    alias?: string | null | undefined;
    tipo?: string | null | undefined;
    cliente?: string | null | undefined;
    ciudad?: string | null | undefined;
    estado?: string | null | undefined;
    direccion?: string | null | undefined;
    codigoPostal?: string | null | undefined;
    fechaOperacion?: Date | null | undefined;
    notas?: string | null | undefined;
    polizaAdquirida?: Date | null | undefined;
    polizaVence?: Date | null | undefined;
    modificadoPor?: string | null | undefined;
}
export interface ProjectListFilters extends PaginationParams {
    query?: string | undefined;
    cliente?: string | undefined;
    ciudad?: string | undefined;
    estado?: string | undefined;
}
//# sourceMappingURL=Project.d.ts.map