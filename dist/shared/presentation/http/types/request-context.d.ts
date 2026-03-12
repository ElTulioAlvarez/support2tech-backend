import type { UserRole } from "../../../../modules/accounts/domain/entities/Profile.js";
import type { Profile } from "../../../../modules/accounts/domain/entities/Profile.js";
declare global {
    namespace Express {
        interface Request {
            auth?: {
                userId: string;
                email: string | null;
                role?: UserRole | null;
            };
            currentProfile?: Profile;
        }
    }
}
export {};
//# sourceMappingURL=request-context.d.ts.map