const ADD_ENERGY = 'ADD_ENERGY';
const ADD_GAS = 'ADD_GAS'

export const addEnergy = () => ({ type: ADD_ENERGY});
export const addGas = () => ({ type: ADD_GAS });
export const initializeProfile = () => dispatch => {
  dispatch(addEnergy());
  dispatch(addEnergy());
  dispatch(addEnergy());
  dispatch(addGas());
  dispatch(addGas());
}

const initialState = {
  energy: 0,
  gas: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENERGY:
      return {...state, energy: state.energy + 1}
    case ADD_GAS: 
      return {...state, gas: state.gas + 1}
    default:
      return state;
  }
}