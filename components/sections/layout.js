import Infobar from './infobar';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }){
  return(
    <>
      <Infobar/>
      <Navbar/>
      <main className='main-content'>
        { children }
      </main>
      <Footer/>     
    </>
  );
}