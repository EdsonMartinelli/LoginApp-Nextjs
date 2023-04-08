import { sign } from "jsonwebtoken";
import { UserDoesNotExistError } from "../errors/customErrors/UserDoesNotExistError";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface GenerateAccessTokenProps{
    userId: string,
    usersRepository: IUsersRepository,
    maxAge: number,
}

export class GenerateAccessToken {
    static async execute({
        userId,
        usersRepository,
        maxAge,
    }: GenerateAccessTokenProps){
        const user = await usersRepository.findById(userId);

        if (user == null) {
            throw new UserDoesNotExistError();
        }

        const accessTokenPayload = {
            id: user.id,
            iat: Math.floor(Date.now() / 1000),
        };

        const token = sign(accessTokenPayload, process.env.SECRET_KEY ?? "", {
            expiresIn: maxAge * 1000, // max age in milliseconds
        })

        return token
    }
    
    
}