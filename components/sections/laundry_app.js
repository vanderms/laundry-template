import Link from 'next/link';

export default function LaundryApp(){
  return(
    <section className="laundry-app">
      <div className="header-container">
        <header className="section-header">
          <h2>A <span>LAUNDRY</span> NA PALMA DA SUA MÃO</h2>
          <div className='text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</div>
        </header>
      </div>       
      <div className='container'>
        <div className="bg-img">

        </div>
        <div className="text-container">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
          <div className="cta-container">
            <Link href='/'>
              <a className='cta'>BAIXE O APP</a>        
            </Link>
          </div>  
        </div>
      </div>
    </section>
  );
}