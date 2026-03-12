import { Router } from "express";
import type { LoginUseCase } from "../../../application/use-cases/LoginUseCase.js";
import type { VerifyAccessTokenUseCase } from "../../../application/use-cases/VerifyAccessTokenUseCase.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";

export function buildAuthRouter(deps: {
  loginUseCase: LoginUseCase;
  verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
}) {
  const router = Router();
  const authMw = requireAuth(deps.verifyAccessTokenUseCase);

  router.post(
    "/login",
    asyncHandler(async (req, res) => {
      const { email, password } = req.body ?? {};

      if (!email || !password) {
        return res.status(400).json({ error: "email y password son requeridos" });
      }

      const result = await deps.loginUseCase.execute(email, password);

      return res.json({
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_in: result.expiresIn,
        token_type: result.tokenType,
        user: {
          id: result.identity.userId,
          email: result.identity.email,
        },
      });
    }),
  );

  router.get(
    "/me",
    authMw,
    asyncHandler(async (req, res) => {
      return res.json({ user: { sub: req.auth!.userId, email: req.auth!.email } });
    }),
  );

  return router;
}
