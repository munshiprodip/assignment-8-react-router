import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
 
  return (
    <section style={{backgroundColor: '#011a32'}}>
      <Router>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/details/:idLeague">
                  <LeagueDetails />
              </Route>
            </Switch>
      </Router>
    </section>
  );
}

export default App;
