import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AgentDetails from '../components/AgentDetails';
import ValorantScreen from '../components/ValorantScreen';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agent/:agentId" element={<AgentDetails />} />
        <Route path="/" element={<ValorantScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
