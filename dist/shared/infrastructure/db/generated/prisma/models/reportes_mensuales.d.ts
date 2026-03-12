import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model reportes_mensuales
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reportes_mensualesModel = runtime.Types.Result.DefaultSelection<Prisma.$reportes_mensualesPayload>;
export type AggregateReportes_mensuales = {
    _count: Reportes_mensualesCountAggregateOutputType | null;
    _avg: Reportes_mensualesAvgAggregateOutputType | null;
    _sum: Reportes_mensualesSumAggregateOutputType | null;
    _min: Reportes_mensualesMinAggregateOutputType | null;
    _max: Reportes_mensualesMaxAggregateOutputType | null;
};
export type Reportes_mensualesAvgAggregateOutputType = {
    year: number | null;
    month: number | null;
    total_servicios: number | null;
    total_correctivos: number | null;
    total_preventivos: number | null;
    total_pendientes: number | null;
    total_completados: number | null;
    total_con_video: number | null;
};
export type Reportes_mensualesSumAggregateOutputType = {
    year: number | null;
    month: number | null;
    total_servicios: number | null;
    total_correctivos: number | null;
    total_preventivos: number | null;
    total_pendientes: number | null;
    total_completados: number | null;
    total_con_video: number | null;
};
export type Reportes_mensualesMinAggregateOutputType = {
    id: string | null;
    proyecto_id: string | null;
    year: number | null;
    month: number | null;
    titulo: string | null;
    estado: string | null;
    generado_por: string | null;
    generado_at: Date | null;
    pdf_path: string | null;
    pdf_generated_at: Date | null;
    total_servicios: number | null;
    total_correctivos: number | null;
    total_preventivos: number | null;
    total_pendientes: number | null;
    total_completados: number | null;
    total_con_video: number | null;
};
export type Reportes_mensualesMaxAggregateOutputType = {
    id: string | null;
    proyecto_id: string | null;
    year: number | null;
    month: number | null;
    titulo: string | null;
    estado: string | null;
    generado_por: string | null;
    generado_at: Date | null;
    pdf_path: string | null;
    pdf_generated_at: Date | null;
    total_servicios: number | null;
    total_correctivos: number | null;
    total_preventivos: number | null;
    total_pendientes: number | null;
    total_completados: number | null;
    total_con_video: number | null;
};
export type Reportes_mensualesCountAggregateOutputType = {
    id: number;
    proyecto_id: number;
    year: number;
    month: number;
    titulo: number;
    estado: number;
    generado_por: number;
    generado_at: number;
    pdf_path: number;
    pdf_generated_at: number;
    total_servicios: number;
    total_correctivos: number;
    total_preventivos: number;
    total_pendientes: number;
    total_completados: number;
    total_con_video: number;
    _all: number;
};
export type Reportes_mensualesAvgAggregateInputType = {
    year?: true;
    month?: true;
    total_servicios?: true;
    total_correctivos?: true;
    total_preventivos?: true;
    total_pendientes?: true;
    total_completados?: true;
    total_con_video?: true;
};
export type Reportes_mensualesSumAggregateInputType = {
    year?: true;
    month?: true;
    total_servicios?: true;
    total_correctivos?: true;
    total_preventivos?: true;
    total_pendientes?: true;
    total_completados?: true;
    total_con_video?: true;
};
export type Reportes_mensualesMinAggregateInputType = {
    id?: true;
    proyecto_id?: true;
    year?: true;
    month?: true;
    titulo?: true;
    estado?: true;
    generado_por?: true;
    generado_at?: true;
    pdf_path?: true;
    pdf_generated_at?: true;
    total_servicios?: true;
    total_correctivos?: true;
    total_preventivos?: true;
    total_pendientes?: true;
    total_completados?: true;
    total_con_video?: true;
};
export type Reportes_mensualesMaxAggregateInputType = {
    id?: true;
    proyecto_id?: true;
    year?: true;
    month?: true;
    titulo?: true;
    estado?: true;
    generado_por?: true;
    generado_at?: true;
    pdf_path?: true;
    pdf_generated_at?: true;
    total_servicios?: true;
    total_correctivos?: true;
    total_preventivos?: true;
    total_pendientes?: true;
    total_completados?: true;
    total_con_video?: true;
};
export type Reportes_mensualesCountAggregateInputType = {
    id?: true;
    proyecto_id?: true;
    year?: true;
    month?: true;
    titulo?: true;
    estado?: true;
    generado_por?: true;
    generado_at?: true;
    pdf_path?: true;
    pdf_generated_at?: true;
    total_servicios?: true;
    total_correctivos?: true;
    total_preventivos?: true;
    total_pendientes?: true;
    total_completados?: true;
    total_con_video?: true;
    _all?: true;
};
export type Reportes_mensualesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which reportes_mensuales to aggregate.
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reportes_mensuales to fetch.
     */
    orderBy?: Prisma.reportes_mensualesOrderByWithRelationInput | Prisma.reportes_mensualesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.reportes_mensualesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reportes_mensuales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reportes_mensuales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reportes_mensuales
    **/
    _count?: true | Reportes_mensualesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Reportes_mensualesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Reportes_mensualesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Reportes_mensualesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Reportes_mensualesMaxAggregateInputType;
};
export type GetReportes_mensualesAggregateType<T extends Reportes_mensualesAggregateArgs> = {
    [P in keyof T & keyof AggregateReportes_mensuales]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReportes_mensuales[P]> : Prisma.GetScalarType<T[P], AggregateReportes_mensuales[P]>;
};
export type reportes_mensualesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reportes_mensualesWhereInput;
    orderBy?: Prisma.reportes_mensualesOrderByWithAggregationInput | Prisma.reportes_mensualesOrderByWithAggregationInput[];
    by: Prisma.Reportes_mensualesScalarFieldEnum[] | Prisma.Reportes_mensualesScalarFieldEnum;
    having?: Prisma.reportes_mensualesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Reportes_mensualesCountAggregateInputType | true;
    _avg?: Reportes_mensualesAvgAggregateInputType;
    _sum?: Reportes_mensualesSumAggregateInputType;
    _min?: Reportes_mensualesMinAggregateInputType;
    _max?: Reportes_mensualesMaxAggregateInputType;
};
export type Reportes_mensualesGroupByOutputType = {
    id: string;
    proyecto_id: string;
    year: number;
    month: number;
    titulo: string | null;
    estado: string;
    generado_por: string | null;
    generado_at: Date;
    pdf_path: string | null;
    pdf_generated_at: Date | null;
    total_servicios: number;
    total_correctivos: number;
    total_preventivos: number;
    total_pendientes: number;
    total_completados: number;
    total_con_video: number;
    _count: Reportes_mensualesCountAggregateOutputType | null;
    _avg: Reportes_mensualesAvgAggregateOutputType | null;
    _sum: Reportes_mensualesSumAggregateOutputType | null;
    _min: Reportes_mensualesMinAggregateOutputType | null;
    _max: Reportes_mensualesMaxAggregateOutputType | null;
};
type GetReportes_mensualesGroupByPayload<T extends reportes_mensualesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Reportes_mensualesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Reportes_mensualesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Reportes_mensualesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Reportes_mensualesGroupByOutputType[P]>;
}>>;
export type reportes_mensualesWhereInput = {
    AND?: Prisma.reportes_mensualesWhereInput | Prisma.reportes_mensualesWhereInput[];
    OR?: Prisma.reportes_mensualesWhereInput[];
    NOT?: Prisma.reportes_mensualesWhereInput | Prisma.reportes_mensualesWhereInput[];
    id?: Prisma.UuidFilter<"reportes_mensuales"> | string;
    proyecto_id?: Prisma.UuidFilter<"reportes_mensuales"> | string;
    year?: Prisma.IntFilter<"reportes_mensuales"> | number;
    month?: Prisma.IntFilter<"reportes_mensuales"> | number;
    titulo?: Prisma.StringNullableFilter<"reportes_mensuales"> | string | null;
    estado?: Prisma.StringFilter<"reportes_mensuales"> | string;
    generado_por?: Prisma.UuidNullableFilter<"reportes_mensuales"> | string | null;
    generado_at?: Prisma.DateTimeFilter<"reportes_mensuales"> | Date | string;
    pdf_path?: Prisma.StringNullableFilter<"reportes_mensuales"> | string | null;
    pdf_generated_at?: Prisma.DateTimeNullableFilter<"reportes_mensuales"> | Date | string | null;
    total_servicios?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_correctivos?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_preventivos?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_pendientes?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_completados?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_con_video?: Prisma.IntFilter<"reportes_mensuales"> | number;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    proyectos?: Prisma.XOR<Prisma.ProyectosScalarRelationFilter, Prisma.proyectosWhereInput>;
    reportes_mensuales_items?: Prisma.Reportes_mensuales_itemsListRelationFilter;
};
export type reportes_mensualesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    generado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    generado_at?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdf_generated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    proyectos?: Prisma.proyectosOrderByWithRelationInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsOrderByRelationAggregateInput;
};
export type reportes_mensualesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    proyecto_id_year_month?: Prisma.reportes_mensualesProyecto_idYearMonthCompoundUniqueInput;
    AND?: Prisma.reportes_mensualesWhereInput | Prisma.reportes_mensualesWhereInput[];
    OR?: Prisma.reportes_mensualesWhereInput[];
    NOT?: Prisma.reportes_mensualesWhereInput | Prisma.reportes_mensualesWhereInput[];
    proyecto_id?: Prisma.UuidFilter<"reportes_mensuales"> | string;
    year?: Prisma.IntFilter<"reportes_mensuales"> | number;
    month?: Prisma.IntFilter<"reportes_mensuales"> | number;
    titulo?: Prisma.StringNullableFilter<"reportes_mensuales"> | string | null;
    estado?: Prisma.StringFilter<"reportes_mensuales"> | string;
    generado_por?: Prisma.UuidNullableFilter<"reportes_mensuales"> | string | null;
    generado_at?: Prisma.DateTimeFilter<"reportes_mensuales"> | Date | string;
    pdf_path?: Prisma.StringNullableFilter<"reportes_mensuales"> | string | null;
    pdf_generated_at?: Prisma.DateTimeNullableFilter<"reportes_mensuales"> | Date | string | null;
    total_servicios?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_correctivos?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_preventivos?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_pendientes?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_completados?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_con_video?: Prisma.IntFilter<"reportes_mensuales"> | number;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    proyectos?: Prisma.XOR<Prisma.ProyectosScalarRelationFilter, Prisma.proyectosWhereInput>;
    reportes_mensuales_items?: Prisma.Reportes_mensuales_itemsListRelationFilter;
}, "id" | "proyecto_id_year_month">;
export type reportes_mensualesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    generado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    generado_at?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdf_generated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
    _count?: Prisma.reportes_mensualesCountOrderByAggregateInput;
    _avg?: Prisma.reportes_mensualesAvgOrderByAggregateInput;
    _max?: Prisma.reportes_mensualesMaxOrderByAggregateInput;
    _min?: Prisma.reportes_mensualesMinOrderByAggregateInput;
    _sum?: Prisma.reportes_mensualesSumOrderByAggregateInput;
};
export type reportes_mensualesScalarWhereWithAggregatesInput = {
    AND?: Prisma.reportes_mensualesScalarWhereWithAggregatesInput | Prisma.reportes_mensualesScalarWhereWithAggregatesInput[];
    OR?: Prisma.reportes_mensualesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.reportes_mensualesScalarWhereWithAggregatesInput | Prisma.reportes_mensualesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"reportes_mensuales"> | string;
    proyecto_id?: Prisma.UuidWithAggregatesFilter<"reportes_mensuales"> | string;
    year?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    month?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"reportes_mensuales"> | string | null;
    estado?: Prisma.StringWithAggregatesFilter<"reportes_mensuales"> | string;
    generado_por?: Prisma.UuidNullableWithAggregatesFilter<"reportes_mensuales"> | string | null;
    generado_at?: Prisma.DateTimeWithAggregatesFilter<"reportes_mensuales"> | Date | string;
    pdf_path?: Prisma.StringNullableWithAggregatesFilter<"reportes_mensuales"> | string | null;
    pdf_generated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reportes_mensuales"> | Date | string | null;
    total_servicios?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    total_correctivos?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    total_preventivos?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    total_pendientes?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    total_completados?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
    total_con_video?: Prisma.IntWithAggregatesFilter<"reportes_mensuales"> | number;
};
export type reportes_mensualesCreateInput = {
    id?: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    users?: Prisma.usersCreateNestedOneWithoutReportes_mensualesInput;
    proyectos: Prisma.proyectosCreateNestedOneWithoutReportes_mensualesInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutReportes_mensualesInput;
};
export type reportes_mensualesUncheckedCreateInput = {
    id?: string;
    proyecto_id: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_por?: string | null;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutReportes_mensualesInput;
};
export type reportes_mensualesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    users?: Prisma.usersUpdateOneWithoutReportes_mensualesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneRequiredWithoutReportes_mensualesNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesCreateManyInput = {
    id?: string;
    proyecto_id: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_por?: string | null;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
};
export type reportes_mensualesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type reportes_mensualesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Reportes_mensualesListRelationFilter = {
    every?: Prisma.reportes_mensualesWhereInput;
    some?: Prisma.reportes_mensualesWhereInput;
    none?: Prisma.reportes_mensualesWhereInput;
};
export type reportes_mensualesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type reportes_mensualesProyecto_idYearMonthCompoundUniqueInput = {
    proyecto_id: string;
    year: number;
    month: number;
};
export type reportes_mensualesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    generado_por?: Prisma.SortOrder;
    generado_at?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrder;
    pdf_generated_at?: Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
};
export type reportes_mensualesAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
};
export type reportes_mensualesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    generado_por?: Prisma.SortOrder;
    generado_at?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrder;
    pdf_generated_at?: Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
};
export type reportes_mensualesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proyecto_id?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    generado_por?: Prisma.SortOrder;
    generado_at?: Prisma.SortOrder;
    pdf_path?: Prisma.SortOrder;
    pdf_generated_at?: Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
};
export type reportes_mensualesSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    month?: Prisma.SortOrder;
    total_servicios?: Prisma.SortOrder;
    total_correctivos?: Prisma.SortOrder;
    total_preventivos?: Prisma.SortOrder;
    total_pendientes?: Prisma.SortOrder;
    total_completados?: Prisma.SortOrder;
    total_con_video?: Prisma.SortOrder;
};
export type Reportes_mensualesScalarRelationFilter = {
    is?: Prisma.reportes_mensualesWhereInput;
    isNot?: Prisma.reportes_mensualesWhereInput;
};
export type reportes_mensualesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutUsersInput, Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput> | Prisma.reportes_mensualesCreateWithoutUsersInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput | Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.reportes_mensualesCreateManyUsersInputEnvelope;
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
};
export type reportes_mensualesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutUsersInput, Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput> | Prisma.reportes_mensualesCreateWithoutUsersInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput | Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.reportes_mensualesCreateManyUsersInputEnvelope;
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
};
export type reportes_mensualesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutUsersInput, Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput> | Prisma.reportes_mensualesCreateWithoutUsersInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput | Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutUsersInput | Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.reportes_mensualesCreateManyUsersInputEnvelope;
    set?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    disconnect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    delete?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    update?: Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutUsersInput | Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.reportes_mensualesUpdateManyWithWhereWithoutUsersInput | Prisma.reportes_mensualesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.reportes_mensualesScalarWhereInput | Prisma.reportes_mensualesScalarWhereInput[];
};
export type reportes_mensualesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutUsersInput, Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput> | Prisma.reportes_mensualesCreateWithoutUsersInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput | Prisma.reportes_mensualesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutUsersInput | Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.reportes_mensualesCreateManyUsersInputEnvelope;
    set?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    disconnect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    delete?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    update?: Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutUsersInput | Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.reportes_mensualesUpdateManyWithWhereWithoutUsersInput | Prisma.reportes_mensualesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.reportes_mensualesScalarWhereInput | Prisma.reportes_mensualesScalarWhereInput[];
};
export type reportes_mensualesCreateNestedManyWithoutProyectosInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput> | Prisma.reportes_mensualesCreateWithoutProyectosInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput | Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput[];
    createMany?: Prisma.reportes_mensualesCreateManyProyectosInputEnvelope;
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
};
export type reportes_mensualesUncheckedCreateNestedManyWithoutProyectosInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput> | Prisma.reportes_mensualesCreateWithoutProyectosInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput | Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput[];
    createMany?: Prisma.reportes_mensualesCreateManyProyectosInputEnvelope;
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
};
export type reportes_mensualesUpdateManyWithoutProyectosNestedInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput> | Prisma.reportes_mensualesCreateWithoutProyectosInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput | Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput[];
    upsert?: Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutProyectosInput | Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutProyectosInput[];
    createMany?: Prisma.reportes_mensualesCreateManyProyectosInputEnvelope;
    set?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    disconnect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    delete?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    update?: Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutProyectosInput | Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutProyectosInput[];
    updateMany?: Prisma.reportes_mensualesUpdateManyWithWhereWithoutProyectosInput | Prisma.reportes_mensualesUpdateManyWithWhereWithoutProyectosInput[];
    deleteMany?: Prisma.reportes_mensualesScalarWhereInput | Prisma.reportes_mensualesScalarWhereInput[];
};
export type reportes_mensualesUncheckedUpdateManyWithoutProyectosNestedInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput> | Prisma.reportes_mensualesCreateWithoutProyectosInput[] | Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput[];
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput | Prisma.reportes_mensualesCreateOrConnectWithoutProyectosInput[];
    upsert?: Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutProyectosInput | Prisma.reportes_mensualesUpsertWithWhereUniqueWithoutProyectosInput[];
    createMany?: Prisma.reportes_mensualesCreateManyProyectosInputEnvelope;
    set?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    disconnect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    delete?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    connect?: Prisma.reportes_mensualesWhereUniqueInput | Prisma.reportes_mensualesWhereUniqueInput[];
    update?: Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutProyectosInput | Prisma.reportes_mensualesUpdateWithWhereUniqueWithoutProyectosInput[];
    updateMany?: Prisma.reportes_mensualesUpdateManyWithWhereWithoutProyectosInput | Prisma.reportes_mensualesUpdateManyWithWhereWithoutProyectosInput[];
    deleteMany?: Prisma.reportes_mensualesScalarWhereInput | Prisma.reportes_mensualesScalarWhereInput[];
};
export type reportes_mensualesCreateNestedOneWithoutReportes_mensuales_itemsInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUncheckedCreateWithoutReportes_mensuales_itemsInput>;
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutReportes_mensuales_itemsInput;
    connect?: Prisma.reportes_mensualesWhereUniqueInput;
};
export type reportes_mensualesUpdateOneRequiredWithoutReportes_mensuales_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUncheckedCreateWithoutReportes_mensuales_itemsInput>;
    connectOrCreate?: Prisma.reportes_mensualesCreateOrConnectWithoutReportes_mensuales_itemsInput;
    upsert?: Prisma.reportes_mensualesUpsertWithoutReportes_mensuales_itemsInput;
    connect?: Prisma.reportes_mensualesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.reportes_mensualesUpdateToOneWithWhereWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUpdateWithoutReportes_mensuales_itemsInput>, Prisma.reportes_mensualesUncheckedUpdateWithoutReportes_mensuales_itemsInput>;
};
export type reportes_mensualesCreateWithoutUsersInput = {
    id?: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    proyectos: Prisma.proyectosCreateNestedOneWithoutReportes_mensualesInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutReportes_mensualesInput;
};
export type reportes_mensualesUncheckedCreateWithoutUsersInput = {
    id?: string;
    proyecto_id: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutReportes_mensualesInput;
};
export type reportes_mensualesCreateOrConnectWithoutUsersInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    create: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutUsersInput, Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput>;
};
export type reportes_mensualesCreateManyUsersInputEnvelope = {
    data: Prisma.reportes_mensualesCreateManyUsersInput | Prisma.reportes_mensualesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type reportes_mensualesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    update: Prisma.XOR<Prisma.reportes_mensualesUpdateWithoutUsersInput, Prisma.reportes_mensualesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutUsersInput, Prisma.reportes_mensualesUncheckedCreateWithoutUsersInput>;
};
export type reportes_mensualesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateWithoutUsersInput, Prisma.reportes_mensualesUncheckedUpdateWithoutUsersInput>;
};
export type reportes_mensualesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.reportes_mensualesScalarWhereInput;
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateManyMutationInput, Prisma.reportes_mensualesUncheckedUpdateManyWithoutUsersInput>;
};
export type reportes_mensualesScalarWhereInput = {
    AND?: Prisma.reportes_mensualesScalarWhereInput | Prisma.reportes_mensualesScalarWhereInput[];
    OR?: Prisma.reportes_mensualesScalarWhereInput[];
    NOT?: Prisma.reportes_mensualesScalarWhereInput | Prisma.reportes_mensualesScalarWhereInput[];
    id?: Prisma.UuidFilter<"reportes_mensuales"> | string;
    proyecto_id?: Prisma.UuidFilter<"reportes_mensuales"> | string;
    year?: Prisma.IntFilter<"reportes_mensuales"> | number;
    month?: Prisma.IntFilter<"reportes_mensuales"> | number;
    titulo?: Prisma.StringNullableFilter<"reportes_mensuales"> | string | null;
    estado?: Prisma.StringFilter<"reportes_mensuales"> | string;
    generado_por?: Prisma.UuidNullableFilter<"reportes_mensuales"> | string | null;
    generado_at?: Prisma.DateTimeFilter<"reportes_mensuales"> | Date | string;
    pdf_path?: Prisma.StringNullableFilter<"reportes_mensuales"> | string | null;
    pdf_generated_at?: Prisma.DateTimeNullableFilter<"reportes_mensuales"> | Date | string | null;
    total_servicios?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_correctivos?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_preventivos?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_pendientes?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_completados?: Prisma.IntFilter<"reportes_mensuales"> | number;
    total_con_video?: Prisma.IntFilter<"reportes_mensuales"> | number;
};
export type reportes_mensualesCreateWithoutProyectosInput = {
    id?: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    users?: Prisma.usersCreateNestedOneWithoutReportes_mensualesInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsCreateNestedManyWithoutReportes_mensualesInput;
};
export type reportes_mensualesUncheckedCreateWithoutProyectosInput = {
    id?: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_por?: string | null;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedCreateNestedManyWithoutReportes_mensualesInput;
};
export type reportes_mensualesCreateOrConnectWithoutProyectosInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    create: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput>;
};
export type reportes_mensualesCreateManyProyectosInputEnvelope = {
    data: Prisma.reportes_mensualesCreateManyProyectosInput | Prisma.reportes_mensualesCreateManyProyectosInput[];
    skipDuplicates?: boolean;
};
export type reportes_mensualesUpsertWithWhereUniqueWithoutProyectosInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    update: Prisma.XOR<Prisma.reportes_mensualesUpdateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedUpdateWithoutProyectosInput>;
    create: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedCreateWithoutProyectosInput>;
};
export type reportes_mensualesUpdateWithWhereUniqueWithoutProyectosInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateWithoutProyectosInput, Prisma.reportes_mensualesUncheckedUpdateWithoutProyectosInput>;
};
export type reportes_mensualesUpdateManyWithWhereWithoutProyectosInput = {
    where: Prisma.reportes_mensualesScalarWhereInput;
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateManyMutationInput, Prisma.reportes_mensualesUncheckedUpdateManyWithoutProyectosInput>;
};
export type reportes_mensualesCreateWithoutReportes_mensuales_itemsInput = {
    id?: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
    users?: Prisma.usersCreateNestedOneWithoutReportes_mensualesInput;
    proyectos: Prisma.proyectosCreateNestedOneWithoutReportes_mensualesInput;
};
export type reportes_mensualesUncheckedCreateWithoutReportes_mensuales_itemsInput = {
    id?: string;
    proyecto_id: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_por?: string | null;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
};
export type reportes_mensualesCreateOrConnectWithoutReportes_mensuales_itemsInput = {
    where: Prisma.reportes_mensualesWhereUniqueInput;
    create: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUncheckedCreateWithoutReportes_mensuales_itemsInput>;
};
export type reportes_mensualesUpsertWithoutReportes_mensuales_itemsInput = {
    update: Prisma.XOR<Prisma.reportes_mensualesUpdateWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUncheckedUpdateWithoutReportes_mensuales_itemsInput>;
    create: Prisma.XOR<Prisma.reportes_mensualesCreateWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUncheckedCreateWithoutReportes_mensuales_itemsInput>;
    where?: Prisma.reportes_mensualesWhereInput;
};
export type reportes_mensualesUpdateToOneWithWhereWithoutReportes_mensuales_itemsInput = {
    where?: Prisma.reportes_mensualesWhereInput;
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateWithoutReportes_mensuales_itemsInput, Prisma.reportes_mensualesUncheckedUpdateWithoutReportes_mensuales_itemsInput>;
};
export type reportes_mensualesUpdateWithoutReportes_mensuales_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    users?: Prisma.usersUpdateOneWithoutReportes_mensualesNestedInput;
    proyectos?: Prisma.proyectosUpdateOneRequiredWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesUncheckedUpdateWithoutReportes_mensuales_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type reportes_mensualesCreateManyUsersInput = {
    id?: string;
    proyecto_id: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
};
export type reportes_mensualesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    proyectos?: Prisma.proyectosUpdateOneRequiredWithoutReportes_mensualesNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type reportes_mensualesCreateManyProyectosInput = {
    id?: string;
    year: number;
    month: number;
    titulo?: string | null;
    estado?: string;
    generado_por?: string | null;
    generado_at?: Date | string;
    pdf_path?: string | null;
    pdf_generated_at?: Date | string | null;
    total_servicios?: number;
    total_correctivos?: number;
    total_preventivos?: number;
    total_pendientes?: number;
    total_completados?: number;
    total_con_video?: number;
};
export type reportes_mensualesUpdateWithoutProyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    users?: Prisma.usersUpdateOneWithoutReportes_mensualesNestedInput;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUpdateManyWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesUncheckedUpdateWithoutProyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
    reportes_mensuales_items?: Prisma.reportes_mensuales_itemsUncheckedUpdateManyWithoutReportes_mensualesNestedInput;
};
export type reportes_mensualesUncheckedUpdateManyWithoutProyectosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    month?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    generado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    generado_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pdf_generated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    total_servicios?: Prisma.IntFieldUpdateOperationsInput | number;
    total_correctivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_preventivos?: Prisma.IntFieldUpdateOperationsInput | number;
    total_pendientes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_completados?: Prisma.IntFieldUpdateOperationsInput | number;
    total_con_video?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type Reportes_mensualesCountOutputType
 */
