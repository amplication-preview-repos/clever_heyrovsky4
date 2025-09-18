import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SOCIO_TITLE_FIELD } from "../socio/SocioTitle";

export const ServicioExtraShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha_fin" source="fechaFin" />
        <TextField label="fecha_inicio" source="fechaInicio" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Socio" source="socio.id" reference="Socio">
          <TextField source={SOCIO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tipo_servicio" source="tipoServicio" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
