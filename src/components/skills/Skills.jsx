import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SkillsList from './SkillsList'
import { addSkills } from '../../store/skills'
import { useNavigate } from 'react-router-dom'
const Skills = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const addSkillsHandler = (e) => {
		e.preventDefault()
		if (value.trim().length === 0) {
			alert('enter a skill before adding !!')
			setValue('')
			return
		}
		dispatch(
			addSkills({
				skills: value,
			}),
		)
		setValue('')
	}
	return (
		<>
			<GlobalStyle />
			<Title>Skills</Title>
			<SkillsList />

			<Block>
			
{/* 
				<img src='https://cdn-icons-png.flaticon.com/512/3095/3095221.png' /> */}
				<div>
					<input
						value={value}
						placeholder='skills*'
						onChange={(e) => setValue(e.target.value)}
					/>
					<button onClick={addSkillsHandler}>Add</button>
				
				</div>
				<div className='buttonDiv'>
					<button>Back</button>
					<button onClick={() => navigate('experience')}>next</button>
				</div>
			</Block>
		</>
	)
}
export default Skills
const GlobalStyle = createGlobalStyle`
body{
   
    background-image: url('https://kingslanduniversity.com/wp-content/uploads/2021/02/Full-Stack-Developers.jpg');
    width: 100%;
	background-attachment: fixed;
}
`
const Title = styled.h1`
	color: rgb(79, 79, 112);
	font-size: 70px;
	text-align: center;
`
const Block = styled.div`
	/* display: flex;
	justify-content: space-around; */
	margin: 0 auto;
	width: 800px;
	height: 400px;
	background-color: white;

	div {
	
		display: flex;
		width: 650px;
		height: 240px;
		/* border-radius: 6px; */
        margin-left: 70px;
		/* border: 2px solid #dfe1e6;
		background-color: #fafbfc; */
	 
		button {
			width: 100px;
			/* height: 40px; */
			background-color: rgb(79, 79, 112);
			border: 2px solid #dfe1e6;
			margin: 0 0 1.2em;
			border-radius: 4px;
			color: white;
			height: 60px;
		}
	}
	input {
		padding: 10px;
		width: 450px;
		height: 35px;
		margin: 0 0 3em;
		border-radius: 4px;
		border: 2px solid rgb(45, 45, 45);
		display: flex;
		align-items: center;
	}
	.buttonDiv {
		display: flex;
		justify-content: space-between;
		button {
			width: 100px;
			height: 40px;
			background-color: rgb(79, 79, 112);
			border: 2px solid #dfe1e6;
			margin: 0 0 1.2em;
			border-radius: 4px;
			color: white;
			font-size: 18px;
		}
	}
`