export type Reportes_mensualesCountOutputType = {
    reportes_mensuales_items: number;
};
export type Reportes_mensualesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reportes_mensuales_items?: boolean | Reportes_mensualesCountOutputTypeCountReportes_mensuales_itemsArgs;
};
/**
 * Reportes_mensualesCountOutputType without action
 */
export type Reportes_mensualesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reportes_mensualesCountOutputType
     */
    select?: Prisma.Reportes_mensualesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Reportes_mensualesCountOutputType without action
 */
export type Reportes_mensualesCountOutputTypeCountReportes_mensuales_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reportes_mensuales_itemsWhereInput;
};
export type reportes_mensualesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proyecto_id?: boolean;
    year?: boolean;
    month?: boolean;
    titulo?: boolean;
    estado?: boolean;
    generado_por?: boolean;
    generado_at?: boolean;
    pdf_path?: boolean;
    pdf_generated_at?: boolean;
    total_servicios?: boolean;
    total_correctivos?: boolean;
    total_preventivos?: boolean;
    total_pendientes?: boolean;
    total_completados?: boolean;
    total_con_video?: boolean;
    users?: boolean | Prisma.reportes_mensuales$usersArgs<ExtArgs>;
    proyectos?: boolean | Prisma.proyectosDefaultArgs<ExtArgs>;
    reportes_mensuales_items?: boolean | Prisma.reportes_mensuales$reportes_mensuales_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Reportes_mensualesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportes_mensuales"]>;
