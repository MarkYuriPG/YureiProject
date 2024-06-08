import './css/experience.css'
import dotnet from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/dotnet.png';
import html from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/html.png';
import css from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/css.png';
import react from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/react.png';
import mysql from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/mysql.png';
import springboot from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/springboot.png';
import figma from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/figma.png';
import flutter from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/flutter.png';
import git from 'C:/Users/Mark/projects/my_portfolio/src/assets/icons/git.png';

function Experience(){
    const experiences = [
        { icon: html, label: 'HTML' },
        { icon: css, label: 'CSS' },
        { icon: react, label: 'React' },
        { icon: dotnet, label: 'ASP .NET Framework' },
        { icon: mysql, label: 'MySQL' },
        { icon: springboot, label: 'Springboot' },
        { icon: figma, label: 'Figma' },
        { icon: flutter, label: 'Flutter'},
        { icon: git, label: 'Git'},
    ];

    return(
        <div className="exp-container">
            <h2 className='exp-word'>Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                <div className="experience-item" key={index}>
                    <img src={exp.icon} alt={`${exp.label} icon`} className="experience-icon" />
                    <p>{exp.label}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;