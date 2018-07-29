import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import routes from './routes';

const WelcomeComponent = () => <div>You shine</div>
const EnergyComponent = () => <div>Energy rocks</div>
const GasComponent = () => <div>Gas rulez</div>

class RouterRedux extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">go to home</NavLink>
          </li>
          <li>
            <NavLink to="/energy">go to energy</NavLink>
          </li>
          <li>
            <NavLink to="/gas">go to gas</NavLink>
          </li>
        </ul>
        <Switch>
          {routes().map(route => (
            <Route 
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={() => <route.component />}
            />
          ))}
        </Switch>
      </div>
    )
  }
}

export default RouterRedux;