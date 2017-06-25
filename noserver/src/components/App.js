import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import About from './About/About';
import MakeAList from './MakeAList/MakeAList';
import ListParent from './Lists/ListParent';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Carousel from './Carousel/Carousel';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Carousel />
            <About />
            <MakeAList />
            <ListParent />
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}
