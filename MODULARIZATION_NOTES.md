# Support2Tech Backend - cambios aplicados

## Objetivo
Dejar el backend con una base modular más consistente y compilable.

## Cambios principales
- Se unificó el contexto de autenticación en `req.auth`.
- Se añadió `req.currentProfile` para compartir el perfil cargado entre middlewares y handlers.
- Se corrigió la autorización por rol: ahora `requireRole` usa `req.auth.role` y el middleware de contexto sí lo llena.
- Se sustituyó `loadRole` por `loadAccountContext`.
- Se eliminaron rutas duplicadas/legacy que convivían con la versión nueva.
- Se añadió `asyncHandler` para handlers async y `errorHandler` central.
- Se corrigió `tsconfig.json` para compilar solo `src/**` y excluir `prisma.config.ts`.
- Se saneó el artefacto: `.env` fue removido y se agregó `.env.example`.

## Archivos nuevos
- `src/shared/presentation/http/types/request-context.ts`
- `src/shared/presentation/http/middlewares/asyncHandler.ts`
- `src/shared/presentation/http/middlewares/errorHandler.ts`
- `src/modules/accounts/presentation/http/middlewares/loadAccountContext.ts`
- `.env.example`

## Archivos eliminados
- `src/modules/auth/presentation/http/auth.routes.ts`
- `src/modules/accounts/presentation/http/account.routes.ts`
- `src/modules/accounts/presentation/http/middlewares/requireRole.ts`
- `src/modules/accounts/presentation/http/middlewares/loadRole.ts`

## Estado
- `npm install` OK
- `npm run build` OK
