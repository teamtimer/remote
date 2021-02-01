import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'


export const reducers = combineReducers({
    config: require('./ConfigRedux').reducer,
    user: require('./UserRedux').reducer,
})

export default () => {
    let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

    if (module.hot) {
        module.hot.accept(() => {
          const nextRootReducer = require('./').reducers
          store.replaceReducer(nextRootReducer)
    
          const newYieldedSagas = require('../Sagas').default
          sagasManager.cancel()
          sagasManager.done.then(() => {
            sagasManager = sagaMiddleware(newYieldedSagas)
          })
        })
      }

    return store
}