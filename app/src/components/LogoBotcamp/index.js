import styled from 'styled-components';

import logoBotcamp from '../../img/botcamp.png';

export const LogoBotcamp = styled.img.attrs(() => ({
    src: logoBotcamp,
    alt: 'Logotipo do BotCamp'
}))`
    width: 248px;
`;
// 
export default LogoBotcamp;
