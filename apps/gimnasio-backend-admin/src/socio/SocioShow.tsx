import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SOCIO_TITLE_FIELD } from "./SocioTitle";

export const SocioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="activo" source="activo" />
        <TextField label="apellido" source="apellido" />
        <TextField label="correo" source="correo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha_registro" source="fechaRegistro" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Inscripcion"
          target="socioId"
          label="Inscripcions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="fecha_fin" source="fechaFin" />
            <TextField label="fecha_inicio" source="fechaInicio" />
            <TextField label="ID" source="id" />
            <TextField label="plan" source="plan" />
            <ReferenceField label="Socio" source="socio.id" reference="Socio">
              <TextField source={SOCIO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ServicioExtra"
          target="socioId"
          label="ServicioExtras"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
