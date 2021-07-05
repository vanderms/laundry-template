import './cover.scss';
import { useState } from 'react';
import Icon from '../icon/icon';


export default function Cover(){

  const [cep, setCep] = useState('');  

  function handleSubmit(e){
    e.preventDefault();
    setCep('');
  }

  return (
  <section className="section-cover">
    <div className="info-container">
      <header>
        <h1>A SUA LAVANDERIA EM SÃO PAULO</h1>
        <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</h4>
      </header>  
      <form id='search-form' onSubmit={handleSubmit}>
        <div className="text">Confira se os nossos serviços estão disponíveis na sua região </div>
        <div className="input-block">
          <input type="text" value={ cep } onChange={(e)=> setCep(e.target.value)}/>
          <button type='submit' form='search-form'><Icon type='search'/></button>          
        </div>
      </form>
    </div>
    <div className="overlay"></div>
  </section>
  );
}