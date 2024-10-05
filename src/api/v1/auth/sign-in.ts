import express, { Request, Response } from "express";
import { SignInRequest, SignInResponse } from "../../../interfaces";
import { signInRequestValidationRule } from "../../../rules";
import { validationResult } from "express-validator";
import { handleErrors } from "../../../controllers";

const router = express.Router();

router.post(
  "/",
  signInRequestValidationRule,
  (req: Request<{}, {}, SignInRequest, {}>, res: Response<SignInResponse>) => {
    handleErrors(req, res);

    const { nic, password } = req.body;

    // Sign In Logic

    res.json({
      status: "success",
      token: "sample-token",
    });
  }
);

export const SignInRouter = router;
