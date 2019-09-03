import { createAction } from 'promise-middleware-redux';
import { getTMNTdata } from '../services/MLPvsTMNTapi';

export const [
  fetchTMNT,
  FETCH_TMNT,
] = createAction('FETCH_TMNT', getTMNTdata);
