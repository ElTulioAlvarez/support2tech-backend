import type { PaginationParams } from "../../../../shared/domain/pagination/Pagination.js";

export interface TechnicianSummary {
  id: string;
  nombre: string | null;
  telefono: string | null;
  estado: string;
  createdAt: Date | null;
  pendingTasks: number;
}

export interface TechnicianCalendarTask {
  id: string;
  titulo: string;
  fechaProgramada: Date;
  horaProgramada: string | null;
  estatus: string;
  proyectoId: string | null;
  numeroTicket: string;
}

export interface TechnicianFilters extends PaginationParams {
  query?: string | undefined;
  estado?: string | undefined;
}

export interface CreateTechnicianInput {
  id: string;
  nombre?: string | null | undefined;
  telefono?: string | null | undefined;
  estado?: string | undefined;
}

export interface UpdateTechnicianInput {
  nombre?: string | null | undefined;
  telefono?: string | null | undefined;
  estado?: string | undefined;
}
