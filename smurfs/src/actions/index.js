import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_SUCCESS';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
          console.log(response.data);
          dispatch({ type: FETCHING_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: FETCHING_FAILURE, payload: err });
      })
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
          console.log(response.data);
          dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: ADD_SMURF_FAILURE, payload: err });
      })
};

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
          console.log(response.data);
          dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: DELETE_SMURF_FAILURE, payload: err });
      })
};

export const updateSmurf = (smurf) => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  axios
      .put('http://localhost:3333/smurfs', smurf)
      .then(response => {
          console.log(response.data);
          dispatch({ type: UPDATE_SMURF_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: UPDATE_SMURF_FAILURE, payload: err });
      })
};


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
