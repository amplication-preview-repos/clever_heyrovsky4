import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { PagoTitle } from "../pago/PagoTitle";
import { SocioTitle } from "../socio/SocioTitle";

export const InscripcionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="fecha_fin" source="fechaFin" />
        <DateTimeInput label="fecha_inicio" source="fechaInicio" />
        <ReferenceArrayInput source="pagos" reference="Pago">
          <SelectArrayInput
            optionText={PagoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="plan"
          label="plan"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="socio.id" reference="Socio" label="Socio">
          <SelectInput optionText={SocioTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
