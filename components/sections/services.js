import ServiceCard from "../utilities/service_card";

export default function Services(){

  return (
    <section id='servicos' className="section-services">
      <header className="section-header">
        <h2> SERVIÇOS PRESTADOS COM <span>AMOR</span></h2>
        <div className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</div>
      </header>
      <div className="cards-container">
        <ServiceCard
          title="LAVAGEM POR KG"
          imgSrc='/assets/maude-frederique-lavoie-EDSTj4kCUcw-unsplash.png'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />
        <ServiceCard
          title="LAVANDERIA SELF-SERVICE"
          imgSrc='/assets/washer-dryer-1.png'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />  
         <ServiceCard
          title="IMPERMEBEALIZAÇÃO"
          imgSrc='assets/andrea-davis-duXRC8vT5wQ-unsplash.png'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
        />  
      </div>
    </section>
  );
}