import { Component, FormEvent } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

interface GameBoardProps {
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  setIncorrectCount: React.Dispatch<React.SetStateAction<number>>;
  currentFishIndex: number;
}

export class ClassGameBoard extends Component<GameBoardProps> {
  state = {
    guess: "",
    currentFishIndex: 0,
  };
  nextFishToName = initialFishes[this.state.currentFishIndex];

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const { guess } = this.state;
    const { setCorrectCount, setIncorrectCount, currentFishIndex } = this.props;
    const nextFishToName = initialFishes[currentFishIndex];

    this.state.guess === nextFishToName.name
      ? setCorrectCount((prevCorrectCount) => prevCorrectCount + 1)
      : setIncorrectCount((prevIncorrectCount) => prevIncorrectCount + 1);

    this.setState({ guess: "" });
  };

  render() {
    const { currentFishIndex } = this.props;
    const nextFishToName = initialFishes[currentFishIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={nextFishToName.url}
            alt={nextFishToName.name}
          />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(e) => {
              this.setState({ guess: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
