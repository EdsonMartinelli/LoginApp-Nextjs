import type { NextApiRequest, NextApiResponse } from "next";
import { SignUpRouteFactory } from "../../server/main/SignUpRouteFactory";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await SignUpRouteFactory().handle(req, res)
}
