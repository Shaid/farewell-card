import * as types from './types';

export const generateFarewell = () => {
  return {
    type: types.FAREWELL_GENERATE,
    farewell: "BYE!",
    person: "Bob McBobface"
  };
}
