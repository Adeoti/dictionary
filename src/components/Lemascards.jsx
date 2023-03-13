import React from 'react'

const Lemascards = ({word, image}) => {
  return (
    <>
      <div className='lemas_card'>
        <h3 style={{color:'#002651'}}>{word}</h3>
            <div className='lema__sponsored'>
                <div className='left__sponsored'>
                    <h2>I'm open for a job offer!</h2><h3>I'm Adeoti, A frontend developer</h3>
                    <br/><p>
                        I've mastered the art of web development and design for over 9 years, and I know what it takes to prioritize user experience (ux). 
                        
                    </p><br/>
                    <p>
                    I'm a best fit. Kindly consider my application as I will perform exceptionally well in handling your job and projects.

                    </p>
                        <center>&dArr;
    
                           <br/> <br/><a href='mailto:adeoti360@gmail.com' style={{color:'#fff', backgroundColor:'#775ada', textDecoration:'none', padding:'10px'}}>Send me a mail</a>
                        </center>
                    </div>
                <div className='right__sponsored'>
                    <img src={image} />
                </div>
            </div>
      </div>
    </>
  )
}

export default Lemascards
