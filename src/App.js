import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import PlayView from "../src/views/Play/Play";
import HistoryView from "../src/views/History/History"
import Header from './components/Header/Header';
import MainNavigation from './components/MainNavigation/MainNavigation';
import NonMatchingRouteView from './views/NonMatchingRouteView/NonMatchingRouteView';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainNavigation />
        <main role="main" className="container-fluid main-container"
        data-testid="app-main-container">
          <Switch>
            <Route exact path="/" component={PlayView} />
            <Route path="/history" component={HistoryView} />
            <Route component={NonMatchingRouteView} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
