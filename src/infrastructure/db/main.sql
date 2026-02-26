create table public.calendario_tecnico (
  id uuid not null default gen_random_uuid (),
  tecnico_id uuid not null,
  reporte_id uuid null,
  titulo text not null,
  descripcion text null,
  fecha_programada date not null,
  hora_programada time without time zone null,
  estatus text not null default 'pendiente'::text,
  motivo_aplazo text null,
  fecha_modificada timestamp without time zone null,
  creado_por uuid not null,
  created_at timestamp without time zone not null default now(),
  hora_inicio time without time zone null,
  hora_fin time without time zone null,
  orden smallint null default 0,
  color text null,
  ubicacion text null,
  tipo text null,
  prioridad smallint null default 2,
  proyecto_id uuid null,
  numero_ticket_seq bigint not null default nextval('calendario_tecnico_ticket_seq'::regclass),
  numero_ticket text not null,
  constraint calendario_tecnico_pkey primary key (id),
  constraint calendario_tecnico_creado_por_fkey foreign KEY (creado_por) references profiles (id),
  constraint calendario_tecnico_proyecto_id_fkey foreign KEY (proyecto_id) references proyectos (id),
  constraint calendario_tecnico_reporte_id_fkey foreign KEY (reporte_id) references reportes (id) on delete set null,
  constraint calendario_tecnico_tecnico_id_fkey foreign KEY (tecnico_id) references profiles (id) on delete CASCADE,
  constraint calendario_tecnico_estatus_check check (
    (
      estatus = any (
        array[
          'pendiente'::text,
          'completado'::text,
          'aplazado'::text,
          'cancelado'::text
        ]
      )
    )
  ),
  constraint calendario_estatus_check check (
    (
      estatus = any (
        array[
          'pendiente'::text,
          'en_progreso'::text,
          'completado'::text,
          'aplazado'::text,
          'cancelado'::text
        ]
      )
    )
  )
) TABLESPACE pg_default;

create unique INDEX IF not exists calendario_tecnico_numero_ticket_uq on public.calendario_tecnico using btree (numero_ticket_seq) TABLESPACE pg_default;

create trigger trg_calendario_ticket BEFORE INSERT on calendario_tecnico for EACH row
execute FUNCTION fn_calendario_ticket ();

create table public.componentes_equipos (
  id uuid not null default gen_random_uuid (),
  equipo_id uuid not null,
  tipo text not null,
  nombre text not null,
  modelo text null,
  ubicacion text null,
  numero_serie text null,
  estado text null,
  notas text null,
  creado_por uuid null,
  creado_fecha timestamp with time zone not null default now(),
  modificado_por uuid null,
  modificado_fecha timestamp with time zone not null default now(),
  constraint componentes_equipos_pkey primary key (id),
  constraint componentes_equipos_equipo_id_fkey foreign KEY (equipo_id) references equipos (id) on delete CASCADE
) TABLESPACE pg_default;

create index IF not exists componentes_equipo_idx on public.componentes_equipos using btree (equipo_id) TABLESPACE pg_default;

create index IF not exists componentes_tipo_idx on public.componentes_equipos using btree (tipo) TABLESPACE pg_default;

create index IF not exists componentes_estado_idx on public.componentes_equipos using btree (estado) TABLESPACE pg_default;

create table public.contactos_proyectos (
  id uuid not null default gen_random_uuid (),
  proyecto_id uuid not null,
  nombre text not null,
  cargo text null,
  telefono text null,
  correo text null,
  creado_fecha timestamp with time zone not null default now(),
  modificado_fecha timestamp with time zone not null default now(),
  constraint contactos_proyectos_pkey primary key (id),
  constraint contactos_proyectos_proyecto_id_fkey foreign KEY (proyecto_id) references proyectos (id) on update CASCADE on delete CASCADE,
  constraint contactos_proyectos_correo_chk check (
    (
      (correo is null)
      or (
        correo ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'::text
      )
    )
  )
) TABLESPACE pg_default;

create index IF not exists idx_contactos_proyectos_proyecto_id on public.contactos_proyectos using btree (proyecto_id) TABLESPACE pg_default;

