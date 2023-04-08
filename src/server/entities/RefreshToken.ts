export class RefreshToken{
  id: string;
  userId: string;
  expiresIn: Date;

  constructor({
    id,
    userId,
    expiresIn
  }: RefreshToken) {
    this.id = id;
    this.userId = userId;
    this.expiresIn = expiresIn
  }
}