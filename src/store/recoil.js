import { atom } from 'recoil';

export const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: false, // Set the initial state to false (not authenticated)
});