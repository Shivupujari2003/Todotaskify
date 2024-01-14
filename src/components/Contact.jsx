import React, { useEffect } from 'react';
import './contact.css';
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <div className='contact'>
       <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>            
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"/>
      
      <div className="shivraj">
        <h4 className='shivu'>
        &nbsp;Shivaraj K P&nbsp;
        </h4>
        <h4 className='shiv-hover'>
        &nbsp;Shivaraj K P&nbsp;
        </h4>
        
      </div>
      <h5 className='email'>Email:shivu.kp.333@gmail.com</h5>
      <div className="card">
        <div className="image-box">
        <img src={process.env.PUBLIC_URL + '/shivu.jpg'} alt="My Image" />
        </div>
        <div className="social">

          <Link className='socials' to="https://www.instagram.com/shivu_sp_33/?hl=en"><i class="fab fa-instagram"></i></Link>
          <Link className='socials' to="https://www.linkedin.com/in/shivraj-kp-9920bb255/"><i
              class="fa-brands fa-linkedin"></i>  </Link>
          <Link className='socials' to="https://twitter.com/Shivu_SP33"><i class="fa-brands fa-square-x-twitter"></i>  </Link>
        </div>
      </div>

    </div> 
  )
}

export default Contact;
