import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InscripcionListRelationFilter } from "../inscripcion/InscripcionListRelationFilter";
import { ServicioExtraListRelationFilter } from "../servicioExtra/ServicioExtraListRelationFilter";

export type SocioWhereInput = {
  activo?: BooleanNullableFilter;
  apellido?: StringNullableFilter;
  correo?: StringNullableFilter;
  fechaRegistro?: DateTimeNullableFilter;
  id?: StringFilter;
  inscripcions?: InscripcionListRelationFilter;
  nombre?: StringNullableFilter;
  servicioExtras?: ServicioExtraListRelationFilter;
  telefono?: StringNullableFilter;
};
