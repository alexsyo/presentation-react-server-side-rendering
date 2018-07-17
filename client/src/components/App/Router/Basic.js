import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";

const WelcomeComponent = () => <div>You shine</div>
const EnergyComponent = () => <div>Energy rocks</div>
const GasComponent = () => <div>Gas rulez</div>
class RouterBasic extends Component {
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
          <Route path="/" exact component={WelcomeComponent}/>
          <Route path="/energy" component={EnergyComponent}/>
          <Route path="/gas" component={GasComponent}/>
        </Switch>
      </div>
    )
  }
}

export default RouterBasic;