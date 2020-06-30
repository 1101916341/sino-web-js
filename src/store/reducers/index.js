import { combineReducers } from 'redux'
import app from './app'
import tagsView from './tagsView'
import user from './user'
export default combineReducers({ app, tagsView, user })
