import { HttpRequest, HttpResponse } from "../types/Http";
import { ok } from "../utils/http";

export class SignInController {
  static async handle(request: HttpRequest): Promise<HttpResponse> {
    return ok({ accessToken: "token de acesso" });
  }
}
