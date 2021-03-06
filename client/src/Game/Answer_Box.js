import React, { Component } from "react";
import Attacks from "./Attacks.js"

class Answer_Box extends Component {

  render() {
    return (
      <div>
        <form
          id="answer-form"
          style={this.props.state.seeProblemBox}>
          <button
            id="submitAnswer"
            onClick={this.props.submit}
            >
            {this.props.state.problem.problemDisplay}
          </button>
          <input
            className="userAnswerbox"
            type="input"
            name="userAnswer"
            onChange={this.props.onChange}
            value={this.props.state.userAnswer}
          />
          <br/>
        </form>
        <div style={this.props.state.seeAttackBtns}>
          {Attacks.abilities.filter((ability) => ability.level <= this.props.me.level).map((ability, index) => (
            <button
              className="attackBtn"
              id={index}
              onClick={this.props.attack}
            >
            {ability.name}</button>
          ))}
        </div>
        <div
          id="results"
          onClick={this.props.handleResult}
          className="result-box"
          style={this.props.state.seeResultBox}
        >
          <h2>{this.props.state.actionHeading}</h2>
          <h4 className="sub-head">{this.props.state.actionSubHead}</h4>
        </div>
        <div
        id="counter-attack-results"
          onClick={this.props.handleCounter}
          className="result-box"
          style={this.props.state.seeCounterAttack}
        >
          <h2>{this.props.state.actionHeading}</h2>
          <h4 className="sub-head">{this.props.state.actionSubHead}</h4>
        </div>
      </div>
    )
  }
}

export default Answer_Box;
