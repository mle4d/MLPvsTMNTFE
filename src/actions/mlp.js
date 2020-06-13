import { createAction } from 'promise-middleware-redux';
import { getMLPData } from '../services/MLPvsTMNTapi';

export const [
  fetchMLP,
  FETCH_MLP,
] = createAction('FETCH_MLP', getMLPData);
