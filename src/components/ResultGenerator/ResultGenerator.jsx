import React from 'react'
import './ResultGenerator.css'
import NameCard from '../NameCard/NameCard';

function ResultGenerator({names}) {

  console.log(names)
  var startUpnames = names.map((name)=>{
    return <NameCard key={name} suggestedName={name} />
  });

  return (
    <div className='results-container'>
      {startUpnames.length > 0 && startUpnames}
    </div>
  )
}

export default ResultGenerator
