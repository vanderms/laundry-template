import './navbar.scss';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon, Logo, BackDrop } from '../utilities/utilities';


function getClass(name, closed, fixed){
  name += (closed ? ' closed ' : '');
  name += (fixed ? ' fixed ' : '');
  return name;
}

export default function Navbar(){
  
  const [ closed, setClosed ] = useState(true);
  const [ fixed, setFixed ] = useState(false);

  const closeSidebar = () => setClosed(true);
  const openSidebar = () => setClosed(false); 

  function handleScroll(){
    if(window.scrollY > 40){
      setFixed(true);
    } 
    else {
      setFixed(false);
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  }, []);

  return(
    <>
    <nav className={ getClass('navbar', closed, fixed ) }>
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
    <div className={ getClass('sidebar-menu', closed, fixed ) }>
      <Logo/>
      <MenuIcon className='menu-btn' onClick={ openSidebar }/>
      <BackDrop onClick={ closeSidebar }/>
    </div>
    <div className={ getClass('navbar-placeholder', closed, fixed ) }></div>
    </>
  );
}