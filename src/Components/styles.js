import styled from 'styled-components';


const Container=styled.div`
    width:100%;
    height:70%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 4%;

`
const Card=styled.div`
    width:75%;
    height:95%;
    border: 1px solid black;
    background:white;
    margin:1%;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 5%;
    object-fit: cover;



`
const QuoteIcon=styled.img`
     width: 16%;
    border-radius: 66%;
    background-color: #126ada;
    position: absolute;
    margin-top: 35%;
    margin-left: 4%;
    object-fit: scale-down;
    `


const SideTitle =styled.div`
margin-top: 8%;
margin-left:1%;
color:white;

& img{
border-radius: 55%
}
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


const Details=styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 14px;
    color: #006ada;
    margin-bottom: 0;
    font-family: Lato,sans-serif;
`
const Name=styled.h2`
    font-size:14px;
    color:#006ada;
    margin:0;
`
const Content=styled.div`
margin:0;
padding:5%;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 200px;
    margin-top: 16%;
`
const Paragraph=styled.div`
    margin-right:1%;
    margin-left:1%;
    text-align: start;
    font-size: 12px;
    color: #444;
    font-weight: 600;
    text-align: justify;
    font-family: Lato,sans-serif;
`

const Title=styled.h3`
    font-size: 13px;
    font-weight: 500;
    color: #444;
    margin:0;
`


const CardContainer=styled.div`

`
const CredentialContainer=styled.div`
height:30%;
`

const ImageContainer=styled.div`
    width:100%;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    `

const Image=styled.img`
    width: 95%;
    height: 60%;
    text-align: center;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    position:relative;
`

export {Card,Main,QuoteIcon,Name,ImageContainer,CredentialContainer,SideTitle,Image,Content,Container,Details,CardContainer,Paragraph,Title,CarousalContainer};