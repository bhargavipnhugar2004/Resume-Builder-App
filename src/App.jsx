import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';

// Resume Builder App Routes
import Home from './pages/resume/Home';
import Builder from './pages/resume/Builder';
import Preview from './pages/resume/Preview';
import Proof from './pages/resume/Proof';

// Legacy PRP Routes
import LandingPage from './pages/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import Assessments from './pages/Assessments';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import TestChecklist from './pages/TestChecklist';
import ShipDeployment from './pages/ShipDeployment';

// AI Resume Builder Build Track (Project 3) Routes
import RB01Problem from './pages/rb/RB01Problem';
import RB02Market from './pages/rb/RB02Market';
import RB03Architecture from './pages/rb/RB03Architecture';
import RB04HLD from './pages/rb/RB04HLD';
import RB05LLD from './pages/rb/RB05LLD';
import RB06Build from './pages/rb/RB06Build';
import RB07Test from './pages/rb/RB07Test';
import RB08Ship from './pages/rb/RB08Ship';
import RBProof from './pages/rb/RBProof';

function App() {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          {/* AI Resume Builder App */}
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/proof" element={<Proof />} />

          {/* Legacy PRP Dashboard */}
          <Route path="/prp" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="practice" element={<Practice />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="resources" element={<Resources />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* Maintenance & QA Routes */}
          <Route path="/prp/07-test" element={<TestChecklist />} />
          <Route path="/prp/08-ship" element={<ShipDeployment />} />
          
          {/* AI Resume Builder Build Track (Project 3) Routes */}
          <Route path="/rb/01-problem" element={<RB01Problem />} />
          <Route path="/rb/02-market" element={<RB02Market />} />
          <Route path="/rb/03-architecture" element={<RB03Architecture />} />
          <Route path="/rb/04-hld" element={<RB04HLD />} />
          <Route path="/rb/05-lld" element={<RB05LLD />} />
          <Route path="/rb/06-build" element={<RB06Build />} />
          <Route path="/rb/07-test" element={<RB07Test />} />
          <Route path="/rb/08-ship" element={<RB08Ship />} />
          <Route path="/rb/proof" element={<RBProof />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