export type reportes_mensualesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proyecto_id?: boolean;
    year?: boolean;
    month?: boolean;
    titulo?: boolean;
    estado?: boolean;
    generado_por?: boolean;
    generado_at?: boolean;
    pdf_path?: boolean;
    pdf_generated_at?: boolean;
    total_servicios?: boolean;
    total_correctivos?: boolean;
    total_preventivos?: boolean;
    total_pendientes?: boolean;
    total_completados?: boolean;
    total_con_video?: boolean;
    users?: boolean | Prisma.reportes_mensuales$usersArgs<ExtArgs>;
    proyectos?: boolean | Prisma.proyectosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportes_mensuales"]>;
export type reportes_mensualesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proyecto_id?: boolean;
    year?: boolean;
    month?: boolean;
    titulo?: boolean;
    estado?: boolean;
    generado_por?: boolean;
    generado_at?: boolean;
    pdf_path?: boolean;
    pdf_generated_at?: boolean;
    total_servicios?: boolean;
    total_correctivos?: boolean;
    total_preventivos?: boolean;
    total_pendientes?: boolean;
    total_completados?: boolean;
    total_con_video?: boolean;
    users?: boolean | Prisma.reportes_mensuales$usersArgs<ExtArgs>;
    proyectos?: boolean | Prisma.proyectosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reportes_mensuales"]>;
