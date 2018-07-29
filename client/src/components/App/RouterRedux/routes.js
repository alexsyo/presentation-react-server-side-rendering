
import React from 'react';
import { connect } from 'react-redux';
// import frontEndStore from '../../../redux/store';
import { initializeProfile } from '../../../redux/reducers/profile';

const WelcomeComponent = () => <div>You shine</div>

const EnergyComponent = connect(
  ({ profile }) => ({ energy: profile.energy })
)(
  ({ energy }) => <div>Energy: {energy}</div>
)

const GasComponent = connect(
  ({ profile }) => ({ gas: profile.gas })
)(
  ({ gas }) => <div>Gas: {gas}</div>
)

export default (store = null) => [
  {
    exact: true,
    path: '/',
    component: WelcomeComponent,
  },
  {
    exact: true,
    path: '/energy',
    component: EnergyComponent,
    loadData: () => store.dispatch(initializeProfile())
  },
  {
    exact: true,
    path: '/gas',
    component: GasComponent,
    loadData: () => store.dispatch(initializeProfile())
  }
]