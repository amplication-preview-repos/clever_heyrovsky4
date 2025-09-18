import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServicioExtraService } from "./servicioExtra.service";
import { ServicioExtraControllerBase } from "./base/servicioExtra.controller.base";

@swagger.ApiTags("servicioExtras")
@common.Controller("servicioExtras")
export class ServicioExtraController extends ServicioExtraControllerBase {
  constructor(protected readonly service: ServicioExtraService) {
    super(service);
  }
}
