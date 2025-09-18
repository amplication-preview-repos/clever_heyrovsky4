import { InscripcionWhereInput } from "./InscripcionWhereInput";
import { InscripcionOrderByInput } from "./InscripcionOrderByInput";

export type InscripcionFindManyArgs = {
  where?: InscripcionWhereInput;
  orderBy?: Array<InscripcionOrderByInput>;
  skip?: number;
  take?: number;
};
