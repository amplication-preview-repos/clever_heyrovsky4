import { Inscripcion } from "../inscripcion/Inscripcion";
import { ServicioExtra } from "../servicioExtra/ServicioExtra";

export type Socio = {
  activo: boolean | null;
  apellido: string | null;
  correo: string | null;
  createdAt: Date;
  fechaRegistro: Date | null;
  id: string;
  inscripcions?: Array<Inscripcion>;
  nombre: string | null;
  servicioExtras?: Array<ServicioExtra>;
  telefono: string | null;
  updatedAt: Date;
};
