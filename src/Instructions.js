import React from 'react';
import './Instructions.css';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

function Instructions() {

    const instruction = (text) => {
        return (
            <div className='instruction'>
                <PictureAsPdfIcon style={{color:'#ff0000'}}/>
                <p>{text}</p>
            </div>
        );
    }


  return (
    <div className='instructions'>
        {instruction('Instruction for Issue of Duplicate Document(s) Online')}
        {instruction('Instruction for Verfication of Documents Online')}
    </div>
  );
}

export default Instructions;