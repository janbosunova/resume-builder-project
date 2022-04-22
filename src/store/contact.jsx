import { createSlice } from '@reduxjs/toolkit'
import Experience from '../components/Experience'

const contactSlice = createSlice({
	name: 'contact',
	initialState: [],
	reducers: {
		contactAdd: (state, action) => {
			// console.log(action)
			state.push(action.payload)
			
		},
		education:(state, action)=>{
          console.log(action)
		  state.push(action.payload)

		},
		experience:(state, action)=>{
			console.log(action)
		  state.push(action.payload)

		}
	},
})
export const {education, contactAdd, experience } = contactSlice.actions
export default contactSlice
