// Functional Componenet of the class system
import React, { useEffect } from 'react';
import * as fetchActions from '../../actions/fetchActions';
import { useDispatch, useSelector } from 'react-redux';

// console.log(fetchActions);
const StuffLists = props => {
    const fetchGifs = useSelector(state => state.fetchGiphy.data);
    const dispatch = useDispatch();
    // const randomGif = fetchGifs[Math.floor(Math.random() * fetchGifs.length)]
    // console.log(fetchGifs);

    useEffect(() => {
      dispatch(fetchActions.fetchGif())
    }, [dispatch])
  
    const renderData = (item) => {
      return <div key={item.id}>{item.title}</div>
    }
    
  
    
    return (
      <>
      {/* {!fetchGifs ? <div>Loading Gifs...</div> : <div className="">{fetchGifs.map((item, index) => {
        return renderData(item);
      })}</div>} */}

    {!fetchGifs ? <div>Loading Gifs...</div> : <div className="">{fetchGifs[Math.floor(Math.random() * fetchGifs.length)].title}</div>}
      </>
    )
  }

  export default StuffLists