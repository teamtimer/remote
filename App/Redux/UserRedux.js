import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['data'],
  userSuccess: ['payload'],
  userFailure: null,
  userLogout: null,
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  id: null,
  userId: null,
  username: null,
  apiKey: null,
  loggedIn: false,
  errors: {
    login: null,
    password: null,
  }
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>{
  console.tron.log('userRequest')
  return state.merge({ fetching: true, payload: null })
}
  

export const logout = (state) => {
  return state.merge(INITIAL_STATE)
}

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  if (payload.success) {
    return state.merge({ 
      fetching: false, error: null, payload, 
      loggedIn: true, 
      username: payload.user.username,
      userId: payload.user.id,
      apiKey: payload.user.api_key, 
      errors: {login: null, password: null}
    })
  }else{
    return state.merge({ fetching: false, error: null, payload, errors: payload.errors })
  }
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
  [Types.USER_LOGOUT]: logout,
})