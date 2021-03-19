import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Board } from './pages/Board/Board';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/board"><Board /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
