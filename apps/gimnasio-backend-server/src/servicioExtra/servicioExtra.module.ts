import { Module } from "@nestjs/common";
import { ServicioExtraModuleBase } from "./base/servicioExtra.module.base";
import { ServicioExtraService } from "./servicioExtra.service";
import { ServicioExtraController } from "./servicioExtra.controller";
import { ServicioExtraResolver } from "./servicioExtra.resolver";

@Module({
  imports: [ServicioExtraModuleBase],
  controllers: [ServicioExtraController],
  providers: [ServicioExtraService, ServicioExtraResolver],
  exports: [ServicioExtraService],
})
export class ServicioExtraModule {}
