import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InscripcionServiceBase } from "./base/inscripcion.service.base";

@Injectable()
export class InscripcionService extends InscripcionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
