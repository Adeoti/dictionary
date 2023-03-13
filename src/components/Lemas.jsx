import React from 'react'
import Lemascards from './Lemascards';
import portcapture from '../images/portcapture.jpg';

const Lemas = () => {
  return (
    <div className='lemas'>
      <div className='bridge'>
        <div className='lemas__cards'>
            <Lemascards word="Sponsored" image={portcapture} desc=""/>
        </div>
      </div>
    </div>
  )
}

export default Lemas
