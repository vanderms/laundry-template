import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon, Logo, BackDrop } from './utilities';



export default function Navbar(){
  
  const [closed, setClosed] = useState(true);

  const closeSidebar = () => setClosed(true);
  const openSidebar = () => setClosed(false); 


  return(
    <>
    <nav className={`navbar ${ closed ? 'closed' : ''}`}>
      <CloseIcon className='close-btn' onClick={ closeSidebar }/>
      <Logo/>
      <div className="links">
        <Link to='/'>HOME</Link>
        <Link to='/sobre'>SOBRE</Link>
        <Link to='/servicos'>SERVIÇOS</Link>
        <Link to='/dicas'>DICAS</Link>
        <span tabIndex='0' className='contato'>CONTATO</span>
      </div>
      <Link className='cta' to='/'>BAIXE O APP</Link>  
    </nav>
    <div className={`sidebar-menu ${ closed ? 'closed' : ''}`}>
      <Logo/>
      <MenuIcon className='menu-btn' onClick={ openSidebar }/>
      <BackDrop onClick={ closeSidebar }/>
    </div>
    
    
    </>
  );
}