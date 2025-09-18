import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InscripcionService } from "./inscripcion.service";
import { InscripcionControllerBase } from "./base/inscripcion.controller.base";

@swagger.ApiTags("inscripcions")
@common.Controller("inscripcions")
export class InscripcionController extends InscripcionControllerBase {
  constructor(protected readonly service: InscripcionService) {
    super(service);
  }
}
