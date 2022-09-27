import React from 'react';
import {SideTitle,Main} from'./styles';
import ClientSlide from './clientSlide';

const Client=()=>{
    return(
   <Main>
    <SideTitle>
            <img src="https://www.doodleblue.com/images/home/client-testimonial-quotes.jpg" alt="Site"/>
            <p>"What clients have to say about us"</p>
    </SideTitle>
    <ClientSlide/>
 </Main>
    )
} 
export default Client;