import React from 'react';
import './News.css';

function News() {
  return (
    <div className='news'>
        <p className='news_heading'>News</p>
        <p className='news_content'>The results of the ISC Semester 1 Examinations will be released on 10th February, 2022 at 10:00 am</p>
        <p className='news_content'>Two new online courses for teachers will be offered by the NCERT on Diksha Platform, starting 15th February, 2022</p>
        <p className='more_news'>+More</p>
    </div>
  );
}

export default News;