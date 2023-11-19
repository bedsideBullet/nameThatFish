import { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "./ClassGameBoard";

export class ClassApp extends Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
  };

  render() {
    const { correctCount, incorrectCount } = this.state;
    const totalCount = correctCount + incorrectCount;

    return (
      <>
        <ClassScoreBoard
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
        {totalCount < initialFishes.length && (
          <ClassGameBoard
            currentFishIndex={totalCount}
            setCorrectCount={(count) => this.setState({ correctCount: count })}
            setIncorrectCount={(count) =>
              this.setState({ incorrectCount: count })
            }
          />
        )}
        {totalCount === initialFishes.length && (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        )}
      </>
    );
  }
}

export default ClassApp;
