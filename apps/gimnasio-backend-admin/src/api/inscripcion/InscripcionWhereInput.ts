import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PagoListRelationFilter } from "../pago/PagoListRelationFilter";
import { SocioWhereUniqueInput } from "../socio/SocioWhereUniqueInput";

export type InscripcionWhereInput = {
  fechaFin?: DateTimeNullableFilter;
  fechaInicio?: DateTimeNullableFilter;
  id?: StringFilter;
  pagos?: PagoListRelationFilter;
  plan?: "Option1";
  socio?: SocioWhereUniqueInput;
};
