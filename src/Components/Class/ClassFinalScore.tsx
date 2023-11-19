import { Component } from "react";

interface FinalScoreProps {
  correctCount: number;
  incorrectCount: number;
}

export class ClassFinalScore extends Component<FinalScoreProps> {
  state = { totalCount: 0, correctCount: 0 };

  render() {
    const { correctCount, incorrectCount } = this.props;
    const totalCount = correctCount + incorrectCount;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
