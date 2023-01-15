import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrap">
        <div className="left">
            <b>Be in touch with us:</b>
        </div>
        <div className="center">
            <input type="text" placeholder='Enter your email' />
            <button>Join us</button>
        </div>
        <div className="right">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
        </div>
        </div>
    </div>
  )
}

export default Contact