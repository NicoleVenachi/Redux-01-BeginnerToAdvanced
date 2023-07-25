import {createSlice} from '@reduxjs/toolkit'

//creoSlice para auth
const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoggedIn: false},
  reducers: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    }
  }
})

//exporto sus actions
export const authActions = authSlice.actions

//exporto el slice, para index
export default authSlice