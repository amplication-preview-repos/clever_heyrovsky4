import * as graphql from "@nestjs/graphql";
import { InscripcionResolverBase } from "./base/inscripcion.resolver.base";
import { Inscripcion } from "./base/Inscripcion";
import { InscripcionService } from "./inscripcion.service";

@graphql.Resolver(() => Inscripcion)
export class InscripcionResolver extends InscripcionResolverBase {
  constructor(protected readonly service: InscripcionService) {
    super(service);
  }
}
