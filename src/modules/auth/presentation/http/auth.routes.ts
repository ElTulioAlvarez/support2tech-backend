import { Router, type Request, type Response } from "express";
import type { LoginUseCase } from "../../application/use-cases/LoginUseCase.js";

type Middleware = (req: Request, res: Response, next: (err?: any) => void) => any;

export function createAuthRouter(deps: {
  loginUseCase: LoginUseCase;
  authMw: Middleware;
}) {
  const r = Router();

  r.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body ?? {};

      if (!email || !password) {
        return res.status(400).json({ message: "email y password son requeridos" });
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
    } catch (error) {
      return res.status(401).json({
        message: error instanceof Error ? error.message : "Credenciales inválidas",
      });
    }
  });

  r.get("/me", deps.authMw, async (req, res) => {
    return res.json({ user: { sub: req.auth!.userId, email: req.auth!.email } });
  });

  return r;
}
