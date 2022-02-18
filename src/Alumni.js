import React from 'react';
import './Alumni.css';

function Alumni() {

    const alumni_des = (name, des) => {
        return (
            <div className='alum'>
                <p className='alum_name'>{name}</p>
                <p className='alum_des'>{des}</p>
            </div>
        );
    }

  return (
    <div className='alumni'>
        <p className='alumni_heading'>CISCE - ALUMNI</p>
        <div className='alumni_scroll'>
            {alumni_des('Dilip Sinha','Ambassador and permanent representative of India to the United Nations in Geneva. Currently Chairman of the Manipur Public Service Commission, India')}
            {alumni_des('Dr. Cyrus S. Poonawalla','Chairman of Poonawalla Group, Padma Shri awardee')}
            {alumni_des('Vikas Dilawari','Renowned conservation architect and winner of UNESCO ASIA PACIFIC Awards for Cultural Preservation in SE Asia')}
            {alumni_des('Altamas Kabir','Former Chief Justice of India')}
            {alumni_des('Neerja Bhanot','Sr. Flt. Purser with PanAm Airways, recipient of the Ashoka Chakra posthumously')}
            {alumni_des('Sunil Bharti Mittal','Well known entrepreneur and the founder, chairman and CEO of Bharti Enterprises, Padma Bhushan awardee')}
            {alumni_des('Vinod Khanna','Renowned Indian actor, film producer and politician')}
            {alumni_des('Shankar Roychowdhury PVSM ADC (Retd.)','Former Chief of Army Staff and former member of the Parliament')}
            {alumni_des('Nargis Dutt','Well known actress and Padma Shri awardee')}
        </div>
    </div>
  );
}

export default Alumni;