create index IF not exists idx_contactos_proyectos_nombre on public.contactos_proyectos using btree (nombre) TABLESPACE pg_default;

create unique INDEX IF not exists uq_contacto_por_proyecto on public.contactos_proyectos using btree (
  proyecto_id,
  lower(nombre),
  COALESCE(lower(correo), ''::text)
) TABLESPACE pg_default;

create trigger trg_contactos_proyectos_modificado BEFORE
update on contactos_proyectos for EACH row
execute FUNCTION set_modificado_fecha ();

create table public.equipos (
  id uuid not null default gen_random_uuid (),
  proyecto_id uuid not null,
  tipo text not null,
  nombre text not null,
  modelo text null,
  ubicacion text null,
  numero_serie text null,
  ip text null,
  estado text null,
  notas text null,
  creado_por uuid null,
  creado_fecha timestamp with time zone not null default now(),
  modificado_por uuid null,
  modificado_fecha timestamp with time zone not null default now(),
  constraint equipos_pkey primary key (id),
  constraint equipos_proyecto_id_fkey foreign KEY (proyecto_id) references proyectos (id) on delete CASCADE
) TABLESPACE pg_default;

create index IF not exists equipos_proyecto_idx on public.equipos using btree (proyecto_id) TABLESPACE pg_default;

create index IF not exists equipos_tipo_idx on public.equipos using btree (tipo) TABLESPACE pg_default;

create index IF not exists equipos_estado_idx on public.equipos using btree (estado) TABLESPACE pg_default;

