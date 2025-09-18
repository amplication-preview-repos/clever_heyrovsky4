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
import { SOCIO_TITLE_FIELD } from "../socio/SocioTitle";

export const ServicioExtraList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ServicioExtras"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha_fin" source="fechaFin" />
        <TextField label="fecha_inicio" source="fechaInicio" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Socio" source="socio.id" reference="Socio">
          <TextField source={SOCIO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tipo_servicio" source="tipoServicio" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
