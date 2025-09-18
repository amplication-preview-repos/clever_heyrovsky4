import { registerEnumType } from "@nestjs/graphql";

export enum EnumMetodoPago {
    Efectivo = "EFECTIVO",
    Tarjeta = "TARJETA",
    Transferencia = "TRANSFERENCIA"
}

registerEnumType(EnumMetodoPago, {
    name: "EnumMetodoPago",
  });