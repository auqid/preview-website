import React from 'react'
import { useState } from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'

const Examples = () => {
    const[selectedTopic,setSelectedTopic]=useState('components')
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
  )
}

export default Examples
