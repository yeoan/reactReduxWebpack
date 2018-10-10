import {YOUR_TYPES}from '../actions/types';

export const yourAction = (anyNumber) => {
  return {
    type : YOUR_TYPES,
    yourContent : anyNumber
  };
};
