import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, bookDragon, cancelDragonBooking } from '../features/dragons/dragonsSlice';


const Dragons = () => {
    const dispatch = useDispatch();
    const dragons = useSelector((state) => state.dragons.data);
    const bookedDragons = useSelector((state) => state.dragons.bookedDragons);
  
    useEffect(() => {
      dispatch(fetchDragons());
    }, [dispatch]);
  
    const handleBookDragon = (dragonId) => {
      dispatch(bookDragon(dragonId));
    };
  
    const handleCancelBooking = (dragonId) => {
      dispatch(cancelDragonBooking(dragonId));
    };
  
    return (
      <div>
        
        <ul>
          {dragons.map((dragon) => (
            <li key={dragon.id}>
              {dragon.name} {}
              {bookedDragons.includes(dragon.id) ? (
                <button onClick={() => handleCancelBooking(dragon.id)}>Cancel Booking</button>
              ) : (
                <button onClick={() => handleBookDragon(dragon.id)}>Book</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Dragons;
