import { cardData } from "../utils/mockData";
import {Card,QuoteIcon,Container,Content,Image,Name,Paragraph,Title} from './styles';

const ClientSlide=() =>{
return (
    <Container>
        {cardData.map((card,index) => 
              <Card key={index}>
             <Image src={card.Image} alt="card"/>
             <Content>
             <QuoteIcon src={card.quoteIcon} alt="Icon"/>
             <Paragraph>{card.para}</Paragraph>
             <Name>{card.name}</Name>
             <Title>{card.title}</Title>
             </Content>
             </Card>
            )
        }      
</Container>
)
}
export default ClientSlide;