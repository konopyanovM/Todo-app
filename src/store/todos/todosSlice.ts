import { ListItem } from '../../components/List/types/interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'

interface TodosState {
  currentList: ListItem[]
}

const initialState: TodosState = {
  currentList: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ListItem>) => {
      state.currentList.push(payload)
    },
  },
})

export const { addItem } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer
