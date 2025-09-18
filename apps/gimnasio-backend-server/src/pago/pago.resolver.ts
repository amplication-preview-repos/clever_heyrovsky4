import * as graphql from "@nestjs/graphql";
import { PagoResolverBase } from "./base/pago.resolver.base";
import { Pago } from "./base/Pago";
import { PagoService } from "./pago.service";

@graphql.Resolver(() => Pago)
export class PagoResolver extends PagoResolverBase {
  constructor(protected readonly service: PagoService) {
    super(service);
  }
}
