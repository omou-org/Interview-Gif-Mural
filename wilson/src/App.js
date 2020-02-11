import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleContainer from './components/Container/Container';
import SimpleCard from "./components/Card/Card";
import { useSelector, useDispatch } from "react-redux"
import allActions from "./actions"

function App() {
  const fetch = useSelector(state => state.giphy)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.fetchActions.fetchGif())
  }, []);
  return (
    <div className="App">
      <SimpleCard />
    </div>
  );
}

export default App;
