import React from 'react';
import './Highlights.css';

function Highlights() {

    const highlight = (number, description) => {
        return (
            <div className='highlight'>
                <text className='number'>{number}</text>
                <text className='description'>{description}</text>
            </div>
        );
    }

  return (
        <div className='highlights'>
        <text className='heading'>Examination Highlights</text>
        {highlight('2,06,525','Candidates passed in ICSE 2020')}
        {highlight('85,611','Candidates passed in ISC 2020')}
        {highlight('94,937','Number of Girls passed in ICSE')}
        {highlight('40,170','Number of Girls passed in ISC')}
        {highlight('1,11,588','Number of Boys passed in ICSE')}
        {highlight('45,441','Number of Boys passed in ISC')}
        <p className='more_btn'>+More</p>
    </div>
  )
}

export default Highlights;