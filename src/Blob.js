import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './Blob.css';

function Blob({color, title, subtitle}) {

    const style_color = (color_) => ({
        backgroundColor: color_,
      });

  return (
    <div className='blob' style={style_color(color)}>
        <text >{title}</text>
        {subtitle && <text>{subtitle}</text>}
        {!subtitle && <br/>}
        <AddIcon className='blob_plus'/>
    </div>

  );
}

export default Blob;