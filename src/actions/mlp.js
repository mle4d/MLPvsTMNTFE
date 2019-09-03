import { createAction } from 'promise-middleware-redux';
import { getMLP } from '../services/MLPvsTMNTapi';

export const [
  fetchMLP,
  FETCH_MLP,
] = createAction('FETCH_MLP', getMLP);
