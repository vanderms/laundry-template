import { SectionHeader, FeatureCard } from "../utilities/utilities";

export default function Features(){
  return(
    <section className="section section-features">
      <SectionHeader
        title='O MELHOR SERVIÇO PELO MENOR PREÇO'
        subtitle='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
      />
      <div className="cards-container">
        <FeatureCard
          icon = 'truck'
          title = 'ENTREGA EXPRESSA'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <FeatureCard
          icon = 'check'
          title = 'QUALIDADE ACIMA DE TUDO'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <FeatureCard
          icon = 'credit-card'
          title = 'PREÇOS BAIXOS'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />

      </div>



    </section>
  );
}