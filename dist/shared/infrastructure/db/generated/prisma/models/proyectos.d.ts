import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model proyectos
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type proyectosModel = runtime.Types.Result.DefaultSelection<Prisma.$proyectosPayload>;
export type AggregateProyectos = {
    _count: ProyectosCountAggregateOutputType | null;
    _min: ProyectosMinAggregateOutputType | null;
    _max: ProyectosMaxAggregateOutputType | null;
};
export type ProyectosMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    alias: string | null;
    tipo: string | null;
    cliente: string | null;
    ciudad: string | null;
    estado: string | null;
    direccion: string | null;
    codigo_postal: string | null;
    fecha_operacion: Date | null;
    notas: string | null;
    creado_por: string | null;
    creado_fecha: Date | null;
    modificado_por: string | null;
    modificado_fecha: Date | null;
    poliza_adquirida: Date | null;
    poliza_vence: Date | null;
};
export type ProyectosMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    alias: string | null;
    tipo: string | null;
    cliente: string | null;
    ciudad: string | null;
    estado: string | null;
    direccion: string | null;
    codigo_postal: string | null;
    fecha_operacion: Date | null;
    notas: string | null;
    creado_por: string | null;
    creado_fecha: Date | null;
    modificado_por: string | null;
    modificado_fecha: Date | null;
    poliza_adquirida: Date | null;
    poliza_vence: Date | null;
};
export type ProyectosCountAggregateOutputType = {
    id: number;
    nombre: number;
    alias: number;
    tipo: number;
    cliente: number;
    ciudad: number;
    estado: number;
    direccion: number;
    codigo_postal: number;
    fecha_operacion: number;
    notas: number;
    creado_por: number;
    creado_fecha: number;
    modificado_por: number;
    modificado_fecha: number;
    poliza_adquirida: number;
    poliza_vence: number;
    _all: number;
};
export type ProyectosMinAggregateInputType = {
    id?: true;
    nombre?: true;
    alias?: true;
    tipo?: true;
    cliente?: true;
    ciudad?: true;
    estado?: true;
    direccion?: true;
    codigo_postal?: true;
    fecha_operacion?: true;
    notas?: true;
    creado_por?: true;
    creado_fecha?: true;
    modificado_por?: true;
    modificado_fecha?: true;
    poliza_adquirida?: true;
    poliza_vence?: true;
};
export type ProyectosMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    alias?: true;
    tipo?: true;
    cliente?: true;
    ciudad?: true;
    estado?: true;
    direccion?: true;
    codigo_postal?: true;
    fecha_operacion?: true;
    notas?: true;
    creado_por?: true;
    creado_fecha?: true;
    modificado_por?: true;
    modificado_fecha?: true;
    poliza_adquirida?: true;
    poliza_vence?: true;
};
export type ProyectosCountAggregateInputType = {
    id?: true;
    nombre?: true;
    alias?: true;
    tipo?: true;
    cliente?: true;
    ciudad?: true;
    estado?: true;
    direccion?: true;
    codigo_postal?: true;
    fecha_operacion?: true;
    notas?: true;
    creado_por?: true;
    creado_fecha?: true;
    modificado_por?: true;
    modificado_fecha?: true;
    poliza_adquirida?: true;
    poliza_vence?: true;
    _all?: true;
};
export type ProyectosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which proyectos to aggregate.
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proyectos to fetch.
     */
    orderBy?: Prisma.proyectosOrderByWithRelationInput | Prisma.proyectosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.proyectosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proyectos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned proyectos
    **/
    _count?: true | ProyectosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProyectosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProyectosMaxAggregateInputType;
};
export type GetProyectosAggregateType<T extends ProyectosAggregateArgs> = {
    [P in keyof T & keyof AggregateProyectos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProyectos[P]> : Prisma.GetScalarType<T[P], AggregateProyectos[P]>;
};
export type proyectosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proyectosWhereInput;
    orderBy?: Prisma.proyectosOrderByWithAggregationInput | Prisma.proyectosOrderByWithAggregationInput[];
    by: Prisma.ProyectosScalarFieldEnum[] | Prisma.ProyectosScalarFieldEnum;
    having?: Prisma.proyectosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProyectosCountAggregateInputType | true;
    _min?: ProyectosMinAggregateInputType;
    _max?: ProyectosMaxAggregateInputType;
};
export type ProyectosGroupByOutputType = {
    id: string;
    nombre: string;
    alias: string | null;
    tipo: string | null;
    cliente: string | null;
    ciudad: string | null;
    estado: string | null;
    direccion: string | null;
    codigo_postal: string | null;
    fecha_operacion: Date | null;
    notas: string | null;
    creado_por: string | null;
    creado_fecha: Date;
    modificado_por: string | null;
    modificado_fecha: Date;
    poliza_adquirida: Date | null;
    poliza_vence: Date | null;
    _count: ProyectosCountAggregateOutputType | null;
    _min: ProyectosMinAggregateOutputType | null;
    _max: ProyectosMaxAggregateOutputType | null;
};
type GetProyectosGroupByPayload<T extends proyectosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProyectosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProyectosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProyectosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProyectosGroupByOutputType[P]>;
}>>;
export type proyectosWhereInput = {
    AND?: Prisma.proyectosWhereInput | Prisma.proyectosWhereInput[];
    OR?: Prisma.proyectosWhereInput[];
    NOT?: Prisma.proyectosWhereInput | Prisma.proyectosWhereInput[];
    id?: Prisma.UuidFilter<"proyectos"> | string;
    nombre?: Prisma.StringFilter<"proyectos"> | string;
    alias?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    tipo?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    cliente?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    ciudad?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    estado?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    direccion?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    codigo_postal?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    fecha_operacion?: Prisma.DateTimeNullableFilter<"proyectos"> | Date | string | null;
    notas?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    creado_por?: Prisma.UuidNullableFilter<"proyectos"> | string | null;
    creado_fecha?: Prisma.DateTimeFilter<"proyectos"> | Date | string;
    modificado_por?: Prisma.UuidNullableFilter<"proyectos"> | string | null;
    modificado_fecha?: Prisma.DateTimeFilter<"proyectos"> | Date | string;
    poliza_adquirida?: Prisma.DateTimeNullableFilter<"proyectos"> | Date | string | null;
    poliza_vence?: Prisma.DateTimeNullableFilter<"proyectos"> | Date | string | null;
    calendario_tecnico?: Prisma.Calendario_tecnicoListRelationFilter;
    contactos_proyectos?: Prisma.Contactos_proyectosListRelationFilter;
    equipos?: Prisma.EquiposListRelationFilter;
    reportes?: Prisma.ReportesListRelationFilter;
    reportes_mensuales?: Prisma.Reportes_mensualesListRelationFilter;
};
export type proyectosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    alias?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    ciudad?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigo_postal?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_operacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    notas?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_fecha?: Prisma.SortOrder;
    modificado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    modificado_fecha?: Prisma.SortOrder;
    poliza_adquirida?: Prisma.SortOrderInput | Prisma.SortOrder;
    poliza_vence?: Prisma.SortOrderInput | Prisma.SortOrder;
    calendario_tecnico?: Prisma.calendario_tecnicoOrderByRelationAggregateInput;
    contactos_proyectos?: Prisma.contactos_proyectosOrderByRelationAggregateInput;
    equipos?: Prisma.equiposOrderByRelationAggregateInput;
    reportes?: Prisma.reportesOrderByRelationAggregateInput;
    reportes_mensuales?: Prisma.reportes_mensualesOrderByRelationAggregateInput;
};
export type proyectosWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.proyectosWhereInput | Prisma.proyectosWhereInput[];
    OR?: Prisma.proyectosWhereInput[];
    NOT?: Prisma.proyectosWhereInput | Prisma.proyectosWhereInput[];
    nombre?: Prisma.StringFilter<"proyectos"> | string;
    alias?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    tipo?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    cliente?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    ciudad?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    estado?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    direccion?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    codigo_postal?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    fecha_operacion?: Prisma.DateTimeNullableFilter<"proyectos"> | Date | string | null;
    notas?: Prisma.StringNullableFilter<"proyectos"> | string | null;
    creado_por?: Prisma.UuidNullableFilter<"proyectos"> | string | null;
    creado_fecha?: Prisma.DateTimeFilter<"proyectos"> | Date | string;
    modificado_por?: Prisma.UuidNullableFilter<"proyectos"> | string | null;
    modificado_fecha?: Prisma.DateTimeFilter<"proyectos"> | Date | string;
    poliza_adquirida?: Prisma.DateTimeNullableFilter<"proyectos"> | Date | string | null;
    poliza_vence?: Prisma.DateTimeNullableFilter<"proyectos"> | Date | string | null;
    calendario_tecnico?: Prisma.Calendario_tecnicoListRelationFilter;
    contactos_proyectos?: Prisma.Contactos_proyectosListRelationFilter;
    equipos?: Prisma.EquiposListRelationFilter;
    reportes?: Prisma.ReportesListRelationFilter;
    reportes_mensuales?: Prisma.Reportes_mensualesListRelationFilter;
}, "id">;
export type proyectosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    alias?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    ciudad?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigo_postal?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_operacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    notas?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_fecha?: Prisma.SortOrder;
    modificado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    modificado_fecha?: Prisma.SortOrder;
    poliza_adquirida?: Prisma.SortOrderInput | Prisma.SortOrder;
    poliza_vence?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.proyectosCountOrderByAggregateInput;
    _max?: Prisma.proyectosMaxOrderByAggregateInput;
    _min?: Prisma.proyectosMinOrderByAggregateInput;
};
export type proyectosScalarWhereWithAggregatesInput = {
    AND?: Prisma.proyectosScalarWhereWithAggregatesInput | Prisma.proyectosScalarWhereWithAggregatesInput[];
    OR?: Prisma.proyectosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.proyectosScalarWhereWithAggregatesInput | Prisma.proyectosScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"proyectos"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"proyectos"> | string;
    alias?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    cliente?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    ciudad?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    estado?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    codigo_postal?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    fecha_operacion?: Prisma.DateTimeNullableWithAggregatesFilter<"proyectos"> | Date | string | null;
    notas?: Prisma.StringNullableWithAggregatesFilter<"proyectos"> | string | null;
    creado_por?: Prisma.UuidNullableWithAggregatesFilter<"proyectos"> | string | null;
    creado_fecha?: Prisma.DateTimeWithAggregatesFilter<"proyectos"> | Date | string;
    modificado_por?: Prisma.UuidNullableWithAggregatesFilter<"proyectos"> | string | null;
    modificado_fecha?: Prisma.DateTimeWithAggregatesFilter<"proyectos"> | Date | string;
    poliza_adquirida?: Prisma.DateTimeNullableWithAggregatesFilter<"proyectos"> | Date | string | null;
    poliza_vence?: Prisma.DateTimeNullableWithAggregatesFilter<"proyectos"> | Date | string | null;
};
export type proyectosCreateInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesCreateNestedManyWithoutProyectosInput;
};
export type proyectosUncheckedCreateInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposUncheckedCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesUncheckedCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedCreateNestedManyWithoutProyectosInput;
};
export type proyectosUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUpdateManyWithoutProyectosNestedInput;
};
export type proyectosUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedUpdateManyWithoutProyectosNestedInput;
};
export type proyectosCreateManyInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
};
export type proyectosUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type proyectosUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProyectosNullableScalarRelationFilter = {
    is?: Prisma.proyectosWhereInput | null;
    isNot?: Prisma.proyectosWhereInput | null;
};
export type ProyectosScalarRelationFilter = {
    is?: Prisma.proyectosWhereInput;
    isNot?: Prisma.proyectosWhereInput;
};
export type proyectosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cliente?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    codigo_postal?: Prisma.SortOrder;
    fecha_operacion?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    creado_fecha?: Prisma.SortOrder;
    modificado_por?: Prisma.SortOrder;
    modificado_fecha?: Prisma.SortOrder;
    poliza_adquirida?: Prisma.SortOrder;
    poliza_vence?: Prisma.SortOrder;
};
export type proyectosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cliente?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    codigo_postal?: Prisma.SortOrder;
    fecha_operacion?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    creado_fecha?: Prisma.SortOrder;
    modificado_por?: Prisma.SortOrder;
    modificado_fecha?: Prisma.SortOrder;
    poliza_adquirida?: Prisma.SortOrder;
    poliza_vence?: Prisma.SortOrder;
};
export type proyectosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    cliente?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    codigo_postal?: Prisma.SortOrder;
    fecha_operacion?: Prisma.SortOrder;
    notas?: Prisma.SortOrder;
    creado_por?: Prisma.SortOrder;
    creado_fecha?: Prisma.SortOrder;
    modificado_por?: Prisma.SortOrder;
    modificado_fecha?: Prisma.SortOrder;
    poliza_adquirida?: Prisma.SortOrder;
    poliza_vence?: Prisma.SortOrder;
};
export type proyectosCreateNestedOneWithoutCalendario_tecnicoInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutCalendario_tecnicoInput, Prisma.proyectosUncheckedCreateWithoutCalendario_tecnicoInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutCalendario_tecnicoInput;
    connect?: Prisma.proyectosWhereUniqueInput;
};
export type proyectosUpdateOneWithoutCalendario_tecnicoNestedInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutCalendario_tecnicoInput, Prisma.proyectosUncheckedCreateWithoutCalendario_tecnicoInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutCalendario_tecnicoInput;
    upsert?: Prisma.proyectosUpsertWithoutCalendario_tecnicoInput;
    disconnect?: Prisma.proyectosWhereInput | boolean;
    delete?: Prisma.proyectosWhereInput | boolean;
    connect?: Prisma.proyectosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proyectosUpdateToOneWithWhereWithoutCalendario_tecnicoInput, Prisma.proyectosUpdateWithoutCalendario_tecnicoInput>, Prisma.proyectosUncheckedUpdateWithoutCalendario_tecnicoInput>;
};
export type proyectosCreateNestedOneWithoutContactos_proyectosInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutContactos_proyectosInput, Prisma.proyectosUncheckedCreateWithoutContactos_proyectosInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutContactos_proyectosInput;
    connect?: Prisma.proyectosWhereUniqueInput;
};
export type proyectosUpdateOneRequiredWithoutContactos_proyectosNestedInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutContactos_proyectosInput, Prisma.proyectosUncheckedCreateWithoutContactos_proyectosInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutContactos_proyectosInput;
    upsert?: Prisma.proyectosUpsertWithoutContactos_proyectosInput;
    connect?: Prisma.proyectosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proyectosUpdateToOneWithWhereWithoutContactos_proyectosInput, Prisma.proyectosUpdateWithoutContactos_proyectosInput>, Prisma.proyectosUncheckedUpdateWithoutContactos_proyectosInput>;
};
export type proyectosCreateNestedOneWithoutEquiposInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutEquiposInput, Prisma.proyectosUncheckedCreateWithoutEquiposInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutEquiposInput;
    connect?: Prisma.proyectosWhereUniqueInput;
};
export type proyectosUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutEquiposInput, Prisma.proyectosUncheckedCreateWithoutEquiposInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutEquiposInput;
    upsert?: Prisma.proyectosUpsertWithoutEquiposInput;
    connect?: Prisma.proyectosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proyectosUpdateToOneWithWhereWithoutEquiposInput, Prisma.proyectosUpdateWithoutEquiposInput>, Prisma.proyectosUncheckedUpdateWithoutEquiposInput>;
};
export type proyectosCreateNestedOneWithoutReportesInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutReportesInput, Prisma.proyectosUncheckedCreateWithoutReportesInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutReportesInput;
    connect?: Prisma.proyectosWhereUniqueInput;
};
export type proyectosUpdateOneWithoutReportesNestedInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutReportesInput, Prisma.proyectosUncheckedCreateWithoutReportesInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutReportesInput;
    upsert?: Prisma.proyectosUpsertWithoutReportesInput;
    disconnect?: Prisma.proyectosWhereInput | boolean;
    delete?: Prisma.proyectosWhereInput | boolean;
    connect?: Prisma.proyectosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proyectosUpdateToOneWithWhereWithoutReportesInput, Prisma.proyectosUpdateWithoutReportesInput>, Prisma.proyectosUncheckedUpdateWithoutReportesInput>;
};
export type proyectosCreateNestedOneWithoutReportes_mensualesInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutReportes_mensualesInput, Prisma.proyectosUncheckedCreateWithoutReportes_mensualesInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutReportes_mensualesInput;
    connect?: Prisma.proyectosWhereUniqueInput;
};
export type proyectosUpdateOneRequiredWithoutReportes_mensualesNestedInput = {
    create?: Prisma.XOR<Prisma.proyectosCreateWithoutReportes_mensualesInput, Prisma.proyectosUncheckedCreateWithoutReportes_mensualesInput>;
    connectOrCreate?: Prisma.proyectosCreateOrConnectWithoutReportes_mensualesInput;
    upsert?: Prisma.proyectosUpsertWithoutReportes_mensualesInput;
    connect?: Prisma.proyectosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proyectosUpdateToOneWithWhereWithoutReportes_mensualesInput, Prisma.proyectosUpdateWithoutReportes_mensualesInput>, Prisma.proyectosUncheckedUpdateWithoutReportes_mensualesInput>;
};
export type proyectosCreateWithoutCalendario_tecnicoInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    contactos_proyectos?: Prisma.contactos_proyectosCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesCreateNestedManyWithoutProyectosInput;
};
export type proyectosUncheckedCreateWithoutCalendario_tecnicoInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposUncheckedCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesUncheckedCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedCreateNestedManyWithoutProyectosInput;
};
export type proyectosCreateOrConnectWithoutCalendario_tecnicoInput = {
    where: Prisma.proyectosWhereUniqueInput;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutCalendario_tecnicoInput, Prisma.proyectosUncheckedCreateWithoutCalendario_tecnicoInput>;
};
export type proyectosUpsertWithoutCalendario_tecnicoInput = {
    update: Prisma.XOR<Prisma.proyectosUpdateWithoutCalendario_tecnicoInput, Prisma.proyectosUncheckedUpdateWithoutCalendario_tecnicoInput>;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutCalendario_tecnicoInput, Prisma.proyectosUncheckedCreateWithoutCalendario_tecnicoInput>;
    where?: Prisma.proyectosWhereInput;
};
export type proyectosUpdateToOneWithWhereWithoutCalendario_tecnicoInput = {
    where?: Prisma.proyectosWhereInput;
    data: Prisma.XOR<Prisma.proyectosUpdateWithoutCalendario_tecnicoInput, Prisma.proyectosUncheckedUpdateWithoutCalendario_tecnicoInput>;
};
export type proyectosUpdateWithoutCalendario_tecnicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contactos_proyectos?: Prisma.contactos_proyectosUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUpdateManyWithoutProyectosNestedInput;
};
export type proyectosUncheckedUpdateWithoutCalendario_tecnicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedUpdateManyWithoutProyectosNestedInput;
};
export type proyectosCreateWithoutContactos_proyectosInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesCreateNestedManyWithoutProyectosInput;
};
export type proyectosUncheckedCreateWithoutContactos_proyectosInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposUncheckedCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesUncheckedCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedCreateNestedManyWithoutProyectosInput;
};
export type proyectosCreateOrConnectWithoutContactos_proyectosInput = {
    where: Prisma.proyectosWhereUniqueInput;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutContactos_proyectosInput, Prisma.proyectosUncheckedCreateWithoutContactos_proyectosInput>;
};
export type proyectosUpsertWithoutContactos_proyectosInput = {
    update: Prisma.XOR<Prisma.proyectosUpdateWithoutContactos_proyectosInput, Prisma.proyectosUncheckedUpdateWithoutContactos_proyectosInput>;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutContactos_proyectosInput, Prisma.proyectosUncheckedCreateWithoutContactos_proyectosInput>;
    where?: Prisma.proyectosWhereInput;
};
export type proyectosUpdateToOneWithWhereWithoutContactos_proyectosInput = {
    where?: Prisma.proyectosWhereInput;
    data: Prisma.XOR<Prisma.proyectosUpdateWithoutContactos_proyectosInput, Prisma.proyectosUncheckedUpdateWithoutContactos_proyectosInput>;
};
export type proyectosUpdateWithoutContactos_proyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUpdateManyWithoutProyectosNestedInput;
};
export type proyectosUncheckedUpdateWithoutContactos_proyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedUpdateManyWithoutProyectosNestedInput;
};
export type proyectosCreateWithoutEquiposInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesCreateNestedManyWithoutProyectosInput;
};
export type proyectosUncheckedCreateWithoutEquiposInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesUncheckedCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedCreateNestedManyWithoutProyectosInput;
};
export type proyectosCreateOrConnectWithoutEquiposInput = {
    where: Prisma.proyectosWhereUniqueInput;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutEquiposInput, Prisma.proyectosUncheckedCreateWithoutEquiposInput>;
};
export type proyectosUpsertWithoutEquiposInput = {
    update: Prisma.XOR<Prisma.proyectosUpdateWithoutEquiposInput, Prisma.proyectosUncheckedUpdateWithoutEquiposInput>;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutEquiposInput, Prisma.proyectosUncheckedCreateWithoutEquiposInput>;
    where?: Prisma.proyectosWhereInput;
};
export type proyectosUpdateToOneWithWhereWithoutEquiposInput = {
    where?: Prisma.proyectosWhereInput;
    data: Prisma.XOR<Prisma.proyectosUpdateWithoutEquiposInput, Prisma.proyectosUncheckedUpdateWithoutEquiposInput>;
};
export type proyectosUpdateWithoutEquiposInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUpdateManyWithoutProyectosNestedInput;
};
export type proyectosUncheckedUpdateWithoutEquiposInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedUpdateManyWithoutProyectosNestedInput;
};
export type proyectosCreateWithoutReportesInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesCreateNestedManyWithoutProyectosInput;
};
export type proyectosUncheckedCreateWithoutReportesInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposUncheckedCreateNestedManyWithoutProyectosInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedCreateNestedManyWithoutProyectosInput;
};
export type proyectosCreateOrConnectWithoutReportesInput = {
    where: Prisma.proyectosWhereUniqueInput;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutReportesInput, Prisma.proyectosUncheckedCreateWithoutReportesInput>;
};
export type proyectosUpsertWithoutReportesInput = {
    update: Prisma.XOR<Prisma.proyectosUpdateWithoutReportesInput, Prisma.proyectosUncheckedUpdateWithoutReportesInput>;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutReportesInput, Prisma.proyectosUncheckedCreateWithoutReportesInput>;
    where?: Prisma.proyectosWhereInput;
};
export type proyectosUpdateToOneWithWhereWithoutReportesInput = {
    where?: Prisma.proyectosWhereInput;
    data: Prisma.XOR<Prisma.proyectosUpdateWithoutReportesInput, Prisma.proyectosUncheckedUpdateWithoutReportesInput>;
};
export type proyectosUpdateWithoutReportesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUpdateManyWithoutProyectosNestedInput;
};
export type proyectosUncheckedUpdateWithoutReportesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes_mensuales?: Prisma.reportes_mensualesUncheckedUpdateManyWithoutProyectosNestedInput;
};
export type proyectosCreateWithoutReportes_mensualesInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesCreateNestedManyWithoutProyectosInput;
};
export type proyectosUncheckedCreateWithoutReportes_mensualesInput = {
    id?: string;
    nombre: string;
    alias?: string | null;
    tipo?: string | null;
    cliente?: string | null;
    ciudad?: string | null;
    estado?: string | null;
    direccion?: string | null;
    codigo_postal?: string | null;
    fecha_operacion?: Date | string | null;
    notas?: string | null;
    creado_por?: string | null;
    creado_fecha?: Date | string;
    modificado_por?: string | null;
    modificado_fecha?: Date | string;
    poliza_adquirida?: Date | string | null;
    poliza_vence?: Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedCreateNestedManyWithoutProyectosInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedCreateNestedManyWithoutProyectosInput;
    equipos?: Prisma.equiposUncheckedCreateNestedManyWithoutProyectosInput;
    reportes?: Prisma.reportesUncheckedCreateNestedManyWithoutProyectosInput;
};
export type proyectosCreateOrConnectWithoutReportes_mensualesInput = {
    where: Prisma.proyectosWhereUniqueInput;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutReportes_mensualesInput, Prisma.proyectosUncheckedCreateWithoutReportes_mensualesInput>;
};
export type proyectosUpsertWithoutReportes_mensualesInput = {
    update: Prisma.XOR<Prisma.proyectosUpdateWithoutReportes_mensualesInput, Prisma.proyectosUncheckedUpdateWithoutReportes_mensualesInput>;
    create: Prisma.XOR<Prisma.proyectosCreateWithoutReportes_mensualesInput, Prisma.proyectosUncheckedCreateWithoutReportes_mensualesInput>;
    where?: Prisma.proyectosWhereInput;
};
export type proyectosUpdateToOneWithWhereWithoutReportes_mensualesInput = {
    where?: Prisma.proyectosWhereInput;
    data: Prisma.XOR<Prisma.proyectosUpdateWithoutReportes_mensualesInput, Prisma.proyectosUncheckedUpdateWithoutReportes_mensualesInput>;
};
export type proyectosUpdateWithoutReportes_mensualesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUpdateManyWithoutProyectosNestedInput;
};
export type proyectosUncheckedUpdateWithoutReportes_mensualesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigo_postal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_operacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notas?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modificado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    modificado_fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    poliza_adquirida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poliza_vence?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    calendario_tecnico?: Prisma.calendario_tecnicoUncheckedUpdateManyWithoutProyectosNestedInput;
    contactos_proyectos?: Prisma.contactos_proyectosUncheckedUpdateManyWithoutProyectosNestedInput;
    equipos?: Prisma.equiposUncheckedUpdateManyWithoutProyectosNestedInput;
    reportes?: Prisma.reportesUncheckedUpdateManyWithoutProyectosNestedInput;
};
/**
 * Count Type ProyectosCountOutputType
 */
