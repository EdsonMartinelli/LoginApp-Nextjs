import type { NextApiRequest, NextApiResponse } from "next";
import { UserAlreadyExistsError } from "../errors/customErrors/UserAlreadyExistsError";
import { ISignUpUseCase } from "../userCases/signup/ISignUpUseCase";


class SignUpController {
  private readonly signUpUseCase: ISignUpUseCase;

  constructor(signUpUseCase: ISignUpUseCase) {
    this.signUpUseCase = signUpUseCase;
  }

  async handle(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { email, username, password } = req.body;
      const user = await this.signUpUseCase.execute({
        email,
        username,
        password,
      });
      return res.status(200).json({
        data: {
          message: `Success! User: ${JSON.stringify(user)}`
        },
      });
    } catch (error: any | UserAlreadyExistsError) {
      if (error instanceof UserAlreadyExistsError) {
        return res.status(error.status).json({
          data: {
            message: error.message,
          },
        });
      }
      return res.status(500).json({
        data: {
          message: "Internal Error Server.",
        },
      });
    }
  }
}

export { SignUpController };
