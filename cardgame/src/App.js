import React, { Component } from "react";
import MathCard from "./components/MathCard";
import Wrapper from "./components/Wrapper";
import maths from "./maths.json";
import "./App.css";


let prevScore =0;

class App extends Component{

state = {
  maths,
  score: "0",
  cardID: "99"
};


handleClick = id => {
 prevScore = parseInt(this.state.score);
 this.setState({score: prevScore++});
 this.setState({cardID: id})
};

render() {
  return(
  <Wrapper>
    <h1 className="title">Maths Card Game</h1>
    <h1 className="title">Score:{this.state.score}   ID: {this.state.cardID}</h1>
    { this.state.maths.map(math => 
      <MathCard
        key = {math.id}
        name={math.name}
        image={math.image}
        occupation={math.occupation}
        location={math.location}
        handleClick={this.handleClick}
      />
    )};
  </Wrapper>
  )
  };
}

export default App;
