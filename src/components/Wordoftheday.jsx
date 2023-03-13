import React from 'react'

const Wordoftheday = () => {

        let today = new Date();
        today = today.toLocaleDateString();


  return (
    <div className='wordoftheday'>
        <div className='bridge'>
            <div className='wordoftheday__card'>
                <h1 className='wordoftheday__block'>WORDS OF THE DAY</h1>
                <div className='wordoftheday__box'>
                    <h2>abrogate</h2>
                    <span style={{color:'#ff304f'}}>[ab·​ro·​gate]</span>
                    <p>
                        <b>Formal:</b> to treat as nonexistent : to fail to do what is required by (something, such as a responsibility)
                    </p><br/>
                    <span style={{fontSize:'14px'}}>{today}</span>
                </div>
                <div className='wordoftheday__box'>
                    <h2>programming</h2>
                    <span style={{color:'#ff304f'}}>[pro·​gram·​ming]</span>
                    <p>
                        <b>Formal:</b> to treat as nonexistent : to fail to do what is required by (something, such as a responsibility)
                    </p><br/>
                    <span style={{fontSize:'14px'}}>{today}</span>
                
                </div>
                <div className='wordoftheday__box'>
                    <h2>interview</h2>
                    <span style={{color:'#ff304f'}}>[in·​ter·​view]</span>
                    <p>
                        <b>:</b>a meeting at which information is obtained (as by a reporter, television commentator, or pollster) from a person
                    </p><br/>
                    <span style={{fontSize:'14px'}}>{today}</span>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wordoftheday
