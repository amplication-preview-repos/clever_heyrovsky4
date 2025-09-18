import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SocioWhereUniqueInput } from "../socio/SocioWhereUniqueInput";

export type ServicioExtraWhereInput = {
  fechaFin?: DateTimeNullableFilter;
  fechaInicio?: DateTimeNullableFilter;
  id?: StringFilter;
  socio?: SocioWhereUniqueInput;
  tipoServicio?: "Option1";
};
