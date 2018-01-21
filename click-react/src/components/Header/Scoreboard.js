import React from "react";

class Scoreboard extends Component {
 constructor (props) {
    super(props);
    this.state = {
  		topscore: 0,
		score: 0
    }
  }

  scoreFunction() {
  	//let user clicks add up to a score displayed in Header 
  }

  updateScore () {
  	this.setState({
  		topscore: {this.newtopscore} 
     	score: {this.newscore} 
    });
  }

  render() {
  return (
    <div className="container">
    <h1> Score: {this.props.newtopscore} || Top Score: {this.props.newscore}</h1>
    </div>
    );
  }

}

export default Scoreboard;
