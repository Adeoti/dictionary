import React, {useState} from 'react'
import Dictionaryoutput from './Dictionaryoutput'
import Footer from './Footer'
import Hero from './Hero'
import Lemas from './Lemas'
import Wordoftheday from './Wordoftheday'
import {DictionaryContext} from './contexts/DictionaryContext.jsx';

const Home = () => {

    const [dicstatus, setDicstatus] = useState(false);
    const [dicword, setDicword] = useState("wordmi");


  return (
    <div>
    <DictionaryContext.Provider value={{dicstatus,setDicstatus,dicword,setDicword}}>
      <Hero/>
      <Dictionaryoutput/>
      <Wordoftheday/>
      <Lemas/>
      <Footer/>
      </DictionaryContext.Provider>
    </div>
  )
}

export default Home
