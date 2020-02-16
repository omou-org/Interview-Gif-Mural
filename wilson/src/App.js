// Required Imports
import React, { useEffect } from "react";
import * as fetchActions from "./actions/fetchActions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import GifCard from "./components/GifCard/GifCard";
import Grid from "@material-ui/core/Grid";

function App() {
  // Created and array of search terms to loop through and pass it onto our useDispatch function
  let searchTerms = [
    "idea",
    "animal",
    "quaint",
    "football",
    "concentration",
    "witness",
    "slap",
    "apparatus",
    "north",
    "nominate"
  ];
  // Calling our hooks from react-redux
  // gifState is our global state
  const gifState = useSelector(state => state.giphyReducer);
  // dispatch is used to run our functions from our actions
  const dispatch = useDispatch();
  // Created a empty array to store the link and query term for our global state
  let randomGif = [];
  // Deconstructed the gifState array to use in our condition
  let {
    idea,
    animal,
    quaint,
    football,
    concentration,
    witness,
    slap,
    apparatus,
    north,
    nominate
  } = gifState;
  // Condition used to make sure we have all our responses before we can use our data otherwise, we return an error
  if (
    idea &&
    animal &&
    quaint &&
    football &&
    concentration &&
    witness &&
    slap &&
    apparatus &&
    north &&
    nominate
  ) {
    // storing the link url in a variable and randomizing the results
    const randomIdea = {
      link: idea[Math.floor(Math.random() * idea.length)].images.original.url,
      query: idea.query
    };
    const randomAnimal = {
      link:
        animal[Math.floor(Math.random() * animal.length)].images.original.url,
      query: animal.query
    };
    const randomQuaint = {
      link:
        quaint[Math.floor(Math.random() * quaint.length)].images.original.url,
      query: quaint.query
    };
    const randomFootball = {
      link:
        football[Math.floor(Math.random() * football.length)].images.original
          .url,
      query: football.query
    };
    const randomConcentration = {
      link:
        concentration[Math.floor(Math.random() * concentration.length)].images
          .original.url,
      query: concentration.query
    };
    const randomWitness = {
      link:
        witness[Math.floor(Math.random() * witness.length)].images.original.url,
      query: witness.query
    };
    const randomSlap = {
      link: slap[Math.floor(Math.random() * slap.length)].images.original.url,
      query: slap.query
    };
    const randomApparatus = {
      link:
        apparatus[Math.floor(Math.random() * apparatus.length)].images.original
          .url,
      query: apparatus.query
    };
    const randomNorth = {
      link: north[Math.floor(Math.random() * north.length)].images.original.url,
      query: north.query
    };
    const randomNominate = {
      link:
        nominate[Math.floor(Math.random() * nominate.length)].images.original
          .url,
      query: nominate.query
    };
    // push results back into randomGif array
    randomGif.push(
      randomIdea,
      randomAnimal,
      randomQuaint,
      randomFootball,
      randomConcentration,
      randomWitness,
      randomSlap,
      randomApparatus,
      randomNorth,
      randomNominate
    );
  }

  // dispatches the action of fetchGif (which is a function from our actions) and passes in the looped search terms of our array
  useEffect(() => {
    searchTerms.forEach(searchWord => {
      dispatch(fetchActions.fetchGif(searchWord));
    });
  }, []);

  // Conditional to check if gifState does not exist, we render Loading
  if (!gifState) {
    return <div>Loading Gifs...</div>;
  }

  // Mapped through our randomGif Array to create cards with rows of 5 and cols of 2 for each row.
  const gridCard = randomGif.map(card => {
    return (
      <Grid item xs={6}>
        {" "}
        <GifCard key={card.query} word={card.query} link={card.link} />{" "}
      </Grid>
    );
  });

  return (
    <div className="App">
      <Grid
        container
        alignContent="center"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {gridCard}
      </Grid>
    </div>
  );
}

export default App;
