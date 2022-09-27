import { cardData } from "../utils/mockData";
import './clientSlide.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { QuoteIcon } from "./styles";
// import {Card,QuoteIcon,Container,CardContainer,ImageContainer,Content,CredentialContainer,Image,Name,Paragraph,Title} from './styles';

const ClientSlide=(props) =>{
return (
    <div className="container">
     <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((card,index) => 
        <SwiperSlide>
              <div className="card" key={index}>
                <div className="imageContainer" style={{backgroundColor: `${card.color}`}} >
                    <img src={card.Image}   alt="Card"/>
                </div>
             <QuoteIcon src={card.quoteIcon} alt="Icon"/>
                <div className="content">
                     <div className="para">
                        <p>{card.para}</p>
                    </div>
                   <div className="name">
                    <h2>{card.name}</h2>
                    <h3>{card.title}</h3>
                 </div>
                </div>
             </div>
             </SwiperSlide>
            )
        }  
    </Swiper> 
</div>
)
}
export default ClientSlide;