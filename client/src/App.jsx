import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Components/theme';


const styledApp = styled.div``;

const App = () => {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <styledApp>
                <>
                    <Navbar theme={theme} themeToggler={themeToggler} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to="/" />
                    </Switch>
                    <About />
                    <Portfolio />
                    <Contact />
                    <Footer />

                </>
            </styledApp>
        </ThemeProvider>
    );
};

export default App;