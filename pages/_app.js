import '../styles/globals.scss';
import '../styles/infobar.scss';
import '../styles/navbar.scss';
import '../styles/cover.scss';
import '../styles/footer.scss';
import '../styles/features.scss';

import Layout from '../components/sections/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
