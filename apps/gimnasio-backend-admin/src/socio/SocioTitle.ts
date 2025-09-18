import { Socio as TSocio } from "../api/socio/Socio";

export const SOCIO_TITLE_FIELD = "apellido";

export const SocioTitle = (record: TSocio): string => {
  return record.apellido?.toString() || String(record.id);
};
