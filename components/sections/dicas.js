import DicasCard from "../utilities/dicas_card";

export default function Dicas(){

  return (
    <section className="section-dicas">
       <header className="section-header">
        <h2>NOSSAS <span>DICAS</span> PARA UMA BOA LAVAGEM</h2>
        <div className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</div>
      </header>
      <div className="cards-container">
        <DicasCard
          imgSrc='/laundry-template/assets/waldemar-brandt-Db4d6MRIXJc-unsplash.png'
          title='COMO LAVAR ROUPA SOCIAL'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
          href='/dicas/como-lavar-roupa-social'
          side = 'left'
        />  
        <DicasCard
          imgSrc='/laundry-template/assets/waldemar-brandt-UP9DtTjRYpI-unsplash.png'
          title='COMO PASSAR UM JEANS'
          text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.'
          href='/dicas/dez-dicas-para-passar-um-jeans'
          side = 'right'
        />
      </div>
    </section>
  );

}