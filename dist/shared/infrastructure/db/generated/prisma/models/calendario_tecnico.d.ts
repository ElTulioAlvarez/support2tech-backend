import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model calendario_tecnico
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type calendario_tecnicoModel = runtime.Types.Result.DefaultSelection<Prisma.$calendario_tecnicoPayload>;
export type AggregateCalendario_tecnico = {
    _count: Calendario_tecnicoCountAggregateOutputType | null;
    _avg: Calendario_tecnicoAvgAggregateOutputType | null;
    _sum: Calendario_tecnicoSumAggregateOutputType | null;
    _min: Calendario_tecnicoMinAggregateOutputType | null;
    _max: Calendario_tecnicoMaxAggregateOutputType | null;
};
export type Calendario_tecnicoAvgAggregateOutputType = {
    orden: number | null;
    prioridad: number | null;
    numero_ticket_seq: number | null;
};
export type Calendario_tecnicoSumAggregateOutputType = {
    orden: number | null;
    prioridad: number | null;
    numero_ticket_seq: bigint | null;
};
export type Calendario_tecnicoMinAggregateOutputType = {
    id: string | null;
    tecnico_id: string | null;
    reporte_id: string | null;
    titulo: string | null;
    descripcion: string | null;
    fecha_programada: Date | null;
    hora_programada: Date | null;
    estatus: string | null;
    motivo_aplazo: string | null;
    fecha_modificada: Date | null;
    creado_por: string | null;
    created_at: Date | null;
    hora_inicio: Date | null;
    hora_fin: Date | null;
    orden: number | null;
    color: string | null;
    ubicacion: string | null;
    tipo: string | null;
    prioridad: number | null;
    proyecto_id: string | null;
    numero_ticket_seq: bigint | null;
    numero_ticket: string | null;
};
export type Calendario_tecnicoMaxAggregateOutputType = {
    id: string | null;
    tecnico_id: string | null;
    reporte_id: string | null;
    titulo: string | null;
    descripcion: string | null;
    fecha_programada: Date | null;
    hora_programada: Date | null;
    estatus: string | null;
    motivo_aplazo: string | null;
    fecha_modificada: Date | null;
    creado_por: string | null;
    created_at: Date | null;
    hora_inicio: Date | null;
    hora_fin: Date | null;
    orden: number | null;
    color: string | null;
    ubicacion: string | null;
    tipo: string | null;
    prioridad: number | null;
    proyecto_id: string | null;
    numero_ticket_seq: bigint | null;
    numero_ticket: string | null;
};
export type Calendario_tecnicoCountAggregateOutputType = {
    id: number;
    tecnico_id: number;
    reporte_id: number;
    titulo: number;
    descripcion: number;
    fecha_programada: number;
    hora_programada: number;
    estatus: number;
    motivo_aplazo: number;
    fecha_modificada: number;
    creado_por: number;
    created_at: number;
    hora_inicio: number;
    hora_fin: number;
    orden: number;
    color: number;
    ubicacion: number;
    tipo: number;
    prioridad: number;
    proyecto_id: number;
    numero_ticket_seq: number;
    numero_ticket: number;
    _all: number;
};
export type Calendario_tecnicoAvgAggregateInputType = {
    orden?: true;
    prioridad?: true;
    numero_ticket_seq?: true;
};
export type Calendario_tecnicoSumAggregateInputType = {
    orden?: true;
    prioridad?: true;
    numero_ticket_seq?: true;
};
export type Calendario_tecnicoMinAggregateInputType = {
    id?: true;
    tecnico_id?: true;
    reporte_id?: true;
    titulo?: true;
    descripcion?: true;
    fecha_programada?: true;
    hora_programada?: true;
    estatus?: true;
    motivo_aplazo?: true;
    fecha_modificada?: true;
    creado_por?: true;
    created_at?: true;
    hora_inicio?: true;
    hora_fin?: true;
    orden?: true;
    color?: true;
    ubicacion?: true;
    tipo?: true;
    prioridad?: true;
    proyecto_id?: true;
    numero_ticket_seq?: true;
    numero_ticket?: true;
};
export type Calendario_tecnicoMaxAggregateInputType = {
    id?: true;
    tecnico_id?: true;
    reporte_id?: true;
    titulo?: true;
    descripcion?: true;
    fecha_programada?: true;
    hora_programada?: true;
    estatus?: true;
    motivo_aplazo?: true;
    fecha_modificada?: true;
    creado_por?: true;
    created_at?: true;
    hora_inicio?: true;
    hora_fin?: true;
    orden?: true;
    color?: true;
    ubicacion?: true;
    tipo?: true;
    prioridad?: true;
    proyecto_id?: true;
    numero_ticket_seq?: true;
    numero_ticket?: true;
};
export type Calendario_tecnicoCountAggregateInputType = {
    id?: true;
    tecnico_id?: true;
    reporte_id?: true;
    titulo?: true;
    descripcion?: true;
    fecha_programada?: true;
    hora_programada?: true;
    estatus?: true;
    motivo_aplazo?: true;
    fecha_modificada?: true;
    creado_por?: true;
    created_at?: true;
    hora_inicio?: true;
    hora_fin?: true;
    orden?: true;
    color?: true;
    ubicacion?: true;
    tipo?: true;
    prioridad?: true;
    proyecto_id?: true;
    numero_ticket_seq?: true;
    numero_ticket?: true;
    _all?: true;
};
export type Calendario_tecnicoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which calendario_tecnico to aggregate.
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of calendario_tecnicos to fetch.
     */
    orderBy?: Prisma.calendario_tecnicoOrderByWithRelationInput | Prisma.calendario_tecnicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.calendario_tecnicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` calendario_tecnicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` calendario_tecnicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned calendario_tecnicos
    **/
    _count?: true | Calendario_tecnicoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Calendario_tecnicoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Calendario_tecnicoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Calendario_tecnicoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Calendario_tecnicoMaxAggregateInputType;
};
export type GetCalendario_tecnicoAggregateType<T extends Calendario_tecnicoAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendario_tecnico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendario_tecnico[P]> : Prisma.GetScalarType<T[P], AggregateCalendario_tecnico[P]>;
};
export type calendario_tecnicoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.calendario_tecnicoWhereInput;
    orderBy?: Prisma.calendario_tecnicoOrderByWithAggregationInput | Prisma.calendario_tecnicoOrderByWithAggregationInput[];
    by: Prisma.Calendario_tecnicoScalarFieldEnum[] | Prisma.Calendario_tecnicoScalarFieldEnum;
    having?: Prisma.calendario_tecnicoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Calendario_tecnicoCountAggregateInputType | true;
    _avg?: Calendario_tecnicoAvgAggregateInputType;
    _sum?: Calendario_tecnicoSumAggregateInputType;
    _min?: Calendario_tecnicoMinAggregateInputType;
    _max?: Calendario_tecnicoMaxAggregateInputType;
};
export type Calendario_tecnicoGroupByOutputType = {
    id: string;
    tecnico_id: string;
    reporte_id: string | null;
    titulo: string;
    descripcion: string | null;
    fecha_programada: Date;
    hora_programada: Date | null;
    estatus: string;
    motivo_aplazo: string | null;
    fecha_modificada: Date | null;
    creado_por: string;
    created_at: Date;
    hora_inicio: Date | null;
    hora_fin: Date | null;
    orden: number | null;
    color: string | null;
    ubicacion: string | null;
    tipo: string | null;
    prioridad: number | null;
    proyecto_id: string | null;
    numero_ticket_seq: bigint;
    numero_ticket: string;
    _count: Calendario_tecnicoCountAggregateOutputType | null;
    _avg: Calendario_tecnicoAvgAggregateOutputType | null;
    _sum: Calendario_tecnicoSumAggregateOutputType | null;
    _min: Calendario_tecnicoMinAggregateOutputType | null;
    _max: Calendario_tecnicoMaxAggregateOutputType | null;
};
type GetCalendario_tecnicoGroupByPayload<T extends calendario_tecnicoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Calendario_tecnicoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Calendario_tecnicoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Calendario_tecnicoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Calendario_tecnicoGroupByOutputType[P]>;
}>>;
export type calendario_tecnicoWhereInput = {
    AND?: Prisma.calendario_tecnicoWhereInput | Prisma.calendario_tecnicoWhereInput[];
    OR?: Prisma.calendario_tecnicoWhereInput[];
    NOT?: Prisma.calendario_tecnicoWhereInput | Prisma.calendario_tecnicoWhereInput[];
    id?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    tecnico_id?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    reporte_id?: Prisma.UuidNullableFilter<"calendario_tecnico"> | string | null;
    titulo?: Prisma.StringFilter<"calendario_tecnico"> | string;
    descripcion?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    fecha_programada?: Prisma.DateTimeFilter<"calendario_tecnico"> | Date | string;
    hora_programada?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    estatus?: Prisma.StringFilter<"calendario_tecnico"> | string;
    motivo_aplazo?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    fecha_modificada?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    creado_por?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    created_at?: Prisma.DateTimeFilter<"calendario_tecnico"> | Date | string;
    hora_inicio?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    hora_fin?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    orden?: Prisma.IntNullableFilter<"calendario_tecnico"> | number | null;
    color?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    tipo?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    prioridad?: Prisma.IntNullableFilter<"calendario_tecnico"> | number | null;
    proyecto_id?: Prisma.UuidNullableFilter<"calendario_tecnico"> | string | null;
    numero_ticket_seq?: Prisma.BigIntFilter<"calendario_tecnico"> | bigint | number;
    numero_ticket?: Prisma.StringFilter<"calendario_tecnico"> | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.XOR<Prisma.ProfilesScalarRelationFilter, Prisma.profilesWhereInput>;
    proyectos?: Prisma.XOR<Prisma.ProyectosNullableScalarRelationFilter, Prisma.proyectosWhereInput> | null;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.XOR<Prisma.ReportesNullableScalarRelationFilter, Prisma.reportesWhereInput> | null;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.XOR<Prisma.ProfilesScalarRelationFilter, Prisma.profilesWhereInput>;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.ReportesListRelationFilter;
    reportes_mensuales_items?: Prisma.Reportes_mensuales_itemsListRelationFilter;
};
export type calendario_tecnicoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tecnico_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_programada?: Prisma.SortOrder;
    hora_programada?: Prisma.SortOrderInput | Prisma.SortOrder;
    estatus?: Prisma.SortOrder;
    motivo_aplazo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_modificada?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    hora_fin?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    prioridad?: Prisma.SortOrderInput | Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
    numero_ticket?: Prisma.SortOrder;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesOrderByWithRelationInput;
    proyectos?: Prisma.proyectosOrderByWithRelationInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesOrderByWithRelationInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesOrderByWithRelationInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesOrderByRelationAggregateInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsOrderByRelationAggregateInput;
};
export type calendario_tecnicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    numero_ticket_seq?: bigint | number;
    AND?: Prisma.calendario_tecnicoWhereInput | Prisma.calendario_tecnicoWhereInput[];
    OR?: Prisma.calendario_tecnicoWhereInput[];
    NOT?: Prisma.calendario_tecnicoWhereInput | Prisma.calendario_tecnicoWhereInput[];
    tecnico_id?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    reporte_id?: Prisma.UuidNullableFilter<"calendario_tecnico"> | string | null;
    titulo?: Prisma.StringFilter<"calendario_tecnico"> | string;
    descripcion?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    fecha_programada?: Prisma.DateTimeFilter<"calendario_tecnico"> | Date | string;
    hora_programada?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    estatus?: Prisma.StringFilter<"calendario_tecnico"> | string;
    motivo_aplazo?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    fecha_modificada?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    creado_por?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    created_at?: Prisma.DateTimeFilter<"calendario_tecnico"> | Date | string;
    hora_inicio?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    hora_fin?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    orden?: Prisma.IntNullableFilter<"calendario_tecnico"> | number | null;
    color?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    tipo?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    prioridad?: Prisma.IntNullableFilter<"calendario_tecnico"> | number | null;
    proyecto_id?: Prisma.UuidNullableFilter<"calendario_tecnico"> | string | null;
    numero_ticket?: Prisma.StringFilter<"calendario_tecnico"> | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.XOR<Prisma.ProfilesScalarRelationFilter, Prisma.profilesWhereInput>;
    proyectos?: Prisma.XOR<Prisma.ProyectosNullableScalarRelationFilter, Prisma.proyectosWhereInput> | null;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.XOR<Prisma.ReportesNullableScalarRelationFilter, Prisma.reportesWhereInput> | null;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.XOR<Prisma.ProfilesScalarRelationFilter, Prisma.profilesWhereInput>;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.ReportesListRelationFilter;
    reportes_mensuales_items?: Prisma.Reportes_mensuales_itemsListRelationFilter;
}, "id" | "numero_ticket_seq">;
export type calendario_tecnicoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tecnico_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_programada?: Prisma.SortOrder;
    hora_programada?: Prisma.SortOrderInput | Prisma.SortOrder;
    estatus?: Prisma.SortOrder;
    motivo_aplazo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_modificada?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    hora_fin?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    prioridad?: Prisma.SortOrderInput | Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
    numero_ticket?: Prisma.SortOrder;
    _count?: Prisma.calendario_tecnicoCountOrderByAggregateInput;
    _avg?: Prisma.calendario_tecnicoAvgOrderByAggregateInput;
    _max?: Prisma.calendario_tecnicoMaxOrderByAggregateInput;
    _min?: Prisma.calendario_tecnicoMinOrderByAggregateInput;
    _sum?: Prisma.calendario_tecnicoSumOrderByAggregateInput;
};
export type calendario_tecnicoScalarWhereWithAggregatesInput = {
    AND?: Prisma.calendario_tecnicoScalarWhereWithAggregatesInput | Prisma.calendario_tecnicoScalarWhereWithAggregatesInput[];
    OR?: Prisma.calendario_tecnicoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.calendario_tecnicoScalarWhereWithAggregatesInput | Prisma.calendario_tecnicoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"calendario_tecnico"> | string;
    tecnico_id?: Prisma.UuidWithAggregatesFilter<"calendario_tecnico"> | string;
    reporte_id?: Prisma.UuidNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    titulo?: Prisma.StringWithAggregatesFilter<"calendario_tecnico"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    fecha_programada?: Prisma.DateTimeWithAggregatesFilter<"calendario_tecnico"> | Date | string;
    hora_programada?: Prisma.DateTimeNullableWithAggregatesFilter<"calendario_tecnico"> | Date | string | null;
    estatus?: Prisma.StringWithAggregatesFilter<"calendario_tecnico"> | string;
    motivo_aplazo?: Prisma.StringNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    fecha_modificada?: Prisma.DateTimeNullableWithAggregatesFilter<"calendario_tecnico"> | Date | string | null;
    creado_por?: Prisma.UuidWithAggregatesFilter<"calendario_tecnico"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"calendario_tecnico"> | Date | string;
    hora_inicio?: Prisma.DateTimeNullableWithAggregatesFilter<"calendario_tecnico"> | Date | string | null;
    hora_fin?: Prisma.DateTimeNullableWithAggregatesFilter<"calendario_tecnico"> | Date | string | null;
    orden?: Prisma.IntNullableWithAggregatesFilter<"calendario_tecnico"> | number | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    ubicacion?: Prisma.StringNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    prioridad?: Prisma.IntNullableWithAggregatesFilter<"calendario_tecnico"> | number | null;
    proyecto_id?: Prisma.UuidNullableWithAggregatesFilter<"calendario_tecnico"> | string | null;
    numero_ticket_seq?: Prisma.BigIntWithAggregatesFilter<"calendario_tecnico"> | bigint | number;
    numero_ticket?: Prisma.StringWithAggregatesFilter<"calendario_tecnico"> | string;
};
export type calendario_tecnicoCreateInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    profiles_calendario_tecnico_creado_porToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesInput;
    proyectos?: Prisma.proyectosCreateNestedOneWithoutCalendario_tecnicoInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesInput;
    profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneWithoutCalendario_tecnicoNestedInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesUpdateOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesNestedInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesNestedInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoCreateManyInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
};
export type calendario_tecnicoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type calendario_tecnicoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type calendario_tecnicoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tecnico_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha_programada?: Prisma.SortOrder;
    hora_programada?: Prisma.SortOrder;
    estatus?: Prisma.SortOrder;
    motivo_aplazo?: Prisma.SortOrder;
    fecha_modificada?: Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
    numero_ticket?: Prisma.SortOrder;
};
export type calendario_tecnicoAvgOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
};
export type calendario_tecnicoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tecnico_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha_programada?: Prisma.SortOrder;
    hora_programada?: Prisma.SortOrder;
    estatus?: Prisma.SortOrder;
    motivo_aplazo?: Prisma.SortOrder;
    fecha_modificada?: Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
    numero_ticket?: Prisma.SortOrder;
};
export type calendario_tecnicoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tecnico_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha_programada?: Prisma.SortOrder;
    hora_programada?: Prisma.SortOrder;
    estatus?: Prisma.SortOrder;
    motivo_aplazo?: Prisma.SortOrder;
    fecha_modificada?: Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    hora_inicio?: Prisma.SortOrder;
    hora_fin?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
    numero_ticket?: Prisma.SortOrder;
};
export type calendario_tecnicoSumOrderByAggregateInput = {
    orden?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    numero_ticket_seq?: Prisma.SortOrder;
};
export type Calendario_tecnicoListRelationFilter = {
    every?: Prisma.calendario_tecnicoWhereInput;
    some?: Prisma.calendario_tecnicoWhereInput;
    none?: Prisma.calendario_tecnicoWhereInput;
};
export type calendario_tecnicoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Calendario_tecnicoNullableScalarRelationFilter = {
    is?: Prisma.calendario_tecnicoWhereInput | null;
    isNot?: Prisma.calendario_tecnicoWhereInput | null;
};
export type calendario_tecnicoCreateNestedManyWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoCreateNestedManyWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoUncheckedCreateNestedManyWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoUncheckedCreateNestedManyWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoUpdateManyWithoutProfiles_calendario_tecnico_creado_porToprofilesNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoUpdateManyWithoutProfiles_calendario_tecnico_tecnico_idToprofilesNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoUncheckedUpdateManyWithoutProfiles_calendario_tecnico_creado_porToprofilesNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_creado_porToprofilesInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoUncheckedUpdateManyWithoutProfiles_calendario_tecnico_tecnico_idToprofilesNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput> | Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoCreateNestedManyWithoutProyectosInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput> | Prisma.calendario_tecnicoCreateWithoutProyectosInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProyectosInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoUncheckedCreateNestedManyWithoutProyectosInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput> | Prisma.calendario_tecnicoCreateWithoutProyectosInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProyectosInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoUpdateManyWithoutProyectosNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput> | Prisma.calendario_tecnicoCreateWithoutProyectosInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProyectosInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProyectosInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProyectosInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProyectosInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProyectosInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProyectosInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProyectosInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoUncheckedUpdateManyWithoutProyectosNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput> | Prisma.calendario_tecnicoCreateWithoutProyectosInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput | Prisma.calendario_tecnicoCreateOrConnectWithoutProyectosInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProyectosInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutProyectosInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyProyectosInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProyectosInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutProyectosInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProyectosInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutProyectosInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoCreateNestedManyWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput> | Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoCreateNestedOneWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput;
};
export type calendario_tecnicoUncheckedCreateNestedManyWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput> | Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInputEnvelope;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
};
export type calendario_tecnicoUpdateManyWithoutReportes_calendario_tecnico_reporte_idToreportesNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput> | Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoUpdateOneWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    upsert?: Prisma.calendario_tecnicoUpsertWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    disconnect?: Prisma.calendario_tecnicoWhereInput | boolean;
    delete?: Prisma.calendario_tecnicoWhereInput | boolean;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.calendario_tecnicoUpdateToOneWithWhereWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
};
export type calendario_tecnicoUncheckedUpdateManyWithoutReportes_calendario_tecnico_reporte_idToreportesNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput> | Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[] | Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    upsert?: Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoUpsertWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    createMany?: Prisma.calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInputEnvelope;
    set?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    disconnect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    delete?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    connect?: Prisma.calendario_tecnicoWhereUniqueInput | Prisma.calendario_tecnicoWhereUniqueInput[];
    update?: Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoUpdateWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    updateMany?: Prisma.calendario_tecnicoUpdateManyWithWhereWithoutReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoUpdateManyWithWhereWithoutReportes_calendario_tecnico_reporte_idToreportesInput[];
    deleteMany?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
};
export type calendario_tecnicoCreateNestedOneWithoutReportes_mensuales_itemsInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_mensuales_itemsInput>;
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_mensuales_itemsInput;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput;
};
export type calendario_tecnicoUpdateOneWithoutReportes_mensuales_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_mensuales_itemsInput>;
    connectOrCreate?: Prisma.calendario_tecnicoCreateOrConnectWithoutReportes_mensuales_itemsInput;
    upsert?: Prisma.calendario_tecnicoUpsertWithoutReportes_mensuales_itemsInput;
    disconnect?: Prisma.calendario_tecnicoWhereInput | boolean;
    delete?: Prisma.calendario_tecnicoWhereInput | boolean;
    connect?: Prisma.calendario_tecnicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.calendario_tecnicoUpdateToOneWithWhereWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUpdateWithoutReportes_mensuales_itemsInput>, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_mensuales_itemsInput>;
};
export type calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    proyectos?: Prisma.proyectosCreateNestedOneWithoutCalendario_tecnicoInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesInput;
    profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput>;
};
export type calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInputEnvelope = {
    data: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInput | Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInput[];
    skipDuplicates?: boolean;
};
export type calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    profiles_calendario_tecnico_creado_porToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesInput;
    proyectos?: Prisma.proyectosCreateNestedOneWithoutCalendario_tecnicoInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    id?: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoCreateOrConnectWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput>;
};
export type calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInputEnvelope = {
    data: Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInput | Prisma.calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInput[];
    skipDuplicates?: boolean;
};
export type calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput>;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput>;
};
export type calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput>;
};
export type calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    where: Prisma.calendario_tecnicoScalarWhereInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateManyMutationInput, Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProfiles_calendario_tecnico_creado_porToprofilesInput>;
};
export type calendario_tecnicoScalarWhereInput = {
    AND?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
    OR?: Prisma.calendario_tecnicoScalarWhereInput[];
    NOT?: Prisma.calendario_tecnicoScalarWhereInput | Prisma.calendario_tecnicoScalarWhereInput[];
    id?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    tecnico_id?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    reporte_id?: Prisma.UuidNullableFilter<"calendario_tecnico"> | string | null;
    titulo?: Prisma.StringFilter<"calendario_tecnico"> | string;
    descripcion?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    fecha_programada?: Prisma.DateTimeFilter<"calendario_tecnico"> | Date | string;
    hora_programada?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    estatus?: Prisma.StringFilter<"calendario_tecnico"> | string;
    motivo_aplazo?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    fecha_modificada?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    creado_por?: Prisma.UuidFilter<"calendario_tecnico"> | string;
    created_at?: Prisma.DateTimeFilter<"calendario_tecnico"> | Date | string;
    hora_inicio?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    hora_fin?: Prisma.DateTimeNullableFilter<"calendario_tecnico"> | Date | string | null;
    orden?: Prisma.IntNullableFilter<"calendario_tecnico"> | number | null;
    color?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    tipo?: Prisma.StringNullableFilter<"calendario_tecnico"> | string | null;
    prioridad?: Prisma.IntNullableFilter<"calendario_tecnico"> | number | null;
    proyecto_id?: Prisma.UuidNullableFilter<"calendario_tecnico"> | string | null;
    numero_ticket_seq?: Prisma.BigIntFilter<"calendario_tecnico"> | bigint | number;
    numero_ticket?: Prisma.StringFilter<"calendario_tecnico"> | string;
};
export type calendario_tecnicoUpsertWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput>;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput>;
};
export type calendario_tecnicoUpdateWithWhereUniqueWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput>;
};
export type calendario_tecnicoUpdateManyWithWhereWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    where: Prisma.calendario_tecnicoScalarWhereInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateManyMutationInput, Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput>;
};
export type calendario_tecnicoCreateWithoutProyectosInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    profiles_calendario_tecnico_creado_porToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesInput;
    profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateWithoutProyectosInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoCreateOrConnectWithoutProyectosInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput>;
};
export type calendario_tecnicoCreateManyProyectosInputEnvelope = {
    data: Prisma.calendario_tecnicoCreateManyProyectosInput | Prisma.calendario_tecnicoCreateManyProyectosInput[];
    skipDuplicates?: boolean;
};
export type calendario_tecnicoUpsertWithWhereUniqueWithoutProyectosInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutProyectosInput>;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedCreateWithoutProyectosInput>;
};
export type calendario_tecnicoUpdateWithWhereUniqueWithoutProyectosInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutProyectosInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutProyectosInput>;
};
export type calendario_tecnicoUpdateManyWithWhereWithoutProyectosInput = {
    where: Prisma.calendario_tecnicoScalarWhereInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateManyMutationInput, Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProyectosInput>;
};
export type calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    profiles_calendario_tecnico_creado_porToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesInput;
    proyectos?: Prisma.proyectosCreateNestedOneWithoutCalendario_tecnicoInput;
    profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    id?: string;
    tecnico_id: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoCreateOrConnectWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput>;
};
export type calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInputEnvelope = {
    data: Prisma.calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInput | Prisma.calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInput[];
    skipDuplicates?: boolean;
};
export type calendario_tecnicoCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    profiles_calendario_tecnico_creado_porToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesInput;
    proyectos?: Prisma.proyectosCreateNestedOneWithoutCalendario_tecnicoInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesInput;
    profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutCalendario_tecnicoInput;
};
export type calendario_tecnicoCreateOrConnectWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
};
export type calendario_tecnicoUpsertWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_calendario_tecnico_reporte_idToreportesInput>;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_calendario_tecnico_reporte_idToreportesInput>;
};
export type calendario_tecnicoUpdateWithWhereUniqueWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutReportes_calendario_tecnico_reporte_idToreportesInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_calendario_tecnico_reporte_idToreportesInput>;
};
export type calendario_tecnicoUpdateManyWithWhereWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    where: Prisma.calendario_tecnicoScalarWhereInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateManyMutationInput, Prisma.calendario_tecnicoUncheckedUpdateManyWithoutReportes_calendario_tecnico_reporte_idToreportesInput>;
};
export type calendario_tecnicoUpsertWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
    where?: Prisma.calendario_tecnicoWhereInput;
};
export type calendario_tecnicoUpdateToOneWithWhereWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    where?: Prisma.calendario_tecnicoWhereInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput>;
};
export type calendario_tecnicoUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneWithoutCalendario_tecnicoNestedInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesUpdateOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesNestedInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateWithoutReportes_reportes_actividad_calendario_idTocalendario_tecnicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoCreateWithoutReportes_mensuales_itemsInput = {
    id?: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    profiles_calendario_tecnico_creado_porToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesInput;
    proyectos?: Prisma.proyectosCreateNestedOneWithoutCalendario_tecnicoInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesInput;
    profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.profilesCreateNestedOneWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
};
export type calendario_tecnicoUncheckedCreateWithoutReportes_mensuales_itemsInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedCreateNestedManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoInput;
};
export type calendario_tecnicoCreateOrConnectWithoutReportes_mensuales_itemsInput = {
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_mensuales_itemsInput>;
};
export type calendario_tecnicoUpsertWithoutReportes_mensuales_itemsInput = {
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_mensuales_itemsInput>;
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUncheckedCreateWithoutReportes_mensuales_itemsInput>;
    where?: Prisma.calendario_tecnicoWhereInput;
};
export type calendario_tecnicoUpdateToOneWithWhereWithoutReportes_mensuales_itemsInput = {
    where?: Prisma.calendario_tecnicoWhereInput;
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateWithoutReportes_mensuales_itemsInput, Prisma.calendario_tecnicoUncheckedUpdateWithoutReportes_mensuales_itemsInput>;
};
export type calendario_tecnicoUpdateWithoutReportes_mensuales_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneWithoutCalendario_tecnicoNestedInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesUpdateOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesNestedInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesNestedInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateWithoutReportes_mensuales_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
};
export type calendario_tecnicoCreateManyProfiles_calendario_tecnico_creado_porToprofilesInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
};
export type calendario_tecnicoCreateManyProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    id?: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
};
export type calendario_tecnicoUpdateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    proyectos?: Prisma.proyectosUpdateOneWithoutCalendario_tecnicoNestedInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesUpdateOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesNestedInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesNestedInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateManyWithoutProfiles_calendario_tecnico_creado_porToprofilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type calendario_tecnicoUpdateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneWithoutCalendario_tecnicoNestedInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesUpdateOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesNestedInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateManyWithoutProfiles_calendario_tecnico_tecnico_idToprofilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type calendario_tecnicoCreateManyProyectosInput = {
    id?: string;
    tecnico_id: string;
    reporte_id?: string | null;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
};
export type calendario_tecnicoUpdateWithoutProyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesNestedInput;
    reportes_calendario_tecnico_reporte_idToreportes?: Prisma.reportesUpdateOneWithoutCalendario_tecnico_calendario_tecnico_reporte_idToreportesNestedInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesNestedInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateWithoutProyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateManyWithoutProyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type calendario_tecnicoCreateManyReportes_calendario_tecnico_reporte_idToreportesInput = {
    id?: string;
    tecnico_id: string;
    titulo: string;
    descripcion?: string | null;
    fecha_programada: Date | string;
    hora_programada?: Date | string | null;
    estatus?: string;
    motivo_aplazo?: string | null;
    fecha_modificada?: Date | string | null;
    creado_por: string;
    created_at?: Date | string;
    hora_inicio?: Date | string | null;
    hora_fin?: Date | string | null;
    orden?: number | null;
    color?: string | null;
    ubicacion?: string | null;
    tipo?: string | null;
    prioridad?: number | null;
    proyecto_id?: string | null;
    numero_ticket_seq?: bigint | number;
    numero_ticket: string;
};
export type calendario_tecnicoUpdateWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    profiles_calendario_tecnico_creado_porToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_creado_porToprofilesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneWithoutCalendario_tecnicoNestedInput;
    profiles_calendario_tecnico_tecnico_idToprofiles?: Prisma.profilesUpdateOneRequiredWithoutCalendario_tecnico_calendario_tecnico_tecnico_idToprofilesNestedInput;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: Prisma.reportesUncheckedUpdateManyWithoutCalendario_tecnico_reportes_actividad_calendario_idTocalendario_tecnicoNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutCalendario_tecnicoNestedInput;
};
export type calendario_tecnicoUncheckedUpdateManyWithoutReportes_calendario_tecnico_reporte_idToreportesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tecnico_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_programada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_programada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estatus?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo_aplazo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_modificada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creado_por?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    hora_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    proyecto_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_ticket_seq?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    numero_ticket?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type Calendario_tecnicoCountOutputType
 */
