import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    let name = '';
    let text = '';
    let createdBy = '';
    if (props.praiseObj.text) {
      const inputText = props.praiseObj.text;
      const index1 = inputText.indexOf('@');
      const index2 = inputText.indexOf(' ', index1);
      name = inputText.substring(index1, index2);
      text = inputText.substring(index2);
    }
    if (props.praiseObj.user_name) {
      createdBy = props.praiseObj.user_name;
    }
    this.state = {
      type: parseInt(Math.random() * 2),
      imageUrl: `../images/${parseInt(Math.random() * 11)}.jpg`,
      name,
      text,
      createdBy,
    }
  }

  render() {
    const tempImage = require(`../images/${parseInt(Math.random() * 11)}.jpg`);
    return (
      <div className="card">
        <div className={this.state.type===0?'hide card-1':'card-1'}>
          <img src={tempImage} alt="" className="back-image"/>
          <div className="content-box">
            <label className="name">{this.state.name}</label>
            <p className="text">{this.state.text}</p>
          </div>
        </div>
        <div className={this.state.type===1?'hide card-2':'card-2'}>
          <div className="image-box">
            <img src={tempImage} alt="" className="avatar-image"/>
            <label className="name">{this.state.name}</label>
          </div>
          <p className="text">{this.state.text}</p>
        </div>
        <div className="additional-info">
          Created by {this.state.createdBy}
        </div>
      </div>
    );
  }

}

export default Card;