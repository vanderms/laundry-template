import { useState } from 'react';


function Cover(){

  const [cep, setCep] = useState('');
  const cepHandler = (e)=>{
    console.log(e);
    setCep(e.target.value);
  }

  return (
    <section className="section-cover">
      <div className="backdrop"></div>
      <div className="container">       
        <div>
        <div className="logo">LAUNDRY</div>
        <div className="title">
          <h1>A SUA LAVANDERIA EM SÃO PAULO</h1>
        </div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente quibusdam omnis, dolore at hic excepturi, eaque exercitationem assumenda soluta.
        </div>
        </div>       
        <div className="cta">
          <div className='text'>Confira se os nossos serviços estão disponíveis na sua região</div>
          <form>            
            <input type="text" value={cep} onChange={cepHandler} placeholder='Digite seu CEP' />
            <input type="submit" value="CONSULTAR"/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cover;