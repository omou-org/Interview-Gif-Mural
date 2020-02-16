// Functional Componenet of the class system
import React, { useEffect } from 'react';
import * as fetchActions from '../../actions/fetchActions';
import { useDispatch, useSelector } from 'react-redux';

// console.log(fetchActions);

// Pass in searchWords to fetchGif function and grab a response.

const StuffLists = props => {
  let searchTerms = ["idea", "animal", "quaint", "football", "concentration", "witness", "slap", "apparatus", "north", "nominate"];
  
  const gifState = useSelector(state => state.giphyReducer);
  const dispatch = useDispatch();
  // const randomGif = gifState.idea.data[Math.floor(Math.random() * gifState.idea.length)];
  console.log(gifState.idea.data);
  // console.log(randomGif)
  
  useEffect(() => {
    searchTerms.forEach(searchWord => {
      dispatch(fetchActions.fetchGif(searchWord))
    });
    }, [])
  
    // const renderData = (item) => {
    //   return <div key={item.id}>{item.title}</div>
    // }
    
    // Have if statement up front to optimize load

  if(!gifState) {
    return <div>Loading Gifs...</div>
  }
    
    return (
      <>
      {/* {!fetchGifs ? <div>Loading Gifs...</div> : <div className="">{fetchGifs.map((item, index) => {
        return renderData(item);
      })}</div>} */}

    {/* {<div className="">{gifState.idea[Math.floor(Math.random() * gifState.idea.length)]}</div>} */}
    {/* <div className="">{gifState.idea.map(e => {
      return console.log(e)
    })}</div> */}
      </>
    )
  }

  export default StuffLists