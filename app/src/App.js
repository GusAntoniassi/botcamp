import React, { Component } from 'react';
import BtnBotcamp from './components/BtnBotcamp';
import LogoBotcamp from './components/LogoBotcamp';
import ContainerBotcamp from './components/ContainerBotcamp';

import './style/generic/generic.css';

class App extends Component {
    render() {
        return <ContainerBotcamp>
            <LogoBotcamp />
            <BtnBotcamp />
        </ContainerBotcamp>
    } 
}

export default App;