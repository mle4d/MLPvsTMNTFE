import { createAction } from 'promise-middleware-redux';
import { getTMNT } from '../services/MLPvsTMNTapi';

export const [
  fetchTMNT,
  FETCH_TMNT,
] = createAction('FETCH_TMNT', getTMNT);
