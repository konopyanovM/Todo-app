import { getItem, setItem } from './../../utils/localStorageAPI'
import { listType } from './../../components/List/types/interface'
import { List, ListItem } from '../../components/List/types/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'

export interface TodosState {
  current: List
  completed: List
  deleted: List
  id: number
}

interface deleteAction {
  id: number
  listType: listType
}

const LS_TODOS = 'todos'
const emptyState = JSON.stringify({
  current: {
    listType: 'current',
    items: [],
  },
  important: {
    listType: 'important',
    items: [],
  },
  completed: {
    listType: 'completed',
    items: [],
  },
  deleted: {
    listType: 'deleted',
    items: [],
  },
  id: 0,
})

const initialState: TodosState = getItem(LS_TODOS, emptyState)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ListItem>) => {
      state.current.items.push(payload)
      state.id++
      setItem(LS_TODOS, state)
    },
    deleteItem: (state, { payload }: PayloadAction<deleteAction>) => {
      // Сохраняем удаленную задачу
      const deletedItem = state[payload.listType].items.filter((item) => {
        return item.id === payload.id
      })[0]
      // "Убираем" ее из массива
      state[payload.listType].items = state[payload.listType].items.filter(
        (item) => {
          return item.id !== payload.id
        },
      )
      // Добавляем ее в удаленные
      state.deleted.items.push(deletedItem)
      setItem(LS_TODOS, state)
    },
    restoreItem: (state, { payload: id }: PayloadAction<number>) => {
      const restoredItem = state.deleted.items.filter((item) => {
        return item.id === id
      })[0]
      state.deleted.items = state.deleted.items.filter((item) => {
        return item.id !== id
      })
      state.current.items.push(restoredItem)
      setItem(LS_TODOS, state)
    },
    completeItem: (state, { payload: id }: PayloadAction<number>) => {
      const completedItem = state.current.items.filter((item) => {
        return item.id === id
      })[0]
      completedItem.isCompleted = true
      state.current.items = state.current.items.filter((item) => {
        return item.id !== id
      })
      state.completed.items.push(completedItem)
      setItem(LS_TODOS, state)
    },
    unCompleteItem: (state, { payload: id }: PayloadAction<number>) => {
      const unCompletedItem = state.completed.items.filter((item) => {
        return item.id === id
      })[0]
      unCompletedItem.isCompleted = false
      state.completed.items = state.completed.items.filter((item) => {
        return item.id !== id
      })
      state.current.items.push(unCompletedItem)
      setItem(LS_TODOS, state)
    },
  },
})

export const {
  addItem,
  deleteItem,
  restoreItem,
  completeItem,
  unCompleteItem,
} = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos
export const selectTodosState = (state: RootState) => state

export default todosSlice.reducer
