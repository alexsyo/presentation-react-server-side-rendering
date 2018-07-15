import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeProfile } from '../../../redux/reducers/profile';

class ReduxBasic extends Component {
  componentWillMount() {
    const {energy, gas} = this.props;
    
    if(energy === 0 && gas === 0) {
      this.props.initializeProfile();
    }
  }

  render() {
    return (
      <div>
        <div>Energy: {this.props.energy}</div>
        <div>Gas: {this.props.gas}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ profile }) => ({
  energy: profile.energy,
  gas: profile.gas
});

const mapDispatchToProps = dispatch => ({
  initializeProfile: () => dispatch(initializeProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxBasic);