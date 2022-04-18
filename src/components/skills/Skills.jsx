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
				<h1>Tell me your Skills</h1>

				<img src='https://cdn-icons-png.flaticon.com/512/3095/3095221.png' />
				<div>
					<input
						value={value}
						placeholder='skills*'
						onChange={(e) => setValue(e.target.value)}
					/>
					<button onClick={addSkillsHandler}>Add</button>

					<img src='https://st2.depositphotos.com/1803840/8114/v/950/depositphotos_81143288-stock-illustration-vector-teamwork-skills-icon-of.jpg' />
				</div>
				<button onClick={()=>navigate('decisive')} >next</button>
			</Block>
		</>
	)
}
export default Skills
const GlobalStyle = createGlobalStyle`
body{
   
    background-image: url('https://kingslanduniversity.com/wp-content/uploads/2021/02/Full-Stack-Developers.jpg');
    width: 100%;
 
}
`
const Title = styled.h1`
	color: rgb(79, 79, 112);
	font-size: 70px;
`
const Block = styled.div`
	/* display: flex;
	justify-content: space-around; */
	margin: 0 auto;
	/* margin-top: 80px; */
	width: 800px;
	height: 500px;
	background-color: white;
	opacity: 0.9;
	img {
		width: 100px;
		height: 100px;
	}
	div {
		/* padding: 10px; */
		width: 650px;
		height: 240px;
		/* margin: 0 0 1.2em; */
		border-radius: 6px;

		margin-left: 70px;

		/* font-size: 15px; */
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;
		img {
			width: 200px;
			height: 200px;
			margin-left: 180px;
			margin-top: 30px;
		}
		button {
			width: 50px;
			height: 35px;
			background-color:rgb(255, 182, 193);
			border: 2px solid #dfe1e6;
			margin: 0 0 1.2em;
			border-radius: 4px;
			opacity: 0.9;
		}
	}
	input {
		height: 30px;
		background-color:rgb(255, 182, 193);

		border: 2px solid #dfe1e6;
		margin: 0 0 1.2em;
		border-radius: 5px;
		opacity: 0.9;
	}
	button {
		width: 100px;
		height: 40px;
		background-color: rgb(63, 159, 191);

		border: 2px solid #dfe1e6;
		margin: 0 0 1.2em;
		border-radius: 4px;
		opacity: 0.9;
	}
`
