export class User {
  id: string;
  email: string;
  username: string;
  password: string;
  passwordResetToken: string;
  emailVerified: boolean;
  emailToken: string;

  constructor({
    id,
    email,
    username,
    password,
    passwordResetToken,
    emailToken,
    emailVerified,
  }: User) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.passwordResetToken = passwordResetToken;
    this.emailVerified = emailVerified;
    this.emailToken = emailToken;
  }
}
