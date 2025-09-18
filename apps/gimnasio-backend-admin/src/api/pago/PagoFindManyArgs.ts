import { PagoWhereInput } from "./PagoWhereInput";
import { PagoOrderByInput } from "./PagoOrderByInput";

export type PagoFindManyArgs = {
  where?: PagoWhereInput;
  orderBy?: Array<PagoOrderByInput>;
  skip?: number;
  take?: number;
};