export type Calendario_tecnicoCountOutputType = {
    reportes_reportes_actividad_calendario_idTocalendario_tecnico: number;
    reportes_mensuales_items: number;
};
export type Calendario_tecnicoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: boolean | Calendario_tecnicoCountOutputTypeCountReportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs;
    reportes_mensuales_items?: boolean | Calendario_tecnicoCountOutputTypeCountReportes_mensuales_itemsArgs;
};
/**
 * Calendario_tecnicoCountOutputType without action
 */
export type Calendario_tecnicoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario_tecnicoCountOutputType
     */
    select?: Prisma.Calendario_tecnicoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Calendario_tecnicoCountOutputType without action
 */
export type Calendario_tecnicoCountOutputTypeCountReportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reportesWhereInput;
};
/**
 * Calendario_tecnicoCountOutputType without action
 */
export type Calendario_tecnicoCountOutputTypeCountReportes_mensuales_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reportes_mensuales_itemsWhereInput;
};
export type calendario_tecnicoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tecnico_id?: boolean;
    reporte_id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    fecha_programada?: boolean;
    hora_programada?: boolean;
    estatus?: boolean;
    motivo_aplazo?: boolean;
    fecha_modificada?: boolean;
    creado_por?: boolean;
    created_at?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    orden?: boolean;
    color?: boolean;
    ubicacion?: boolean;
    tipo?: boolean;
    prioridad?: boolean;
    proyecto_id?: boolean;
    numero_ticket_seq?: boolean;
    numero_ticket?: boolean;
    profiles_calendario_tecnico_creado_porToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    proyectos?: boolean | Prisma.calendario_tecnico$proyectosArgs<ExtArgs>;
    reportes_calendario_tecnico_reporte_idToreportes?: boolean | Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>;
    profiles_calendario_tecnico_tecnico_idToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: boolean | Prisma.calendario_tecnico$reportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs<ExtArgs>;
    reportes_mensuales_items?: boolean | Prisma.calendario_tecnico$reportes_mensuales_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Calendario_tecnicoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendario_tecnico"]>;
