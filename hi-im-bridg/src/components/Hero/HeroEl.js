import styled from 'styled-components';

export const HeroContainer = styled.div`
background= #000000;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

@media screen and (max-width: 760px) {
    height: 750px;
    padding: 0px 20px;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 760px) {
    max-width: 600px;
    padding: 3px 8px;
}
`


export const HeroText = styled.h1`
color: #000000;
font-size: 48px;
text-align: center;
border: none;
background: transparent;

@media screen and (max-width: 760px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`