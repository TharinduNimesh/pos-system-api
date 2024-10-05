import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ErrorResponse } from "../interfaces";

export function handleErrors(req: Request, res: Response<ErrorResponse>) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      messages: errors.array(),
    });
  }
}
