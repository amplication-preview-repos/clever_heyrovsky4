import { Module } from "@nestjs/common";
import { InscripcionModuleBase } from "./base/inscripcion.module.base";
import { InscripcionService } from "./inscripcion.service";
import { InscripcionController } from "./inscripcion.controller";
import { InscripcionResolver } from "./inscripcion.resolver";

@Module({
  imports: [InscripcionModuleBase],
  controllers: [InscripcionController],
  providers: [InscripcionService, InscripcionResolver],
  exports: [InscripcionService],
})
export class InscripcionModule {}
