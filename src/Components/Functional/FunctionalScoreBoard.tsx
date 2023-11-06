
import "./styles/score-board.css";



const answersLeft = ["trout", "salmon", "tuna", "shark"];


interface ScoreBoardProps {
  correctCount: number;
  incorrectCount: number;
}


export function FunctionalScoreBoard({correctCount, incorrectCount}: ScoreBoardProps) {
  

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
         </div>
        )).slice(correctCount + incorrectCount)}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
