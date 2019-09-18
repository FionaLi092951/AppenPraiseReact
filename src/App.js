import React, { Component } from 'react';
import Card from './components/Card';
import http from './http/axios';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      praiseList: []
    }
  }

  render() {
    return (
      <div className="App-wrapper">
        <header className="App-header">
          <h1>Appen Praise</h1>
        </header>
        <div className="App-content">
          {this.state.praiseList.map((item, index) => {
            return (
              <Card key={index} praiseObj={item}></Card>
            )
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    http.$reqGet('/appen/getPraiseList').then((res) => {
      const list = res.data || [];
      this.setState({
        praiseList: list
      });
    }).catch(() => {
      console.log('error');
    });
  }
}

export default App;
