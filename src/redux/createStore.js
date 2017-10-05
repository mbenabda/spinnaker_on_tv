import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from './modules'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const dispatchLogger = ({ getState }) => next => action => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch of ', action, getState())
    return returnValue
}

export default (data = {}) => {
  return createStore(
    combineReducers(reducers),
    data,
    applyMiddleware(
      thunk,
      promiseMiddleware({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
      }),
      dispatchLogger,
    )
  )
}