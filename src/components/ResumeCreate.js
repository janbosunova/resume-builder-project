import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import useInput from '../hooks/Input'
import { FaRegUser } from 'react-icons/fa'
import { RiUserLine } from 'react-icons/ri'
import { GiSmartphone } from 'react-icons/gi'
import { AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { contactAdd } from '../store/contact'

const ResumeCreate = () => {
	const navigate = useNavigate()
	const test = useSelector((state) => state.contact)
	console.log(test)

	const nameInput = useInput('')
	const phoneInput = useInput('')
	const faceBookInput = useInput('')
	const lastNameInput = useInput('')
	const emailInput = useInput('')
	const instagramInput = useInput('')
	const dispatch = useDispatch()

	const SubmitHandler = (e) => {
		e.preventDefault()
		dispatch(
			contactAdd({
				name: nameInput.value,
				phone: phoneInput.value,
				faceBook: faceBookInput.value,
				lastName: lastNameInput.value,
				email: emailInput.value,
				instagram: instagramInput.value,
			}),
		)
		// console.log(nameInput.value)
		return navigate('education')
	}
	return (
		<>
			<GlobalStyle />
			<Title>Contact information</Title>
			<Form onSubmit={SubmitHandler}>
				<BlockLeft>
					<label>First Name</label>
					<div>
						<input
							name='firstName'
							value={nameInput.value}
							onChange={nameInput.onchange}
						/>
						<FaRegUser fontSize='28px' color='rgb(59, 59, 59)' />
					</div>
					<label>Phone Number</label>
					<div>
						<input
							name='number'
							value={phoneInput.value}
							onChange={phoneInput.onchange}
						/>
						<GiSmartphone fontSize='40px' color='rgb(59, 59, 59)' />
					</div>
					<label>Facebook</label>
					<div>
						<input
							name='faceBook'
							value={faceBookInput.value}
							onChange={faceBookInput.onchange}
						/>
						<AiOutlineFacebook
							fontSize='38px'
							color='rgb(59, 59, 59)'
						/>
					</div>
					<button>Back</button>
				</BlockLeft>
				<BlockRight>
					<label>Last Name</label>
					<div>
						<input
							name='lastName'
							value={lastNameInput.value}
							onChange={lastNameInput.onchange}
						/>
						<RiUserLine fontSize='30px' color='rgb(59, 59, 59)' />
					</div>
					<label>Email Address</label>
					<div>
						<input
							name='email'
							value={emailInput.value}
							onChange={emailInput.onchange}
						/>
						<AiOutlineMail
							fontSize='30px'
							color='rgb(59, 59, 59)'
						/>
					</div>
					<label>Instagram</label>
					<div>
						<input
							name='instagram'
							value={instagramInput.value}
							onChange={instagramInput.onchange}
						/>
						<BsInstagram fontSize='30px' color='rgb(59, 59, 59)' />
					</div>
					<button type='submit'>Next</button>
				</BlockRight>
			</Form>
		</>
	)
}
export default ResumeCreate

export const GlobalStyle = createGlobalStyle`
body{
    background-image: url('https://yappi.com.ua/public/user_files/sostavit-rezyume-1.jpg');
	background-attachment: fixed;
}
`
const Title = styled.h1`
	color: rgb(79, 79, 112);
	font-size: 70px;
	text-align: center;
`
const Form = styled.form`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	width: 1000px;
	height: 500px;
	background-color: white;
	label {
		color: rgb(59, 59, 59);
		font-size: 20px;
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
	input {
		border: none;
		outline: none;
		font-size: 20px;
		width: 380px;
		height: 40px;
	}
`
const BlockLeft = styled.div`
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
`
const BlockRight = styled.div`
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
`