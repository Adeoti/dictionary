import React, {useContext, useState, useEffect} from 'react'
import { DictionaryContext } from './contexts/DictionaryContext';
import Axios from 'axios';
const Dictionaryoutput = () => {

    const {dicstatus, setDicstatus, dicword, setDicword} = useContext(DictionaryContext);
    const [dicresult, setDicresult] = useState([]);
    const [partofspeech, setPartofspeech] = useState();
    const [phonetic, setPhonetic] = useState();
    const [wordaudioo, setWordaudioo] = useState();
    const [dicmeanings, setDicmeanings] = useState([]);
    const [dicerror, setDicerror] = useState(false);
    const [dicsuccess, setDicsuccess] = useState(false);
    const [dicnewword, setDicnewword] = useState();

       
        let partofspeechr = "";
        let phoneticr = "";
        let wordaudio = "";
        let meanings = "";
        let dicArr = [];
        let dicLarge = [];
        useEffect(() => {
        //if(dicstatus){
            const fetchWordData = async () => {
                try {
                  const response = await Axios.get(
                    `https://api.dictionaryapi.dev/api/v2/entries/en/${dicword}`
                  );
               
                    partofspeechr = response.data[0].meanings[0].partOfSpeech;
                    wordaudio = response.data[0].phonetics[0].audio;
                    phoneticr = response.data[0].phonetic;
                    meanings = response.data[0].meanings[0].definitions;
                    setPartofspeech(partofspeechr);
                    setPhonetic(phoneticr);
                    setWordaudioo(wordaudio);                 
                    setDicnewword(response.data[0].word)
                    dicLarge = Object.values(response.data);

                    setDicresult(dicLarge);


                  
                    if(response.status == 200){
                        setDicsuccess(true);
                        setDicerror(false);
                    }
                    meanings.forEach((meaning) =>{
                         
                         dicArr.push(meaning.definition);
                    });
                        let newArr = Object.values(dicArr);
                        setDicmeanings(newArr);

       // } 
    } catch (error) {
        console.error(`This is the error ${error}`);
            if(error == "AxiosError: Request failed with status code 404"){
                setDicerror(true);
            }
    }
  };

       if (dicstatus && dicword) {
        fetchWordData();
      }
        }, [dicstatus, dicword]);
        
        


  return (
    <div className='dictionaryoutput'>
      <div className='bridge'>
        { 
            
          dicerror ? (<div className='dictionary__result' style={{padding:'20px'}}>
            No result for your search <u>{dicword}</u> ...
          </div>) : (
            dicsuccess && 
        <div className='dictionary__result'>
            <h2> <b>{dicnewword}</b> &nbsp; <span style={{padding:'3px 10px'}}>{"["+phonetic+"]"}</span>
                <audio src={wordaudioo} controls style={{width:'80px', borderRadius:'20px',border:'1px solid #ff304f'}}></audio>
            </h2>
            
           
            <div className='dicmeanings'>
          

                {
                    dicresult.map((sing, nom) => (
                        <div key={nom}>
                            <br/><i style={{color:'#775ada'}}>{sing.meanings[0].partOfSpeech}</i>
                            <br/><ol>{
                              
                                sing.meanings[0].definitions.map((mn, ky) =>
                                   //console.log(typeof(mn.definition[0]))
                                   <li key={ky}>{mn.definition}</li>
                                )
                                
                            
                            }</ol>
                        </div>
                    ))
                }
            </div>
        </div>
          )
        
        }
      </div>
    </div>
  )
}

export default Dictionaryoutput