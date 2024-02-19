import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div id="footer" className='m-auto mt-5 mb-1' style={{ width: "270px", height: "102px" }}>
            <div className='text-center d-flex justify-content-between'>
                <img src="/instagram.png" alt="instagram" />
                <img src="/linkedin.png" alt="linkedin" />
                <img src="/mail.png" alt="mail" />

            </div>
            <br />
            <p>built by Bhanu Chowhan 2024</p>
        </div>
    )
}

export default Footer
