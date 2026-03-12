import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_log_entries
   * const audit_log_entries = await prisma.audit_log_entries.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_log_entries
 * const audit_log_entries = await prisma.audit_log_entries.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.audit_log_entries`: Exposes CRUD operations for the **audit_log_entries** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Audit_log_entries
  * const audit_log_entries = await prisma.audit_log_entries.findMany()
  * ```
  */
    get audit_log_entries(): Prisma.audit_log_entriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.flow_state`: Exposes CRUD operations for the **flow_state** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Flow_states
      * const flow_states = await prisma.flow_state.findMany()
      * ```
      */
    get flow_state(): Prisma.flow_stateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.identities`: Exposes CRUD operations for the **identities** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Identities
      * const identities = await prisma.identities.findMany()
      * ```
      */
    get identities(): Prisma.identitiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.instances`: Exposes CRUD operations for the **instances** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Instances
      * const instances = await prisma.instances.findMany()
      * ```
      */
    get instances(): Prisma.instancesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mfa_amr_claims`: Exposes CRUD operations for the **mfa_amr_claims** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Mfa_amr_claims
      * const mfa_amr_claims = await prisma.mfa_amr_claims.findMany()
      * ```
      */
    get mfa_amr_claims(): Prisma.mfa_amr_claimsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mfa_challenges`: Exposes CRUD operations for the **mfa_challenges** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Mfa_challenges
      * const mfa_challenges = await prisma.mfa_challenges.findMany()
      * ```
      */
    get mfa_challenges(): Prisma.mfa_challengesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mfa_factors`: Exposes CRUD operations for the **mfa_factors** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Mfa_factors
      * const mfa_factors = await prisma.mfa_factors.findMany()
      * ```
      */
    get mfa_factors(): Prisma.mfa_factorsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.oauth_authorizations`: Exposes CRUD operations for the **oauth_authorizations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Oauth_authorizations
      * const oauth_authorizations = await prisma.oauth_authorizations.findMany()
      * ```
      */
    get oauth_authorizations(): Prisma.oauth_authorizationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.oauth_client_states`: Exposes CRUD operations for the **oauth_client_states** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Oauth_client_states
      * const oauth_client_states = await prisma.oauth_client_states.findMany()
      * ```
      */
    get oauth_client_states(): Prisma.oauth_client_statesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.oauth_clients`: Exposes CRUD operations for the **oauth_clients** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Oauth_clients
      * const oauth_clients = await prisma.oauth_clients.findMany()
      * ```
      */
    get oauth_clients(): Prisma.oauth_clientsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.oauth_consents`: Exposes CRUD operations for the **oauth_consents** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Oauth_consents
      * const oauth_consents = await prisma.oauth_consents.findMany()
      * ```
      */
    get oauth_consents(): Prisma.oauth_consentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.one_time_tokens`: Exposes CRUD operations for the **one_time_tokens** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more One_time_tokens
      * const one_time_tokens = await prisma.one_time_tokens.findMany()
      * ```
      */
    get one_time_tokens(): Prisma.one_time_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.refresh_tokens`: Exposes CRUD operations for the **refresh_tokens** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Refresh_tokens
      * const refresh_tokens = await prisma.refresh_tokens.findMany()
      * ```
      */
    get refresh_tokens(): Prisma.refresh_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.saml_providers`: Exposes CRUD operations for the **saml_providers** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Saml_providers
      * const saml_providers = await prisma.saml_providers.findMany()
      * ```
      */
    get saml_providers(): Prisma.saml_providersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.saml_relay_states`: Exposes CRUD operations for the **saml_relay_states** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Saml_relay_states
      * const saml_relay_states = await prisma.saml_relay_states.findMany()
      * ```
      */
    get saml_relay_states(): Prisma.saml_relay_statesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.schema_migrations`: Exposes CRUD operations for the **schema_migrations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Schema_migrations
      * const schema_migrations = await prisma.schema_migrations.findMany()
      * ```
      */
    get schema_migrations(): Prisma.schema_migrationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.sessions.findMany()
      * ```
      */
    get sessions(): Prisma.sessionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.sso_domains`: Exposes CRUD operations for the **sso_domains** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sso_domains
      * const sso_domains = await prisma.sso_domains.findMany()
      * ```
      */
    get sso_domains(): Prisma.sso_domainsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.sso_providers`: Exposes CRUD operations for the **sso_providers** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sso_providers
      * const sso_providers = await prisma.sso_providers.findMany()
      * ```
      */
    get sso_providers(): Prisma.sso_providersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.users`: Exposes CRUD operations for the **users** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.users.findMany()
      * ```
      */
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.calendario_tecnico`: Exposes CRUD operations for the **calendario_tecnico** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Calendario_tecnicos
      * const calendario_tecnicos = await prisma.calendario_tecnico.findMany()
      * ```
      */
    get calendario_tecnico(): Prisma.calendario_tecnicoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.componentes_equipos`: Exposes CRUD operations for the **componentes_equipos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Componentes_equipos
      * const componentes_equipos = await prisma.componentes_equipos.findMany()
      * ```
      */
    get componentes_equipos(): Prisma.componentes_equiposDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contactos_proyectos`: Exposes CRUD operations for the **contactos_proyectos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Contactos_proyectos
      * const contactos_proyectos = await prisma.contactos_proyectos.findMany()
      * ```
      */
    get contactos_proyectos(): Prisma.contactos_proyectosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.equipos`: Exposes CRUD operations for the **equipos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Equipos
      * const equipos = await prisma.equipos.findMany()
      * ```
      */
    get equipos(): Prisma.equiposDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Profiles
      * const profiles = await prisma.profiles.findMany()
      * ```
      */
    get profiles(): Prisma.profilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.proyectos`: Exposes CRUD operations for the **proyectos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Proyectos
      * const proyectos = await prisma.proyectos.findMany()
      * ```
      */
    get proyectos(): Prisma.proyectosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reportes`: Exposes CRUD operations for the **reportes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reportes
      * const reportes = await prisma.reportes.findMany()
      * ```
      */
    get reportes(): Prisma.reportesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reportes_mensuales`: Exposes CRUD operations for the **reportes_mensuales** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reportes_mensuales
      * const reportes_mensuales = await prisma.reportes_mensuales.findMany()
      * ```
      */
    get reportes_mensuales(): Prisma.reportes_mensualesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reportes_mensuales_items`: Exposes CRUD operations for the **reportes_mensuales_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reportes_mensuales_items
      * const reportes_mensuales_items = await prisma.reportes_mensuales_items.findMany()
      * ```
      */
    get reportes_mensuales_items(): Prisma.reportes_mensuales_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticket_counters`: Exposes CRUD operations for the **ticket_counters** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ticket_counters
      * const ticket_counters = await prisma.ticket_counters.findMany()
      * ```
      */
    get ticket_counters(): Prisma.ticket_countersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map