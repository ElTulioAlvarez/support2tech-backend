import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly audit_log_entries: "audit_log_entries";
    readonly flow_state: "flow_state";
    readonly identities: "identities";
    readonly instances: "instances";
    readonly mfa_amr_claims: "mfa_amr_claims";
    readonly mfa_challenges: "mfa_challenges";
    readonly mfa_factors: "mfa_factors";
    readonly oauth_authorizations: "oauth_authorizations";
    readonly oauth_client_states: "oauth_client_states";
    readonly oauth_clients: "oauth_clients";
    readonly oauth_consents: "oauth_consents";
    readonly one_time_tokens: "one_time_tokens";
    readonly refresh_tokens: "refresh_tokens";
    readonly saml_providers: "saml_providers";
    readonly saml_relay_states: "saml_relay_states";
    readonly schema_migrations: "schema_migrations";
    readonly sessions: "sessions";
    readonly sso_domains: "sso_domains";
    readonly sso_providers: "sso_providers";
    readonly users: "users";
    readonly calendario_tecnico: "calendario_tecnico";
    readonly componentes_equipos: "componentes_equipos";
    readonly contactos_proyectos: "contactos_proyectos";
    readonly equipos: "equipos";
    readonly profiles: "profiles";
    readonly proyectos: "proyectos";
    readonly reportes: "reportes";
    readonly reportes_mensuales: "reportes_mensuales";
    readonly reportes_mensuales_items: "reportes_mensuales_items";
    readonly ticket_counters: "ticket_counters";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Audit_log_entriesScalarFieldEnum: {
    readonly instance_id: "instance_id";
    readonly id: "id";
    readonly payload: "payload";
    readonly created_at: "created_at";
    readonly ip_address: "ip_address";
};
export type Audit_log_entriesScalarFieldEnum = (typeof Audit_log_entriesScalarFieldEnum)[keyof typeof Audit_log_entriesScalarFieldEnum];
export declare const Flow_stateScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly auth_code: "auth_code";
    readonly code_challenge_method: "code_challenge_method";
    readonly code_challenge: "code_challenge";
    readonly provider_type: "provider_type";
    readonly provider_access_token: "provider_access_token";
    readonly provider_refresh_token: "provider_refresh_token";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly authentication_method: "authentication_method";
    readonly auth_code_issued_at: "auth_code_issued_at";
    readonly invite_token: "invite_token";
    readonly referrer: "referrer";
    readonly oauth_client_state_id: "oauth_client_state_id";
    readonly linking_target_id: "linking_target_id";
    readonly email_optional: "email_optional";
};
export type Flow_stateScalarFieldEnum = (typeof Flow_stateScalarFieldEnum)[keyof typeof Flow_stateScalarFieldEnum];
export declare const IdentitiesScalarFieldEnum: {
    readonly provider_id: "provider_id";
    readonly user_id: "user_id";
    readonly identity_data: "identity_data";
    readonly provider: "provider";
    readonly last_sign_in_at: "last_sign_in_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly email: "email";
    readonly id: "id";
};
export type IdentitiesScalarFieldEnum = (typeof IdentitiesScalarFieldEnum)[keyof typeof IdentitiesScalarFieldEnum];
export declare const InstancesScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly raw_base_config: "raw_base_config";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type InstancesScalarFieldEnum = (typeof InstancesScalarFieldEnum)[keyof typeof InstancesScalarFieldEnum];
export declare const Mfa_amr_claimsScalarFieldEnum: {
    readonly session_id: "session_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly authentication_method: "authentication_method";
    readonly id: "id";
};
export type Mfa_amr_claimsScalarFieldEnum = (typeof Mfa_amr_claimsScalarFieldEnum)[keyof typeof Mfa_amr_claimsScalarFieldEnum];
export declare const Mfa_challengesScalarFieldEnum: {
    readonly id: "id";
    readonly factor_id: "factor_id";
    readonly created_at: "created_at";
    readonly verified_at: "verified_at";
    readonly ip_address: "ip_address";
    readonly otp_code: "otp_code";
    readonly web_authn_session_data: "web_authn_session_data";
};
export type Mfa_challengesScalarFieldEnum = (typeof Mfa_challengesScalarFieldEnum)[keyof typeof Mfa_challengesScalarFieldEnum];
export declare const Mfa_factorsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly friendly_name: "friendly_name";
    readonly factor_type: "factor_type";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly secret: "secret";
    readonly phone: "phone";
    readonly last_challenged_at: "last_challenged_at";
    readonly web_authn_credential: "web_authn_credential";
    readonly web_authn_aaguid: "web_authn_aaguid";
    readonly last_webauthn_challenge_data: "last_webauthn_challenge_data";
};
export type Mfa_factorsScalarFieldEnum = (typeof Mfa_factorsScalarFieldEnum)[keyof typeof Mfa_factorsScalarFieldEnum];
export declare const Oauth_authorizationsScalarFieldEnum: {
    readonly id: "id";
    readonly authorization_id: "authorization_id";
    readonly client_id: "client_id";
    readonly user_id: "user_id";
    readonly redirect_uri: "redirect_uri";
    readonly scope: "scope";
    readonly state: "state";
    readonly resource: "resource";
    readonly code_challenge: "code_challenge";
    readonly code_challenge_method: "code_challenge_method";
    readonly response_type: "response_type";
    readonly status: "status";
    readonly authorization_code: "authorization_code";
    readonly created_at: "created_at";
    readonly expires_at: "expires_at";
    readonly approved_at: "approved_at";
    readonly nonce: "nonce";
};
export type Oauth_authorizationsScalarFieldEnum = (typeof Oauth_authorizationsScalarFieldEnum)[keyof typeof Oauth_authorizationsScalarFieldEnum];
export declare const Oauth_client_statesScalarFieldEnum: {
    readonly id: "id";
    readonly provider_type: "provider_type";
    readonly code_verifier: "code_verifier";
    readonly created_at: "created_at";
};
export type Oauth_client_statesScalarFieldEnum = (typeof Oauth_client_statesScalarFieldEnum)[keyof typeof Oauth_client_statesScalarFieldEnum];
export declare const Oauth_clientsScalarFieldEnum: {
    readonly id: "id";
    readonly client_secret_hash: "client_secret_hash";
    readonly registration_type: "registration_type";
    readonly redirect_uris: "redirect_uris";
    readonly grant_types: "grant_types";
    readonly client_name: "client_name";
    readonly client_uri: "client_uri";
    readonly logo_uri: "logo_uri";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
    readonly client_type: "client_type";
    readonly token_endpoint_auth_method: "token_endpoint_auth_method";
};
export type Oauth_clientsScalarFieldEnum = (typeof Oauth_clientsScalarFieldEnum)[keyof typeof Oauth_clientsScalarFieldEnum];
export declare const Oauth_consentsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly client_id: "client_id";
    readonly scopes: "scopes";
    readonly granted_at: "granted_at";
    readonly revoked_at: "revoked_at";
};
export type Oauth_consentsScalarFieldEnum = (typeof Oauth_consentsScalarFieldEnum)[keyof typeof Oauth_consentsScalarFieldEnum];
export declare const One_time_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly token_type: "token_type";
    readonly token_hash: "token_hash";
    readonly relates_to: "relates_to";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type One_time_tokensScalarFieldEnum = (typeof One_time_tokensScalarFieldEnum)[keyof typeof One_time_tokensScalarFieldEnum];
