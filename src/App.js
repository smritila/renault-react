import React from 'react';
import {Route, Switch} from "react-router-dom";

import Layout from './hoc/Layout';

import CarModels from './containers/CarModels/CarModels';
import CarSpecification from './containers/CarSpecification/CarSpecification';

import LegalInfo from './components/StaticPages/LegalInfo';
import PersonalDataProtection from './components/StaticPages/PersonalDataProtection' ;
import AboutRenault from './components/StaticPages/AboutRenault';


function App() {
  return <Layout>
    <Switch>
        <Route path="/about" component={AboutRenault} />
        <Route path="/legal" component={LegalInfo} />
        <Route path="/personal-data-protection" component={PersonalDataProtection} />
        <Route path="/car-specification" component={CarSpecification} />
        <Route path="/" component={CarModels} />
    </Switch>
  </Layout>;  
}

export default App;
