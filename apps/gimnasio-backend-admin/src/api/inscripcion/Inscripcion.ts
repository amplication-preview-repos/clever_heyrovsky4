import { Pago } from "../pago/Pago";
import { Socio } from "../socio/Socio";

export type Inscripcion = {
  createdAt: Date;
  fechaFin: Date | null;
  fechaInicio: Date | null;
  id: string;
  pagos?: Array<Pago>;
  plan?: "Option1" | null;
  socio?: Socio | null;
  updatedAt: Date;
};
