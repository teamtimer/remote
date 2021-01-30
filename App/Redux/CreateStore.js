import { createStore, applyMiddleware, compose } from 'redux'


export default (rootReducer, rootSaga) => {
  
    const middleware = []
    const enhancers = []
  
    const store = createStore(rootReducer)

    return {
      store,
    }
  }