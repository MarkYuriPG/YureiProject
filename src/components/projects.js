import './css/projects.css'

function Projects(){
    const projects = [
        {
            id: 1,
            title: 'Metro Events',
            description: 'An event management web app made using ReactJS and ASP .NET Web API.',
            githubUrl: 'https://github.com/MarkYuriPG/MetroEventsProject',
        },
        {
            id: 2,
            title: 'LessonLab',
            description: 'A lesson and quiz generator app with Fine-tuned GPT made using Flutter, Rust, and Python.',
            githubUrl: 'https://github.com/kaimatzu/LessonLab',
        },
        {
            id: 3,
            title: 'Mathicmatic',
            description: 'A simple 2-player web game made using Spring Boot, WebSocket, and React.',
            githubUrl: 'https://github.com/EdCamarillo/Mathic-online',
        },
        {
            id: 4,
            title: 'Yurei Project',
            description: 'My static website portfolio made using ReactJS, HTML, and CSS',
            githubUrl: 'https://github.com/MarkYuriPG/YureiProject',
        },
    ];

    return(
        <div className="proj-container">
            <h2 className='proj-word'>Projects</h2>
            <div className="proj-cards">
                {projects.map(project => (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" key={project.id} className="proj-card-link">
                        <div className="proj-card">
                            <div className="proj-details">
                                <h3 className="proj-title">{project.title}</h3>
                                <p className="proj-description">{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;