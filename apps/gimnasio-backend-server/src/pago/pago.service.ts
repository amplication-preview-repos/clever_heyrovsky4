import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PagoServiceBase } from "./base/pago.service.base";

@Injectable()
export class PagoService extends PagoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
