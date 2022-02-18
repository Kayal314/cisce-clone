import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

function Header() {


  return (
    <div className='header'>
        <div className='header_top'>
            <LocationOnIcon style={{color:'#d04e3a'}}/>
            <text className='header_top_link'>Locate a School</text> | 
            <text className='header_top_link'>FAQs</text> |
            <text className='header_top_link'>Sitemap</text> 
            <FacebookIcon style={{color: '#808080'}}/>
            <TwitterIcon style={{color:'#808080'}}/>
            <LinkedInIcon style={{color:'#808080'}}/>
            <div className='header_top_search'>
                <SearchIcon/>
                <input placeholder="Search" type='text' className='header_top_input'></input>
            </div>
        </div>
        <div className='header_bottom'>
            <img src='https://www.cisce.org/images/cisce-60-logo-new.png' alt='CISCE Logo'/>
            <h1>COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS</h1>  
        </div>
    </div>
  )
}

export default Header