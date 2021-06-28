import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon } from './utilities';


export default function Navbar(){
  
  return(
    <>
    <nav className="navbar">
      <CloseIcon className='close-btn'/>
      <div className="logo">LAUNDRY</div>
      <div className="links">
        <Link to='/'>HOME</Link>
        <Link to='/sobre'>SOBRE</Link>
        <Link to='/servicos'>SERVIÇOS</Link>
        <Link to='/dicas'>DICAS</Link>
        <span tabIndex='0' className='contato'>CONTATO</span>
      </div>
      <Link className='cta' to='/'>BAIXE O APP</Link>  
    </nav>
    
    
    </>
  );
}