export declare const Refresh_tokensScalarFieldEnum: {
    readonly instance_id: "instance_id";
    readonly id: "id";
    readonly token: "token";
    readonly user_id: "user_id";
    readonly revoked: "revoked";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly parent: "parent";
    readonly session_id: "session_id";
};
export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum];
export declare const Saml_providersScalarFieldEnum: {
    readonly id: "id";
    readonly sso_provider_id: "sso_provider_id";
    readonly entity_id: "entity_id";
    readonly metadata_xml: "metadata_xml";
    readonly metadata_url: "metadata_url";
    readonly attribute_mapping: "attribute_mapping";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly name_id_format: "name_id_format";
};
export type Saml_providersScalarFieldEnum = (typeof Saml_providersScalarFieldEnum)[keyof typeof Saml_providersScalarFieldEnum];
export declare const Saml_relay_statesScalarFieldEnum: {
    readonly id: "id";
    readonly sso_provider_id: "sso_provider_id";
    readonly request_id: "request_id";
    readonly for_email: "for_email";
    readonly redirect_to: "redirect_to";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly flow_state_id: "flow_state_id";
};
export type Saml_relay_statesScalarFieldEnum = (typeof Saml_relay_statesScalarFieldEnum)[keyof typeof Saml_relay_statesScalarFieldEnum];
export declare const Schema_migrationsScalarFieldEnum: {
    readonly version: "version";
};
export type Schema_migrationsScalarFieldEnum = (typeof Schema_migrationsScalarFieldEnum)[keyof typeof Schema_migrationsScalarFieldEnum];
export declare const SessionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly factor_id: "factor_id";
    readonly aal: "aal";
    readonly not_after: "not_after";
    readonly refreshed_at: "refreshed_at";
    readonly user_agent: "user_agent";
    readonly ip: "ip";
    readonly tag: "tag";
    readonly oauth_client_id: "oauth_client_id";
    readonly refresh_token_hmac_key: "refresh_token_hmac_key";
    readonly refresh_token_counter: "refresh_token_counter";
    readonly scopes: "scopes";
};
export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum];
export declare const Sso_domainsScalarFieldEnum: {
    readonly id: "id";
    readonly sso_provider_id: "sso_provider_id";
    readonly domain: "domain";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Sso_domainsScalarFieldEnum = (typeof Sso_domainsScalarFieldEnum)[keyof typeof Sso_domainsScalarFieldEnum];
export declare const Sso_providersScalarFieldEnum: {
    readonly id: "id";
    readonly resource_id: "resource_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly disabled: "disabled";
};
export type Sso_providersScalarFieldEnum = (typeof Sso_providersScalarFieldEnum)[keyof typeof Sso_providersScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly instance_id: "instance_id";
    readonly id: "id";
    readonly aud: "aud";
    readonly role: "role";
    readonly email: "email";
    readonly encrypted_password: "encrypted_password";
    readonly email_confirmed_at: "email_confirmed_at";
    readonly invited_at: "invited_at";
    readonly confirmation_token: "confirmation_token";
    readonly confirmation_sent_at: "confirmation_sent_at";
    readonly recovery_token: "recovery_token";
    readonly recovery_sent_at: "recovery_sent_at";
    readonly email_change_token_new: "email_change_token_new";
    readonly email_change: "email_change";
    readonly email_change_sent_at: "email_change_sent_at";
    readonly last_sign_in_at: "last_sign_in_at";
    readonly raw_app_meta_data: "raw_app_meta_data";
    readonly raw_user_meta_data: "raw_user_meta_data";
    readonly is_super_admin: "is_super_admin";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly phone: "phone";
    readonly phone_confirmed_at: "phone_confirmed_at";
    readonly phone_change: "phone_change";
    readonly phone_change_token: "phone_change_token";
    readonly phone_change_sent_at: "phone_change_sent_at";
    readonly confirmed_at: "confirmed_at";
    readonly email_change_token_current: "email_change_token_current";
    readonly email_change_confirm_status: "email_change_confirm_status";
    readonly banned_until: "banned_until";
    readonly reauthentication_token: "reauthentication_token";
    readonly reauthentication_sent_at: "reauthentication_sent_at";
    readonly is_sso_user: "is_sso_user";
    readonly deleted_at: "deleted_at";
    readonly is_anonymous: "is_anonymous";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Calendario_tecnicoScalarFieldEnum: {
    readonly id: "id";
    readonly tecnico_id: "tecnico_id";
    readonly reporte_id: "reporte_id";
    readonly titulo: "titulo";
    readonly descripcion: "descripcion";
    readonly fecha_programada: "fecha_programada";
    readonly hora_programada: "hora_programada";
    readonly estatus: "estatus";
    readonly motivo_aplazo: "motivo_aplazo";
    readonly fecha_modificada: "fecha_modificada";
    readonly creado_por: "creado_por";
    readonly created_at: "created_at";
    readonly hora_inicio: "hora_inicio";
    readonly hora_fin: "hora_fin";
    readonly orden: "orden";
    readonly color: "color";
    readonly ubicacion: "ubicacion";
    readonly tipo: "tipo";
    readonly prioridad: "prioridad";
    readonly proyecto_id: "proyecto_id";
    readonly numero_ticket_seq: "numero_ticket_seq";
    readonly numero_ticket: "numero_ticket";
};
export type Calendario_tecnicoScalarFieldEnum = (typeof Calendario_tecnicoScalarFieldEnum)[keyof typeof Calendario_tecnicoScalarFieldEnum];
export declare const Componentes_equiposScalarFieldEnum: {
    readonly id: "id";
    readonly equipo_id: "equipo_id";
    readonly tipo: "tipo";
    readonly nombre: "nombre";
    readonly modelo: "modelo";
    readonly ubicacion: "ubicacion";
    readonly numero_serie: "numero_serie";
    readonly estado: "estado";
    readonly notas: "notas";
    readonly creado_por: "creado_por";
    readonly creado_fecha: "creado_fecha";
    readonly modificado_por: "modificado_por";
    readonly modificado_fecha: "modificado_fecha";
};
export type Componentes_equiposScalarFieldEnum = (typeof Componentes_equiposScalarFieldEnum)[keyof typeof Componentes_equiposScalarFieldEnum];
export declare const Contactos_proyectosScalarFieldEnum: {
    readonly id: "id";
    readonly proyecto_id: "proyecto_id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly telefono: "telefono";
    readonly correo: "correo";
    readonly creado_fecha: "creado_fecha";
    readonly modificado_fecha: "modificado_fecha";
};
export type Contactos_proyectosScalarFieldEnum = (typeof Contactos_proyectosScalarFieldEnum)[keyof typeof Contactos_proyectosScalarFieldEnum];
export declare const EquiposScalarFieldEnum: {
    readonly id: "id";
    readonly proyecto_id: "proyecto_id";
    readonly tipo: "tipo";
    readonly nombre: "nombre";
    readonly modelo: "modelo";
    readonly ubicacion: "ubicacion";
    readonly numero_serie: "numero_serie";
    readonly ip: "ip";
    readonly estado: "estado";
    readonly notas: "notas";
    readonly creado_por: "creado_por";
    readonly creado_fecha: "creado_fecha";
    readonly modificado_por: "modificado_por";
    readonly modificado_fecha: "modificado_fecha";
};
export type EquiposScalarFieldEnum = (typeof EquiposScalarFieldEnum)[keyof typeof EquiposScalarFieldEnum];
export declare const ProfilesScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly rol: "rol";
    readonly telefono: "telefono";
    readonly created_at: "created_at";
    readonly estado: "estado";
};
export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum];
export declare const ProyectosScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly alias: "alias";
    readonly tipo: "tipo";
    readonly cliente: "cliente";
    readonly ciudad: "ciudad";
    readonly estado: "estado";
    readonly direccion: "direccion";
    readonly codigo_postal: "codigo_postal";
    readonly fecha_operacion: "fecha_operacion";
    readonly notas: "notas";
    readonly creado_por: "creado_por";
    readonly creado_fecha: "creado_fecha";
    readonly modificado_por: "modificado_por";
    readonly modificado_fecha: "modificado_fecha";
    readonly poliza_adquirida: "poliza_adquirida";
    readonly poliza_vence: "poliza_vence";
};
export type ProyectosScalarFieldEnum = (typeof ProyectosScalarFieldEnum)[keyof typeof ProyectosScalarFieldEnum];
export declare const ReportesScalarFieldEnum: {
    readonly id: "id";
    readonly cliente: "cliente";
    readonly fecha: "fecha";
    readonly sucursal: "sucursal";
    readonly numero_ticket: "numero_ticket";
    readonly estado_ticket: "estado_ticket";
    readonly tipo_mantenimiento: "tipo_mantenimiento";
    readonly tipo_servicio: "tipo_servicio";
    readonly hora_inicio: "hora_inicio";
    readonly area: "area";
    readonly tecnico: "tecnico";
    readonly equipo_tipo: "equipo_tipo";
    readonly componente: "componente";
    readonly material_refaccion: "material_refaccion";
    readonly descripcion_equipo: "descripcion_equipo";
    readonly numero_serie_equipo: "numero_serie_equipo";
    readonly numero_serie_componente: "numero_serie_componente";
    readonly numero_pedido: "numero_pedido";
    readonly descripcion: "descripcion";
    readonly pruebas_realizadas: "pruebas_realizadas";
    readonly diagnostico: "diagnostico";
    readonly notas: "notas";
    readonly requisito_refacciones: "requisito_refacciones";
    readonly firma_conformidad_refacciones: "firma_conformidad_refacciones";
    readonly comentarios: "comentarios";
    readonly gerente_proyecto: "gerente_proyecto";
    readonly firma_tecnico_nombre: "firma_tecnico_nombre";
    readonly firma_tecnico_dibujo: "firma_tecnico_dibujo";
    readonly firma_gerente_nombre: "firma_gerente_nombre";
    readonly firma_gerente_dibujo: "firma_gerente_dibujo";
    readonly created_at: "created_at";
    readonly creado_por: "creado_por";
    readonly actividad_calendario_id: "actividad_calendario_id";
    readonly draft_id: "draft_id";
    readonly before_count: "before_count";
    readonly after_count: "after_count";
    readonly has_video: "has_video";
    readonly pdf_path: "pdf_path";
    readonly pdf_generated_at: "pdf_generated_at";
    readonly proyecto_id: "proyecto_id";
};
export type ReportesScalarFieldEnum = (typeof ReportesScalarFieldEnum)[keyof typeof ReportesScalarFieldEnum];
export declare const Reportes_mensualesScalarFieldEnum: {
    readonly id: "id";
    readonly proyecto_id: "proyecto_id";
    readonly year: "year";
    readonly month: "month";
    readonly titulo: "titulo";
    readonly estado: "estado";
    readonly generado_por: "generado_por";
    readonly generado_at: "generado_at";
    readonly pdf_path: "pdf_path";
    readonly pdf_generated_at: "pdf_generated_at";
    readonly total_servicios: "total_servicios";
    readonly total_correctivos: "total_correctivos";
    readonly total_preventivos: "total_preventivos";
    readonly total_pendientes: "total_pendientes";
    readonly total_completados: "total_completados";
    readonly total_con_video: "total_con_video";
};
export type Reportes_mensualesScalarFieldEnum = (typeof Reportes_mensualesScalarFieldEnum)[keyof typeof Reportes_mensualesScalarFieldEnum];
export declare const Reportes_mensuales_itemsScalarFieldEnum: {
    readonly reporte_mensual_id: "reporte_mensual_id";
    readonly reporte_id: "reporte_id";
    readonly actividad_calendario_id: "actividad_calendario_id";
    readonly fecha: "fecha";
    readonly numero_ticket: "numero_ticket";
    readonly estado_ticket: "estado_ticket";
    readonly tipo_mantenimiento: "tipo_mantenimiento";
    readonly tipo_servicio: "tipo_servicio";
    readonly tecnico: "tecnico";
    readonly area: "area";
    readonly pdf_path: "pdf_path";
    readonly has_video: "has_video";
};
export type Reportes_mensuales_itemsScalarFieldEnum = (typeof Reportes_mensuales_itemsScalarFieldEnum)[keyof typeof Reportes_mensuales_itemsScalarFieldEnum];
export declare const Ticket_countersScalarFieldEnum: {
    readonly proyecto_id: "proyecto_id";
    readonly fecha: "fecha";
    readonly last_number: "last_number";
};
export type Ticket_countersScalarFieldEnum = (typeof Ticket_countersScalarFieldEnum)[keyof typeof Ticket_countersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map