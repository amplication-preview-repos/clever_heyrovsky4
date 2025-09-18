import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InscripcionWhereUniqueInput } from "../inscripcion/InscripcionWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PagoWhereInput = {
  fechaPago?: DateTimeNullableFilter;
  id?: StringFilter;
  inscripcion?: InscripcionWhereUniqueInput;
  metodoPago?: "Option1";
  monto?: FloatNullableFilter;
};
