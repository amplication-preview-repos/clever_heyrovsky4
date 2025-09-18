import { Pago as TPago } from "../api/pago/Pago";

export const PAGO_TITLE_FIELD = "id";

export const PagoTitle = (record: TPago): string => {
  return record.id?.toString() || String(record.id);
};
