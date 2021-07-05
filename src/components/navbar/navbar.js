import './navbar.scss';
import { useState, useEffect } from "react";
import { CloseButton, MenuButton, Logo, BackDrop } from '../utilities/utilities';


function getClass(name, closed, fixed){
  name += (closed ? ' closed ' : '');
  name += (fixed ? ' fixed ' : '');
  return name;
}

export default function Navbar({ handleOpenContactModal }){
  
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

  function handleContactClicked(){
    handleOpenContactModal();
    closeSidebar();
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  }, []);

  return(
    <>
    <nav className={ getClass('navbar', closed, fixed ) }>
      <CloseButton className='close-btn' onClick={ closeSidebar }/>
      <Logo/>
      <div className="links">
        <a onClick={closeSidebar} href='#home'>HOME</a>
        <a onClick={closeSidebar} href='#sobre'>SOBRE</a>
        <a onClick={closeSidebar} href='#servicos'>SERVIÇOS</a>        
        <span onClick={ handleContactClicked } tabIndex='0' className='contato'>CONTATO</span>
        <span onClick={closeSidebar} className='cta'>BAIXE O APP</span> 
      </div>
       
    </nav>
    <div className={ getClass('sidebar-menu', closed, fixed ) }>
      <Logo/>
      <MenuButton className='menu-btn' onClick={ openSidebar }/>
      <BackDrop onClick={ closeSidebar }/>
    </div>
    <div className={ getClass('navbar-placeholder', closed, fixed ) }></div>
    </>
  );
}