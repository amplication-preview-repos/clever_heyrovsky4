import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SocioTitle } from "../socio/SocioTitle";

export const ServicioExtraCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="fecha_fin" source="fechaFin" />
        <DateTimeInput label="fecha_inicio" source="fechaInicio" />
        <ReferenceInput source="socio.id" reference="Socio" label="Socio">
          <SelectInput optionText={SocioTitle} />
        </ReferenceInput>
        <SelectInput
          source="tipoServicio"
          label="tipo_servicio"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
