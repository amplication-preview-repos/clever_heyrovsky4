import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INSCRIPCION_TITLE_FIELD } from "../inscripcion/InscripcionTitle";

export const PagoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
