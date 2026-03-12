# Backend modularizado

## Módulos
- `modules/auth`: autenticación e identidad.
- `modules/accounts`: perfil, rol y autorización basada en perfil.
- `shared/infrastructure/db`: Prisma y persistencia compartida.
- `bootstrap`: composition root y servidor HTTP.

## Flujo
- `POST /auth/login` -> `LoginUseCase` -> `IdentityProvider` -> Supabase.
- `GET /auth/me` -> `requireAuth` -> `VerifyAccessTokenUseCase`.
- `GET /api/account/me` -> `requireAuth` -> `loadRole` -> `GetMyProfileUseCase`.
- `GET /api/account/admin/ping` -> `requireAuth` -> `loadRole` -> `requireRole("admin")`.

## Regla de modularidad
- `auth` ya no conoce `Profile`.
- `accounts` ya no valida JWT ni hace login.
- Prisma vive en `shared`, no dentro de un módulo de negocio.
