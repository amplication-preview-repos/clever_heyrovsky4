import { InscripcionWhereUniqueInput } from "../inscripcion/InscripcionWhereUniqueInput";

export type PagoUpdateInput = {
  fechaPago?: Date | null;
  inscripcion?: InscripcionWhereUniqueInput | null;
  metodoPago?: "Option1" | null;
  monto?: number | null;
};
