import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const WelcomePage = () => {
	const navigate = useNavigate()
	return (
		<Block>
			<h1>Welcome</h1>
			<img
				src='https://media.istockphoto.com/vectors/summary-icon-vector-sign-and-symbol-isolated-on-white-background-vector-id1001231546'
				alt='Resume-foto'
			/>
			<p>
				Create a resume online <br /> that will bring you to your goal!
			</p>
			<button onClick={() => navigate('resume')}>
				Create Resume Online
			</button>
		</Block>
		
	)
}
export default WelcomePage

const Block = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	max-width: 750px;
	height: 600px;
	background-color: white;
	opacity: 0.8;
	border-radius: 5px;
	margin-top: 60px;

	h1 {
		font-weight: bold;
		margin-top: 50px;
		color: #5e6c84;
		font-size: 50px;
	}
	img {
		border: 0px;
		height: 200px;
	}
	p {
		font-size: 30px;
		color: rgb(79, 79, 112);
	}
	button {
		width: 350px;
		border: 0px;
		height: 50px;
		margin: 0 0 1.2em;
		border-radius: 5px;
		font-weight: bold;
		font-size: 20px;
		color: white;
		background: #5e6c84;
	}
`
