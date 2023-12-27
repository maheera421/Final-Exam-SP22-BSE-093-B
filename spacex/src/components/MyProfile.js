import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const bookedDragons = useSelector((state) => state.dragons.bookedDragons);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  return (
    <div>
      <h2>My Missions</h2>
      <ul>
        {joinedMissions.map((mission) => (
          <li key={mission}>{mission}</li>
        ))}
      </ul>
      <h2>My Dragons</h2>
      <ul>
        {bookedDragons.map((dragonId) => (
          <li key={dragonId}>{dragonId}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyProfile;