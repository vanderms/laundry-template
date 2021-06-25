import Link from 'next/link';

export default function Sobre(){
  return(
    <section className="sobre-section">
      <div className="header-container">
        <header className="section-header">
          <h2><span>QUEM</span> SOMOS</h2>
          <div className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</div>
        </header>
      </div>       
      <div className='container'>       
        <div className="text-container">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
          <div className="cta-container">
          <span tabIndex='0' className='cta'>CONTATO</span>
          </div>  
        </div>
        <div className="bg-img"></div>
      </div>
    </section>
  )
}