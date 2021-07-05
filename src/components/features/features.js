import { SectionHeader, Card, CardsContainer } from "../utilities/utilities";

export default function Features(){
  return(
    <section className="section section-features">
      <SectionHeader
        title='O MELHOR SERVIÇO PELO MENOR PREÇO'
        subtitle='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
      />
      <CardsContainer>
        <Card
          type = 'icon'
          icon = 'truck'
          title = 'ENTREGA EXPRESSA'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <Card
          type='icon'
          icon = 'check'
          title = 'QUALIDADE ACIMA DE TUDO'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <Card
          type = 'icon'
          icon = 'credit-card'
          title = 'PREÇOS BAIXOS'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />

      </CardsContainer>
    </section>
  );
}