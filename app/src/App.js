import React, { Component } from 'react';

import LogoBotcamp from './components/LogoBotcamp';
import BtnBotcamp from './components/BtnBotcamp';
import ContainerBotcamp from './components/ContainerBotcamp';

import './styles/generic/generic.css';

class App extends Component {
    render() {
        return (
            <ContainerBotcamp>
                <LogoBotcamp />
                <BtnBotcamp />
            </ContainerBotcamp>
        )
    } 
}

export default App;