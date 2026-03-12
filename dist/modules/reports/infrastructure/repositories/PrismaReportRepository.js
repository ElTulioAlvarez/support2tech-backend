import { buildPaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
function mapReport(row) {
    return {
        id: row.id,
        cliente: row.cliente,
        fecha: row.fecha ? new Date(row.fecha) : null,
        sucursal: row.sucursal,
        numeroTicket: row.numero_ticket,
        estadoTicket: row.estado_ticket,
        tipoMantenimiento: row.tipo_mantenimiento,
        tipoServicio: row.tipo_servicio,
        horaInicio: row.hora_inicio,
        area: row.area,
        tecnico: row.tecnico,
        equipoTipo: row.equipo_tipo,
        componente: row.componente,
        materialRefaccion: row.material_refaccion,
        descripcionEquipo: row.descripcion_equipo,
        numeroSerieEquipo: row.numero_serie_equipo,
        numeroSerieComponente: row.numero_serie_componente,
        numeroPedido: row.numero_pedido,
        descripcion: row.descripcion,
        pruebasRealizadas: row.pruebas_realizadas,
        diagnostico: row.diagnostico,
        notas: row.notas,
        requisitoRefacciones: row.requisito_refacciones,
        firmaConformidadRefacciones: row.firma_conformidad_refacciones,
        comentarios: row.comentarios,
        gerenteProyecto: row.gerente_proyecto,
        firmaTecnicoNombre: row.firma_tecnico_nombre,
        firmaTecnicoDibujo: row.firma_tecnico_dibujo,
        firmaGerenteNombre: row.firma_gerente_nombre,
        firmaGerenteDibujo: row.firma_gerente_dibujo,
        createdAt: row.created_at ? new Date(row.created_at) : null,
        creadoPor: row.creado_por,
        actividadCalendarioId: row.actividad_calendario_id,
        draftId: row.draft_id,
        beforeCount: row.before_count,
        afterCount: row.after_count,
        hasVideo: row.has_video,
        pdfPath: row.pdf_path,
        pdfGeneratedAt: row.pdf_generated_at ? new Date(row.pdf_generated_at) : null,
        proyectoId: row.proyecto_id,
    };
}
export class PrismaReportRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    async findMany(filters) {
        const where = {
            ...(filters.proyectoId ? { proyecto_id: filters.proyectoId } : {}),
            ...(filters.estadoTicket ? { estado_ticket: filters.estadoTicket } : {}),
            ...(filters.tecnico ? { tecnico: { contains: filters.tecnico, mode: "insensitive" } } : {}),
            ...(filters.query
                ? {
                    OR: [
                        { cliente: { contains: filters.query, mode: "insensitive" } },
                        { sucursal: { contains: filters.query, mode: "insensitive" } },
                        { numero_ticket: { contains: filters.query, mode: "insensitive" } },
                        { tecnico: { contains: filters.query, mode: "insensitive" } },
                        { descripcion: { contains: filters.query, mode: "insensitive" } },
                    ],
                }
                : {}),
            ...(filters.from || filters.to
                ? { fecha: { ...(filters.from ? { gte: filters.from } : {}), ...(filters.to ? { lte: filters.to } : {}) } }
                : {}),
        };
        const skip = (filters.page - 1) * filters.pageSize;
        const [rows, total] = await Promise.all([
            this.db.reportes.findMany({ where, orderBy: [{ fecha: "desc" }, { created_at: "desc" }], skip, take: filters.pageSize }),
            this.db.reportes.count({ where }),
        ]);
        return buildPaginatedResult({ items: rows.map(mapReport), total, page: filters.page, pageSize: filters.pageSize });
    }
    async findById(id) {
        const row = await this.db.reportes.findUnique({ where: { id } });
        return row ? mapReport(row) : null;
    }
    async create(input) {
        const row = await this.db.reportes.create({ data: this.toDbInput(input) });
        return mapReport(row);
    }
    async update(id, input) {
        const row = await this.db.reportes.updateManyAndReturn({
            where: { id },
            data: this.toDbInput(input),
            limit: 1,
        });
        return row[0] ? mapReport(row[0]) : null;
    }
    async delete(id) {
        const deleted = await this.db.reportes.deleteMany({ where: { id } });
        return deleted.count > 0;
    }
    toDbInput(input) {
        return {
            ...(input.cliente !== undefined ? { cliente: input.cliente } : {}),
            ...(input.fecha !== undefined ? { fecha: input.fecha } : {}),
            ...(input.sucursal !== undefined ? { sucursal: input.sucursal } : {}),
            ...(input.numeroTicket !== undefined ? { numero_ticket: input.numeroTicket } : {}),
            ...(input.estadoTicket !== undefined ? { estado_ticket: input.estadoTicket } : {}),
            ...(input.tipoMantenimiento !== undefined ? { tipo_mantenimiento: input.tipoMantenimiento } : {}),
            ...(input.tipoServicio !== undefined ? { tipo_servicio: input.tipoServicio } : {}),
            ...(input.horaInicio !== undefined ? { hora_inicio: input.horaInicio } : {}),
            ...(input.area !== undefined ? { area: input.area } : {}),
            ...(input.tecnico !== undefined ? { tecnico: input.tecnico } : {}),
            ...(input.equipoTipo !== undefined ? { equipo_tipo: input.equipoTipo } : {}),
            ...(input.componente !== undefined ? { componente: input.componente } : {}),
            ...(input.materialRefaccion !== undefined ? { material_refaccion: input.materialRefaccion } : {}),
            ...(input.descripcionEquipo !== undefined ? { descripcion_equipo: input.descripcionEquipo } : {}),
            ...(input.numeroSerieEquipo !== undefined ? { numero_serie_equipo: input.numeroSerieEquipo } : {}),
            ...(input.numeroSerieComponente !== undefined ? { numero_serie_componente: input.numeroSerieComponente } : {}),
            ...(input.numeroPedido !== undefined ? { numero_pedido: input.numeroPedido } : {}),
            ...(input.descripcion !== undefined ? { descripcion: input.descripcion } : {}),
            ...(input.pruebasRealizadas !== undefined ? { pruebas_realizadas: input.pruebasRealizadas } : {}),
            ...(input.diagnostico !== undefined ? { diagnostico: input.diagnostico } : {}),
            ...(input.notas !== undefined ? { notas: input.notas } : {}),
            ...(input.requisitoRefacciones !== undefined ? { requisito_refacciones: input.requisitoRefacciones } : {}),
            ...(input.firmaConformidadRefacciones !== undefined ? { firma_conformidad_refacciones: input.firmaConformidadRefacciones } : {}),
            ...(input.comentarios !== undefined ? { comentarios: input.comentarios } : {}),
            ...(input.gerenteProyecto !== undefined ? { gerente_proyecto: input.gerenteProyecto } : {}),
            ...(input.firmaTecnicoNombre !== undefined ? { firma_tecnico_nombre: input.firmaTecnicoNombre } : {}),
            ...(input.firmaTecnicoDibujo !== undefined ? { firma_tecnico_dibujo: input.firmaTecnicoDibujo } : {}),
            ...(input.firmaGerenteNombre !== undefined ? { firma_gerente_nombre: input.firmaGerenteNombre } : {}),
            ...(input.firmaGerenteDibujo !== undefined ? { firma_gerente_dibujo: input.firmaGerenteDibujo } : {}),
            ...("creadoPor" in input ? { creado_por: input.creadoPor ?? null } : {}),
            ...(input.actividadCalendarioId !== undefined ? { actividad_calendario_id: input.actividadCalendarioId } : {}),
            ...(input.draftId !== undefined ? { draft_id: input.draftId } : {}),
            ...(input.beforeCount !== undefined ? { before_count: input.beforeCount } : {}),
            ...(input.afterCount !== undefined ? { after_count: input.afterCount } : {}),
            ...(input.hasVideo !== undefined ? { has_video: input.hasVideo } : {}),
            ...(input.pdfPath !== undefined ? { pdf_path: input.pdfPath } : {}),
            ...(input.pdfGeneratedAt !== undefined ? { pdf_generated_at: input.pdfGeneratedAt } : {}),
            ...(input.proyectoId !== undefined ? { proyecto_id: input.proyectoId } : {}),
        };
    }
}
//# sourceMappingURL=PrismaReportRepository.js.map