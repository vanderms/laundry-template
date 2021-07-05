import Layout from './components/layout/layout';
import Cover from './components/cover/cover';
import Features from './components/features/features';
import Contato from './components/contato/contato';
import BaixeOApp from './components/baixeoapp/baixeoapp';
import Sobre from './components/sobre/sobre';
import { useState } from 'react';
import Services from './components/services/services';

function App() {
  const [ showContactModal, setShowContactModal ] = useState(false);

  function handleOpenContactModal(){
    setShowContactModal(true);
  }

  function handleCloseContactModal(){
    setShowContactModal(false);
  }


  return (
    <>
    <div id="home"></div>
    <Layout handleOpenContactModal={handleOpenContactModal}>
      <Contato show = { showContactModal } handleClose={ handleCloseContactModal }/>
      <Cover/>
      <Features/>
      <BaixeOApp/>
      <div id="servicos"></div>
      <Services/>
      <div id="sobre"></div>
      <Sobre handleOpenContactModal={handleOpenContactModal}/>
    </Layout>
    </>
  );
}

export default App;
