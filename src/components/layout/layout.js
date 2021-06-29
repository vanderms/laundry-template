import Infobar from '../infobar/infobar';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

export default function Layout({children}){
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