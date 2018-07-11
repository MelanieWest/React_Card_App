import React, { Component } from "react";
import MathCard from "./components/MathCard";
import Wrapper from "./components/Wrapper";
import maths from "./maths.json";
import "./App.css";


let prevScore =0;

class App extends Component{

state = {
  maths,
  score: 0,
  topScore: 0
};


componentDidMount() {
  this.setState({ maths: this.shuffleData(this.state.maths) });
}

handleCorrectGuess = newData => {
  const { topScore, score } = this.state;
  const newScore = score + 1;
  const newTopScore = newScore > topScore ? newScore : topScore;
  this.setState({
    maths: this.shuffleData(newData),
    score: newScore,
    topScore: newTopScore
  });
};

handleIncorrectGuess = data => {
  this.setState({
    maths: this.resetData(data),
    score: 0
  });
};

resetData = data => {
  const resetData = data.map(item => ({ ...item, clicked: false }));
  return this.shuffleData(resetData);
};

shuffleData = data => {
  let i = data.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i--;
  }
  return data;
};

handleItemClick = id => {
  let guessedCorrectly = false;
  const newData = this.state.maths.map(item => {
    const newItem = { ...item };
    if (newItem.id === id) {
      if (!newItem.clicked) {
        newItem.clicked = true;
        guessedCorrectly = true;
      }
    }
    return newItem;
  });
  guessedCorrectly
    ? this.handleCorrectGuess(newData)
    : this.handleIncorrectGuess(newData);
};
;

render() {
  return(
  <Wrapper>
    <h1 className="title">Maths Card Game</h1>
    <h1 className="title">Score:{this.state.score}</h1>
    { this.state.maths.map(math => 
      <MathCard
        key = {math.id}
        id = {math.id}
        name={math.name}
        image={math.image}
        occupation={math.occupation}
        location={math.location}
        handleItemClick={this.handleItemClick}
      />
    )};
  </Wrapper>
  )
  };
}

export default App;
