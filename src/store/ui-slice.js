import {createSlice} from '@reduxjs/toolkit'

//creoSlice para 
const uiSlice = createSlice({
  name: 'ui',
  initialState: {notification: null},
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open
      }
    }
  }
})

//exporto sus actions
export const uiActions = uiSlice.actions

//exporto el slice, para index
export default uiSlice