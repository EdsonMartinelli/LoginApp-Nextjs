// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.cookies)
  res.setHeader("set-cookie", `testeteste=5; path=/; max-age=10; httponly;`)
  res.status(200).json({ name: "John Doe" });
}
