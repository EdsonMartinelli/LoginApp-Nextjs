import type { NextApiRequest, NextApiResponse } from "next";
import { InvalidCredentialsError } from "../errors/customErrors/InvalidCredentialsError";
import { UserDoesNotExistError } from "../errors/customErrors/UserDoesNotExistError";
import { ILoginUseCase } from "../userCases/login/ILoginUseCase";

class LoginController {
  private readonly loginUseCase: ILoginUseCase;

  constructor(loginController: ILoginUseCase) {
    this.loginUseCase = loginController;
  }

  async handle(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { email, password } = req.body;
      const { accessCookie, refreshCookie } = await this.loginUseCase.execute({ email, password });
      res.setHeader("set-cookie", [accessCookie, refreshCookie])
      return res.status(200).json({ data: { message: "foi" } });
    } catch (error: any | UserDoesNotExistError | InvalidCredentialsError) {
      if (
        error instanceof UserDoesNotExistError ||
        error instanceof InvalidCredentialsError
      ) {
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

export { LoginController };
