import { SectionHeader, FeatureCard, 
  TruckIcon, CheckIcon, CreditCardIcon } from "../utilities/utilities";

export default function Features(){
  return(
    <section className="section section-features">
      <SectionHeader
        title='O MELHOR SERVIÇO PELO MENOR PREÇO'
        subtitle='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.'
      />
      <div className="cards-container">
        <FeatureCard
          Icon = { TruckIcon }
          title = 'ENTREGA EXPRESSA'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <FeatureCard
          Icon = { CheckIcon }
          title = 'QUALIDADE ACIMA DE TUDO'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <FeatureCard
          Icon = { CreditCardIcon }
          title = 'PREÇOS BAIXOS'
          text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />

      </div>



    </section>
  );
}