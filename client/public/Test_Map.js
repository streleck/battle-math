import React, { Component } from 'react';
import Battle_Wrapper from './Battle_Wrapper'
import Monster from "./Monster"
import './App.css';

class Test_Map extends Component {


  render() {
    return (
      <div>
        <button
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="0"
        >Trump</button>
        <button
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="1"
        >Gross Teenager</button>
        <button
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="3"
        >Bob</button>
        <button id="Creepy Vampire"
          style={this.props.seeMonsterBtns}
          onClick={this.props.monsterClick}
          value="4"
        ></button>
      </div>
    );
  }
}

export default Test_Map;
