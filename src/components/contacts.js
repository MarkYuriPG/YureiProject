import './css/contacts.css'
import github from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/githubwhite.png';
import linkedin from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/linkedin.png';
import phone from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/phone.png';
import email from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/email.jpg';

function Contacts(){
    return(
        <div className="contacts-container">
            <div className="contacts-left">
                <h1 className="contacts-word">Contacts</h1> 
                <h3 className='contacts-message'>Feel free to reach out!</h3>
            </div>
            <div className="contact-details">
                <div className='contact-detail'>
                    <img src={email} className='contact-icons' alt='icon'/>
                    <a href="mailto:mygeagonia@gmail.com">mygeagonia@gmail.com</a>
                </div>
                <div className='contact-detail'>
                    <img src={linkedin} className='contact-icons' alt='icon'/>
                    <a href="https://www.linkedin.com/in/mark-yuri/" target="_blank" rel="noopener noreferrer">mark-yuri</a>
                </div>
                <div className='contact-detail'>
                    <img src={phone} className='contact-icons' alt='icon'/>
                    <a href="tel:09950092642">09950092642</a>
                </div>
                <div className='contact-detail'>
                    <img src={github} className='contact-icons' alt='icon'/>
                    <a href="https://github.com/MarkYuriPG">MarkYuriPG</a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;