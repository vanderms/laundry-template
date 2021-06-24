import { useState } from 'react';


function Cover(){

  const [cep, setCep] = useState('');
  
  
  function handleOnChange(e){    
    setCep(e.target.value);
  }

  function handleOnSubmit(e){
    e.preventDefault();
    setCep('');
  }

  return (
    <section className="section-cover">
      <div className="backdrop"></div>
      <div className="container">       
        <div>       
        <div className="title">
          <h1>A SUA LAVANDERIA EM SÃO PAULO</h1>
        </div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente quibusdam omnis, dolore at hic excepturi, eaque exercitationem assumenda soluta.
        </div>
        </div>       
        <div className="cta">
          <div className='text'>Confira se os nossos serviços estão disponíveis na sua região</div>
          <form onSubmit={handleOnSubmit}>            
            <input type="text" value={cep} onChange={handleOnChange} placeholder='Digite seu CEP' />
            <input type="submit" value="CONSULTAR"/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cover;