export type UserRole = "tecnico" | "admin";
export interface Profile {
    id: string;
    nombre: string | null;
    rol: UserRole;
    telefono: string | null;
    estado: "activo" | "inactivo" | string;
    createdAt: Date | null;
}
//# sourceMappingURL=Profile.d.ts.map