import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PagoService } from "./pago.service";
import { PagoControllerBase } from "./base/pago.controller.base";

@swagger.ApiTags("pagos")
@common.Controller("pagos")
export class PagoController extends PagoControllerBase {
  constructor(protected readonly service: PagoService) {
    super(service);
  }
}
