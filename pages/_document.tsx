import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="eg"  >
         
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content=" devloper looking for a Job" />
          <meta name="keywords" content="full stack , devops " />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">  
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// 
export default MyDocument