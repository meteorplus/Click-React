import React from "react";
import "./Header.css";
import Scoreboard from "./Scoreboard"

//const Header = props => <h1 className="title">{props.children}</h1>;

class Header extends React.Component {
 constructor (props) {
    super(props);
		this.state = {
			correct: "correctly!",
			incorrect: "incorrectly!"
		}
  }

	updateCorrect () {
		// if user clicks twice 
		// else user clicks once 
		// this.setState({ this.state.incorrect});
  };

	render() {
	return (
		<div className="container">
		  <div className="row">
		   
		    <div className="row">
		      Click-React Game!
		    </div>
		    
		    <div className="row">
		     You Guessed {this.updateCorrect}
		    </div>
		    
		    <div className="row">
		      <Scoreboard/>
		    </div>
		    
		  </div>
		</div>
		)
	}
}

export default Header;
