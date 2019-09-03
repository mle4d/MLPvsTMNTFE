import { FETCH_MLP } from '../actions/mlp';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_MLP:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