export type calendario_tecnicoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tecnico_id?: boolean;
    reporte_id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    fecha_programada?: boolean;
    hora_programada?: boolean;
    estatus?: boolean;
    motivo_aplazo?: boolean;
    fecha_modificada?: boolean;
    creado_por?: boolean;
    created_at?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    orden?: boolean;
    color?: boolean;
    ubicacion?: boolean;
    tipo?: boolean;
    prioridad?: boolean;
    proyecto_id?: boolean;
    numero_ticket_seq?: boolean;
    numero_ticket?: boolean;
    profiles_calendario_tecnico_creado_porToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    proyectos?: boolean | Prisma.calendario_tecnico$proyectosArgs<ExtArgs>;
    reportes_calendario_tecnico_reporte_idToreportes?: boolean | Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>;
    profiles_calendario_tecnico_tecnico_idToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendario_tecnico"]>;
export type calendario_tecnicoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tecnico_id?: boolean;
    reporte_id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    fecha_programada?: boolean;
    hora_programada?: boolean;
    estatus?: boolean;
    motivo_aplazo?: boolean;
    fecha_modificada?: boolean;
    creado_por?: boolean;
    created_at?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    orden?: boolean;
    color?: boolean;
    ubicacion?: boolean;
    tipo?: boolean;
    prioridad?: boolean;
    proyecto_id?: boolean;
    numero_ticket_seq?: boolean;
    numero_ticket?: boolean;
    profiles_calendario_tecnico_creado_porToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    proyectos?: boolean | Prisma.calendario_tecnico$proyectosArgs<ExtArgs>;
    reportes_calendario_tecnico_reporte_idToreportes?: boolean | Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>;
    profiles_calendario_tecnico_tecnico_idToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calendario_tecnico"]>;
