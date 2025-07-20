import { sign } from "jsonwebtoken";

export function signAccessTokenFor(userId: string) {
  const accessToken = sign({ sub: userId }, process.env.JWT_SECRET!, {
    expiresIn: "3d",
  });

  return accessToken;
}
