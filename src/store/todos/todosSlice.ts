import { listType } from './../../components/List/types/interface'
import { List, ListItem } from '../../components/List/types/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'

interface TodosState {
  current: List
  important: List
  completed: List
  deleted: List
  id: number
}

interface deleteAction {
  id: number
  listType: listType
}

const initialState: TodosState = {
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
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ListItem>) => {
      state.current.items.push(payload)
      state.id++
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
    },
    restoreItem: (state, { payload }: PayloadAction<number>) => {
      const restoredItem = state.deleted.items.filter((item) => {
        return item.id === payload
      })[0]
      state.deleted.items = state.deleted.items.filter((item) => {
        return item.id !== payload
      })
      state.current.items.push(restoredItem)
    },
  },
})

export const { addItem, deleteItem, restoreItem } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer
