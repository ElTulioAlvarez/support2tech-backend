import type { Express } from "express";
import type { PrismaClient } from "@prisma/client";
import type { TokenVerifier, CurrentUserResolver } from "../../shared/contracts/security.js";
import { PrismaUserRepository } from "./infrastructure/repositories/PrismaUserRepository.js";
import { SupabaseAuthAdminProvider } from "./infrastructure/providers/SupabaseAuthAdminProvider.js";
import { ListUsersUseCase } from "./application/use-cases/ListUserUseCase.js";
import { GetUserByIdUseCase } from "./application/use-cases/GetUserByIdUseCase.js";
import { CreateUserUseCase } from "./application/use-cases/CreateUserUseCase.js";
import { UpdateUserUseCase } from "./application/use-cases/UpdateUserUseCase.js";
import { DeleteUserUseCase } from "./application/use-cases/DeleteUserUseCase.js";
import { UpdateUserEmailUseCase } from "./application/use-cases/UpdateUserEmailUseCase.js";
import { UpdateUserPasswordUseCase } from "./application/use-cases/UpdateUserPasswordUseCase.js";
import { createUserRouter } from "./presentation/http/routes/user.routes.js";

type UsersModuleDependencies = {
  prisma: PrismaClient;
  tokenVerifier: TokenVerifier;
  currentUserResolver: CurrentUserResolver;
};

export function createUsersModule(deps: UsersModuleDependencies) {
  const userRepository = new PrismaUserRepository(deps.prisma);
  const authAdminProvider = new SupabaseAuthAdminProvider();

  const listUsersUseCase = new ListUsersUseCase(userRepository);
  const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
  const createUserUseCase = new CreateUserUseCase(authAdminProvider, userRepository);
  const updateUserUseCase = new UpdateUserUseCase(userRepository);
  const deleteUserUseCase = new DeleteUserUseCase(authAdminProvider, userRepository);
  const updateUserEmailUseCase = new UpdateUserEmailUseCase(authAdminProvider, userRepository);
  const updateUserPasswordUseCase = new UpdateUserPasswordUseCase(authAdminProvider, userRepository);

  return {
    register(app: Express) {
      app.use(
        "/api/users",
        createUserRouter({
          listUsersUseCase,
          getUserByIdUseCase,
          createUserUseCase,
          updateUserUseCase,
          deleteUserUseCase,
          updateUserEmailUseCase,
          updateUserPasswordUseCase,
          tokenVerifier: deps.tokenVerifier,
          currentUserResolver: deps.currentUserResolver,
        })
      );
    },
  };
}