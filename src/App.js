import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import Drum from './containers/Drum';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Drum />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
