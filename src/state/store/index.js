import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore'
import { reducer } from '../reducer'

export const store = createStore(reducer, applyMiddleware(thunk))