export type calendario_tecnicoSelectScalar = {
    id?: boolean;
    tecnico_id?: boolean;
    reporte_id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    fecha_programada?: boolean;
    hora_programada?: boolean;
    estatus?: boolean;
    motivo_aplazo?: boolean;
    fecha_modificada?: boolean;
    creado_por?: boolean;
    created_at?: boolean;
    hora_inicio?: boolean;
    hora_fin?: boolean;
    orden?: boolean;
    color?: boolean;
    ubicacion?: boolean;
    tipo?: boolean;
    prioridad?: boolean;
    proyecto_id?: boolean;
    numero_ticket_seq?: boolean;
    numero_ticket?: boolean;
};
export type calendario_tecnicoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tecnico_id" | "reporte_id" | "titulo" | "descripcion" | "fecha_programada" | "hora_programada" | "estatus" | "motivo_aplazo" | "fecha_modificada" | "creado_por" | "created_at" | "hora_inicio" | "hora_fin" | "orden" | "color" | "ubicacion" | "tipo" | "prioridad" | "proyecto_id" | "numero_ticket_seq" | "numero_ticket", ExtArgs["result"]["calendario_tecnico"]>;
export type calendario_tecnicoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles_calendario_tecnico_creado_porToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    proyectos?: boolean | Prisma.calendario_tecnico$proyectosArgs<ExtArgs>;
    reportes_calendario_tecnico_reporte_idToreportes?: boolean | Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>;
    profiles_calendario_tecnico_tecnico_idToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico?: boolean | Prisma.calendario_tecnico$reportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs<ExtArgs>;
    reportes_mensuales_items?: boolean | Prisma.calendario_tecnico$reportes_mensuales_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Calendario_tecnicoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type calendario_tecnicoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles_calendario_tecnico_creado_porToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    proyectos?: boolean | Prisma.calendario_tecnico$proyectosArgs<ExtArgs>;
    reportes_calendario_tecnico_reporte_idToreportes?: boolean | Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>;
    profiles_calendario_tecnico_tecnico_idToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
};
export type calendario_tecnicoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profiles_calendario_tecnico_creado_porToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
    proyectos?: boolean | Prisma.calendario_tecnico$proyectosArgs<ExtArgs>;
    reportes_calendario_tecnico_reporte_idToreportes?: boolean | Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>;
    profiles_calendario_tecnico_tecnico_idToprofiles?: boolean | Prisma.profilesDefaultArgs<ExtArgs>;
};
export type $calendario_tecnicoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "calendario_tecnico";
    objects: {
        profiles_calendario_tecnico_creado_porToprofiles: Prisma.$profilesPayload<ExtArgs>;
        proyectos: Prisma.$proyectosPayload<ExtArgs> | null;
        reportes_calendario_tecnico_reporte_idToreportes: Prisma.$reportesPayload<ExtArgs> | null;
        profiles_calendario_tecnico_tecnico_idToprofiles: Prisma.$profilesPayload<ExtArgs>;
        reportes_reportes_actividad_calendario_idTocalendario_tecnico: Prisma.$reportesPayload<ExtArgs>[];
        reportes_mensuales_items: Prisma.$reportes_mensuales_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tecnico_id: string;
        reporte_id: string | null;
        titulo: string;
        descripcion: string | null;
        fecha_programada: Date;
        hora_programada: Date | null;
        estatus: string;
        motivo_aplazo: string | null;
        fecha_modificada: Date | null;
        creado_por: string;
        created_at: Date;
        hora_inicio: Date | null;
        hora_fin: Date | null;
        orden: number | null;
        color: string | null;
        ubicacion: string | null;
        tipo: string | null;
        prioridad: number | null;
        proyecto_id: string | null;
        numero_ticket_seq: bigint;
        numero_ticket: string;
    }, ExtArgs["result"]["calendario_tecnico"]>;
    composites: {};
};
export type calendario_tecnicoGetPayload<S extends boolean | null | undefined | calendario_tecnicoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload, S>;
export type calendario_tecnicoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<calendario_tecnicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Calendario_tecnicoCountAggregateInputType | true;
};
export interface calendario_tecnicoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['calendario_tecnico'];
        meta: {
            name: 'calendario_tecnico';
        };
    };
    /**
     * Find zero or one Calendario_tecnico that matches the filter.
     * @param {calendario_tecnicoFindUniqueArgs} args - Arguments to find a Calendario_tecnico
     * @example
     * // Get one Calendario_tecnico
     * const calendario_tecnico = await prisma.calendario_tecnico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calendario_tecnicoFindUniqueArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Calendario_tecnico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calendario_tecnicoFindUniqueOrThrowArgs} args - Arguments to find a Calendario_tecnico
     * @example
     * // Get one Calendario_tecnico
     * const calendario_tecnico = await prisma.calendario_tecnico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calendario_tecnicoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Calendario_tecnico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendario_tecnicoFindFirstArgs} args - Arguments to find a Calendario_tecnico
     * @example
     * // Get one Calendario_tecnico
     * const calendario_tecnico = await prisma.calendario_tecnico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calendario_tecnicoFindFirstArgs>(args?: Prisma.SelectSubset<T, calendario_tecnicoFindFirstArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Calendario_tecnico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendario_tecnicoFindFirstOrThrowArgs} args - Arguments to find a Calendario_tecnico
     * @example
     * // Get one Calendario_tecnico
     * const calendario_tecnico = await prisma.calendario_tecnico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calendario_tecnicoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, calendario_tecnicoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Calendario_tecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendario_tecnicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendario_tecnicos
     * const calendario_tecnicos = await prisma.calendario_tecnico.findMany()
     *
     * // Get first 10 Calendario_tecnicos
     * const calendario_tecnicos = await prisma.calendario_tecnico.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const calendario_tecnicoWithIdOnly = await prisma.calendario_tecnico.findMany({ select: { id: true } })
     *
     */
    findMany<T extends calendario_tecnicoFindManyArgs>(args?: Prisma.SelectSubset<T, calendario_tecnicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Calendario_tecnico.
     * @param {calendario_tecnicoCreateArgs} args - Arguments to create a Calendario_tecnico.
     * @example
     * // Create one Calendario_tecnico
     * const Calendario_tecnico = await prisma.calendario_tecnico.create({
     *   data: {
     *     // ... data to create a Calendario_tecnico
     *   }
     * })
     *
     */
    create<T extends calendario_tecnicoCreateArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoCreateArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Calendario_tecnicos.
     * @param {calendario_tecnicoCreateManyArgs} args - Arguments to create many Calendario_tecnicos.
     * @example
     * // Create many Calendario_tecnicos
     * const calendario_tecnico = await prisma.calendario_tecnico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends calendario_tecnicoCreateManyArgs>(args?: Prisma.SelectSubset<T, calendario_tecnicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Calendario_tecnicos and returns the data saved in the database.
     * @param {calendario_tecnicoCreateManyAndReturnArgs} args - Arguments to create many Calendario_tecnicos.
     * @example
     * // Create many Calendario_tecnicos
     * const calendario_tecnico = await prisma.calendario_tecnico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Calendario_tecnicos and only return the `id`
     * const calendario_tecnicoWithIdOnly = await prisma.calendario_tecnico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends calendario_tecnicoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, calendario_tecnicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Calendario_tecnico.
     * @param {calendario_tecnicoDeleteArgs} args - Arguments to delete one Calendario_tecnico.
     * @example
     * // Delete one Calendario_tecnico
     * const Calendario_tecnico = await prisma.calendario_tecnico.delete({
     *   where: {
     *     // ... filter to delete one Calendario_tecnico
     *   }
     * })
     *
     */
    delete<T extends calendario_tecnicoDeleteArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoDeleteArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Calendario_tecnico.
     * @param {calendario_tecnicoUpdateArgs} args - Arguments to update one Calendario_tecnico.
     * @example
     * // Update one Calendario_tecnico
     * const calendario_tecnico = await prisma.calendario_tecnico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends calendario_tecnicoUpdateArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoUpdateArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Calendario_tecnicos.
     * @param {calendario_tecnicoDeleteManyArgs} args - Arguments to filter Calendario_tecnicos to delete.
     * @example
     * // Delete a few Calendario_tecnicos
     * const { count } = await prisma.calendario_tecnico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends calendario_tecnicoDeleteManyArgs>(args?: Prisma.SelectSubset<T, calendario_tecnicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Calendario_tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendario_tecnicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendario_tecnicos
     * const calendario_tecnico = await prisma.calendario_tecnico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends calendario_tecnicoUpdateManyArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Calendario_tecnicos and returns the data updated in the database.
     * @param {calendario_tecnicoUpdateManyAndReturnArgs} args - Arguments to update many Calendario_tecnicos.
     * @example
     * // Update many Calendario_tecnicos
     * const calendario_tecnico = await prisma.calendario_tecnico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Calendario_tecnicos and only return the `id`
     * const calendario_tecnicoWithIdOnly = await prisma.calendario_tecnico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends calendario_tecnicoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Calendario_tecnico.
     * @param {calendario_tecnicoUpsertArgs} args - Arguments to update or create a Calendario_tecnico.
     * @example
     * // Update or create a Calendario_tecnico
     * const calendario_tecnico = await prisma.calendario_tecnico.upsert({
     *   create: {
     *     // ... data to create a Calendario_tecnico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendario_tecnico we want to update
     *   }
     * })
     */
    upsert<T extends calendario_tecnicoUpsertArgs>(args: Prisma.SelectSubset<T, calendario_tecnicoUpsertArgs<ExtArgs>>): Prisma.Prisma__calendario_tecnicoClient<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Calendario_tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendario_tecnicoCountArgs} args - Arguments to filter Calendario_tecnicos to count.
     * @example
     * // Count the number of Calendario_tecnicos
     * const count = await prisma.calendario_tecnico.count({
     *   where: {
     *     // ... the filter for the Calendario_tecnicos we want to count
     *   }
     * })
    **/
    count<T extends calendario_tecnicoCountArgs>(args?: Prisma.Subset<T, calendario_tecnicoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Calendario_tecnicoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Calendario_tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Calendario_tecnicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Calendario_tecnicoAggregateArgs>(args: Prisma.Subset<T, Calendario_tecnicoAggregateArgs>): Prisma.PrismaPromise<GetCalendario_tecnicoAggregateType<T>>;
    /**
     * Group by Calendario_tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendario_tecnicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends calendario_tecnicoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: calendario_tecnicoGroupByArgs['orderBy'];
    } : {
        orderBy?: calendario_tecnicoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, calendario_tecnicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendario_tecnicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the calendario_tecnico model
     */
    readonly fields: calendario_tecnicoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for calendario_tecnico.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__calendario_tecnicoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profiles_calendario_tecnico_creado_porToprofiles<T extends Prisma.profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__profilesClient<runtime.Types.Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proyectos<T extends Prisma.calendario_tecnico$proyectosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.calendario_tecnico$proyectosArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reportes_calendario_tecnico_reporte_idToreportes<T extends Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs>>): Prisma.Prisma__reportesClient<runtime.Types.Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    profiles_calendario_tecnico_tecnico_idToprofiles<T extends Prisma.profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__profilesClient<runtime.Types.Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reportes_reportes_actividad_calendario_idTocalendario_tecnico<T extends Prisma.calendario_tecnico$reportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.calendario_tecnico$reportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportes_mensuales_items<T extends Prisma.calendario_tecnico$reportes_mensuales_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.calendario_tecnico$reportes_mensuales_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportes_mensuales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the calendario_tecnico model
 */
export interface calendario_tecnicoFieldRefs {
    readonly id: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly tecnico_id: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly reporte_id: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly titulo: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly descripcion: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly fecha_programada: Prisma.FieldRef<"calendario_tecnico", 'DateTime'>;
    readonly hora_programada: Prisma.FieldRef<"calendario_tecnico", 'DateTime'>;
    readonly estatus: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly motivo_aplazo: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly fecha_modificada: Prisma.FieldRef<"calendario_tecnico", 'DateTime'>;
    readonly creado_por: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly created_at: Prisma.FieldRef<"calendario_tecnico", 'DateTime'>;
    readonly hora_inicio: Prisma.FieldRef<"calendario_tecnico", 'DateTime'>;
    readonly hora_fin: Prisma.FieldRef<"calendario_tecnico", 'DateTime'>;
    readonly orden: Prisma.FieldRef<"calendario_tecnico", 'Int'>;
    readonly color: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly ubicacion: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly tipo: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly prioridad: Prisma.FieldRef<"calendario_tecnico", 'Int'>;
    readonly proyecto_id: Prisma.FieldRef<"calendario_tecnico", 'String'>;
    readonly numero_ticket_seq: Prisma.FieldRef<"calendario_tecnico", 'BigInt'>;
    readonly numero_ticket: Prisma.FieldRef<"calendario_tecnico", 'String'>;
}
/**
 * calendario_tecnico findUnique
 */
export type calendario_tecnicoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * Filter, which calendario_tecnico to fetch.
     */
    where: Prisma.calendario_tecnicoWhereUniqueInput;
};
/**
 * calendario_tecnico findUniqueOrThrow
 */
export type calendario_tecnicoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * Filter, which calendario_tecnico to fetch.
     */
    where: Prisma.calendario_tecnicoWhereUniqueInput;
};
/**
 * calendario_tecnico findFirst
 */
