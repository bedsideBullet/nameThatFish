import "./styles/score-board.css";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
}

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
}: ScoreBoardProps) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
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
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
