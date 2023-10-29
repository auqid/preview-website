{/**Import Images like this to avoid Deployment issues*/}
import reactImg from './assets/react-core-concepts.png'
import Header from './components/Header';
import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcepts';

function App() {
  return (
    <div>
      <Header/>
      
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/**Getting an object from Data.js and passing its keyValue pairs as props. */}
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            {/**Different way using a spread operator */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            
          </ul>
        </section>
      </main>
    </div>
  );
}



export default App;
