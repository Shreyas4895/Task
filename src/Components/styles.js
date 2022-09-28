import styled from 'styled-components';


const Container=styled.div`
    width:85%;
    height:92%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2%;
    position:relative;

@media (max-width: 450px) {
    flex-basis:100%;
}
@media (max-width: 768px) {
    flex-basis:100%;
}
`
const Card=styled.div`
    flex-basis: 85%;
    height: 77%;

    background:white;
    margin:1%;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 5%;
    object-fit: cover;
    box-shadow: 0 0 6px rgb(0 0 0 / 25%);

@media (max-width: 450px) {
    flex-basis:100%;
}
@media (max-width: 768px) {
    flex-basis:40%;
}
@media (max-width: 1024px) {
    flex-basis:75%;
}

`
const QuoteIcon=styled.img`
 padding-top: 5px;
    width: 20px;
    height: 25px;
    object-fit: none;
    `;

    const IconContainer=styled.div`
    margin-left: 20px;
    margin-top: -15px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #006ada;
    position: absolute;
    margin-top: 45%;
    margin-left: 4%;
    object-fit: scale-down;
    `


const SideTitle =styled.div`
width:30%;
margin-top: 8%;
margin-left:1%;
font-family: Lato,sans-serif;
font-weight: 600;
color:white;
padding: 1%;


& img{
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background-size: 54px;
    background-color: #fff;
    background-position: 50%;
}
& p{
    color: #fff;
    padding-top: 15px;
    font-weight: 600;
    line-height: 30px;
    font-size: 20px;
}
`


const Main=styled.div`
width:83%;
height:100%;
background-color:#126ada;
    display:flex;
    margin-top:3%;
    margin-left:5%;
    border:1px solid black;
    border-radius:1%;

@media (max-width: 450px) {
    width:100%;
}
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
padding-left: 5%;
    padding-right: 5%;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 53%;
    margin-top: 5%;
`
const Paragraph=styled.div`
    margin-right:1%;
    margin-left:1%;
    text-align: start;
    font-size: 12px;
    color: #444;
    font-weight: 550;
    line-height:1.5;
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
flex-basis:100%;
    display: flex;
    justify-content: center;
    height: 140px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    `

const Image=styled.img`
    padding-top: 10px;
    vertical-align: middle;
    width: 120px;
    margin: auto;
    padding-top: 25px;
    /* width: 95%;
    height: 60%;
    text-align: center;
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    position:relative; */
`

export {Card,Main,QuoteIcon,Name,IconContainer,ImageContainer,CredentialContainer,SideTitle,Image,Content,Container,Details,CardContainer,Paragraph,Title,CarousalContainer};