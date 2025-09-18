import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocioServiceBase } from "./base/socio.service.base";

@Injectable()
export class SocioService extends SocioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
