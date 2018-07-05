import React, { Component } from "react";
import MathCard from "./components/MathCard";
import Wrapper from "./components/Wrapper";
import maths from "./maths.json";
import "./App.css";

class App extends Component{

state = {
  maths
};

handleRemove = id => {
 const maths = this.state.maths.filter(math => math.id !== id);
 this.setState({maths});
};

render() {
  return(
  <Wrapper>
    <h1 className="title">Maths List</h1>
    { this.state.maths.map(math => 
      <MathCard
        id = {math.id}
        name={math.name}
        image={math.image}
        occupation={math.occupation}
        location={math.location}
        handleRemove={this.handleRemove}
      />
    )};
  </Wrapper>
  )
  };
}

export default App;
