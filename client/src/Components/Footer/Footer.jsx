import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import'./Footer.scss'
const Footer = () => {
  return (
    <footer >
     <div className='gap'>
      <p>Terms of Use <a href="#" style={{color: 'grey'}}>Privacy Policy</a></p>
     </div>
      <div>
      <img width={100} src="img/visa.png" alt="" />
      <img width={100}src="img/master.png" alt="" />
      <img width={100}src="img/paypal.png" alt="" />
      </div >
      <p className='gap'>2023 SPYCOUNT BY KILLAH TOKYO</p>
    </footer>
  );
};

export default Footer;
