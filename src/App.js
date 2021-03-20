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
          <HomePage path="/" exact />
        </Route>
      </Switch>
      <div className="content">
        <Switch>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
