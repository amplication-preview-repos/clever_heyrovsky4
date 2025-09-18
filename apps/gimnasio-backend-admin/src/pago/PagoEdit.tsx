import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { InscripcionTitle } from "../inscripcion/InscripcionTitle";

export const PagoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
