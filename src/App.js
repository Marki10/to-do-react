import React, { Component } from 'react';
import './app.scss';

import data from './list.js';

import Sidebar from './components/sidebar.component';

class App extends Component {
 

  render() {
    console.log(data);  
    return (
      <main className="app container">
        <Sidebar></Sidebar>
        {data}
      </main>
    );
  }
}

export default App;
