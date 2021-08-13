import {createStore} from './core.js'
import reducer from './reducer.js'
import logger from './modify.js'
const {attach,connection,dispatch} =  createStore(logger(reducer))
window.dispatch = dispatch
export {
   attach,
   connection
}