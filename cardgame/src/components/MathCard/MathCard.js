import React from "react";
import "./MathCard.css";

const MathCard = props => (
  <div className="card" value={props.key}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Address:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span className="update" onClick={() => props.handleClick(props.key)}>𝘅</span>
  </div>
);

export default MathCard;
