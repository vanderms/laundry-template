import Layout from './components/layout/layout';
import Cover from './components/cover/cover';
import Features from './components/features/features';
import Contato from './components/contato/contato';
import BaixeOApp from './components/baixeoapp/baixeoapp';
import Sobre from './components/sobre/sobre';
import { useState } from 'react';

function App() {
  const [ showContactModal, setShowContactModal ] = useState(false);

  function handleOpenContactModal(){
    setShowContactModal(true);
  }

  function handleCloseContactModal(){
    setShowContactModal(false);
  }


  return (
    <Layout handleOpenContactModal={handleOpenContactModal}>
      <Contato show = { showContactModal } handleClose={ handleCloseContactModal }/>
      <Cover/>
      <Features/>
      <BaixeOApp/>
      <Sobre handleOpenContactModal={handleOpenContactModal}/>
    </Layout>
  );
}

export default App;
