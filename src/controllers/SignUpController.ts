import { HttpRequest, HttpResponse } from "../types/Http";
import { created } from "../utils/http";

export class SignUpController {
  static async handle(request: HttpRequest): Promise<HttpResponse> {
    return created({
      accessToken: "signup: token de acesso",
    });
  }
}
