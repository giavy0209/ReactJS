import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
// import MainContentClass from './components/MainContentClass';
import MainContentFunc from './components/MainContentFunc';

export default function app(Props) {
  return (
    <>
      <Header />
      {/* <MainContentFunc /> */}
      <MainContentFunc {...Props} />
      <Footer />
    </>
  );
}

// export default App;
