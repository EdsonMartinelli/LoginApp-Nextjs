import type { NextApiRequest, NextApiResponse } from "next";
import { LoginRouteFactory } from "../../server/main/LoginRouteFactory";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await LoginRouteFactory().handle(req, res)
}
