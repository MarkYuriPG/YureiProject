import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './css/appBar.css';

const theme = createTheme();
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

function MyAppBar (){
    return (
        <div className="appBar">
            <ThemeProvider theme={theme}>
                <AppBar position="sticky"
                    sx={{ 
                        top: '20px', 
                        left: '50%', 
                        width: '100%', 
                        boxShadow: 0,
                        borderRadius: 1,
                        backgroundColor: 'transparent',
                        color: 'black',
                        zIndex: 1000,
                    }}>
                    <div>
                    <Toolbar>
                        {/* <Link className="button-port" color="inherit">Portfolio</Link>
                        <Link className="button" color="inherit">About</Link>
                        <Link className="button" color="inherit">Experience</Link>
                        <Link className="button" color="inherit">Projects</Link>
                        <Link className="button" color="inherit">Contact</Link> */}
                        <button className="button-port" onClick={() => handleScrollToSection('portfolio')}>Portfolio</button>
                        <button className="button" onClick={() => handleScrollToSection('about')}>About</button>
                        <button className="button" onClick={() => handleScrollToSection('experience')}>Experience</button>
                        <button className="button" onClick={() => handleScrollToSection('projects')}>Projects</button>
                        <button className="button" onClick={() => handleScrollToSection('contact')}>Contact</button>
                    </Toolbar>
                    </div>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}; 

export default MyAppBar;