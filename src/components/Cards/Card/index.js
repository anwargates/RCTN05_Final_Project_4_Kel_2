import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "../../../assets/placeholder.jpg";

const Carde = (props) => {
  return (
    <Card style={{ width: "18rem", padding: 0, borderRadius: 10 }}>
      <Card.Img
        variant="top"
        src={props.item.Poster !== "N/A" ? props.item.Poster : Placeholder}
        alt="Poster"
        height={300}
      />
      <Card.Body className="nav justify-content-center">
        <Card.Title className="text-white">{props.item.Title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Carde;
