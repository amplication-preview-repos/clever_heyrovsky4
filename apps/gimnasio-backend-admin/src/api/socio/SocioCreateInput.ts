import { InscripcionCreateNestedManyWithoutSociosInput } from "./InscripcionCreateNestedManyWithoutSociosInput";
import { ServicioExtraCreateNestedManyWithoutSociosInput } from "./ServicioExtraCreateNestedManyWithoutSociosInput";

export type SocioCreateInput = {
  activo?: boolean | null;
  apellido?: string | null;
  correo?: string | null;
  fechaRegistro?: Date | null;
  inscripcions?: InscripcionCreateNestedManyWithoutSociosInput;
  nombre?: string | null;
  servicioExtras?: ServicioExtraCreateNestedManyWithoutSociosInput;
  telefono?: string | null;
};
