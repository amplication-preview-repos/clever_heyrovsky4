import * as graphql from "@nestjs/graphql";
import { ServicioExtraResolverBase } from "./base/servicioExtra.resolver.base";
import { ServicioExtra } from "./base/ServicioExtra";
import { ServicioExtraService } from "./servicioExtra.service";

@graphql.Resolver(() => ServicioExtra)
export class ServicioExtraResolver extends ServicioExtraResolverBase {
  constructor(protected readonly service: ServicioExtraService) {
    super(service);
  }
}
