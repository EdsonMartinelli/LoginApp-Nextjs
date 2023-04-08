import { User } from "../entities/User";
import { IPrimitiveRepository } from "./IPrimitiveRepository";

export interface passwordResetProps {
  passwordResetToken: string;
  newPassword: string;
  newPasswordResetToken: string;
}

export interface IUsersRepository extends IPrimitiveRepository<User>{
  findByEmail: (email: string) => Promise<User | null>;
  findByPasswordResetToken: (
    passwordResetToken: string
  ) => Promise<User | null>;
  passwordReset: (args: passwordResetProps) => Promise<User | null>;
  validateUser: (id: string) => Promise<User>;
}
