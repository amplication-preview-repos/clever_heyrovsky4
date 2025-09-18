import { Module } from "@nestjs/common";
import { SocioModuleBase } from "./base/socio.module.base";
import { SocioService } from "./socio.service";
import { SocioController } from "./socio.controller";
import { SocioResolver } from "./socio.resolver";

@Module({
  imports: [SocioModuleBase],
  controllers: [SocioController],
  providers: [SocioService, SocioResolver],
  exports: [SocioService],
})
export class SocioModule {}
