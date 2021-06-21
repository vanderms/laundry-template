import Link from 'next/link';


function Navbar(){
  
  return(
    <nav className='navbar'>
      <div className="logo">
        LAUNDRY
      </div>
      <div className="links">
        <Link href='/'>HOME</Link>
        <Link href='/#sobre'>SOBRE</Link>
        <Link href='/#servicos'>SERVIÇOS</Link>
        <Link href='/dicas'>DICAS</Link>
        <span tabindex='0' className='contato'>CONTATO</span>
      </div>
      <div tabindex='0' className="cta">
        BAIXE O APP
      </div>
    </nav>
  );
}


export default Navbar;