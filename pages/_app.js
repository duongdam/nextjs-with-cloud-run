import React from 'react';
import '../styles/globals.css';

//enable to use firebase firestore, auth or storage
// import '../config/firebaseConfig'

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
