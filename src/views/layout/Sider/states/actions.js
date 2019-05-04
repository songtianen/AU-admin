import * as r from './actionTypes';

export const spinLoading = (loading) => {
  return { type: r.SPIN_LOADING, spinLoading: loading };
};
