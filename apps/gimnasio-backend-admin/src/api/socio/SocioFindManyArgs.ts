import { SocioWhereInput } from "./SocioWhereInput";
import { SocioOrderByInput } from "./SocioOrderByInput";

export type SocioFindManyArgs = {
  where?: SocioWhereInput;
  orderBy?: Array<SocioOrderByInput>;
  skip?: number;
  take?: number;
};
