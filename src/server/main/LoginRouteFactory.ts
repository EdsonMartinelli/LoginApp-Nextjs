import { LoginController } from "../controllers/LoginController";
import { PrismaRefreshTokenRepository } from "../repositories/prisma/PrismaRefreshTokenRepository";
import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository";
import { LoginUseCase } from "../userCases/login/LoginUseCase";

export function LoginRouteFactory() {
  return new LoginController(new LoginUseCase(
    new PrismaUserRepository(),
    new PrismaRefreshTokenRepository())
  );
}
