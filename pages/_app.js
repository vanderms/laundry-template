import '../styles/globals.scss';
import '../styles/infobar.scss';
import '../styles/navbar.scss';
import '../styles/cover.scss';
import '../styles/footer.scss';
import '../styles/features.scss';
import '../styles/laundry_app.scss';
import '../styles/services.scss';
import '../styles/dicas.scss';
import '../styles/sobre.scss';


import Layout from '../components/sections/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
