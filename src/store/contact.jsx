import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
   name: 'resume',
   initialState: {
      contact: {},
      education: {},
      experience: {},
      skills: [],
   },
   reducers: {
      contactAdd: (state, action) => {
         const phoneContent = action.payload.phone
         state.contact = action.payload
         state.contact.phone = phoneContent
      },
      education: (state, action) => {
         console.log(action)
         state.education = action.payload
      },
      experience: (state, action) => {
         console.log(action)
         state.experience = action.payload
      },
   },
})
export const { education, contactAdd, experience } = contactSlice.actions
export default contactSlice
