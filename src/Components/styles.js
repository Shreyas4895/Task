import styled from 'styled-components';

const Card=styled.div`
box-sizing:border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-basis: 20%;
    border-radius: 5%;
    border:1px solid black;
    margin:1%;
    padding:0.5%;
    font-size: 12px;
    color:black;
    background-color: white;
    margin-top:2%;
    line-height: 20px;
    font-size: 11px;
`
const QuoteIcon=styled.img`
    padding-top: 10px;
    width: 16%;
    height: 16%;
    border-radius: 66%;
    background-color: blue;
    `
const Image=styled.img`

    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
`



const SideTitle =styled.div`
margin-top: 7%;
margin-left:2%;
color:white;



`
const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    -moz-transition: all .5s;
    transition: all .5s;
    height: 550px;
    border-radius: 15px;
    background-size: cover;
    height:72%;
    margin-left: 7%;

`

const Main=styled.div`
width:100%;
height:90%;
background-color:blue;
    border-radius: 15px;
    background-size: cover;
    padding-left: 2rem;
    background-color:blue;
    border-radius: 2%;
    display:flex;
`
const CarousalContainer=styled.div``
const Name=styled.h2`
color:blue;
margin:0;
`
const Content=styled.div`
padding:1%;
display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
`
const Paragraph=styled.p`
margin:0;
margin-bottom:2%;
`

const Title=styled.h3`
margin:0;
`

export {Card,Main,QuoteIcon,SideTitle,Image,Content,Container,Name,Paragraph,Title,CarousalContainer};