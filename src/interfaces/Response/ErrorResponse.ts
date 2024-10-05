import { CoreResponse } from "./Core";

export interface ErrorResponse extends CoreResponse {
  stack?: string;
}
