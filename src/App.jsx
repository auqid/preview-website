{/**Import Images like this to avoid Deployment issues*/}

import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header/>
      
      <main>
       <CoreConcepts/>
       <Examples/>
        
      </main>
    </>
  );
}



export default App;
