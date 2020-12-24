import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from "./pages/Homepage";
import SavePage from "./pages/SavePage";
import TopCard from './components/TopCard';
import './App.css';
import { Button, Card, Container, Jumbotron, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/search" component={SavePage} />
            {/* <Route exact path="/todos/new" component={AddTodos} /> */}
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
