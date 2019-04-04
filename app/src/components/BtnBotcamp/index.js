/**
 * "Dumb component" ou "Stateless component"
 * Dessa forma é mais leve que a forma "class Foo extends Component"
 */
import React from 'react';
import './style.css';

const BtnBotcamp = () => (
    <button className="btn-botcamp">Entrar</button>
);

export default BtnBotcamp;