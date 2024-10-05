import { ValidationError } from "express-validator";
import { CoreResponse } from "./Core";

export interface SignInResponse extends CoreResponse {
  token?: string;
}
