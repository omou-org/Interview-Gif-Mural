import React, { useState } from 'react';
import './App.css';
import StuffLists from "./components/StuffLists/StuffLists";
import Card from "./components/Card/Card";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";


const words = ["idea","animal","quaint","football","concentration","witness","slap","apparatus","north","nominate"];

function App() {
  const [gifCard, setGifCard] = useState({
    word: ""
  });

  const gridCard = words.map(word => {
  return <GridListTile component="li"><Card key={word} words={word}/></GridListTile>
  })

  return (
    <div className="App">
      <StuffLists />
      <Grid container alignContent="center" justify="center" alignItems="center">
        <GridList cols={2} cellHeight="auto" component="ul" spacing={2}>
          {gridCard}
        </GridList>
        </Grid>
    </div>
  );
}

export default App;

