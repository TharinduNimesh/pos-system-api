import { check } from "express-validator";

export const signInRequestValidationRule = [
  check("nic")
    .notEmpty()
    .withMessage("NIC Cannot Be Empty")
    .matches(/^(\d{9}[vV]|\d{12})$/)
    .withMessage("Invalid Sri Lankan NIC"),
  check("password").notEmpty().withMessage("Password Cannot Be Empty"),
];
