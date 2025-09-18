import { SortOrder } from "../../util/SortOrder";

export type InscripcionOrderByInput = {
  createdAt?: SortOrder;
  fechaFin?: SortOrder;
  fechaInicio?: SortOrder;
  id?: SortOrder;
  plan?: SortOrder;
  socioId?: SortOrder;
  updatedAt?: SortOrder;
};
