import React from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './NoticeBoard.css';

function NoticeBoard() {

    const notice = (day, month, details) => {
        return (
            <div className='notice'>
                <CalendarTodayIcon className='icon'/>
                <p className='details'>{details}</p>
                <div className='date'>
                    <text>{day}</text>
                    <text>{month}</text>
                </div>
            </div>
        );
    }

  return (
    <div className='notice_board'>
        <p className='notice_board_title'>Notice Board</p>
        <div className='notice_contents'>
            {notice('14','Feb','Start date of the ICSE and ISC 2021-2022 Semester 2 Examinations and advisory on the conduct of Pre-Board Examinations.')}
            {notice('04','Feb','RESULTS of the ICSE and ISC YEAR 2021-2022 SEMESTER 1 EXAMINATIONS')}
            {notice('01', 'Feb','Batch 5 of NISHTHA 3.0 (FLN) Online Courses on DIKSHA Platform for teachers (Preschool to Class V)')}
            {notice('27' ,'Jan','EXTENSION OF LAST DATE OF CONSTITUTION QUIZ COMPETITION 2021 - LET’S EXPLORE OUR CONSTITUTION (ON DIKSHA PLATFORM)')}
            {notice('17' ,'Dec','Online Courses for Continuous Professional Development of Teachers')}
            <p className='plus'>+More</p>
        </div>
    </div>
  );
}

export default NoticeBoard;