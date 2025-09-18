import { Module } from "@nestjs/common";
import { PagoModuleBase } from "./base/pago.module.base";
import { PagoService } from "./pago.service";
import { PagoController } from "./pago.controller";
import { PagoResolver } from "./pago.resolver";

@Module({
  imports: [PagoModuleBase],
  controllers: [PagoController],
  providers: [PagoService, PagoResolver],
  exports: [PagoService],
})
export class PagoModule {}
