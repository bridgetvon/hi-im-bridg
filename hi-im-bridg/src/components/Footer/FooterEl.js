import styled from 'styled-components'
import { FaGithub, FaInstagram, FaMailBulk, FaLinkedinIn } from 'react-icons/fa'
import {FooterLink as Link } from 'react-router-dom';

export const Footer = styled.footer`
height: 80px;
display: flex;
padding: 0.5rem calc(( 100vw - 1000px) / 6);
z-index: 10;
`

export const FooterLink = styled.a`
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
justify-content: space-between;
 
&:hover {
    color: #2D3142;
    transition: 200ms ease-in;
}
`

export const GitHub = styled(FaGithub)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
justify-content: space-between;
`

export const Email = styled(FaMailBulk)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
justify-content: space-between;
`
export const Instagram = styled(FaInstagram)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
justify-content: space-between;
`
export const LinkedIn = styled(FaLinkedinIn)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
color: #000000;
justify-content: space-between;
`