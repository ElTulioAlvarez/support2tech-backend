# Support2Tech Backend - Paso 2

## Objetivo cumplido
- Se eliminó la estructura vieja basada en `shared/presentation/http/server.ts` y servicios mezclados.
- `auth` y `accounts` quedaron separados.
- `bootstrap` ahora es el único composition root.
- Prisma quedó centralizado en `src/shared/infrastructure/db`.
- Se agregaron módulos scaffold para `projects`, `calendar`, `reports` y `technicians`.

## Reglas
1. Cada módulo posee su propia capa `domain/application/infrastructure/presentation` cuando el módulo ya tenga lógica real.
2. `shared` solo contiene piezas transversales: db, middlewares compartidos, utilidades, config.
3. Ninguna ruta puede hablar directo con Supabase ni con Prisma fuera de infraestructura.
4. La app se ensambla únicamente en `src/bootstrap`.

## Estado actual por módulo
- `auth`: funcional.
- `accounts`: funcional.
- `projects`: scaffold listo.
- `calendar`: scaffold listo.
- `reports`: scaffold listo.
- `technicians`: scaffold listo.

## Siguiente paso recomendado
Convertir cada scaffold en módulo vertical real comenzando por `projects`, luego `calendar`, después `reports` y por último `technicians`.
