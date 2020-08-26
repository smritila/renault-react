import React from 'react';
import {Route, Switch} from "react-router-dom";

import Layout from './hoc/Layout';
import CarModels from './containers/CarModels/CarModels';
import LegalInfo from './components/StaticPages/LegalInfo';
import PersonalDataProtection from './components/StaticPages/PersonalDataProtection' ;
import AboutRenault from './components/StaticPages/AboutRenault'

function App() {
  return <Layout>
    <Switch>
        <Route path="/about">
          <AboutRenault />
        </Route>
        <Route path="/legal">
          <LegalInfo />
        </Route>
        <Route path="/personal-data-protection">
          <PersonalDataProtection />
        </Route>
        <Route path="/">
          <CarModels />
        </Route>
    </Switch>
  </Layout>;  
}

export default App;
