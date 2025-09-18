import { ServicioExtraWhereInput } from "./ServicioExtraWhereInput";
import { ServicioExtraOrderByInput } from "./ServicioExtraOrderByInput";

export type ServicioExtraFindManyArgs = {
  where?: ServicioExtraWhereInput;
  orderBy?: Array<ServicioExtraOrderByInput>;
  skip?: number;
  take?: number;
};
