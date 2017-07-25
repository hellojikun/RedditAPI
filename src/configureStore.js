import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    loggerMiddleware
)(createStore)
console.log(thunk)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}