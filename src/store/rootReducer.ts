import { combineReducers } from 'redux'
import todosReducer from './todos/todosSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
