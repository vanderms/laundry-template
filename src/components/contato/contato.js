import { useState } from "react";
import { BackDrop, CloseIcon } from "../utilities/utilities";

export default function Contato({ show, handleClose }){
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  
  
  function handleSubmit(e){
    e.preventDefault();
    setNome('');
    setEmail('');
    setMessage('');    
  }
  
  return (
    <>
    <BackDrop onClick={handleClose} className={`contato-backdrop ${!show ? 'closed' : ''}`}/>
    <section className={`section-contato ${!show ? 'closed' : ''}`}>     
      <CloseIcon className='close-btn' onClick={handleClose}/>
      <h2>FALE CONOSCO</h2>
      <form onSubmit={handleSubmit}>        
          <label>Nome:
            <input onChange={(e)=> setNome(e.target.value)} value={nome} name='name' id='name' type="text" />
          </label>
          <label>Email:
            <input onChange={(e)=> setEmail(e.target.value)} value={email} name='email' id='email' type="text" />
          </label>
          <label>Mensagem:
            <textarea onChange={(e)=> setMessage(e.target.value)} value={message} name="message" id="message"></textarea>
          </label>
          <input type="submit" value="ENVIAR" />
      </form>
    </section>
    </>
  );
}