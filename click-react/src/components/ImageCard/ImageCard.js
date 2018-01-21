import React from "react";
import "./ImageCard.css";

const ImageCard = props => (

  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="jumbotron">
    </div>
    <span className="border border-primary">
    <span onClick={() => props.updateImages(props.id)} className="">
    </span>
    </span>
  </div>
);

export default ImageCard;
