import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

import Hello from '../assets/images/hello.png'

export default function Header(props){
    return(
        <header className="container">
            <div className="hero d-none d-lg-block">
                <span data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0">Hello <img src={Hello} alt="Hello"/>, my name is</span>
                <h1 className="name" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">Mochamad <label>Mufid</label> Abiyyu</h1>
                <h1 className="occupation" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="900" data-aos-offset="0">
                    <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Inter',
                        color: '#FFD369',
                        fontWeight: 700,
                        fontSize: '3.5rem',
                        marginBottom: '1rem',
                    }}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Based in Indonesia',
                        'Designing Wonderful Products',
                        'Here is My UX Portfolio Page',
                        'UI/UX Enthusiast',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                    />
                </h1>
                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="1200" data-aos-offset="0">A UI/UX Designer with 2 years of experience who love to create a great product from design thinking way, and also have interest in mobile development.</p>
            </div>
            <div className="hero d-lg-none">
                <span data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="300" data-aos-offset="0">Hello <img src={Hello} alt="Hello"/>, my name is</span>
                <h1 className="name" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="600" data-aos-offset="0">Mochamad <label>Mufid</label> Abiyyu</h1>
                <h1 className="occupation" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="900" data-aos-offset="0">
                    UI/UX Enthusiast
                </h1>
                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="300" data-aos-delay="1200" data-aos-offset="0">A UI/UX Designer with 2 years of experience who love to create a great product from design thinking way, and also have interest in mobile development.</p>
            </div>
        </header>
    );
}
