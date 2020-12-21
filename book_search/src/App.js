import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import TopCard from './components/TopCard';
import './App.css';
import { Button, Card, Container, Jumbotron, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <TopCard />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/search" component={SearchPage} />
            {/* <Route exact path="/todos/new" component={AddTodos} /> */}
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
