import * as graphql from "@nestjs/graphql";
import { SocioResolverBase } from "./base/socio.resolver.base";
import { Socio } from "./base/Socio";
import { SocioService } from "./socio.service";

@graphql.Resolver(() => Socio)
export class SocioResolver extends SocioResolverBase {
  constructor(protected readonly service: SocioService) {
    super(service);
  }
}
