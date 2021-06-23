import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar(){

  const [ fixed, setFixed ] = useState(false);
  const [sidebarClosed, setSidebarClosed] = useState(true);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);    
  }, [])


  function handleScroll(){   
    if(window.scrollY > 40){
      setFixed(true);
    } 
    else {
      setFixed(false);
    }
  }

  function closeSidebar(){
    setSidebarClosed(true);  
  }

  function openSidebar(){
    setSidebarClosed(false);
  } 

  return(
    <>
    <nav className={`navbar ${ fixed ? 'fixed' : '' } ${ sidebarClosed ? 'sidebar-closed' : ''}`}>
      <img
        tabIndex='1'
        src="/assets/icons/icon-material-close.svg" 
        alt="close icon" 
        className="close" 
        onClick = { closeSidebar }
      />
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
    <div className={`navbar-placeholder ${fixed ? 'fixed' : ''}`}>
      
    </div>
    <div className="sidebar-menu">
      <img 
          tabIndex='1'
          className={`menu ${sidebarClosed ? 'sidebar-closed' : ''}`}
          src="/assets/icons/icon-material-menu.svg" 
          alt="menu icon" 
          onClick = { openSidebar }
        />
    </div>
    <div 
      className={`sidebar-backdrop ${sidebarClosed ? 'sidebar-closed' : ''}`}
      onClick={ closeSidebar }  
    ></div>
    </>
  );
}


export default Navbar;