import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ticket_counters
 *
 */
export type ticket_countersModel = runtime.Types.Result.DefaultSelection<Prisma.$ticket_countersPayload>;
export type AggregateTicket_counters = {
    _count: Ticket_countersCountAggregateOutputType | null;
    _avg: Ticket_countersAvgAggregateOutputType | null;
    _sum: Ticket_countersSumAggregateOutputType | null;
    _min: Ticket_countersMinAggregateOutputType | null;
    _max: Ticket_countersMaxAggregateOutputType | null;
};
export type Ticket_countersAvgAggregateOutputType = {
    last_number: number | null;
};
export type Ticket_countersSumAggregateOutputType = {
    last_number: number | null;
};
export type Ticket_countersMinAggregateOutputType = {
    proyecto_id: string | null;
    fecha: Date | null;
    last_number: number | null;
};
export type Ticket_countersMaxAggregateOutputType = {
    proyecto_id: string | null;
    fecha: Date | null;
    last_number: number | null;
};
export type Ticket_countersCountAggregateOutputType = {
    proyecto_id: number;
    fecha: number;
    last_number: number;
    _all: number;
};
export type Ticket_countersAvgAggregateInputType = {
    last_number?: true;
};
export type Ticket_countersSumAggregateInputType = {
    last_number?: true;
};
export type Ticket_countersMinAggregateInputType = {
    proyecto_id?: true;
    fecha?: true;
    last_number?: true;
};
export type Ticket_countersMaxAggregateInputType = {
    proyecto_id?: true;
    fecha?: true;
    last_number?: true;
};
export type Ticket_countersCountAggregateInputType = {
    proyecto_id?: true;
    fecha?: true;
    last_number?: true;
    _all?: true;
};
export type Ticket_countersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_counters to aggregate.
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ticket_counters to fetch.
     */
    orderBy?: Prisma.ticket_countersOrderByWithRelationInput | Prisma.ticket_countersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ticket_countersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ticket_counters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ticket_counters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ticket_counters
    **/
    _count?: true | Ticket_countersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Ticket_countersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Ticket_countersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Ticket_countersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Ticket_countersMaxAggregateInputType;
};
export type GetTicket_countersAggregateType<T extends Ticket_countersAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket_counters]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicket_counters[P]> : Prisma.GetScalarType<T[P], AggregateTicket_counters[P]>;
};
export type ticket_countersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticket_countersWhereInput;
    orderBy?: Prisma.ticket_countersOrderByWithAggregationInput | Prisma.ticket_countersOrderByWithAggregationInput[];
    by: Prisma.Ticket_countersScalarFieldEnum[] | Prisma.Ticket_countersScalarFieldEnum;
    having?: Prisma.ticket_countersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ticket_countersCountAggregateInputType | true;
    _avg?: Ticket_countersAvgAggregateInputType;
    _sum?: Ticket_countersSumAggregateInputType;
    _min?: Ticket_countersMinAggregateInputType;
    _max?: Ticket_countersMaxAggregateInputType;
};
export type Ticket_countersGroupByOutputType = {
    proyecto_id: string;
    fecha: Date;
    last_number: number;
    _count: Ticket_countersCountAggregateOutputType | null;
    _avg: Ticket_countersAvgAggregateOutputType | null;
    _sum: Ticket_countersSumAggregateOutputType | null;
    _min: Ticket_countersMinAggregateOutputType | null;
    _max: Ticket_countersMaxAggregateOutputType | null;
};
type GetTicket_countersGroupByPayload<T extends ticket_countersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ticket_countersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ticket_countersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ticket_countersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ticket_countersGroupByOutputType[P]>;
}>>;
export type ticket_countersWhereInput = {
    AND?: Prisma.ticket_countersWhereInput | Prisma.ticket_countersWhereInput[];
    OR?: Prisma.ticket_countersWhereInput[];
    NOT?: Prisma.ticket_countersWhereInput | Prisma.ticket_countersWhereInput[];
    proyecto_id?: Prisma.UuidFilter<"ticket_counters"> | string;
    fecha?: Prisma.DateTimeFilter<"ticket_counters"> | Date | string;
    last_number?: Prisma.IntFilter<"ticket_counters"> | number;
};
export type ticket_countersOrderByWithRelationInput = {
    proyecto_id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    last_number?: Prisma.SortOrder;
};
export type ticket_countersWhereUniqueInput = Prisma.AtLeast<{
    proyecto_id_fecha?: Prisma.ticket_countersProyecto_idFechaCompoundUniqueInput;
    AND?: Prisma.ticket_countersWhereInput | Prisma.ticket_countersWhereInput[];
    OR?: Prisma.ticket_countersWhereInput[];
    NOT?: Prisma.ticket_countersWhereInput | Prisma.ticket_countersWhereInput[];
    proyecto_id?: Prisma.UuidFilter<"ticket_counters"> | string;
    fecha?: Prisma.DateTimeFilter<"ticket_counters"> | Date | string;
    last_number?: Prisma.IntFilter<"ticket_counters"> | number;
}, "proyecto_id_fecha">;
export type ticket_countersOrderByWithAggregationInput = {
    proyecto_id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    last_number?: Prisma.SortOrder;
    _count?: Prisma.ticket_countersCountOrderByAggregateInput;
    _avg?: Prisma.ticket_countersAvgOrderByAggregateInput;
    _max?: Prisma.ticket_countersMaxOrderByAggregateInput;
    _min?: Prisma.ticket_countersMinOrderByAggregateInput;
    _sum?: Prisma.ticket_countersSumOrderByAggregateInput;
};
export type ticket_countersScalarWhereWithAggregatesInput = {
    AND?: Prisma.ticket_countersScalarWhereWithAggregatesInput | Prisma.ticket_countersScalarWhereWithAggregatesInput[];
    OR?: Prisma.ticket_countersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ticket_countersScalarWhereWithAggregatesInput | Prisma.ticket_countersScalarWhereWithAggregatesInput[];
    proyecto_id?: Prisma.UuidWithAggregatesFilter<"ticket_counters"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"ticket_counters"> | Date | string;
    last_number?: Prisma.IntWithAggregatesFilter<"ticket_counters"> | number;
};
export type ticket_countersCreateInput = {
    proyecto_id: string;
    fecha: Date | string;
    last_number?: number;
};
export type ticket_countersUncheckedCreateInput = {
    proyecto_id: string;
    fecha: Date | string;
    last_number?: number;
};
export type ticket_countersUpdateInput = {
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_number?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ticket_countersUncheckedUpdateInput = {
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_number?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ticket_countersCreateManyInput = {
    proyecto_id: string;
    fecha: Date | string;
    last_number?: number;
};
export type ticket_countersUpdateManyMutationInput = {
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_number?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ticket_countersUncheckedUpdateManyInput = {
    proyecto_id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_number?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ticket_countersProyecto_idFechaCompoundUniqueInput = {
    proyecto_id: string;
    fecha: Date | string;
};
export type ticket_countersCountOrderByAggregateInput = {
    proyecto_id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    last_number?: Prisma.SortOrder;
};
export type ticket_countersAvgOrderByAggregateInput = {
    last_number?: Prisma.SortOrder;
};
export type ticket_countersMaxOrderByAggregateInput = {
    proyecto_id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    last_number?: Prisma.SortOrder;
};
export type ticket_countersMinOrderByAggregateInput = {
    proyecto_id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    last_number?: Prisma.SortOrder;
};
export type ticket_countersSumOrderByAggregateInput = {
    last_number?: Prisma.SortOrder;
};
export type ticket_countersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    proyecto_id?: boolean;
    fecha?: boolean;
    last_number?: boolean;
}, ExtArgs["result"]["ticket_counters"]>;
export type ticket_countersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    proyecto_id?: boolean;
    fecha?: boolean;
    last_number?: boolean;
}, ExtArgs["result"]["ticket_counters"]>;
export type ticket_countersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    proyecto_id?: boolean;
    fecha?: boolean;
    last_number?: boolean;
}, ExtArgs["result"]["ticket_counters"]>;
export type ticket_countersSelectScalar = {
    proyecto_id?: boolean;
    fecha?: boolean;
    last_number?: boolean;
};
export type ticket_countersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"proyecto_id" | "fecha" | "last_number", ExtArgs["result"]["ticket_counters"]>;
export type $ticket_countersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ticket_counters";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        proyecto_id: string;
        fecha: Date;
        last_number: number;
    }, ExtArgs["result"]["ticket_counters"]>;
    composites: {};
};
export type ticket_countersGetPayload<S extends boolean | null | undefined | ticket_countersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload, S>;
export type ticket_countersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ticket_countersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Ticket_countersCountAggregateInputType | true;
};
export interface ticket_countersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ticket_counters'];
        meta: {
            name: 'ticket_counters';
        };
    };
    /**
     * Find zero or one Ticket_counters that matches the filter.
     * @param {ticket_countersFindUniqueArgs} args - Arguments to find a Ticket_counters
     * @example
     * // Get one Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticket_countersFindUniqueArgs>(args: Prisma.SelectSubset<T, ticket_countersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ticket_counters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticket_countersFindUniqueOrThrowArgs} args - Arguments to find a Ticket_counters
     * @example
     * // Get one Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticket_countersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ticket_countersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ticket_counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_countersFindFirstArgs} args - Arguments to find a Ticket_counters
     * @example
     * // Get one Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticket_countersFindFirstArgs>(args?: Prisma.SelectSubset<T, ticket_countersFindFirstArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ticket_counters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_countersFindFirstOrThrowArgs} args - Arguments to find a Ticket_counters
     * @example
     * // Get one Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticket_countersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ticket_countersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ticket_counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_countersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.findMany()
     *
     * // Get first 10 Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.findMany({ take: 10 })
     *
     * // Only select the `proyecto_id`
     * const ticket_countersWithProyecto_idOnly = await prisma.ticket_counters.findMany({ select: { proyecto_id: true } })
     *
     */
    findMany<T extends ticket_countersFindManyArgs>(args?: Prisma.SelectSubset<T, ticket_countersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ticket_counters.
     * @param {ticket_countersCreateArgs} args - Arguments to create a Ticket_counters.
     * @example
     * // Create one Ticket_counters
     * const Ticket_counters = await prisma.ticket_counters.create({
     *   data: {
     *     // ... data to create a Ticket_counters
     *   }
     * })
     *
     */
    create<T extends ticket_countersCreateArgs>(args: Prisma.SelectSubset<T, ticket_countersCreateArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ticket_counters.
     * @param {ticket_countersCreateManyArgs} args - Arguments to create many Ticket_counters.
     * @example
     * // Create many Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ticket_countersCreateManyArgs>(args?: Prisma.SelectSubset<T, ticket_countersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ticket_counters and returns the data saved in the database.
     * @param {ticket_countersCreateManyAndReturnArgs} args - Arguments to create many Ticket_counters.
     * @example
     * // Create many Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ticket_counters and only return the `proyecto_id`
     * const ticket_countersWithProyecto_idOnly = await prisma.ticket_counters.createManyAndReturn({
     *   select: { proyecto_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ticket_countersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ticket_countersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ticket_counters.
     * @param {ticket_countersDeleteArgs} args - Arguments to delete one Ticket_counters.
     * @example
     * // Delete one Ticket_counters
     * const Ticket_counters = await prisma.ticket_counters.delete({
     *   where: {
     *     // ... filter to delete one Ticket_counters
     *   }
     * })
     *
     */
    delete<T extends ticket_countersDeleteArgs>(args: Prisma.SelectSubset<T, ticket_countersDeleteArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ticket_counters.
     * @param {ticket_countersUpdateArgs} args - Arguments to update one Ticket_counters.
     * @example
     * // Update one Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ticket_countersUpdateArgs>(args: Prisma.SelectSubset<T, ticket_countersUpdateArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ticket_counters.
     * @param {ticket_countersDeleteManyArgs} args - Arguments to filter Ticket_counters to delete.
     * @example
     * // Delete a few Ticket_counters
     * const { count } = await prisma.ticket_counters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ticket_countersDeleteManyArgs>(args?: Prisma.SelectSubset<T, ticket_countersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ticket_counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_countersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ticket_countersUpdateManyArgs>(args: Prisma.SelectSubset<T, ticket_countersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ticket_counters and returns the data updated in the database.
     * @param {ticket_countersUpdateManyAndReturnArgs} args - Arguments to update many Ticket_counters.
     * @example
     * // Update many Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ticket_counters and only return the `proyecto_id`
     * const ticket_countersWithProyecto_idOnly = await prisma.ticket_counters.updateManyAndReturn({
     *   select: { proyecto_id: true },
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
    updateManyAndReturn<T extends ticket_countersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ticket_countersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ticket_counters.
     * @param {ticket_countersUpsertArgs} args - Arguments to update or create a Ticket_counters.
     * @example
     * // Update or create a Ticket_counters
     * const ticket_counters = await prisma.ticket_counters.upsert({
     *   create: {
     *     // ... data to create a Ticket_counters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket_counters we want to update
     *   }
     * })
     */
    upsert<T extends ticket_countersUpsertArgs>(args: Prisma.SelectSubset<T, ticket_countersUpsertArgs<ExtArgs>>): Prisma.Prisma__ticket_countersClient<runtime.Types.Result.GetResult<Prisma.$ticket_countersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ticket_counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_countersCountArgs} args - Arguments to filter Ticket_counters to count.
     * @example
     * // Count the number of Ticket_counters
     * const count = await prisma.ticket_counters.count({
     *   where: {
     *     // ... the filter for the Ticket_counters we want to count
     *   }
     * })
    **/
    count<T extends ticket_countersCountArgs>(args?: Prisma.Subset<T, ticket_countersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ticket_countersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ticket_counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ticket_countersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ticket_countersAggregateArgs>(args: Prisma.Subset<T, Ticket_countersAggregateArgs>): Prisma.PrismaPromise<GetTicket_countersAggregateType<T>>;
    /**
     * Group by Ticket_counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticket_countersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ticket_countersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ticket_countersGroupByArgs['orderBy'];
    } : {
        orderBy?: ticket_countersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ticket_countersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_countersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ticket_counters model
     */
    readonly fields: ticket_countersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ticket_counters.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ticket_countersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the ticket_counters model
 */
export interface ticket_countersFieldRefs {
    readonly proyecto_id: Prisma.FieldRef<"ticket_counters", 'String'>;
    readonly fecha: Prisma.FieldRef<"ticket_counters", 'DateTime'>;
    readonly last_number: Prisma.FieldRef<"ticket_counters", 'Int'>;
}
/**
 * ticket_counters findUnique
 */
export type ticket_countersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * Filter, which ticket_counters to fetch.
     */
    where: Prisma.ticket_countersWhereUniqueInput;
};
/**
 * ticket_counters findUniqueOrThrow
 */
export type ticket_countersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * Filter, which ticket_counters to fetch.
     */
    where: Prisma.ticket_countersWhereUniqueInput;
};
/**
 * ticket_counters findFirst
 */
export type ticket_countersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * Filter, which ticket_counters to fetch.
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ticket_counters to fetch.
     */
    orderBy?: Prisma.ticket_countersOrderByWithRelationInput | Prisma.ticket_countersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ticket_counters.
     */
    cursor?: Prisma.ticket_countersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ticket_counters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ticket_counters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ticket_counters.
     */
    distinct?: Prisma.Ticket_countersScalarFieldEnum | Prisma.Ticket_countersScalarFieldEnum[];
};
/**
 * ticket_counters findFirstOrThrow
 */
export type ticket_countersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * Filter, which ticket_counters to fetch.
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ticket_counters to fetch.
     */
    orderBy?: Prisma.ticket_countersOrderByWithRelationInput | Prisma.ticket_countersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ticket_counters.
     */
    cursor?: Prisma.ticket_countersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ticket_counters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ticket_counters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ticket_counters.
     */
    distinct?: Prisma.Ticket_countersScalarFieldEnum | Prisma.Ticket_countersScalarFieldEnum[];
};
/**
 * ticket_counters findMany
 */
export type ticket_countersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * Filter, which ticket_counters to fetch.
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ticket_counters to fetch.
     */
    orderBy?: Prisma.ticket_countersOrderByWithRelationInput | Prisma.ticket_countersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ticket_counters.
     */
    cursor?: Prisma.ticket_countersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ticket_counters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ticket_counters.
     */
    skip?: number;
    distinct?: Prisma.Ticket_countersScalarFieldEnum | Prisma.Ticket_countersScalarFieldEnum[];
};
/**
 * ticket_counters create
 */
export type ticket_countersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * The data needed to create a ticket_counters.
     */
    data: Prisma.XOR<Prisma.ticket_countersCreateInput, Prisma.ticket_countersUncheckedCreateInput>;
};
/**
 * ticket_counters createMany
 */
export type ticket_countersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ticket_counters.
     */
    data: Prisma.ticket_countersCreateManyInput | Prisma.ticket_countersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ticket_counters createManyAndReturn
 */
export type ticket_countersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * The data used to create many ticket_counters.
     */
    data: Prisma.ticket_countersCreateManyInput | Prisma.ticket_countersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ticket_counters update
 */
export type ticket_countersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * The data needed to update a ticket_counters.
     */
    data: Prisma.XOR<Prisma.ticket_countersUpdateInput, Prisma.ticket_countersUncheckedUpdateInput>;
    /**
     * Choose, which ticket_counters to update.
     */
    where: Prisma.ticket_countersWhereUniqueInput;
};
/**
 * ticket_counters updateMany
 */
export type ticket_countersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ticket_counters.
     */
    data: Prisma.XOR<Prisma.ticket_countersUpdateManyMutationInput, Prisma.ticket_countersUncheckedUpdateManyInput>;
    /**
     * Filter which ticket_counters to update
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * Limit how many ticket_counters to update.
     */
    limit?: number;
};
/**
 * ticket_counters updateManyAndReturn
 */
export type ticket_countersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * The data used to update ticket_counters.
     */
    data: Prisma.XOR<Prisma.ticket_countersUpdateManyMutationInput, Prisma.ticket_countersUncheckedUpdateManyInput>;
    /**
     * Filter which ticket_counters to update
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * Limit how many ticket_counters to update.
     */
    limit?: number;
};
/**
 * ticket_counters upsert
 */
export type ticket_countersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * The filter to search for the ticket_counters to update in case it exists.
     */
    where: Prisma.ticket_countersWhereUniqueInput;
    /**
     * In case the ticket_counters found by the `where` argument doesn't exist, create a new ticket_counters with this data.
     */
    create: Prisma.XOR<Prisma.ticket_countersCreateInput, Prisma.ticket_countersUncheckedCreateInput>;
    /**
     * In case the ticket_counters was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ticket_countersUpdateInput, Prisma.ticket_countersUncheckedUpdateInput>;
};
/**
 * ticket_counters delete
 */
export type ticket_countersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
    /**
     * Filter which ticket_counters to delete.
     */
    where: Prisma.ticket_countersWhereUniqueInput;
};
/**
 * ticket_counters deleteMany
 */
export type ticket_countersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ticket_counters to delete
     */
    where?: Prisma.ticket_countersWhereInput;
    /**
     * Limit how many ticket_counters to delete.
     */
    limit?: number;
};
/**
 * ticket_counters without action
 */
export type ticket_countersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket_counters
     */
    select?: Prisma.ticket_countersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ticket_counters
     */
    omit?: Prisma.ticket_countersOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ticket_counters.d.ts.map