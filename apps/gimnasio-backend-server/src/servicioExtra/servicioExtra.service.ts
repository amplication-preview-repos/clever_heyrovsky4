import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServicioExtraServiceBase } from "./base/servicioExtra.service.base";

@Injectable()
export class ServicioExtraService extends ServicioExtraServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
