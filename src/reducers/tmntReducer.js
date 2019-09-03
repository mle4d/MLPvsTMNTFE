import { FETCH_TMNT } from '../actions/tmnt';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TMNT:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
