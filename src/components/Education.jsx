import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import useInput from '../hooks/Input'
import { education } from '../store/contact'
import {MdSchool} from 'react-icons/md'
import {FaSchool} from 'react-icons/fa'
const Education = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const schoolInput = useInput('')
	const dateSchoolStart = useInput('')
	const dateSchoolFinish = useInput('')
	const universityInput = useInput('')
	const dateuniversityStart = useInput('')
	const dateuniversityFinish = useInput('')
	const descriptionSchool = useInput('')
	const descriptionUniversity = useInput('')

	const submitChangeHandler = (e)=>{
      e.preventDefault()
	  dispatch(
		  education({
			  school:schoolInput.value,
			  schoolStart:dateSchoolStart.value,
			  schoolFinish:dateSchoolFinish.value,
			  university: universityInput.value,
			  universityStart: dateuniversityStart.value,
			  universityFinish: dateuniversityFinish.value,
			  descriptionSchool:descriptionSchool.value,
			  descriptionUniversity:descriptionUniversity.value

		  })
	  )
	  return navigate('skills')
	}

	return (
		<>
			<GlobalStyle />
			<Title>Education Details</Title>

			<FormBlock onSubmit={submitChangeHandler}>
				<FormBlock1>
					<div>
						<input
							value={schoolInput.value}
							onChange={schoolInput.onchange}
							placeholder='School*'
						/>
							<FaSchool  fontSize='35px' color='rgb(59, 59, 59)'/>
						
					</div>
					
					<div className='date'>
						<input
							value={dateSchoolFinish.value}
							onChange={dateSchoolFinish.onchange}
							type='date'
							placeholder='finish*'
						/>
					</div>

					<div>
						<input
							value={universityInput.value}
							onChange={universityInput.onchange}
							placeholder='University*'
						/>
						<MdSchool  fontSize='45px' color='rgb(59, 59, 59)'/>
					</div>
				
					<div className='date_second'>
						<input
							value={dateuniversityFinish.value}
							onChange={dateuniversityFinish.onchange}
							type='date'
							placeholder='finish*'
						/>
					</div>
					<button>Back</button>
				</FormBlock1>
				<FormBlock2>
					<div>
						<textarea
							value={ descriptionSchool.value}
							onChange={ descriptionSchool.onchange}
							dateUniversityStart
							placeholder='Description*'
						/>
						<img src='https://cdn-icons.flaticon.com/png/512/4059/premium/4059788.png?token=exp=1649896950~hmac=e44b3c1a4e510805c1074bcdc8ae2698' />
					</div>
					<div>
						<textarea
							value={descriptionUniversity.value}
							onChange={descriptionUniversity.onchange}
							placeholder='Description*'
						/>
						<img src='https://cdn-icons.flaticon.com/png/512/4059/premium/4059788.png?token=exp=1649896950~hmac=e44b3c1a4e510805c1074bcdc8ae2698' />
					</div>
					<button type='submit'>next</button>
				</FormBlock2>
			</FormBlock>
		</>
	)
}
export default Education
const GlobalStyle = createGlobalStyle`
body{
    background-image: url('https://techrocks.ru/wp-content/uploads/2019/02/1_FGBGYSyUz0yhcjms6B_ULg.jpeg');
 
}
`
const Title = styled.h1`
	color: rgb(79, 79, 112);
	font-size: 70px;
	text-align: center;
`
const FormBlock = styled.form`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	width: 1000px;
	height: 500px;
	background-color: white;
`
const FormBlock1 = styled.div`
	margin-top: 30px;
	div {
		padding: 10px;
		width: 350px;
		height: 35px;
		margin: 0 0 3em;
		border-radius: 4px;
		border: 2px solid rgb(45, 45, 45);
		display: flex;
		align-items: center;
	}
	input {
		border: none;
		outline: none;
		font-size: 20px;
		width: 380px;
		height: 40px;
	}
	img {
		width: 40px;
		height: 40px;
	}

	.date {
		display: flex;
		justify-content: center;
		height: 10px;
		input {
			width: 200px;
			height: 18px;
		}
	}
	.date_second {
		display: flex;
		justify-content: center;
		height: 10px;

		input {
			width: 200px;
			height: 18px;
		}
	}
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
`
const FormBlock2 = styled.div`
	margin-top: 30px;
	div {
		padding: 10px;
		width: 350px;
		height: 120px;
		margin: 0 0 3em;
		border-radius: 4px;
		border: 2px solid rgb(45, 45, 45);
		display: flex;
		align-items: center;
	}

	textarea {
		font-size: 20px;
		border: none;
		outline: none;
		height: 120px;
		width: 300px;
	}
	img {
		width: 60px;
		height: 60px;
		margin-left: 80px;
	}
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
`
