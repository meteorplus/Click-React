import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Header/Header";
//import Footer from "./components/Footer";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.iamges to the images json array
  state = {
    images
  };

  randomize = id => {
    // randomize this.state.images when clicked
    const random = this.state.iamges.random(image => images.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
        <div className="App">
          <header className="App-header">
          <h1 className="App-title">Click-React Game!</h1>
          <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </header>
      </div>

        <Header className="App-intro">
        </Header>

        {this.state.images.map(images => (
          <ImageCard
            randomize={this.randomize}
            id={images.id}
            key={images.id}
            name={images.name}
            image={images.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
