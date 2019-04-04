import styled from 'styled-components';

import logoBotcamp from '../../img/botcamp.png';

export const LogoBotcamp = styled.img.attrs(() => ({
    src: logoBotcamp,
    alt: 'Logotipo do BotCamp'
}))`
    width: 248px;
        
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
`;

export default LogoBotcamp;
