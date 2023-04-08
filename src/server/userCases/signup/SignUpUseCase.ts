import * as crypto from "crypto";
import bcrypt from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersEmailService } from "../../services/emailService/IUserEmailService";
import { ISignUpUseCase, ISignUpUserRequest } from "./ISignUpUseCase";
import { UserAlreadyExistsError } from "../../errors/customErrors/UserAlreadyExistsError";
import { User } from "../../entities/User";
import { GenerateUniqueId } from "../../providers/GenerateUniqueId";

class SignUpUseCase implements ISignUpUseCase {
  usersRepository: IUsersRepository;
  emailService: IUsersEmailService;
  constructor(
    usersRepository: IUsersRepository,
    emailService: IUsersEmailService
  ) {
    this.usersRepository = usersRepository;
    this.emailService = emailService;
  }

  async execute({ email, username, password }: ISignUpUserRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists != null) {
      throw new UserAlreadyExistsError();
    }

    const id = await GenerateUniqueId.execute<User>(this.usersRepository);

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);
    const emailToken = crypto.randomBytes(3).toString("hex");
    const passwordResetToken = crypto.randomUUID();

    const newUser= new User({
      id,
      email,
      username,
      password: passwordHash,
      passwordResetToken,
      emailVerified: false,
      emailToken,
    });

    const user = await this.usersRepository.create(newUser);
    // await this.emailService.sendEmailConfirm({ email, emailToken });
    return user;
  }
}

export { SignUpUseCase };
