import React, { useState, useEffect } from 'react';
import './css/intro.css';
import "@fontsource/outfit";
import "@fontsource/outfit/400.css";
import pic1 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_2681.JPG';
import pic2 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_4216.JPG';
import pic3 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_6532.JPG';
import pic4 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_6903.JPG';
import pic5 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_7249.JPG';
import pic6 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_7312.JPG';
import pic7 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_7421.JPG';
import pic8 from 'C:/Users/Mark/projects/my_portfolio/src/assets/mypics/IMG_7423.JPG';

/* eslint-disable jsx-a11y/img-redundant-alt */
function Introduction (){
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return(
        <div className="introduction">
            <div className="introduction-text">
              <h1>Hi, I'm Yuri</h1>
            <p>
                I'm a computer science student that is very collaborative and eager to grow personally and professionally.
            </p>
            <button className="contact_button">Contact Me</button>
            </div>
            {/* <img className="my-picture" src={myPicture} alt = "my picture" height={200} width={200}/> */}
            <img className="my-picture" src={images[currentImageIndex]} alt="my picture" height={200} width={200} />
        </div>
    );
};

export default Introduction;