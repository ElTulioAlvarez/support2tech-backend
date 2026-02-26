import { Router, type Request, type Response } from "express";
import { supabaseAuth } from "../../../infrastructure/auth/supabaseClient.js";

type Middleware = (req: Request, res: Response, next: (err?: any) => void) => any;

export function buildAuthRouter(deps: { authMw: Middleware }) {
  const r = Router();

  r.post("/login", async (req, res) => {
    const { email, password } = req.body ?? {};

    if (!email || !password) {
      return res.status(400).json({ message: "email y password son requeridos" });
    }

    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const { session, user } = data;

    return res.json({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      expires_in: session.expires_in,
      token_type: session.token_type,
      user: { id: user.id, email: user.email },
    });
  });

  // ✅ usa el MISMO authMw del resto del backend
  r.get("/me", deps.authMw, async (req, res) => {
    // mantiene compatibilidad con tu frontend (espera sub)
    return res.json({ user: { sub: req.auth!.userId } });
  });

  return r;
}