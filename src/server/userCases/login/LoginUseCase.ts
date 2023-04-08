import bcrypt from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUseCase, ILoginUserRequest } from "./ILoginUseCase";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
import { InvalidCredentialsError } from "../../errors/customErrors/InvalidCredentialsError";
import { GenerateAccessToken } from "../../providers/GenerateAccessToken";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";
import { GenerateRefreshToken } from "../../providers/GenerateRefreshToken";

class LoginUseCase implements ILoginUseCase {
  usersRepository: IUsersRepository;
  refreshTokenRepository: IRefreshTokenRepository
  constructor(usersRepository: IUsersRepository, refreshTokenRepository: IRefreshTokenRepository ) {
    this.usersRepository = usersRepository;
    this.refreshTokenRepository = refreshTokenRepository;
  }

  async execute({ email, password }: ILoginUserRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (user == null) {
      throw new UserDoesNotExistError();
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new InvalidCredentialsError();
    }

    const MAX_AGE_REFRESH_TOKEN = 60 * 60 * 8 // 8 hours in seconds
    const MAX_AGE_ACCESS_TOKEN = 60 * 30 // 30 minutes in seconds

    const accessToken = await GenerateAccessToken.execute({
      userId: user.id,
      usersRepository: this.usersRepository,
      maxAge: MAX_AGE_ACCESS_TOKEN,
    })
    const refreshToken = await GenerateRefreshToken.execute({
      userId: user.id,
      usersRepository: this.usersRepository,
      maxAge: MAX_AGE_REFRESH_TOKEN,
      refreshTokenRepository: this.refreshTokenRepository
    })
  
    const accessCookie = `login_system_access_token=${accessToken}; path=/; max-age=${MAX_AGE_ACCESS_TOKEN}; httponly; samesite=lax;`
    const refreshCookie = `login_system_refresh_token=${refreshToken}; path=/; max-age=${MAX_AGE_REFRESH_TOKEN}; httponly; samesite=lax;`
    
    return {
      accessCookie,
      refreshCookie
    };
  }
}

export { LoginUseCase };
