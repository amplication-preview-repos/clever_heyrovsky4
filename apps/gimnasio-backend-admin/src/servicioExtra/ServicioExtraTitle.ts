import { ServicioExtra as TServicioExtra } from "../api/servicioExtra/ServicioExtra";

export const SERVICIOEXTRA_TITLE_FIELD = "id";

export const ServicioExtraTitle = (record: TServicioExtra): string => {
  return record.id?.toString() || String(record.id);
};
