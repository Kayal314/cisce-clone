import React from 'react';
import './Publications.css';

function Publications() {

    const publication = (image, text) => {
        return (
            <div className='publication'>
                <img src={image} alt={text}/>
                <text>{text}</text>
            </div>
        );
    }

  return (
    <div className='publications'>
        <p className='publications_title'>THE COUNCIL'S PUBLICATIONS</p>
        {publication('https://cisce.org//UploadedFiles/Images/0%20Cover%20page.jpg','ISC')}
        {publication('https://cisce.org//UploadedFiles/Images/0.%20ICSE%20Cover(1).jpg','ICSE')}
        <p className='publication_plus'>+More</p>
    </div>
  );
}

export default Publications;