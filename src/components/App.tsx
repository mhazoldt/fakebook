import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/bootstrap-utilities.css';
import Home from './Home'
import Profile from './Profile'
import BaseLayout from './BaseLayout';


class App extends React.Component<any, any> {
  public render() {
    return (
        <Router>
          <BaseLayout>
            <Switch>
              <Route exact path="/profile/:id" component={Profile} />
              <Route path="/" component={Home} />
            </Switch>
          </BaseLayout>
        </Router>  
    );
  }
}

export default App;
