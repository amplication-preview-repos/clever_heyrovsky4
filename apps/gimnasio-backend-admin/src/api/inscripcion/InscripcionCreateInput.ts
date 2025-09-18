import { PagoCreateNestedManyWithoutInscripcionsInput } from "./PagoCreateNestedManyWithoutInscripcionsInput";
import { SocioWhereUniqueInput } from "../socio/SocioWhereUniqueInput";

export type InscripcionCreateInput = {
  fechaFin?: Date | null;
  fechaInicio?: Date | null;
  pagos?: PagoCreateNestedManyWithoutInscripcionsInput;
  plan?: "Option1" | null;
  socio?: SocioWhereUniqueInput | null;
};