export type calendario_tecnicoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * Filter, which calendario_tecnico to fetch.
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of calendario_tecnicos to fetch.
     */
    orderBy?: Prisma.calendario_tecnicoOrderByWithRelationInput | Prisma.calendario_tecnicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for calendario_tecnicos.
     */
    cursor?: Prisma.calendario_tecnicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` calendario_tecnicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` calendario_tecnicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of calendario_tecnicos.
     */
    distinct?: Prisma.Calendario_tecnicoScalarFieldEnum | Prisma.Calendario_tecnicoScalarFieldEnum[];
};
/**
 * calendario_tecnico findFirstOrThrow
 */
export type calendario_tecnicoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * Filter, which calendario_tecnico to fetch.
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of calendario_tecnicos to fetch.
     */
    orderBy?: Prisma.calendario_tecnicoOrderByWithRelationInput | Prisma.calendario_tecnicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for calendario_tecnicos.
     */
    cursor?: Prisma.calendario_tecnicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` calendario_tecnicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` calendario_tecnicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of calendario_tecnicos.
     */
    distinct?: Prisma.Calendario_tecnicoScalarFieldEnum | Prisma.Calendario_tecnicoScalarFieldEnum[];
};
/**
 * calendario_tecnico findMany
 */
export type calendario_tecnicoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * Filter, which calendario_tecnicos to fetch.
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of calendario_tecnicos to fetch.
     */
    orderBy?: Prisma.calendario_tecnicoOrderByWithRelationInput | Prisma.calendario_tecnicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing calendario_tecnicos.
     */
    cursor?: Prisma.calendario_tecnicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` calendario_tecnicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` calendario_tecnicos.
     */
    skip?: number;
    distinct?: Prisma.Calendario_tecnicoScalarFieldEnum | Prisma.Calendario_tecnicoScalarFieldEnum[];
};
/**
 * calendario_tecnico create
 */
