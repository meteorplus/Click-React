import React from "react";

class Scoreboard extends React.Component {
 constructor (props) {
    super(props);
    this.state = {
  		topscore: 0,
		  score: 0
    }
  }

/*  scoreFunction() {
  	if click increment + 1 
    else click greater than 2
    reset count
  }

  updateScore () {
  	this.setState({
  		topscore: {this.newtopscore} 
     	score: {this.newscore} 
    });
  }*/

  render() {
  return (
    <div className="panel-body">
    <h4> Score: {this.props.newtopscore} || Top Score: {this.props.newscore}</h4>
    </div>
    );
  }

}

export default Scoreboard;
