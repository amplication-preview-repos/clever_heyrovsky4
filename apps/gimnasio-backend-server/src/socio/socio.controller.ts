import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SocioService } from "./socio.service";
import { SocioControllerBase } from "./base/socio.controller.base";

@swagger.ApiTags("socios")
@common.Controller("socios")
export class SocioController extends SocioControllerBase {
  constructor(protected readonly service: SocioService) {
    super(service);
  }
}