export type calendario_tecnicoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * The data needed to create a calendario_tecnico.
     */
    data: Prisma.XOR<Prisma.calendario_tecnicoCreateInput, Prisma.calendario_tecnicoUncheckedCreateInput>;
};
/**
 * calendario_tecnico createMany
 */
export type calendario_tecnicoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many calendario_tecnicos.
     */
    data: Prisma.calendario_tecnicoCreateManyInput | Prisma.calendario_tecnicoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * calendario_tecnico createManyAndReturn
 */
export type calendario_tecnicoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * The data used to create many calendario_tecnicos.
     */
    data: Prisma.calendario_tecnicoCreateManyInput | Prisma.calendario_tecnicoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * calendario_tecnico update
 */
export type calendario_tecnicoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * The data needed to update a calendario_tecnico.
     */
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateInput, Prisma.calendario_tecnicoUncheckedUpdateInput>;
    /**
     * Choose, which calendario_tecnico to update.
     */
    where: Prisma.calendario_tecnicoWhereUniqueInput;
};
/**
 * calendario_tecnico updateMany
 */
export type calendario_tecnicoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update calendario_tecnicos.
     */
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateManyMutationInput, Prisma.calendario_tecnicoUncheckedUpdateManyInput>;
    /**
     * Filter which calendario_tecnicos to update
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * Limit how many calendario_tecnicos to update.
     */
    limit?: number;
};
/**
 * calendario_tecnico updateManyAndReturn
 */
