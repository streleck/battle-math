import React, { Component } from 'react';
import Battle_Wrapper from './Battle_Wrapper';
import Test_Map from './Test_Map';
import Monsters from './Monsters'
import '../App.css';
import StatusBar from "./StatusBar";


class Main extends Component {
  state = {
    seeBattle_Wrapper:{display: "none"},
    seeMonsterBtns: {display: "inline"},
    activeMonster: {
      name: "Blank",
      experience: 0,
      attack: ()=> 0,
      img:"",
      HP: 70,
      maxHP: 10
    },
    me: this.props.character
  }

  componentDidMount(){
    this.setState({
      me: this.props.character
    })
  }

  handleMonsterClick = (event) => {
    let monsterPick = Monsters.monsters[event.target.value]
    this.setState({
      activeMonster: monsterPick,
      seeBattle_Wrapper: {display: "block"},
      seeMonsterBtns: {display: "none"}
    });
  }

  afterBattleUpdate = (monster) => {
    let upMe = {...this.state.me};
    upMe.experience += monster.experience;
    upMe.level = Math.floor(this.state.me.experience / 60) + 1
    if (upMe.level > this.state.me.level){
      alert(`You have gained a level!, You are now a level ${upMe.level} adventurer!`);
    }
    this.setState({
      seeBattle_Wrapper: {display: "none"},
      seeMonsterBtns: {display: "inline"},
    })
    this.props.updateMe(upMe);
  }

  componentWillReceiveProps(){
    this.setState({
      me: this.props.character
    })
    console.log(this.state.me.experience)
  }

  render() {
    return (
      <div className="App">
        
        <StatusBar
         name={this.state.me.name}/>
        <Battle_Wrapper
          visible={this.state.seeBattle_Wrapper}
          me={this.state.me}
          monster={this.state.activeMonster}
          afterBattleUpdate={this.afterBattleUpdate}
        />
        <Test_Map
          monsterClick={this.handleMonsterClick}
          seeMonsterBtns={this.state.seeMonsterBtns}
          monsters={this.state.monsters}
        />
      </div>
    );
  };
};

export default Main;
