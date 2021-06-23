import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar(){

  const [ fixed, setFixed ] = useState(false);

  const handleScroll = ()=>{   
    if(window.scrollY > 40){
      setFixed(true);
    } 
    else {
      setFixed(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);    
  }, [])

  return(
    <>
    <nav className={`navbar ${fixed ? 'fixed' : ''}`}>
      <div className="logo">
        LAUNDRY 
      </div>
      <div className="links">
        <Link href='/'><a>HOME</a></Link>
        <Link href='/#sobre'><a>SOBRE</a></Link>
        <Link href='/#servicos'><a>SERVIÇOS</a></Link>
        <Link href='/dicas'><a>DICAS</a></Link>
        <span tabIndex='0' className='contato'>CONTATO</span>
      </div>
      <Link href='/'>
        <a className='cta'>BAIXE O APP</a>        
      </Link>
    </nav>
    <div className={`navbar-placeholder ${fixed ? '' : 'hidden-on-large-screen'}`}>
      <img className='menu' src="/assets/icons/icon-material-menu.svg" alt="menu icon" />
    </div>
    </>
  );
}


export default Navbar;