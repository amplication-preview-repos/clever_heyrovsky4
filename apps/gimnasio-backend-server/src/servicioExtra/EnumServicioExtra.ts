import { registerEnumType } from "@nestjs/graphql";

export enum EnumServicioExtra {
    Personalizado = "PERSONALIZADO",
    Semipersonalizado = "SEMIPERSONALIZADO",
    RutinaDieta = "RUTINA_DIETA",
    RutinaBasica = "RUTINA_BASICA"
}

registerEnumType(EnumServicioExtra, {
    name: "EnumServicioExtra",
  });