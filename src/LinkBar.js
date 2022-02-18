import React from 'react';
import Blob from './Blob';
import './LinkBar.css';

function LinkBar() {

  return (
    <div className='linkbar'>
        <Blob color='#a1303d' title='AFFILIATION'/>
        <Blob color='#95b232' title='I.C.S.E.' subtitle='(CLASS X)'/>
        <Blob color='#2f70c0' title='I.S.C.'  subtitle='(CLASS XII)'/>
        <Blob color='#ff8dc5' title='C.V.E.'  subtitle='(CLASS X)'/>
        <Blob color='#42c2cd' title='RDCD'/>
        <Blob color='#1b0086' title='GAMES' subtitle='& SPORTS'/>
        <Blob color='#ff9933' title='SERVICES'/>
    </div>
  );
}

export default LinkBar;