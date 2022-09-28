import { cardData } from "../utils/mockData";
import './clientSlide.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import PropTypes from 'prop-types'
import {Card,QuoteIcon,Container,Name,ImageContainer,Content,Image,Details,Paragraph,Title} from './styles';

const ClientSlide=() =>{
return (
    <Container>
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
        {cardData.map((card,id) => 
        <SwiperSlide>
              <Card key={id}>
                <ImageContainer style={{backgroundColor: `${card.color}`}} >
                    <Image src={card.Image}   alt="Card"/>
                </ImageContainer>
             <QuoteIcon src={card.icon} alt="Icon"/>
                <Content>
                     <Paragraph>
                        {card.para}
                    </Paragraph>
                   <Details>
                    <Name>{card.name}</Name>
                    <Title>{card.title}</Title>
                 </Details>
                </Content>
             </Card>
             </SwiperSlide>
            )
        }  
    </Swiper> 
</Container>
)
}
export default ClientSlide;


ClientSlide.propTypes = {
  name: PropTypes.string,
  para: PropTypes.string,
  title: PropTypes.string,
}