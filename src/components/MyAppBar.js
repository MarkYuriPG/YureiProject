import * as React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './appBar.css';
import { Link } from 'react-router-dom';

const theme = createTheme();

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
                        <Link className="button-port" color="inherit">Portfolio</Link>
                        <Link className="button" color="inherit">About</Link>
                        <Link className="button" color="inherit">Experience</Link>
                        <Link className="button" color="inherit">Projects</Link>
                        <Link className="button" color="inherit">Contact</Link>
                    </Toolbar>
                    </div>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}; 

export default MyAppBar;