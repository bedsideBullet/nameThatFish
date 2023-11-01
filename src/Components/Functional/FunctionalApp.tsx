import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
const [correctCount, setCorrectCount] = useState(0)
const [incorrectCount, setIncorrectCount] = useState(0)

const gameOver= correctCount + incorrectCount === 4

 

  return (
    <>
      <FunctionalScoreBoard 
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        setCorrectCount={setCorrectCount}
        setIncorrectCount={setIncorrectCount} />
      <FunctionalGameBoard 
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        setCorrectCount={setCorrectCount}
        setIncorrectCount={setIncorrectCount} />
      {false && <FunctionalFinalScore  
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        setCorrectCount={setCorrectCount}
        setIncorrectCount={setIncorrectCount}/>}
    </>
  );
}
