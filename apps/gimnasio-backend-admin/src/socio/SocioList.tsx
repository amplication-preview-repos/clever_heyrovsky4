import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const SocioList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Socios"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="activo" source="activo" />
        <TextField label="apellido" source="apellido" />
        <TextField label="correo" source="correo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha_registro" source="fechaRegistro" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
