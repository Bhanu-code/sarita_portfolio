import React from 'react';
import './heropage.css';

const HeroPage = () => {
  return (
    <div className='container hero-cont h-100 d-flex justify-content-between gap-5 '>
        <div className="intro mt-5 container" style={{ width: "486px", height: "408px" }}>
            <span>FRONTEND DEVELOPER</span>
            <h1 className='mt-4 aboutme'> Hello, My name is S.Sarita</h1>
            <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
            <div className='mt-5'>
                <button className='btn btn-light bg-dark text-light m-2'>Github</button>
                <button className='btn btn-outline-primary'>LinkedIn</button>
            </div>
        </div>
        <div className="profile_pic mr-2 mb-5 d-none d-sm-block "  style={{ width: "500px", height: "450px" }}>
            <img src="/yellow.png" className='profile_img' alt="profile" />
        </div>
      
    </div>
  )
}

export default HeroPage
