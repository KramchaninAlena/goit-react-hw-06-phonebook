import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
        console.log('action',action.payload)
      state.push(action.payload)
    },
    deleteContact: (state, action) => {
        const index = state.findIndex(el =>el.id === action.payload)
        state.splice(index, 1) 
    },
},
})


export const { addContact, deleteContact } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer