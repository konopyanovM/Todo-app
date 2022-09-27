import { ListItem } from './../../components/List/types/interface'
import { createSlice } from '@reduxjs/toolkit'

interface TodosState {
  currentList: ListItem[]
}

const initialState: TodosState = {
  currentList: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
})
