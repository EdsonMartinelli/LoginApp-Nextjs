import { SignUpController } from "../controllers/SignUpController";
import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository";
import { NodemailerUserService } from "../services/emailService/nodemailer/NodemailerUserService";
import { SignUpUseCase } from "../userCases/signup/SignUpUseCase";


export function SignUpRouteFactory() {
  return new SignUpController(
    new SignUpUseCase(new PrismaUserRepository(), new NodemailerUserService())
  );
}
