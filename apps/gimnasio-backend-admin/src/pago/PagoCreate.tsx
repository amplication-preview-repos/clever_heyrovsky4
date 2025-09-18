import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { InscripcionTitle } from "../inscripcion/InscripcionTitle";

export const PagoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="fecha_pago" source="fechaPago" />
        <ReferenceInput
          source="inscripcion.id"
          reference="Inscripcion"
          label="Inscripcion"
        >
          <SelectInput optionText={InscripcionTitle} />
        </ReferenceInput>
        <SelectInput
          source="metodoPago"
          label="metodo_pago"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="monto" source="monto" />
      </SimpleForm>
    </Create>
  );
};
