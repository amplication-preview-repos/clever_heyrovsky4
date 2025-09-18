import { SortOrder } from "../../util/SortOrder";

export type PagoOrderByInput = {
  createdAt?: SortOrder;
  fechaPago?: SortOrder;
  id?: SortOrder;
  inscripcionId?: SortOrder;
  metodoPago?: SortOrder;
  monto?: SortOrder;
  updatedAt?: SortOrder;
};
