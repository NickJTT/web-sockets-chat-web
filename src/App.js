import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ChatRoom from './components/chatRoom/ChatRoom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component = { Home }/>
        <Route exact path = '/:roomId' component = { ChatRoom }/>
      </Switch>
    </Router>
  );
}
