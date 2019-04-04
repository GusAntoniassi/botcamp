import React, { Component } from 'react';

import LoginWrapper from './components/LoginWrapper';
import LogoBotcamp from './components/LogoBotcamp';
import BtnBotcamp from './components/BtnBotcamp';

import './styles/generic/generic.css';

class App extends Component {
    render() {
        return (
            <LoginWrapper>
                <LogoBotcamp />
                <BtnBotcamp content="Entrar"></BtnBotcamp>
            </LoginWrapper>
        )
    } 
}

export default App;