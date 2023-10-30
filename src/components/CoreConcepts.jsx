import React from 'react'
import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data'

const CoreConcepts = () => {
  return (
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
  )
}

export default CoreConcepts





