import { constrollerSignin, controllerSignup } from "../controllers/auth.controller";
import { verifySignUp } from "../middleware/verifySignUp";

export function AuthRoutes(app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controllerSignup
  );

  app.post("/api/auth/signin", constrollerSignin);
};
