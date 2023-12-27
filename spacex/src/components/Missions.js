import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../features/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.data);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div>
      {}
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            {mission.name} {}
            {joinedMissions.includes(mission.id) ? (
              <button onClick={() => handleLeaveMission(mission.id)}>Leave</button>
            ) : (
              <button onClick={() => handleJoinMission(mission.id)}>Join</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;