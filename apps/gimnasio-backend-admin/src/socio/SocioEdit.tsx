import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InscripcionTitle } from "../inscripcion/InscripcionTitle";
import { ServicioExtraTitle } from "../servicioExtra/ServicioExtraTitle";

export const SocioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="activo" source="activo" />
        <TextInput label="apellido" source="apellido" />
        <TextInput label="correo" source="correo" type="email" />
        <DateTimeInput label="fecha_registro" source="fechaRegistro" />
        <ReferenceArrayInput source="inscripcions" reference="Inscripcion">
          <SelectArrayInput
            optionText={InscripcionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="nombre" source="nombre" />
        <ReferenceArrayInput source="servicioExtras" reference="ServicioExtra">
          <SelectArrayInput
            optionText={ServicioExtraTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="telefono" source="telefono" />
      </SimpleForm>
    </Edit>
  );
};
