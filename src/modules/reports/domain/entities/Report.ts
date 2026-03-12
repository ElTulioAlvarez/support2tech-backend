import type { PaginationParams } from "../../../../shared/domain/pagination/Pagination.js";

export interface Report {
  id: string;
  cliente: string | null;
  fecha: Date | null;
  sucursal: string | null;
  numeroTicket: string | null;
  estadoTicket: string | null;
  tipoMantenimiento: string | null;
  tipoServicio: string | null;
  horaInicio: string | null;
  area: string | null;
  tecnico: string | null;
  equipoTipo: string | null;
  componente: string | null;
  materialRefaccion: string | null;
  descripcionEquipo: string | null;
  numeroSerieEquipo: string | null;
  numeroSerieComponente: string | null;
  numeroPedido: string | null;
  descripcion: string | null;
  pruebasRealizadas: string | null;
  diagnostico: string | null;
  notas: string | null;
  requisitoRefacciones: string | null;
  firmaConformidadRefacciones: string | null;
  comentarios: string | null;
  gerenteProyecto: string | null;
  firmaTecnicoNombre: string | null;
  firmaTecnicoDibujo: string | null;
  firmaGerenteNombre: string | null;
  firmaGerenteDibujo: string | null;
  createdAt: Date | null;
  creadoPor: string | null;
  actividadCalendarioId: string | null;
  draftId: string | null;
  beforeCount: number;
  afterCount: number;
  hasVideo: boolean;
  pdfPath: string | null;
  pdfGeneratedAt: Date | null;
  proyectoId: string | null;
}

export interface ReportFilters extends PaginationParams {
  proyectoId?: string | undefined;
  from?: Date | undefined;
  to?: Date | undefined;
  estadoTicket?: string | undefined;
  tecnico?: string | undefined;
  query?: string | undefined;
}

export interface CreateReportInput {
  cliente?: string | null | undefined;
  fecha?: Date | null | undefined;
  sucursal?: string | null | undefined;
  numeroTicket?: string | null | undefined;
  estadoTicket?: string | null | undefined;
  tipoMantenimiento?: string | null | undefined;
  tipoServicio?: string | null | undefined;
  horaInicio?: string | null | undefined;
  area?: string | null | undefined;
  tecnico?: string | null | undefined;
  equipoTipo?: string | null | undefined;
  componente?: string | null | undefined;
  materialRefaccion?: string | null | undefined;
  descripcionEquipo?: string | null | undefined;
  numeroSerieEquipo?: string | null | undefined;
  numeroSerieComponente?: string | null | undefined;
  numeroPedido?: string | null | undefined;
  descripcion?: string | null | undefined;
  pruebasRealizadas?: string | null | undefined;
  diagnostico?: string | null | undefined;
  notas?: string | null | undefined;
  requisitoRefacciones?: string | null | undefined;
  firmaConformidadRefacciones?: string | null | undefined;
  comentarios?: string | null | undefined;
  gerenteProyecto?: string | null | undefined;
  firmaTecnicoNombre?: string | null | undefined;
  firmaTecnicoDibujo?: string | null | undefined;
  firmaGerenteNombre?: string | null | undefined;
  firmaGerenteDibujo?: string | null | undefined;
  creadoPor?: string | null | undefined;
  actividadCalendarioId?: string | null | undefined;
  draftId?: string | null | undefined;
  beforeCount?: number | undefined;
  afterCount?: number | undefined;
  hasVideo?: boolean | undefined;
  pdfPath?: string | null | undefined;
  pdfGeneratedAt?: Date | null | undefined;
  proyectoId?: string | null | undefined;
}

export interface UpdateReportInput extends Omit<CreateReportInput, "creadoPor"> {}
