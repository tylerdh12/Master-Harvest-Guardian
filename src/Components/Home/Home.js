import React from "react";

// Bootstrap Imports
import { CardDeck } from "react-bootstrap";

import Jumbotron from "./Elements/Jumbotron";
import Cards from "./Elements/Cards";

export default function Home() {
  return (
    <div className="container mt-5 bg-dark">
      <Jumbotron />
      <CardDeck className="mt-5">
        <Cards
          title="Weather-Based Planting"
          description="Harvest Guardian will take the plants you have selected and alert you when they can be started based on you location and future weather."
        />
        <Cards
          title="Better Maintenance"
          description="Keep up on the watering and nutrient schedule to help keep a healthy and beautiful garden"
        />
        <Cards
          title="Harvest Progress"
          description="Keep track of when you should be able to harvest your crops based on the visual timeline for each crop added to your library"
        />
      </CardDeck>
    </div>
  );
}
