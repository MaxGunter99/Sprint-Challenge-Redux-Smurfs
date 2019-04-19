/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from'axios';

export const PASS = 'PASS';
export const FAIL = 'FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const url = 'http://localhost:3333/smurfs';

export const addSmurf = smurf => dispatch => {

  dispatch({ type: ADD_SMURF });
  axios
    .post( url, smurf )
    .then( response => {
      dispatch({ type: PASS, payload: response.data });
    })
    .catch( error => {
      dispatch({ type: FAIL, payload: error });
    })

}

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get( url )
    .then(response => {
      dispatch({ type: PASS, payload: response.data });
    })
    .catch( error => {
      dispatch({ type: FAIL, payload: error });
    })
}

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  axios
    .put( `${url}/ ${smurf.id}`, smurf )
    .then(response => {
      dispatch({ type: PASS, payload: response.data });
    })
    .catch( error => {
      dispatch({ type: FAIL, payload: error });
    })
}
