import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard1 from './Components/Dashboard/Dashboard1.jsx';
import Landing from './Components/Landing/Landing';
import SportsDashboard from './Components/SportsClub/SportsDashboard';
import Gallery from './Components/Dashboard/Gallery';
import Blog from './Components/Dashboard/Blog';
import LoginPage from './Components/Login/Login1';
import SignupPage from './Components/Signup/Signup1';
import MusicDashboard from './Components/Musicclub/MusicDashboard';

import ArtsDashboard from './Components/Artsclub/ArtsDashboard.jsx';
import CodingDashboard from './Components/Codingclub/CodingDashboard.jsx';
import ProfilePage from './Components/Dashboard/Userprofile.jsx';
import Chatbot from './Components/Chatbot/Chatbot.jsx';
import Footer from './Components/Footer/Footer.jsx';

import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import AdminEventsPage from './Components/Admin/Events/AdminEventsPAge.jsx';
import AdminMembersPage from './Components/Admin/Members/AdminMembersPage.jsx';
import AdminCertificatePage from './Components/Admin/Certificate/AdminCertificatePAge.jsx';
import AdminClubsPage from './Components/Admin/Clubs/AdminClubsPAge.jsx';
import LiteratureDashboard from './Components/LiteratureClub/LiteratureDashboard.jsx';
import ParticipatePage from './Components/Musicclub/Participate.jsx';
import { UserProvider } from './Components/UserContext.jsx';
import JoinClubSports from './Components/SportsClub/Sportsjoin.jsx';
import JoinClubArts from './Components/Artsclub/Artsjoin.jsx';
import JoinClubMusic from './Components/Musicclub/Musicjoin.jsx';
import JoinClubLiterature from './Components/LiteratureClub/Literaturejoin.jsx';
import JoinClubCoding from './Components/Codingclub/Codingjoin.jsx';
import { JoinProvider } from './Components/JoinContext.jsx';
import TabsComponent from './Components/Admin/Members/TabsComponent.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
          <UserProvider>
            <JoinProvider>
        <Routes>
          <Route path="/" element={<Landing />}  />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard1/>}  />
          <Route path="/music" element={<MusicDashboard/>}  />
          <Route path="/literature" element={<LiteratureDashboard/>}  />
          <Route path="/sports" element={<SportsDashboard/>}  />
          <Route path="/arts" element={<ArtsDashboard/>}  />
          <Route path="/coding" element={<CodingDashboard/>}  />
         
          <Route path="/participate" element={<ParticipatePage/>}/>
          <Route path="/test" element={<div>Test Page</div>} />

          <Route path="/profile" element={<ProfilePage/>}  />
          <Route path="/gallery" element={<Gallery/>}  />
          <Route path="/blog" element={<Blog/>}  />
          <Route path="/sports-join" element={<JoinClubSports/>}  />
          <Route path="/music-join" element={<JoinClubMusic/>}  />
          <Route path="/lite-join" element={<JoinClubLiterature/>}  />
          <Route path="/coding-join" element={<JoinClubCoding/>}  />
          <Route path="/arts-join" element={<JoinClubArts/>}  />
           <Route path="/admin" element={<AdminDashboard/>}/>
           <Route path="/admin-login" element={<AdminLogin/>}/>
           <Route path="/admin-events" element={<AdminEventsPage/>}/>
           <Route path="/admin-members" element={<AdminMembersPage/>}/>
           <Route path="/admin-certificate" element={<AdminCertificatePage/>}/>
           <Route path="/admin-clubs" element={<AdminClubsPage/>}/>
        </Routes> 
        </JoinProvider>
        </UserProvider>
      </Router>
    </div>
  );
}



export default App;
