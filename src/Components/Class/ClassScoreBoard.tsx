import { Component } from "react";
import "./styles/score-board.css";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
}

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  state = {
    correctCount: 0,
    incorrectCount: 0,
  };

  render() {
    const { correctCount, incorrectCount } = this.state;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.state.incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.slice(correctCount + incorrectCount).map((answer) => (
            <div
              key={answer}
              className="choice"
            >
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.state.correctCount}</div>
      </div>
    );
  }
}

export default ClassScoreBoard;