create table public.profiles (
  id uuid not null,
  nombre text null,
  rol text null default 'tecnico'::text,
  telefono text null,
  created_at timestamp without time zone null default now(),
  estado text not null default 'activo'::text,
  constraint profiles_pkey primary key (id),
  constraint profiles_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE,
  constraint profiles_user_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.proyectos (
  id uuid not null default gen_random_uuid (),
  nombre text not null,
  alias text null,
  tipo text null,
  cliente text null,
  ciudad text null,
  estado text null,
  direccion text null,
  codigo_postal text null,
  fecha_operacion date null,
  notas text null,
  creado_por uuid null,
  creado_fecha timestamp with time zone not null default now(),
  modificado_por uuid null,
  modificado_fecha timestamp with time zone not null default now(),
  poliza_adquirida date null,
  poliza_vence date null,
  constraint proyectos_pkey primary key (id),
  constraint proyectos_poliza_fechas_ck check (
    (
      (poliza_adquirida is null)
      or (poliza_vence is null)
      or (poliza_adquirida <= poliza_vence)
    )
  )
) TABLESPACE pg_default;

create index IF not exists proyectos_nombre_idx on public.proyectos using btree (nombre) TABLESPACE pg_default;

create index IF not exists proyectos_cliente_idx on public.proyectos using btree (cliente) TABLESPACE pg_default;

create index IF not exists idx_proyectos_poliza_vence on public.proyectos using btree (poliza_vence) TABLESPACE pg_default
where
  (poliza_vence is not null);

create table public.reportes (
  id uuid not null default gen_random_uuid (),
  cliente text null,
  fecha date null,
  sucursal text null,
  numero_ticket text null,
  estado_ticket text null default 'pendiente'::text,
  tipo_mantenimiento text null,
  tipo_servicio text null,
  hora_inicio text null,
  area text null,
  tecnico text null,
  equipo_tipo text null,
  componente text null,
  material_refaccion text null,
  descripcion_equipo text null,
  numero_serie_equipo text null,
  numero_serie_componente text null,
  numero_pedido text null,
  descripcion text null,
  pruebas_realizadas text null,
  diagnostico text null,
  notas text null,
  requisito_refacciones text null,
  firma_conformidad_refacciones text null,
  comentarios text null,
  gerente_proyecto text null,
  firma_tecnico_nombre text null,
  firma_tecnico_dibujo text null,
  firma_gerente_nombre text null,
  firma_gerente_dibujo text null,
  created_at timestamp without time zone null default now(),
  creado_por uuid null,
  actividad_calendario_id uuid null,
  draft_id uuid null,
  before_count integer not null default 0,
  after_count integer not null default 0,
  has_video boolean not null default false,
  pdf_path text null,
  pdf_generated_at timestamp with time zone null,
  proyecto_id uuid null,
  constraint reportes_pkey primary key (id),
  constraint reportes_actividad_calendario_id_fkey foreign KEY (actividad_calendario_id) references calendario_tecnico (id),
  constraint reportes_creado_por_fkey foreign KEY (creado_por) references auth.users (id),
  constraint reportes_proyecto_id_fkey foreign KEY (proyecto_id) references proyectos (id) on delete set null
) TABLESPACE pg_default;

create index IF not exists idx_reportes_proyecto_fecha on public.reportes using btree (proyecto_id, fecha) TABLESPACE pg_default;

create table public.reportes_mensuales (
  id uuid not null default gen_random_uuid (),
  proyecto_id uuid not null,
  year smallint not null,
  month smallint not null,
  titulo text null,
  estado text not null default 'borrador'::text,
  generado_por uuid null,
  generado_at timestamp with time zone not null default now(),
  pdf_path text null,
  pdf_generated_at timestamp with time zone null,
  total_servicios integer not null default 0,
  total_correctivos integer not null default 0,
  total_preventivos integer not null default 0,
  total_pendientes integer not null default 0,
  total_completados integer not null default 0,
  total_con_video integer not null default 0,
  constraint reportes_mensuales_pkey primary key (id),
  constraint reportes_mensuales_proyecto_id_year_month_key unique (proyecto_id, year, month),
  constraint reportes_mensuales_generado_por_fkey foreign KEY (generado_por) references auth.users (id),
  constraint reportes_mensuales_proyecto_id_fkey foreign KEY (proyecto_id) references proyectos (id) on delete CASCADE,
  constraint reportes_mensuales_estado_check check (
    (
      estado = any (
        array[
          'borrador'::text,
          'cerrado'::text,
          'cancelado'::text
        ]
      )
    )
  ),
  constraint reportes_mensuales_month_check check (
    (
      (month >= 1)
      and (month <= 12)
    )
  )
) TABLESPACE pg_default;

create index IF not exists idx_reportes_mensuales_proyecto_periodo on public.reportes_mensuales using btree (proyecto_id, year, month) TABLESPACE pg_default;

create table public.reportes_mensuales_items (
  reporte_mensual_id uuid not null,
  reporte_id uuid not null,
  actividad_calendario_id uuid null,
  fecha date null,
  numero_ticket text null,
  estado_ticket text null,
  tipo_mantenimiento text null,
  tipo_servicio text null,
  tecnico text null,
  area text null,
  pdf_path text null,
  has_video boolean not null default false,
  constraint reportes_mensuales_items_pkey primary key (reporte_mensual_id, reporte_id),
  constraint reportes_mensuales_items_actividad_calendario_id_fkey foreign KEY (actividad_calendario_id) references calendario_tecnico (id) on delete set null,
  constraint reportes_mensuales_items_reporte_id_fkey foreign KEY (reporte_id) references reportes (id) on delete RESTRICT,
  constraint reportes_mensuales_items_reporte_mensual_id_fkey foreign KEY (reporte_mensual_id) references reportes_mensuales (id) on delete CASCADE
) TABLESPACE pg_default;

create index IF not exists idx_rmi_reporte_mensual on public.reportes_mensuales_items using btree (reporte_mensual_id) TABLESPACE pg_default;

create index IF not exists idx_rmi_fecha on public.reportes_mensuales_items using btree (fecha) TABLESPACE pg_default;

create table public.ticket_counters (
  proyecto_id uuid not null,
  fecha date not null,
  last_number integer not null default 0,
  constraint ticket_counters_pkey primary key (proyecto_id, fecha)
) TABLESPACE pg_default;

create view public.usuarios_completos as
select
  u.id,
  u.email,
  p.nombre,
  p.rol,
  p.telefono,
  p.created_at,
  p.estado
from
  auth.users u
  join profiles p on p.id = u.id;