export class PrismaProfileRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    async findById(id) {
        const row = await this.db.profiles.findUnique({ where: { id } });
        if (!row)
            return null;
        return {
            id: row.id,
            nombre: row.nombre,
            rol: (row.rol ?? "tecnico"),
            telefono: row.telefono,
            estado: row.estado,
            createdAt: row.created_at ? new Date(row.created_at) : null,
        };
    }
}
//# sourceMappingURL=PrismaProfileRepository.js.map