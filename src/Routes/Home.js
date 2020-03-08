import React from "react";

// Bootstrap Imports
import { CardDeck } from "react-bootstrap";

import Jumbotron from "../Components/Jumbotron";
import Cards from "../Components/Cards";

export default function Home() {
  return (
    <div className="">
      <Jumbotron
        heading="Helping Create a Greener Garden"
        content="Harvest Gardner is a gardening tool that will help to manage the
        gardening process"
        button="Sign Up"
      />
      <CardDeck className="container mx-auto">
        <Cards
          image="./assets/close-up-photography-of-green-leaf-with-drops-of-water-544980_Compressed.jpg"
          title="Weather-Based Planting"
          description="Harvest Guardian will take the plants you have selected and alert you when they can be started based on you location and future weather."
          linkTitle="Go Here"
          link="/"
        />
        <Cards
          image="./assets/blur-close-up-focus-ground-401213_Compressed.jpg"
          title="Better Maintenance"
          description="Keep up on the watering and nutrient schedule to help keep a healthy and beautiful garden"
          linkTitle="About"
          link="/about"
        />
        <Cards
          image="./assets/healthy-vegetables-hand-gardening-9301_Compressed.jpg"
          title="Harvest Progress"
          description="Keep track of when you should be able to harvest your crops based on the visual timeline for each crop added to your library"
          linkTitle="Dynamic"
          link="/contact"
        />
      </CardDeck>
    </div>
  );
}
