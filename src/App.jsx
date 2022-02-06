import './App.css';
import React, { useState } from 'react'
import Header from './components/Header/Header'
import SearchBox from './components/Search/SearchBox';
import ResultGenerator from './components/ResultGenerator/ResultGenerator';




function App() {

  const [headerText, setheaderText] = useState('You Name It!');
  const [headExpanded, setheadExpanded] = useState(true);
  const [suggestedNames, setsuggestedNames] = useState([]);



  const name = require('@rstacruz/startup-name-generator')

  const handleChange = (inputText) => {
    setsuggestedNames(inputText? name(inputText):[]);

    if (inputText.length == 0) {
      setheadExpanded(true)
    }
    else {
      setheadExpanded(false)
    }
  }

  return (


    <div>
      <Header transition={headExpanded} headerTitle={headerText} />
      <SearchBox handleChange={handleChange} />
      <ResultGenerator names={suggestedNames} />
    </div>
  );
}

export default App;
