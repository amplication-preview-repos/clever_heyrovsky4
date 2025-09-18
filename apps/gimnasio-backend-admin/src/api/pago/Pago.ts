import { Inscripcion } from "../inscripcion/Inscripcion";

export type Pago = {
  createdAt: Date;
  fechaPago: Date | null;
  id: string;
  inscripcion?: Inscripcion | null;
  metodoPago?: "Option1" | null;
  monto: number | null;
  updatedAt: Date;
};
