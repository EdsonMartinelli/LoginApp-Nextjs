import { sign } from "jsonwebtoken";
import { RefreshToken } from "../entities/RefreshToken";
import { UserDoesNotExistError } from "../errors/customErrors/UserDoesNotExistError";
import { IRefreshTokenRepository } from "../repositories/IRefreshTokenRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { GenerateUniqueId } from "./GenerateUniqueId";

interface GenerateRefreshTokenProps{
    userId: string,
    usersRepository: IUsersRepository,
    maxAge: number,
    refreshTokenRepository: IRefreshTokenRepository
}

export class GenerateRefreshToken{
    static async execute ({
        userId,
        usersRepository,
        maxAge,
        refreshTokenRepository
    }: GenerateRefreshTokenProps){
        const user = await usersRepository.findById(userId);

        if (user == null) {
            throw new UserDoesNotExistError();
        }

        const id = await GenerateUniqueId.execute<RefreshToken>(refreshTokenRepository)

        const refreshTokenEntity = new RefreshToken({
            id,
            userId: user.id,
            expiresIn: new Date(Date.now() + 1000 * maxAge)
        })

        const refreshToken = await refreshTokenRepository.create(refreshTokenEntity)

        const refreshTokenPayload = {
            id: refreshToken.id,
            userId: refreshToken.userId,
            expiresIn: refreshToken.expiresIn,
            iat: Math.floor(Date.now() / 1000),
        };

        const token = sign(refreshTokenPayload, process.env.SECRET_KEY ?? "", {
            expiresIn: maxAge * 1000, // max age in milliseconds
        })

        return token;
    }
    
}