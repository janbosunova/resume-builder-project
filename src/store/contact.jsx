import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
	name: 'contact',
	initialState: [],
	reducers: {
		contactAdd: (state, action) => {
			console.log(action)
			state.push(action.payload)
			// state.name = action.payload.name
			// state.phoneNumber = action.payload.phone
			// state.faceBook = action.payload.faceBook
			// state.lastName = action.payload.lastName
			// state.email = action.payload.email
			// state.instagram = action.payload.instagram
			// state.school = action.payload.school
			// state.schoolStart = action.payload.schoolStart
			// state.schoolFinish = action.payload.schoolFinish
			// state.university = action.payload.universityStart
			// state.universityStart = action.payload.universityStart
			// state.universityFinish = action.payload.universityFinish
			// state.descriptionSchool = action.payload.descriptionSchool
			// state.descriptionUniversity = action.payload.descriptionUniversity
		
			/* 		const newContact = {
				id: new Date(),
				name: action.payload.name,
				phoneNumber: action.payload.phone,
				faceBook: action.payload.faceBook,
				lastName: action.payload.lastName,
				email: action.payload.email,
				instagram: action.payload.instagram,
				school: action.payload.school,
				schoolStart: action.payload.schoolStart,
				schoolFinish: action.payload.schoolFinish,
				university: action.payload.universityStart,
				universityStart: action.payload.universityStart,
				universityFinish: action.payload.universityFinish,
				descriptionSchool: action.payload.descriptionSchool,
				descriptionUniversity: action.payload.descriptionUniversity,
			}
			state.push(newContact) */
		},
	},
})
export const { contactAdd } = contactSlice.actions
export default contactSlice
