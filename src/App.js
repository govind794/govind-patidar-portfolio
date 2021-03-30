import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <HomePage path="/govind-patidar-portfolio" exact />
        </Route>
      </Switch>
      <div className="content">
        <Switch>
          <Route path="/govind-patidar-portfolio/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/govind-patidar-portfolio/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/govind-patidar-portfolio/portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/govind-patidar-portfolio/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
