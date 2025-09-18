import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SocioList } from "./socio/SocioList";
import { SocioCreate } from "./socio/SocioCreate";
import { SocioEdit } from "./socio/SocioEdit";
import { SocioShow } from "./socio/SocioShow";
import { InscripcionList } from "./inscripcion/InscripcionList";
import { InscripcionCreate } from "./inscripcion/InscripcionCreate";
import { InscripcionEdit } from "./inscripcion/InscripcionEdit";
import { InscripcionShow } from "./inscripcion/InscripcionShow";
import { PagoList } from "./pago/PagoList";
import { PagoCreate } from "./pago/PagoCreate";
import { PagoEdit } from "./pago/PagoEdit";
import { PagoShow } from "./pago/PagoShow";
import { ServicioExtraList } from "./servicioExtra/ServicioExtraList";
import { ServicioExtraCreate } from "./servicioExtra/ServicioExtraCreate";
import { ServicioExtraEdit } from "./servicioExtra/ServicioExtraEdit";
import { ServicioExtraShow } from "./servicioExtra/ServicioExtraShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Gimnasio Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Socio"
          list={SocioList}
          edit={SocioEdit}
          create={SocioCreate}
          show={SocioShow}
        />
        <Resource
          name="Inscripcion"
          list={InscripcionList}
          edit={InscripcionEdit}
          create={InscripcionCreate}
          show={InscripcionShow}
        />
        <Resource
          name="Pago"
          list={PagoList}
          edit={PagoEdit}
          create={PagoCreate}
          show={PagoShow}
        />
        <Resource
          name="ServicioExtra"
          list={ServicioExtraList}
          edit={ServicioExtraEdit}
          create={ServicioExtraCreate}
          show={ServicioExtraShow}
        />
      </Admin>
    </div>
  );
};

export default App;
