import { User } from "../../entities/User";
import { IUsersRepository, passwordResetProps } from "../IUsersRepository";
import { usePrisma } from "./usePrisma";

export class PrismaUserRepository implements IUsersRepository{
    async create({id, email, username, password, passwordResetToken, emailVerified, emailToken}: User): Promise<User> {
        const user = await usePrisma.user.create({
            data: {
              id,
              email,
              username,
              password,
              passwordResetToken,
              emailVerified,
              emailToken
            }
        })
        const userEntity = new User(user);
        return userEntity;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { email } })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

    async findById(id: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { id } })

        if (user == null) return null;
        
        const userEntity = new User(user)
        return userEntity;
    }

    async validateUser(id: string): Promise<User>{
        const user = await usePrisma.user.update({
             where: { id },
             data: { emailVerified: true }
        })
        const userEntity = new User(user)
        return userEntity;
    }
    async findByPasswordResetToken(passwordResetToken: string): Promise<User | null>{
        const user = await usePrisma.user.findUnique({ where: { passwordResetToken } })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

    async passwordReset({passwordResetToken, newPassword, newPasswordResetToken}: passwordResetProps): Promise<User | null>{
        const user = await usePrisma.user.update({ 
            where: { passwordResetToken }, 
            data: {
                password: newPassword,
                passwordResetToken: newPasswordResetToken
            }
        })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

}