export type calendario_tecnicoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * The data used to update calendario_tecnicos.
     */
    data: Prisma.XOR<Prisma.calendario_tecnicoUpdateManyMutationInput, Prisma.calendario_tecnicoUncheckedUpdateManyInput>;
    /**
     * Filter which calendario_tecnicos to update
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * Limit how many calendario_tecnicos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * calendario_tecnico upsert
 */
export type calendario_tecnicoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * The filter to search for the calendario_tecnico to update in case it exists.
     */
    where: Prisma.calendario_tecnicoWhereUniqueInput;
    /**
     * In case the calendario_tecnico found by the `where` argument doesn't exist, create a new calendario_tecnico with this data.
     */
    create: Prisma.XOR<Prisma.calendario_tecnicoCreateInput, Prisma.calendario_tecnicoUncheckedCreateInput>;
    /**
     * In case the calendario_tecnico was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.calendario_tecnicoUpdateInput, Prisma.calendario_tecnicoUncheckedUpdateInput>;
};
/**
 * calendario_tecnico delete
 */
export type calendario_tecnicoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
    /**
     * Filter which calendario_tecnico to delete.
     */
    where: Prisma.calendario_tecnicoWhereUniqueInput;
};
/**
 * calendario_tecnico deleteMany
 */
export type calendario_tecnicoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which calendario_tecnicos to delete
     */
    where?: Prisma.calendario_tecnicoWhereInput;
    /**
     * Limit how many calendario_tecnicos to delete.
     */
    limit?: number;
};
/**
 * calendario_tecnico.proyectos
 */
