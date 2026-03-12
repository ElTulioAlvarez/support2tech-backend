import type { PaginationParams } from "../../../../shared/domain/pagination/Pagination.js";
export type CalendarStatus = "pendiente" | "en_progreso" | "completado" | "aplazado" | "cancelado";
export interface CalendarTask {
    id: string;
    tecnicoId: string;
    reporteId: string | null;
    titulo: string;
    descripcion: string | null;
    fechaProgramada: Date;
    horaProgramada: string | null;
    estatus: CalendarStatus | string;
    motivoAplazo: string | null;
    fechaModificada: Date | null;
    creadoPor: string;
    createdAt: Date;
    horaInicio: string | null;
    horaFin: string | null;
    orden: number | null;
    color: string | null;
    ubicacion: string | null;
    tipo: string | null;
    prioridad: number | null;
    proyectoId: string | null;
    numeroTicket: string;
}
export interface CalendarFilters extends PaginationParams {
    tecnicoId?: string | undefined;
    proyectoId?: string | undefined;
    status?: string | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
}
export interface CreateCalendarTaskInput {
    tecnicoId: string;
    reporteId?: string | null | undefined;
    titulo: string;
    descripcion?: string | null | undefined;
    fechaProgramada: Date;
    horaProgramada?: string | null | undefined;
    estatus?: CalendarStatus | undefined;
    motivoAplazo?: string | null | undefined;
    creadoPor: string;
    horaInicio?: string | null | undefined;
    horaFin?: string | null | undefined;
    orden?: number | null | undefined;
    color?: string | null | undefined;
    ubicacion?: string | null | undefined;
    tipo?: string | null | undefined;
    prioridad?: number | null | undefined;
    proyectoId?: string | null | undefined;
}
export interface UpdateCalendarTaskInput {
    tecnicoId?: string | undefined;
    reporteId?: string | null | undefined;
    titulo?: string | undefined;
    descripcion?: string | null | undefined;
    fechaProgramada?: Date | undefined;
    horaProgramada?: string | null | undefined;
    estatus?: CalendarStatus | undefined;
    motivoAplazo?: string | null | undefined;
    horaInicio?: string | null | undefined;
    horaFin?: string | null | undefined;
    orden?: number | null | undefined;
    color?: string | null | undefined;
    ubicacion?: string | null | undefined;
    tipo?: string | null | undefined;
    prioridad?: number | null | undefined;
    proyectoId?: string | null | undefined;
    fechaModificada?: Date | null | undefined;
}
//# sourceMappingURL=CalendarTask.d.ts.map