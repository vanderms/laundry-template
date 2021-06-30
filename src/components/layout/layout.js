import Infobar from '../infobar/infobar';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


export default function Layout({children, handleOpenContactModal }){
  return (
    <>
    <Infobar/>
    <Navbar handleOpenContactModal={handleOpenContactModal} />    
    <main>
      {children}
    </main>
    <Footer/>
    </>
  );
}