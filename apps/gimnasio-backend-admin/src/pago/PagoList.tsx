import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INSCRIPCION_TITLE_FIELD } from "../inscripcion/InscripcionTitle";

export const PagoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Pagos"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha_pago" source="fechaPago" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Inscripcion"
          source="inscripcion.id"
          reference="Inscripcion"
        >
          <TextField source={INSCRIPCION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="metodo_pago" source="metodoPago" />
        <TextField label="monto" source="monto" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
