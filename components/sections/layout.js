import Infobar from './infobar';
import Navbar from './navbar';

export default function Layout({ children }){
  return(
    <>
      <Infobar/>
      <Navbar/>
      <main className='main-content'>
        { children }
      </main>     
    </>
  );
}