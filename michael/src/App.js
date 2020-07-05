import gifList from './gifList';
import "./App.css";
import React, { useEffect } from "react";
import * as fetchActions from "./actions/gifActions";
import { useDispatch, useSelector } from "react-redux";

//Material UI imports
import GifCard from "./GifCard";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core";

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


  const gridCard = words.map(card => {
    return (
      <Grid key={card} item sm={6} align="center">
        <GifCard key={card} name={card} link={card.link} />
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
