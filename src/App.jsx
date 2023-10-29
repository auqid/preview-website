{/**Import Images like this to avoid Deployment issues*/}

import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcepts';
import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const[selectedTopic,setSelectedTopic]=useState()
  function selectHandler(selectedButton){
    setSelectedTopic(selectedButton)
  }
  let tabContent = <p>Please select a topic.</p>
  if (selectedTopic){
    tabContent =(
      <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <code>{EXAMPLES[selectedTopic].code}</code>

          </div>

    )
  }
  return (
    <div>
      <Header/>
      
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/**using map method to render a list dynamically */}
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.item}{...conceptItem}/>)}
            {/* Getting an object from Data.js and passing its keyValue pairs as props. 
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            **Different way using a spread operator 
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
              */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>selectHandler('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>selectHandler('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>selectHandler('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}



export default App;
