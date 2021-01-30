import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  configSetBarstyle: ['data'],
})

export const GithubTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  barStyle: 'dark-content',
})

/* ------------- Reducers ------------- */

export const setBarstyle = (state, {data}) => {
    return state.merge({barStyle: data})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONFIG_SET_BARSTYLE]: setBarstyle,
})