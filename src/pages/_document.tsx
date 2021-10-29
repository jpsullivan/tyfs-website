import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    //  @todo specify language in HTML?
    return (
      <Html lang="en">
        <Head />
        <body className="font-sans antialiased bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