export type reportes_mensualesSelectScalar = {
    id?: boolean;
    proyecto_id?: boolean;
    year?: boolean;
    month?: boolean;
    titulo?: boolean;
    estado?: boolean;
    generado_por?: boolean;
    generado_at?: boolean;
    pdf_path?: boolean;
    pdf_generated_at?: boolean;
    total_servicios?: boolean;
    total_correctivos?: boolean;
    total_preventivos?: boolean;
    total_pendientes?: boolean;
    total_completados?: boolean;
    total_con_video?: boolean;
};
export type reportes_mensualesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proyecto_id" | "year" | "month" | "titulo" | "estado" | "generado_por" | "generado_at" | "pdf_path" | "pdf_generated_at" | "total_servicios" | "total_correctivos" | "total_preventivos" | "total_pendientes" | "total_completados" | "total_con_video", ExtArgs["result"]["reportes_mensuales"]>;
export type reportes_mensualesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.reportes_mensuales$usersArgs<ExtArgs>;
    proyectos?: boolean | Prisma.proyectosDefaultArgs<ExtArgs>;
    reportes_mensuales_items?: boolean | Prisma.reportes_mensuales$reportes_mensuales_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Reportes_mensualesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type reportes_mensualesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.reportes_mensuales$usersArgs<ExtArgs>;
    proyectos?: boolean | Prisma.proyectosDefaultArgs<ExtArgs>;
};
export type reportes_mensualesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.reportes_mensuales$usersArgs<ExtArgs>;
    proyectos?: boolean | Prisma.proyectosDefaultArgs<ExtArgs>;
};
export type $reportes_mensualesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "reportes_mensuales";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        proyectos: Prisma.$proyectosPayload<ExtArgs>;
        reportes_mensuales_items: Prisma.$reportes_mensuales_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proyecto_id: string;
        year: number;
        month: number;
        titulo: string | null;
        estado: string;
        generado_por: string | null;
        generado_at: Date;
        pdf_path: string | null;
        pdf_generated_at: Date | null;
        total_servicios: number;
        total_correctivos: number;
        total_preventivos: number;
        total_pendientes: number;
        total_completados: number;
        total_con_video: number;
    }, ExtArgs["result"]["reportes_mensuales"]>;
    composites: {};
};
export type reportes_mensualesGetPayload<S extends boolean | null | undefined | reportes_mensualesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload, S>;
export type reportes_mensualesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<reportes_mensualesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Reportes_mensualesCountAggregateInputType | true;
};
export interface reportes_mensualesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['reportes_mensuales'];
        meta: {
            name: 'reportes_mensuales';
        };
    };
    /**
     * Find zero or one Reportes_mensuales that matches the filter.
     * @param {reportes_mensualesFindUniqueArgs} args - Arguments to find a Reportes_mensuales
     * @example
     * // Get one Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportes_mensualesFindUniqueArgs>(args: Prisma.SelectSubset<T, reportes_mensualesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Reportes_mensuales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportes_mensualesFindUniqueOrThrowArgs} args - Arguments to find a Reportes_mensuales
     * @example
     * // Get one Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportes_mensualesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, reportes_mensualesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Reportes_mensuales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportes_mensualesFindFirstArgs} args - Arguments to find a Reportes_mensuales
     * @example
     * // Get one Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportes_mensualesFindFirstArgs>(args?: Prisma.SelectSubset<T, reportes_mensualesFindFirstArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Reportes_mensuales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportes_mensualesFindFirstOrThrowArgs} args - Arguments to find a Reportes_mensuales
     * @example
     * // Get one Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportes_mensualesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, reportes_mensualesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Reportes_mensuales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportes_mensualesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.findMany()
     *
     * // Get first 10 Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reportes_mensualesWithIdOnly = await prisma.reportes_mensuales.findMany({ select: { id: true } })
     *
     */
    findMany<T extends reportes_mensualesFindManyArgs>(args?: Prisma.SelectSubset<T, reportes_mensualesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Reportes_mensuales.
     * @param {reportes_mensualesCreateArgs} args - Arguments to create a Reportes_mensuales.
     * @example
     * // Create one Reportes_mensuales
     * const Reportes_mensuales = await prisma.reportes_mensuales.create({
     *   data: {
     *     // ... data to create a Reportes_mensuales
     *   }
     * })
     *
     */
    create<T extends reportes_mensualesCreateArgs>(args: Prisma.SelectSubset<T, reportes_mensualesCreateArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Reportes_mensuales.
     * @param {reportes_mensualesCreateManyArgs} args - Arguments to create many Reportes_mensuales.
     * @example
     * // Create many Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends reportes_mensualesCreateManyArgs>(args?: Prisma.SelectSubset<T, reportes_mensualesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Reportes_mensuales and returns the data saved in the database.
     * @param {reportes_mensualesCreateManyAndReturnArgs} args - Arguments to create many Reportes_mensuales.
     * @example
     * // Create many Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Reportes_mensuales and only return the `id`
     * const reportes_mensualesWithIdOnly = await prisma.reportes_mensuales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends reportes_mensualesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, reportes_mensualesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Reportes_mensuales.
     * @param {reportes_mensualesDeleteArgs} args - Arguments to delete one Reportes_mensuales.
     * @example
     * // Delete one Reportes_mensuales
     * const Reportes_mensuales = await prisma.reportes_mensuales.delete({
     *   where: {
     *     // ... filter to delete one Reportes_mensuales
     *   }
     * })
     *
     */
    delete<T extends reportes_mensualesDeleteArgs>(args: Prisma.SelectSubset<T, reportes_mensualesDeleteArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Reportes_mensuales.
     * @param {reportes_mensualesUpdateArgs} args - Arguments to update one Reportes_mensuales.
     * @example
     * // Update one Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends reportes_mensualesUpdateArgs>(args: Prisma.SelectSubset<T, reportes_mensualesUpdateArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Reportes_mensuales.
     * @param {reportes_mensualesDeleteManyArgs} args - Arguments to filter Reportes_mensuales to delete.
     * @example
     * // Delete a few Reportes_mensuales
     * const { count } = await prisma.reportes_mensuales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends reportes_mensualesDeleteManyArgs>(args?: Prisma.SelectSubset<T, reportes_mensualesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Reportes_mensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportes_mensualesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends reportes_mensualesUpdateManyArgs>(args: Prisma.SelectSubset<T, reportes_mensualesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Reportes_mensuales and returns the data updated in the database.
     * @param {reportes_mensualesUpdateManyAndReturnArgs} args - Arguments to update many Reportes_mensuales.
     * @example
     * // Update many Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Reportes_mensuales and only return the `id`
     * const reportes_mensualesWithIdOnly = await prisma.reportes_mensuales.updateManyAndReturn({
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
    updateManyAndReturn<T extends reportes_mensualesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, reportes_mensualesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Reportes_mensuales.
     * @param {reportes_mensualesUpsertArgs} args - Arguments to update or create a Reportes_mensuales.
     * @example
     * // Update or create a Reportes_mensuales
     * const reportes_mensuales = await prisma.reportes_mensuales.upsert({
     *   create: {
     *     // ... data to create a Reportes_mensuales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reportes_mensuales we want to update
     *   }
     * })
     */
    upsert<T extends reportes_mensualesUpsertArgs>(args: Prisma.SelectSubset<T, reportes_mensualesUpsertArgs<ExtArgs>>): Prisma.Prisma__reportes_mensualesClient<runtime.Types.Result.GetResult<Prisma.$reportes_mensualesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Reportes_mensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportes_mensualesCountArgs} args - Arguments to filter Reportes_mensuales to count.
     * @example
     * // Count the number of Reportes_mensuales
     * const count = await prisma.reportes_mensuales.count({
     *   where: {
     *     // ... the filter for the Reportes_mensuales we want to count
     *   }
     * })
    **/
    count<T extends reportes_mensualesCountArgs>(args?: Prisma.Subset<T, reportes_mensualesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Reportes_mensualesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Reportes_mensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reportes_mensualesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Reportes_mensualesAggregateArgs>(args: Prisma.Subset<T, Reportes_mensualesAggregateArgs>): Prisma.PrismaPromise<GetReportes_mensualesAggregateType<T>>;
    /**
     * Group by Reportes_mensuales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportes_mensualesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends reportes_mensualesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: reportes_mensualesGroupByArgs['orderBy'];
    } : {
        orderBy?: reportes_mensualesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, reportes_mensualesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportes_mensualesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the reportes_mensuales model
     */
    readonly fields: reportes_mensualesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for reportes_mensuales.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__reportes_mensualesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.reportes_mensuales$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reportes_mensuales$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    proyectos<T extends Prisma.proyectosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proyectosDefaultArgs<ExtArgs>>): Prisma.Prisma__proyectosClient<runtime.Types.Result.GetResult<Prisma.$proyectosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reportes_mensuales_items<T extends Prisma.reportes_mensuales$reportes_mensuales_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reportes_mensuales$reportes_mensuales_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reportes_mensuales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the reportes_mensuales model
 */
export interface reportes_mensualesFieldRefs {
    readonly id: Prisma.FieldRef<"reportes_mensuales", 'String'>;
    readonly proyecto_id: Prisma.FieldRef<"reportes_mensuales", 'String'>;
    readonly year: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly month: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly titulo: Prisma.FieldRef<"reportes_mensuales", 'String'>;
    readonly estado: Prisma.FieldRef<"reportes_mensuales", 'String'>;
    readonly generado_por: Prisma.FieldRef<"reportes_mensuales", 'String'>;
    readonly generado_at: Prisma.FieldRef<"reportes_mensuales", 'DateTime'>;
    readonly pdf_path: Prisma.FieldRef<"reportes_mensuales", 'String'>;
    readonly pdf_generated_at: Prisma.FieldRef<"reportes_mensuales", 'DateTime'>;
    readonly total_servicios: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly total_correctivos: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly total_preventivos: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly total_pendientes: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly total_completados: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
    readonly total_con_video: Prisma.FieldRef<"reportes_mensuales", 'Int'>;
}
/**
 * reportes_mensuales findUnique
 */
export type reportes_mensualesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which reportes_mensuales to fetch.
     */
    where: Prisma.reportes_mensualesWhereUniqueInput;
};
/**
 * reportes_mensuales findUniqueOrThrow
 */
export type reportes_mensualesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which reportes_mensuales to fetch.
     */
    where: Prisma.reportes_mensualesWhereUniqueInput;
};
/**
 * reportes_mensuales findFirst
 */
export type reportes_mensualesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which reportes_mensuales to fetch.
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reportes_mensuales to fetch.
     */
    orderBy?: Prisma.reportes_mensualesOrderByWithRelationInput | Prisma.reportes_mensualesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reportes_mensuales.
     */
    cursor?: Prisma.reportes_mensualesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reportes_mensuales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reportes_mensuales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reportes_mensuales.
     */
    distinct?: Prisma.Reportes_mensualesScalarFieldEnum | Prisma.Reportes_mensualesScalarFieldEnum[];
};
/**
 * reportes_mensuales findFirstOrThrow
 */
export type reportes_mensualesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which reportes_mensuales to fetch.
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reportes_mensuales to fetch.
     */
    orderBy?: Prisma.reportes_mensualesOrderByWithRelationInput | Prisma.reportes_mensualesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reportes_mensuales.
     */
    cursor?: Prisma.reportes_mensualesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reportes_mensuales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reportes_mensuales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reportes_mensuales.
     */
    distinct?: Prisma.Reportes_mensualesScalarFieldEnum | Prisma.Reportes_mensualesScalarFieldEnum[];
};
/**
 * reportes_mensuales findMany
 */
export type reportes_mensualesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which reportes_mensuales to fetch.
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reportes_mensuales to fetch.
     */
    orderBy?: Prisma.reportes_mensualesOrderByWithRelationInput | Prisma.reportes_mensualesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reportes_mensuales.
     */
    cursor?: Prisma.reportes_mensualesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reportes_mensuales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reportes_mensuales.
     */
    skip?: number;
    distinct?: Prisma.Reportes_mensualesScalarFieldEnum | Prisma.Reportes_mensualesScalarFieldEnum[];
};
/**
 * reportes_mensuales create
 */
export type reportes_mensualesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a reportes_mensuales.
     */
    data: Prisma.XOR<Prisma.reportes_mensualesCreateInput, Prisma.reportes_mensualesUncheckedCreateInput>;
};
/**
 * reportes_mensuales createMany
 */
