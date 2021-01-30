import { combineReducers } from 'redux'
import configureStore from './CreateStore'

export const reducers = combineReducers({
    config: require('./ConfigRedux').reducer
})

export default () => {
    let { store } = configureStore(reducers)

    return store
}