export type ProyectosCountOutputType = {
    calendario_tecnico: number;
    contactos_proyectos: number;
    equipos: number;
    reportes: number;
    reportes_mensuales: number;
};
export type ProyectosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendario_tecnico?: boolean | ProyectosCountOutputTypeCountCalendario_tecnicoArgs;
    contactos_proyectos?: boolean | ProyectosCountOutputTypeCountContactos_proyectosArgs;
    equipos?: boolean | ProyectosCountOutputTypeCountEquiposArgs;
    reportes?: boolean | ProyectosCountOutputTypeCountReportesArgs;
    reportes_mensuales?: boolean | ProyectosCountOutputTypeCountReportes_mensualesArgs;
};
/**
 * ProyectosCountOutputType without action
 */
export type ProyectosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectosCountOutputType
     */
    select?: Prisma.ProyectosCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProyectosCountOutputType without action
 */
export type ProyectosCountOutputTypeCountCalendario_tecnicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.calendario_tecnicoWhereInput;
};
/**
 * ProyectosCountOutputType without action
 */
export type ProyectosCountOutputTypeCountContactos_proyectosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contactos_proyectosWhereInput;
};
/**
 * ProyectosCountOutputType without action
 */
export type ProyectosCountOutputTypeCountEquiposArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.equiposWhereInput;
};
/**
 * ProyectosCountOutputType without action
 */
export type ProyectosCountOutputTypeCountReportesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reportesWhereInput;
};
/**
 * ProyectosCountOutputType without action
 */
export type ProyectosCountOutputTypeCountReportes_mensualesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reportes_mensualesWhereInput;
};
export type proyectosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    alias?: boolean;
    tipo?: boolean;
    cliente?: boolean;
    ciudad?: boolean;
    estado?: boolean;
    direccion?: boolean;
    codigo_postal?: boolean;
    fecha_operacion?: boolean;
    notas?: boolean;
    creado_por?: boolean;
    creado_fecha?: boolean;
    modificado_por?: boolean;
    modificado_fecha?: boolean;
    poliza_adquirida?: boolean;
    poliza_vence?: boolean;
    calendario_tecnico?: boolean | Prisma.proyectos$calendario_tecnicoArgs<ExtArgs>;
    contactos_proyectos?: boolean | Prisma.proyectos$contactos_proyectosArgs<ExtArgs>;
    equipos?: boolean | Prisma.proyectos$equiposArgs<ExtArgs>;
    reportes?: boolean | Prisma.proyectos$reportesArgs<ExtArgs>;
    reportes_mensuales?: boolean | Prisma.proyectos$reportes_mensualesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProyectosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proyectos"]>;
export type proyectosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    alias?: boolean;
    tipo?: boolean;
    cliente?: boolean;
    ciudad?: boolean;
    estado?: boolean;
    direccion?: boolean;
    codigo_postal?: boolean;
    fecha_operacion?: boolean;
    notas?: boolean;
    creado_por?: boolean;
    creado_fecha?: boolean;
    modificado_por?: boolean;
    modificado_fecha?: boolean;
    poliza_adquirida?: boolean;
    poliza_vence?: boolean;
}, ExtArgs["result"]["proyectos"]>;
export type proyectosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    alias?: boolean;
    tipo?: boolean;
    cliente?: boolean;
    ciudad?: boolean;
    estado?: boolean;
    direccion?: boolean;
    codigo_postal?: boolean;
    fecha_operacion?: boolean;
    notas?: boolean;
    creado_por?: boolean;
    creado_fecha?: boolean;
    modificado_por?: boolean;
    modificado_fecha?: boolean;
    poliza_adquirida?: boolean;
    poliza_vence?: boolean;
}, ExtArgs["result"]["proyectos"]>;
export type proyectosSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    alias?: boolean;
    tipo?: boolean;
    cliente?: boolean;
    ciudad?: boolean;
    estado?: boolean;
    direccion?: boolean;
    codigo_postal?: boolean;
    fecha_operacion?: boolean;
    notas?: boolean;
    creado_por?: boolean;
    creado_fecha?: boolean;
    modificado_por?: boolean;
    modificado_fecha?: boolean;
    poliza_adquirida?: boolean;
    poliza_vence?: boolean;
};
export type proyectosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "alias" | "tipo" | "cliente" | "ciudad" | "estado" | "direccion" | "codigo_postal" | "fecha_operacion" | "notas" | "creado_por" | "creado_fecha" | "modificado_por" | "modificado_fecha" | "poliza_adquirida" | "poliza_vence", ExtArgs["result"]["proyectos"]>;
export type proyectosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calendario_tecnico?: boolean | Prisma.proyectos$calendario_tecnicoArgs<ExtArgs>;
    contactos_proyectos?: boolean | Prisma.proyectos$contactos_proyectosArgs<ExtArgs>;
    equipos?: boolean | Prisma.proyectos$equiposArgs<ExtArgs>;
    reportes?: boolean | Prisma.proyectos$reportesArgs<ExtArgs>;
    reportes_mensuales?: boolean | Prisma.proyectos$reportes_mensualesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProyectosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type proyectosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type proyectosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $proyectosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "proyectos";
    objects: {
        calendario_tecnico: Prisma.$calendario_tecnicoPayload<ExtArgs>[];
        contactos_proyectos: Prisma.$contactos_proyectosPayload<ExtArgs>[];
        equipos: Prisma.$equiposPayload<ExtArgs>[];
        reportes: Prisma.$reportesPayload<ExtArgs>[];
        reportes_mensuales: Prisma.$reportes_mensualesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        alias: string | null;
        tipo: string | null;
        cliente: string | null;
        ciudad: string | null;
        estado: string | null;
        direccion: string | null;
        codigo_postal: string | null;
        fecha_operacion: Date | null;
        notas: string | null;
        creado_por: string | null;
        creado_fecha: Date;
        modificado_por: string | null;
        modificado_fecha: Date;
        poliza_adquirida: Date | null;
        poliza_vence: Date | null;
    }, ExtArgs["result"]["proyectos"]>;
    composites: {};
};
export type proyectosGetPayload<S extends boolean | null | undefined | proyectosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$proyectosPayload, S>;
export type proyectosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<proyectosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProyectosCountAggregateInputType | true;
};
export interface proyectosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['proyectos'];
        meta: {
            name: 'proyectos';
        };
    };
    /**
     * Find zero or one Proyectos that matches the filter.
     * @param {proyectosFindUniqueArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proyectosFindUniqueArgs>(args: Prisma.SelectSubset<T, proyectosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Proyectos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proyectosFindUniqueOrThrowArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proyectosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, proyectosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosFindFirstArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proyectosFindFirstArgs>(args?: Prisma.SelectSubset<T, proyectosFindFirstArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proyectos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosFindFirstOrThrowArgs} args - Arguments to find a Proyectos
     * @example
     * // Get one Proyectos
     * const proyectos = await prisma.proyectos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proyectosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, proyectosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyectos.findMany()
     *
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyectos.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proyectosWithIdOnly = await prisma.proyectos.findMany({ select: { id: true } })
     *
     */
    findMany<T extends proyectosFindManyArgs>(args?: Prisma.SelectSubset<T, proyectosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Proyectos.
     * @param {proyectosCreateArgs} args - Arguments to create a Proyectos.
     * @example
     * // Create one Proyectos
     * const Proyectos = await prisma.proyectos.create({
     *   data: {
     *     // ... data to create a Proyectos
     *   }
     * })
     *
     */
    create<T extends proyectosCreateArgs>(args: Prisma.SelectSubset<T, proyectosCreateArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Proyectos.
     * @param {proyectosCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyectos = await prisma.proyectos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends proyectosCreateManyArgs>(args?: Prisma.SelectSubset<T, proyectosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Proyectos and returns the data saved in the database.
     * @param {proyectosCreateManyAndReturnArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyectos = await prisma.proyectos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Proyectos and only return the `id`
     * const proyectosWithIdOnly = await prisma.proyectos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends proyectosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, proyectosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Proyectos.
     * @param {proyectosDeleteArgs} args - Arguments to delete one Proyectos.
     * @example
     * // Delete one Proyectos
     * const Proyectos = await prisma.proyectos.delete({
     *   where: {
     *     // ... filter to delete one Proyectos
     *   }
     * })
     *
     */
    delete<T extends proyectosDeleteArgs>(args: Prisma.SelectSubset<T, proyectosDeleteArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Proyectos.
     * @param {proyectosUpdateArgs} args - Arguments to update one Proyectos.
     * @example
     * // Update one Proyectos
     * const proyectos = await prisma.proyectos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends proyectosUpdateArgs>(args: Prisma.SelectSubset<T, proyectosUpdateArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Proyectos.
     * @param {proyectosDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyectos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends proyectosDeleteManyArgs>(args?: Prisma.SelectSubset<T, proyectosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyectos = await prisma.proyectos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends proyectosUpdateManyArgs>(args: Prisma.SelectSubset<T, proyectosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proyectos and returns the data updated in the database.
     * @param {proyectosUpdateManyAndReturnArgs} args - Arguments to update many Proyectos.
     * @example
     * // Update many Proyectos
     * const proyectos = await prisma.proyectos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Proyectos and only return the `id`
     * const proyectosWithIdOnly = await prisma.proyectos.updateManyAndReturn({
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
    updateManyAndReturn<T extends proyectosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, proyectosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Proyectos.
     * @param {proyectosUpsertArgs} args - Arguments to update or create a Proyectos.
     * @example
     * // Update or create a Proyectos
     * const proyectos = await prisma.proyectos.upsert({
     *   create: {
     *     // ... data to create a Proyectos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyectos we want to update
     *   }
     * })
     */
    upsert<T extends proyectosUpsertArgs>(args: Prisma.SelectSubset<T, proyectosUpsertArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyectos.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends proyectosCountArgs>(args?: Prisma.Subset<T, proyectosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProyectosCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProyectosAggregateArgs>(args: Prisma.Subset<T, ProyectosAggregateArgs>): Prisma.PrismaPromise<GetProyectosAggregateType<T>>;
    /**
     * Group by Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectosGroupByArgs} args - Group by arguments.
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
    groupBy<T extends proyectosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: proyectosGroupByArgs['orderBy'];
    } : {
        orderBy?: proyectosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, proyectosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the proyectos model
     */
    readonly fields: proyectosFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for proyectos.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__proyectosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    calendario_tecnico<T extends Prisma.proyectos$calendario_tecnicoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proyectos$calendario_tecnicoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$calendario_tecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contactos_proyectos<T extends Prisma.proyectos$contactos_proyectosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proyectos$contactos_proyectosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contactos_proyectosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    equipos<T extends Prisma.proyectos$equiposArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proyectos$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$equiposPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportes<T extends Prisma.proyectos$reportesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proyectos$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reportes_mensuales<T extends Prisma.proyectos$reportes_mensualesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proyectos$reportes_mensualesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the proyectos model
 */
export interface proyectosFieldRefs {
    readonly id: Prisma.FieldRef<"proyectos", 'String'>;
    readonly nombre: Prisma.FieldRef<"proyectos", 'String'>;
    readonly alias: Prisma.FieldRef<"proyectos", 'String'>;
    readonly tipo: Prisma.FieldRef<"proyectos", 'String'>;
    readonly cliente: Prisma.FieldRef<"proyectos", 'String'>;
    readonly ciudad: Prisma.FieldRef<"proyectos", 'String'>;
    readonly estado: Prisma.FieldRef<"proyectos", 'String'>;
    readonly direccion: Prisma.FieldRef<"proyectos", 'String'>;
    readonly codigo_postal: Prisma.FieldRef<"proyectos", 'String'>;
    readonly fecha_operacion: Prisma.FieldRef<"proyectos", 'DateTime'>;
    readonly notas: Prisma.FieldRef<"proyectos", 'String'>;
    readonly creado_por: Prisma.FieldRef<"proyectos", 'String'>;
    readonly creado_fecha: Prisma.FieldRef<"proyectos", 'DateTime'>;
    readonly modificado_por: Prisma.FieldRef<"proyectos", 'String'>;
    readonly modificado_fecha: Prisma.FieldRef<"proyectos", 'DateTime'>;
    readonly poliza_adquirida: Prisma.FieldRef<"proyectos", 'DateTime'>;
    readonly poliza_vence: Prisma.FieldRef<"proyectos", 'DateTime'>;
}
/**
 * proyectos findUnique
 */
export type proyectosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which proyectos to fetch.
     */
    where: Prisma.proyectosWhereUniqueInput;
};
/**
 * proyectos findUniqueOrThrow
 */
export type proyectosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which proyectos to fetch.
     */
    where: Prisma.proyectosWhereUniqueInput;
};
/**
 * proyectos findFirst
 */
export type proyectosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which proyectos to fetch.
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proyectos to fetch.
     */
    orderBy?: Prisma.proyectosOrderByWithRelationInput | Prisma.proyectosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proyectos.
     */
    cursor?: Prisma.proyectosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proyectos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proyectos.
     */
    distinct?: Prisma.ProyectosScalarFieldEnum | Prisma.ProyectosScalarFieldEnum[];
};
/**
 * proyectos findFirstOrThrow
 */
export type proyectosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which proyectos to fetch.
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proyectos to fetch.
     */
    orderBy?: Prisma.proyectosOrderByWithRelationInput | Prisma.proyectosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proyectos.
     */
    cursor?: Prisma.proyectosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proyectos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proyectos.
     */
    distinct?: Prisma.ProyectosScalarFieldEnum | Prisma.ProyectosScalarFieldEnum[];
};
/**
 * proyectos findMany
 */
export type proyectosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which proyectos to fetch.
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proyectos to fetch.
     */
    orderBy?: Prisma.proyectosOrderByWithRelationInput | Prisma.proyectosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing proyectos.
     */
    cursor?: Prisma.proyectosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proyectos.
     */
    skip?: number;
    distinct?: Prisma.ProyectosScalarFieldEnum | Prisma.ProyectosScalarFieldEnum[];
};
/**
 * proyectos create
 */
export type proyectosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a proyectos.
     */
    data: Prisma.XOR<Prisma.proyectosCreateInput, Prisma.proyectosUncheckedCreateInput>;
};
/**
 * proyectos createMany
 */
export type proyectosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many proyectos.
     */
    data: Prisma.proyectosCreateManyInput | Prisma.proyectosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * proyectos createManyAndReturn
 */
export type proyectosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: Prisma.proyectosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the proyectos
     */
    omit?: Prisma.proyectosOmit<ExtArgs> | null;
    /**
     * The data used to create many proyectos.
     */
    data: Prisma.proyectosCreateManyInput | Prisma.proyectosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * proyectos update
 */
export type proyectosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a proyectos.
     */
    data: Prisma.XOR<Prisma.proyectosUpdateInput, Prisma.proyectosUncheckedUpdateInput>;
    /**
     * Choose, which proyectos to update.
     */
    where: Prisma.proyectosWhereUniqueInput;
};
/**
 * proyectos updateMany
 */
export type proyectosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update proyectos.
     */
    data: Prisma.XOR<Prisma.proyectosUpdateManyMutationInput, Prisma.proyectosUncheckedUpdateManyInput>;
    /**
     * Filter which proyectos to update
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * Limit how many proyectos to update.
     */
    limit?: number;
};
/**
 * proyectos updateManyAndReturn
 */
export type proyectosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyectos
     */
    select?: Prisma.proyectosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the proyectos
     */
    omit?: Prisma.proyectosOmit<ExtArgs> | null;
    /**
     * The data used to update proyectos.
     */
    data: Prisma.XOR<Prisma.proyectosUpdateManyMutationInput, Prisma.proyectosUncheckedUpdateManyInput>;
    /**
     * Filter which proyectos to update
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * Limit how many proyectos to update.
     */
    limit?: number;
};
/**
 * proyectos upsert
 */
export type proyectosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the proyectos to update in case it exists.
     */
    where: Prisma.proyectosWhereUniqueInput;
    /**
     * In case the proyectos found by the `where` argument doesn't exist, create a new proyectos with this data.
     */
    create: Prisma.XOR<Prisma.proyectosCreateInput, Prisma.proyectosUncheckedCreateInput>;
    /**
     * In case the proyectos was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.proyectosUpdateInput, Prisma.proyectosUncheckedUpdateInput>;
};
/**
 * proyectos delete
 */
export type proyectosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which proyectos to delete.
     */
    where: Prisma.proyectosWhereUniqueInput;
};
/**
 * proyectos deleteMany
 */
export type proyectosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which proyectos to delete
     */
    where?: Prisma.proyectosWhereInput;
    /**
     * Limit how many proyectos to delete.
     */
    limit?: number;
};
/**
 * proyectos.calendario_tecnico
 */
export type proyectos$calendario_tecnicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.calendario_tecnicoWhereInput;
    orderBy?: Prisma.calendario_tecnicoOrderByWithRelationInput | Prisma.calendario_tecnicoOrderByWithRelationInput[];
    cursor?: Prisma.calendario_tecnicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Calendario_tecnicoScalarFieldEnum | Prisma.Calendario_tecnicoScalarFieldEnum[];
};
/**
 * proyectos.contactos_proyectos
 */
export type proyectos$contactos_proyectosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactos_proyectos
     */
    select?: Prisma.contactos_proyectosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contactos_proyectos
     */
    omit?: Prisma.contactos_proyectosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contactos_proyectosInclude<ExtArgs> | null;
    where?: Prisma.contactos_proyectosWhereInput;
    orderBy?: Prisma.contactos_proyectosOrderByWithRelationInput | Prisma.contactos_proyectosOrderByWithRelationInput[];
    cursor?: Prisma.contactos_proyectosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contactos_proyectosScalarFieldEnum | Prisma.Contactos_proyectosScalarFieldEnum[];
};
/**
 * proyectos.equipos
 */
export type proyectos$equiposArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipos
     */
    select?: Prisma.equiposSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the equipos
     */
    omit?: Prisma.equiposOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.equiposInclude<ExtArgs> | null;
    where?: Prisma.equiposWhereInput;
    orderBy?: Prisma.equiposOrderByWithRelationInput | Prisma.equiposOrderByWithRelationInput[];
    cursor?: Prisma.equiposWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EquiposScalarFieldEnum | Prisma.EquiposScalarFieldEnum[];
};
/**
 * proyectos.reportes
 */
export type proyectos$reportesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * proyectos.reportes_mensuales
 */
export type proyectos$reportes_mensualesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes_mensuales
     */
    select?: Prisma.reportes_mensualesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reportes_mensuales
     */
    omit?: Prisma.reportes_mensualesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reportes_mensualesInclude<ExtArgs> | null;
    where?: Prisma.reportes_mensualesWhereInput;
    orderBy?: Prisma.reportes_mensualesOrderByWithRelationInput | Prisma.reportes_mensualesOrderByWithRelationInput[];
    cursor?: Prisma.reportes_mensualesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Reportes_mensualesScalarFieldEnum | Prisma.Reportes_mensualesScalarFieldEnum[];
};
/**
 * proyectos without action
 */
export type proyectosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=proyectos.d.ts.map