export type reportes_mensualesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many reportes_mensuales.
     */
    data: Prisma.reportes_mensualesCreateManyInput | Prisma.reportes_mensualesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * reportes_mensuales createManyAndReturn
 */
export type reportes_mensualesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes_mensuales
     */
    select?: Prisma.reportes_mensualesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the reportes_mensuales
     */
    omit?: Prisma.reportes_mensualesOmit<ExtArgs> | null;
    /**
     * The data used to create many reportes_mensuales.
     */
    data: Prisma.reportes_mensualesCreateManyInput | Prisma.reportes_mensualesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reportes_mensualesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * reportes_mensuales update
 */
export type reportes_mensualesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a reportes_mensuales.
     */
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateInput, Prisma.reportes_mensualesUncheckedUpdateInput>;
    /**
     * Choose, which reportes_mensuales to update.
     */
    where: Prisma.reportes_mensualesWhereUniqueInput;
};
/**
 * reportes_mensuales updateMany
 */
export type reportes_mensualesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update reportes_mensuales.
     */
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateManyMutationInput, Prisma.reportes_mensualesUncheckedUpdateManyInput>;
    /**
     * Filter which reportes_mensuales to update
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * Limit how many reportes_mensuales to update.
     */
    limit?: number;
};
/**
 * reportes_mensuales updateManyAndReturn
 */
