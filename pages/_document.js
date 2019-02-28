import Document, { Head, Main, NextScript } from 'next/document'
import React, {Component} from 'react';

class MyDocument extends Document {

  static async getInitialProps ({renderPage, store, req, res}) {
    const {html, head, errorHtml, chunks} = renderPage()
    return { html, head, errorHtml, chunks, categories: 'categories' }
  }

  render() {

    return (
      <html>
        <Head>
          <title>Mick Ross | Music Producer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="description" content="Mick Ross is a producer and musician from the North East of England and a key figure in some of the region’s finest musical output in recent years." />

          <meta itemprop="name" content="Mick Ross | Music Producer" />
          <meta itemprop="description" content="Mick Ross is a producer and musician from the North East of England and a key figure in some of the region’s finest musical output in recent years." />
          <meta itemprop="image" content="https://www.mickrossproducer.com/static/media/background-header2.jpg" />

          <meta name="twitter:card" content="https://www.mickrossproducer.com/static/media/background-header2.jpg" />
          <meta name="twitter:site" content="@micky_ross" />
          <meta name="twitter:title" content="Mick Ross | Music Producer" />
          <meta name="twitter:description" content="Mick Ross is a producer and musician from the North East of England and a key figure in some of the region’s finest musical output in recent years." />
          <meta name="twitter:creator" content="@micky_ross" />
          <meta name="twitter:image:src" content="https://www.mickrossproducer.com/static/media/background-header2.jpg" />

          <meta property="og:title" content="Mick Ross | Music Producer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.mickrossproducer.com/" />
          <meta property="og:image" content="https://www.mickrossproducer.com/static/media/background-header2.jpg" />
          <meta property="og:description" content="Mick Ross is a producer and musician from the North East of England and a key figure in some of the region’s finest musical output in recent years." />
          <meta property="og:site_name" content="Mick Ross | Music Producer" />

          <script src="https://use.fontawesome.com/a8b46284f6.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet" />
          <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
          <script src="https://www.googletagmanager.com/gtag/js?id=UA-109134664-1"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            
              window.dataLayer === window.dataLayer || []
              function gtag() { window.dataLayer.push(arguments) }
              gtag('js', new Date());

              gtag('config', 'UA-109134664-1');
            `}} />
        </body>

        

      </html>
    );
  }
}

export default MyDocument
