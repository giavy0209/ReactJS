import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
// import MainContentClass from './components/MainContentClass';
import MainContentFunc from './components/productinfo/MainContentFunc';
// import Index from './components/index/Index'
import Nav from './components/Nav'

export default function app(Props) {
  return (
    <>
      <Header />
      {/* <Nav {...Props}/> */}
      {/* <Index {...Props}/> */}
      <MainContentFunc {...Props}/>
      <Footer />
    </>
  );
}

// export default App;
