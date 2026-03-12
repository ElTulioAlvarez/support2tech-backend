import type { CurrentUserProfile, UserRole } from "../../../contracts/security.js";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        email: string | null;
        role?: UserRole | null;
      };
      currentProfile?: CurrentUserProfile;
    }
  }
}

export {};
