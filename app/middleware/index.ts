import { authJwt } from "./authJwt";
import { verifySignUp } from "./verifySignUp";

export const middleware = {
  authJwt,
  verifySignUp
};
