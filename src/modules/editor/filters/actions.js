import { createAction as action } from 'redux-act';

export const destroy = action('filter.destroy', id => ({ id }));

export const move = action('filter.move', (id, offset) => ({ id, offset }));
export const resize = action('filter.resize', (id, duration) => ({ id, duration }));

export const toggleLocked = action('filter.toggleLocked', id => ({ id }));
export const toggleVisibility = action('filter.toggleVisibility', id => ({ id }));
