import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Header/Scoreboard";
import Footer from "./components/Footer"
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.iamges to the images json array
  state = {
    images: images,
    count: 0
  };

  updateImages() {
    console.log("in updateImages function")
    const random = Math.floor((Math.random() * images) + 1);
    this.setState({ 
      random, 
      count: this.state.count + 1});
  };

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
          <Header className="container-fluid">
          <div class="jumbotron container-fluid">
            <div class="card-header indigo text-center lighten-1">
              <h1 class="h1-responsive">Click-React Game!</h1>
              <p class="lead">Click on the images to get started!</p>
          </div>
          </div>

            <Scoreboard/>
          </Header>
       
        {this.state.images.map(images => (
          <ImageCard 
            onClick={this.updateImages}
            id={images.id}
            key={images.id}
            name={images.name}
            image={images.image}
          />
        ))}

        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
