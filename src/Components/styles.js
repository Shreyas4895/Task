import styled from 'styled-components';

const Card=styled.div`
    margin:0.5%;
    font-size: 12px;
    color:black;
    background-color: white;
    margin-top:2%;
    width:20%;
    border-radius: 5%;
    border: 1px solid black;

`
const QuoteIcon=styled.img`
 
     width: 16%;
    border-radius: 66%;
    background-color: #126ada;
    position: absolute;
    margin-top: 35%;
    margin-left: 10%;
    object-fit: scale-down;
    `
const Image=styled.img`
`



const SideTitle =styled.div`
margin-top: 8%;
margin-left:1%;
color:white;

& img{
border-radius: 55%
}
`
const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    -moz-transition: all .5s;
    transition: all .5s;
    height: 70%;
    border-radius: 15px;
    margin-left: 7%;

`

const Main=styled.div`
width:89%;
height:100%;
background-color:#126ada;
    display:flex;
    margin-top:3%;
    margin-left:5%;
    border:1px solid black;
    border-radius:1%;
`
const CarousalContainer=styled.div``
const Name=styled.h2`
color:blue;
margin:0;
`
const Content=styled.div`
/* padding:1%;
display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start; */
`
const Paragraph=styled.p`
margin:0;
margin-top:2%;
margin-bottom:2%;
`

const Title=styled.h3`
margin:0;
`


const CardContainer=styled.div`

`
const CredentialContainer=styled.div`
height:30%;
`

const ImageContainer=styled.div``


export {Card,Main,QuoteIcon,ImageContainer,CredentialContainer,SideTitle,Image,Content,Container,Name,CardContainer,Paragraph,Title,CarousalContainer};