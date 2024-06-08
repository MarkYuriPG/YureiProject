import myPicture from 'C:/Users/Mark/projects/my_portfolio/src/assets/myPicture.jpg';
import './css/intro.css';
import "@fontsource/outfit";
import "@fontsource/outfit/400.css";

/* eslint-disable jsx-a11y/img-redundant-alt */
function Introduction (){
    return(
        <div className="introduction">
            <div className="introduction-text">
              <h1>Hi, I'm Yuri</h1>
            <p>
                I'm a computer science student that is very collaborative and eager to grow personally and professionally.
            </p>
            {/* TODO: STYLE THE BUTTON */}
            <button className="contact_button">Contact Me</button>
            </div>
            <img className="my-picture" src={myPicture} alt = "my picture" height={200} width={200}/>
        </div>
    );
};

export default Introduction;