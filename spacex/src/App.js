
import { Routes, Route } from 'react-router';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => (
  <Routes>
    <Route index element={<Dragons />} />
    <Route path="/rockets" element={<Dragons />} />
    <Route path="/missions" element={<Missions />} />
    <Route path="/my-profile" element={<MyProfile />} />
  </Routes>
);

export default App;