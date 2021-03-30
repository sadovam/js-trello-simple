import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import Message from './components/Message/Message';

import "./App.css";
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/board/:id" component={ Board } />
        </Switch>
      </Router>
      <Modal />
      <Message />
    </div>
  );
}

export default App;
