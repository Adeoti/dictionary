import React from 'react'
import Lemascards from './Lemascards';
import portcapture from '../images/portcaptureb.jpg';

const Lemas = () => {
  return (
    <div className='lemas'>
      <div className='bridge'>
        <div className='lemas__cards'>
            <Lemascards word="Sponsored" image={portcapture}/>
        </div>
      </div>
    </div>
  )
}

export default Lemas
