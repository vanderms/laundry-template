import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='pt-br'>
        <Head>        
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet"/>
        </Head>
        <body>         
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;