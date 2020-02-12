// Functional Componenet of the class system
import React, { useEffect } from 'react';
import * as fetchActions from '../../actions/fetchActions';
import { useDispatch, useSelector } from 'react-redux';

const StuffLists = props => {
    const fetchGifs = useSelector(state => state.giphy.data);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchActions.fetchGif())
    }, [dispatch])
  
    const renderData = (item) => {
      return <div key={item.id}>{item.title}</div>
    }
    
  
    
    return (
      <>
      {!fetchGifs ? <div>Loading Gifs...</div> : <div className="">{fetchGifs.map((item, index) => {
        return renderData(item);
      })}</div>}
      </>
    )
  }

  export default StuffLists