import { SectionHeader, CardsContainer, Card } from "../utilities/utilities";
import washDrierImage from  '../../assets/wash-dryer.png';
import sofaImage from '../../assets/sofa.png';
import jeansImage from '../../assets/jeans.png';


export default function Services(){
  return(
    <section className="services-section section">
      <SectionHeader
        title =  'SERVIÇOS PRESTADOS COM AMOR'
        subtitle = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
        highlight = 'AMOR'
      />
      <CardsContainer>    
        <Card
          type = 'img'
          src = {jeansImage}
          alt = 'calças jeans empilhadas'
          title = 'LAVAGEM POR KG'          
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <Card
          type='img'
          src = {washDrierImage}
          alt = 'maquina lava e seca'
          title = 'LAVANDERIA SELF-SERVICE'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <Card
          type='img'
          src = {sofaImage}
          alt = 'um sofá laranja'
          title = 'IMPERMEABILIZAÇÃO'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
      </CardsContainer>
    </section>
  );
}