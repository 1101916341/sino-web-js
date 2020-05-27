import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
//安装redux-devtools-extension的可视化工具
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools({}) : compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)),
)
export default store