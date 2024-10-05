import { ValidationError } from "express-validator";

export interface SignInResponse {
  status: string;
  token?: string;
  message?: string;
  messages?: ValidationError[];
}
