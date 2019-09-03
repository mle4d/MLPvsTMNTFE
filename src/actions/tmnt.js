import { createAction } from 'promise-middleware-redux';
import { getTMNTData } from '../services/MLPvsTMNTapi';

export const [
  fetchTMNT,
  FETCH_TMNT,
] = createAction('FETCH_TMNT', getTMNTData);
