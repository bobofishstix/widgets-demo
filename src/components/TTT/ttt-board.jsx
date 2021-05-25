import React from "react";
import { Storage } from "./storage.js";
import { Box } from "./ttt-box.jsx";
import * as utils from "./utils.js";
import './styles/ttt-board.css';


export class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: Array(9).fill(null),
      xIsNext: true,
    };
  }

  storage = new Storage();

  handleBoxClick(index) {
    const boxes = this.state.boxes.slice();
    if (utils.findWinner(boxes) || boxes[index]) {
      return;
    }
    if (utils.areAllBoxesClicked(boxes) === true) {
      return;
    }
    boxes[index] = this.state.xIsNext ? "x" : "o";
    this.setState({
      boxes: boxes,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleBoardRestart = () => {
    this.setState({
      boxes: Array(9).fill(null),
      xIsNext: true,
    });
  };

  render() {
    const winner = utils.findWinner(this.state.boxes);
    const isFilled = utils.areAllBoxesClicked(this.state.boxes);
    let status;
    if (winner) {
      status = `The winner is: ${winner}!`;
      this.storage.update([`${winner} won`]);
    } else if (!winner && isFilled) {
      status = "Game drawn!";
      this.storage.update(["Game drawn"]);
    } else {
      status = `It is ${this.state.xIsNext ? "x" : "o"}'s turn.`;
    }
    return (
      <>
        <div className="board-wrapper">
          <div className="board">
            <h2 className="board-heading">{status}</h2>
            <div className="board-row">
              <Box value={this.state.boxes[0]} onClick={() => this.handleBoxClick(0)} />

              <Box value={this.state.boxes[1]} onClick={() => this.handleBoxClick(1)} />

              <Box value={this.state.boxes[2]} onClick={() => this.handleBoxClick(2)} />
            </div>

            <div className="board-row">
              <Box value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />

              <Box value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />

              <Box value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
            </div>

            <div className="board-row">
              <Box value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />

              <Box value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />

              <Box value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
            </div>
          </div>
            <div className="board-footer">
              <button className="btn" onClick={this.handleBoardRestart}>
                Start new game
              </button>
            </div>

        </div>
      </>
    );
  }
}

export default Board;
