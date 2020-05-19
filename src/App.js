import React, { Component } from 'react';
import './App.css';
import Layoutall from './Layout';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Layoutall/>
      </div>
    )
  }
}
/*
class Total_sales extends React.Component {
  state = {
    total_sale: null,
    day_sale: null,
    week: null,
    day: null,
  }
  render() {
    const { total_sale } = this.state
    return (
        <div style={{ width: 800, margin: '300 auto' }}>
          <div style={{ marginTop: 20 }}>
            总销量额：{'null'}
          </div>
        </div>
    );
  }
}*/

export default App;

