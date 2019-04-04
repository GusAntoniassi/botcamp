import styled from 'styled-components';

import background from '../../img/ecossistema-background.png';

const LoginWrapper = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: url(${background});
    padding-top: 120px;
    padding-bottom: 80px;
`;

export default LoginWrapper;