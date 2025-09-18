import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INSCRIPCION_TITLE_FIELD } from "./InscripcionTitle";
import { SOCIO_TITLE_FIELD } from "../socio/SocioTitle";

export const InscripcionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fecha_fin" source="fechaFin" />
        <TextField label="fecha_inicio" source="fechaInicio" />
        <TextField label="ID" source="id" />
        <TextField label="plan" source="plan" />
        <ReferenceField label="Socio" source="socio.id" reference="Socio">
          <TextField source={SOCIO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Pago"
          target="inscripcionId"
          label="Pagos"
        >
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
