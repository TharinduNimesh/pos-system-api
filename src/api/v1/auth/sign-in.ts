import express, { Request, Response } from "express";
import { SignInRequest, SignInResponse } from "../../../interfaces";
import { signInRequestValidationRule } from "../../../rules";
import { validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/",
  signInRequestValidationRule,
  (req: Request<{}, {}, SignInRequest, {}>, res: Response<SignInResponse>) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        messages: errors.array(),
      });
    }

    const { nic, password } = req.body;

    // Sign In Logic

    res.json({
      status: "success",
      token: "sample-token",
    });
  }
);

export const SignInRouter = router;
