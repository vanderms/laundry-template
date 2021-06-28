import Infobar from './infobar';
import Navbar from './navbar';
import Footer from './footer';

export default function Layoyt({children}){
  return (
    <>
    <Infobar/>
    <Navbar/>
    <main>
      {children}
    </main>
    <Footer/>
    </>
  );
}