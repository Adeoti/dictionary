import React, {useContext, useRef} from 'react';
import { DictionaryContext } from './contexts/DictionaryContext';
const Hero = () => {

    const {dicstatus, setDicstatus, dicword, setDicword} = useContext(DictionaryContext);

        const wordsearcher = useRef();
        const searchWord = (e) => {
            e.preventDefault();
            let searchedword = wordsearcher.current.value;
            if(searchedword.length > 0){
                setDicword(searchedword);
                setDicstatus(true);
            }else{
                alert("You have to type your word or phrase to search!");
                setDicstatus(false);
            }
        }

  return (
    <div className='hero'>
      <div className='bridge'>
        <div className='hero__card'>
            <nav className='hero__navbar'>
                <h4><span style={{color:'#775ada'}}>&clubs;</span>DictIt App</h4>  <a href='#'>by Adeoti</a>
            </nav>
            <div className='hero__intro'>
                <h2>DictIt Powerful Dictionary</h2>
                <p>
                Search for your words or phrases and get quick definitions with clear and concise examples
                </p>
            </div>
            <div className='hero__searchbox'>
            <form onSubmit={searchWord}>
                <input type="text" ref={wordsearcher} placeholder='Search for any word or phrase'/>
            </form>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
