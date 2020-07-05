import "./App.css";
import React, { useEffect } from "react";
import * as gifActions from "./actions/gifActions";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import GifCard from "./GifCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"

function App() {
  let words = [
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

  const gifState = useSelector(state => state.gifReducer);
  
  let randomWords = [];
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

  if(idea && animal && quaint && football && concentration 
    && witness && slap && apparatus && north && nominate)
  {
    const ideaGif = {
      link: idea[Math.random() * idea.length].images.original.url,
      name: "idea"
    };
    const animalGif = {
      link: animal[Math.random() * animal.length].images.original.url,
      name: "animal"
    };
    const quaintGif = {
      link: quaint[Math.random() * quaint.length].images.original.url,
      name: "quaint"
    };
    const footballGif = {
      link: football[Math.random() * football.length].images.original.url,
      name: "football"
    };
    const concentrationGif = {
      link: concentration[Math.random() * concentration.length].images.original.url,
      name:"concentration"
    };
    const witnessGif = {
      link: witness[Math.random() * witness.length].images.original.url,
      name: "witness"
    };
    const slapGif = {
      link: slap[Math.random() * slap.length].images.original.url,
      name: "slap"
    };
    const apparatusGif = {
      link: apparatus[Math.random() * apparatus.length].images.original.url,
      name: "apparatus"
    };
    const northGif = {
      link: north[Math.random() * north.length].images.original.url,
      name: "north"
    };
    const nominateGif = {
      link: nominate[Math.random() * nominate.length].images.original.url,
      name: "nominate"
    };
    randomWords.push(
      ideaGif,
      animalGif,
      quaintGif,
      footballGif,
      concentrationGif,
      witnessGif,
      slapGif,
      apparatusGif,
      northGif,
      nominateGif
    );
  }

  const dispatch = useDispatch();
  
  useEffect(() => {
    words.forEach(word => {
      dispatch(gifActions.fetchGif(word));
    });
  }, []);

  const gridCard = randomWords.map(gif => {
    console.log("loading");
    return (
      <Grid key={gif.query} item sm={6} align="center">
        <GifCard key={gif.query} name={gif.name} link={gif.link} />
      </Grid>
    );
  });

  return (
    <div className="App">
      <div>
        <Grid
          container
          spacing={2}
        >
          {gridCard}
        </Grid>
      </div>
    </div>
  );
}

export default App;