export type calendario_tecnico$proyectosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: Prisma.proyectosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proyectos
     */
    omit?: Prisma.proyectosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proyectosInclude<ExtArgs> | null;
    where?: Prisma.proyectosWhereInput;
};
/**
 * calendario_tecnico.reportes_calendario_tecnico_reporte_idToreportes
 */
export type calendario_tecnico$reportes_calendario_tecnico_reporte_idToreportesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: Prisma.reportesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reportes
     */
    omit?: Prisma.reportesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reportesInclude<ExtArgs> | null;
    where?: Prisma.reportesWhereInput;
};
/**
 * calendario_tecnico.reportes_reportes_actividad_calendario_idTocalendario_tecnico
 */
export type calendario_tecnico$reportes_reportes_actividad_calendario_idTocalendario_tecnicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes
     */
    select?: Prisma.reportesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reportes
     */
    omit?: Prisma.reportesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reportesInclude<ExtArgs> | null;
    where?: Prisma.reportesWhereInput;
    orderBy?: Prisma.reportesOrderByWithRelationInput | Prisma.reportesOrderByWithRelationInput[];
    cursor?: Prisma.reportesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportesScalarFieldEnum | Prisma.ReportesScalarFieldEnum[];
};
/**
 * calendario_tecnico.reportes_mensuales_items
 */
export type calendario_tecnico$reportes_mensuales_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes_mensuales_items
     */
    select?: Prisma.reportes_mensuales_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reportes_mensuales_items
     */
    omit?: Prisma.reportes_mensuales_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reportes_mensuales_itemsInclude<ExtArgs> | null;
    where?: Prisma.reportes_mensuales_itemsWhereInput;
    orderBy?: Prisma.reportes_mensuales_itemsOrderByWithRelationInput | Prisma.reportes_mensuales_itemsOrderByWithRelationInput[];
    cursor?: Prisma.reportes_mensuales_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Reportes_mensuales_itemsScalarFieldEnum | Prisma.Reportes_mensuales_itemsScalarFieldEnum[];
};
/**
 * calendario_tecnico without action
 */
export type calendario_tecnicoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendario_tecnico
     */
    select?: Prisma.calendario_tecnicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the calendario_tecnico
     */
    omit?: Prisma.calendario_tecnicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.calendario_tecnicoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=calendario_tecnico.d.ts.map