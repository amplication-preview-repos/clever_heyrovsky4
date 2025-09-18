import { Socio } from "../socio/Socio";

export type ServicioExtra = {
  createdAt: Date;
  fechaFin: Date | null;
  fechaInicio: Date | null;
  id: string;
  socio?: Socio | null;
  tipoServicio?: "Option1" | null;
  updatedAt: Date;
};
