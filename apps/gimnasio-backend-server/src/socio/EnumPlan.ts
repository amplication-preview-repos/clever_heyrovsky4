import { registerEnumType } from "@nestjs/graphql";

export enum EnumPlan {
    Dia = "DIA",
    Semana = "SEMANA",
    Quincena = "QUINCENA",
    Mensual = "MENSUAL",
    Trimestral = "TRIMESTRAL",
    Semestral = "SEMESTRAL",
    Anual = "ANUAL"
}

registerEnumType(EnumPlan, {
    name: "EnumPlan",
  });