import { InscripcionUpdateManyWithoutSociosInput } from "./InscripcionUpdateManyWithoutSociosInput";
import { ServicioExtraUpdateManyWithoutSociosInput } from "./ServicioExtraUpdateManyWithoutSociosInput";

export type SocioUpdateInput = {
  activo?: boolean | null;
  apellido?: string | null;
  correo?: string | null;
  fechaRegistro?: Date | null;
  inscripcions?: InscripcionUpdateManyWithoutSociosInput;
  nombre?: string | null;
  servicioExtras?: ServicioExtraUpdateManyWithoutSociosInput;
  telefono?: string | null;
};
