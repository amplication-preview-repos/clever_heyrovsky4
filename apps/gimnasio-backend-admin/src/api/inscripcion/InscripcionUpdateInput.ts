import { PagoUpdateManyWithoutInscripcionsInput } from "./PagoUpdateManyWithoutInscripcionsInput";
import { SocioWhereUniqueInput } from "../socio/SocioWhereUniqueInput";

export type InscripcionUpdateInput = {
  fechaFin?: Date | null;
  fechaInicio?: Date | null;
  pagos?: PagoUpdateManyWithoutInscripcionsInput;
  plan?: "Option1" | null;
  socio?: SocioWhereUniqueInput | null;
};
