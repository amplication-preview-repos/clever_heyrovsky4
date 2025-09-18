import { Inscripcion as TInscripcion } from "../api/inscripcion/Inscripcion";

export const INSCRIPCION_TITLE_FIELD = "id";

export const InscripcionTitle = (record: TInscripcion): string => {
  return record.id?.toString() || String(record.id);
};
