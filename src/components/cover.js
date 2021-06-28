import { BackgroundImage } from './utilities';
import coverImage from '../assets/cover.jpg';


export default function Cover(){

  return (
  <section className="section-cover">
    <div className="info-container">
      <header>
        <h1>A SUA LAVANDERIA EM SÃO PAULO</h1>
        <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</h4>
      </header>  
      <form>
        <div className="text">Confira se os nossos serviços estão disponíveis na sua região </div>
        <div className="input-block">
          <input type="text" />
          <input type="submit" value="CONSULTAR"/>
        </div>
      </form>
    </div>
    <div className="image-container">
     <BackgroundImage
      src={coverImage}
      alt='foto de uma mulher colocando roupas em um cabide'
      orientation='by-height'
      alignment='end'
     />
    </div>
  </section>
  );
}