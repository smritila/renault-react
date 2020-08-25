import React from 'react';

import Layout from './hoc/Layout';
import CarModels from './containers/CarModels/CarModels';
import LegalInfo from './components/StaticPages/LegalInfo';
import PersonalDataProtection from './components/StaticPages/PersonalDataProtection' ;
import AboutRenault from './components/StaticPages/AboutRenault';


function App() {
  return <Layout>
   <LegalInfo />
  </Layout>;
  
}

export default App;
