import { ValidationError } from "express-validator";

export interface CoreResponse {
  status: "success" | "error";
  message?: string;
  messages?: ValidationError[];
}
