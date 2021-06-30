import Layout from './components/layout/layout';
import Cover from './components/cover/cover';
import Features from './components/features/features';
import Contato from './components/contato/contato';
import { useState } from 'react';

function App() {
  const [ showContactModal, setShowContactModal ] = useState(true);

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
    </Layout>
  );
}

export default App;
