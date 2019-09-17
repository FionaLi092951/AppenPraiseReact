import React, { Component } from 'react';
import Card from './components/Card';
import http from './http/axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      praiseList: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Appen Praise</h1>
        </header>
        <div className="App-content">
          <div className="App-background">
            hahah
          </div>
          <div>
            <div className="App-list">
              {this.state.praiseList.map((item, index) => {
                return (
                  <Card key={index} praiseObj={item}></Card>
                )
              })}
            </div>
          </div>
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
