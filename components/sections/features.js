import FeatureCard from "../utilities/feature_card";

export default function Features(){

  return (
    <section className="section-features">
      <header className="header">
        <h2>O MELHOR SERVIÇO PELO MENOR PREÇO</h2>
        <div className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</div>
      </header>
      <div className="cards-container">
        <FeatureCard
          title="ENTREGA EXPRESSA"
          iconSrc='/assets/icons/icon-awesome-truck.svg'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <FeatureCard
          title="SERVIÇO COM QUALIDADE"
          iconSrc='/assets/icons/icon-awesome-check-square.svg'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />  
         <FeatureCard
          title="PREÇOS BAIXOS"
          iconSrc='/assets/icons/icon-awesome-credit-card.svg'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />  
      </div>
    </section>
  );
}