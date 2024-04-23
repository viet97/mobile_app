import About from './About';
import { combineReducers } from 'redux';

export const listReducer = {

  About,
};

const MainListReducers = combineReducers(
  {
    ...listReducer,
  }
);


const root = MainListReducers;

export default root;
