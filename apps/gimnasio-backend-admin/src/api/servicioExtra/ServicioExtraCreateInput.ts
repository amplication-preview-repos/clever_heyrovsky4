import { SocioWhereUniqueInput } from "../socio/SocioWhereUniqueInput";

export type ServicioExtraCreateInput = {
  fechaFin?: Date | null;
  fechaInicio?: Date | null;
  socio?: SocioWhereUniqueInput | null;
  tipoServicio?: "Option1" | null;
};