export type reportes_mensualesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reportes_mensuales
     */
    select?: Prisma.reportes_mensualesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the reportes_mensuales
     */
    omit?: Prisma.reportes_mensualesOmit<ExtArgs> | null;
    /**
     * The data used to update reportes_mensuales.
     */
    data: Prisma.XOR<Prisma.reportes_mensualesUpdateManyMutationInput, Prisma.reportes_mensualesUncheckedUpdateManyInput>;
    /**
     * Filter which reportes_mensuales to update
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * Limit how many reportes_mensuales to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.reportes_mensualesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * reportes_mensuales upsert
 */
export type reportes_mensualesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the reportes_mensuales to update in case it exists.
     */
    where: Prisma.reportes_mensualesWhereUniqueInput;
    /**
     * In case the reportes_mensuales found by the `where` argument doesn't exist, create a new reportes_mensuales with this data.
     */
    create: Prisma.XOR<Prisma.reportes_mensualesCreateInput, Prisma.reportes_mensualesUncheckedCreateInput>;
    /**
     * In case the reportes_mensuales was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.reportes_mensualesUpdateInput, Prisma.reportes_mensualesUncheckedUpdateInput>;
};
/**
 * reportes_mensuales delete
 */
export type reportes_mensualesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which reportes_mensuales to delete.
     */
    where: Prisma.reportes_mensualesWhereUniqueInput;
};
/**
 * reportes_mensuales deleteMany
 */
export type reportes_mensualesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which reportes_mensuales to delete
     */
    where?: Prisma.reportes_mensualesWhereInput;
    /**
     * Limit how many reportes_mensuales to delete.
     */
    limit?: number;
};
/**
 * reportes_mensuales.users
 */
export type reportes_mensuales$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
/**
 * reportes_mensuales.reportes_mensuales_items
 */
export type reportes_mensuales$reportes_mensuales_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * reportes_mensuales without action
 */
export type reportes_mensualesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=reportes_mensuales.d.ts.map