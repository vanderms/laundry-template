import Link from 'next/link';


function Navbar(){
  
  return(
    <nav className='navbar'>
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
  );
}


export default Navbar;