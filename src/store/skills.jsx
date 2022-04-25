import { createSlice } from '@reduxjs/toolkit'

export const skillsSlice = createSlice({
	name: 'skills',
	initialState: JSON.parse(localStorage.getItem('skills')) || [],
	reducers: {
		addSkills: (state, action) => {
			const newSkills = {
				id: Math.random().toString(),
				name: action.payload.skills,
			}
			state.push(newSkills)
		},
		deleteSkills: (state, action) => {
			return state.filter((item) => item.id !== action.payload.id)
		},
	},
})

export const { addSkills, deleteSkills } = skillsSlice.actions

// export default skillsSlice
