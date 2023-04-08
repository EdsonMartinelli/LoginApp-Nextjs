import { RefreshToken } from "../../entities/RefreshToken";
import { IRefreshTokenRepository } from "../IRefreshTokenRepository";
import { usePrisma } from "./usePrisma";

export class PrismaRefreshTokenRepository implements IRefreshTokenRepository{
    async create ({id, userId, expiresIn}: RefreshToken): Promise<RefreshToken> {
        const refreshToken = await usePrisma.refreshToken.create({
            data: {
                id,
                userId,
                expiresIn
            }
        })
        const refreshTokenEntity = new RefreshToken(refreshToken);
        return refreshTokenEntity;
    }

    async findById (id: string): Promise<RefreshToken | null>{
        const refreshToken = await usePrisma.refreshToken.findUnique({ where: { id } })

        if (refreshToken == null) return null

        const refreshTokenEntity = new RefreshToken(refreshToken);
        return refreshTokenEntity;
    }

}