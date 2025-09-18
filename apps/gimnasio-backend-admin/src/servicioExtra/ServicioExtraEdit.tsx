import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SocioTitle } from "../socio/SocioTitle";

export const ServicioExtraEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
