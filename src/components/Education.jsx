import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
const Education = () => {
    const navigate = useNavigate()
	return (
		<>
			<GlobalStyle />
			<Title>Education Details</Title>

			<FormBlock>
				<FormBlock1>
					<div>
						<input placeholder='School*' />
						<img
							src='http://cdn.onlinewebfonts.com/svg/img_166278.png'
							alt=''
						/>
					</div>
					<div className='date'>
						<input placeholder='start*' />
                        </div>
						<div className='date'>
						<input placeholder='finish*' />
                        </div>
					

					<div>
						<input placeholder='University*' />
                        <img
							src='http://cdn.onlinewebfonts.com/svg/img_166278.png'
							alt=''
						/>
					</div>
					<div className='date_second'>
						<input placeholder='start*' />
                       

					</div>
                    <div className='date_second'>
						<input placeholder='finish*' />

					</div>
                    <button>Back</button>
				</FormBlock1>
				<FormBlock2>
					<div>
						<textarea placeholder='Description*' />
                        <img src='https://cdn-icons.flaticon.com/png/512/4059/premium/4059788.png?token=exp=1649896950~hmac=e44b3c1a4e510805c1074bcdc8ae2698'/>
					</div>
					<div>
						<textarea placeholder='Description*' />
                        <img src='https://cdn-icons.flaticon.com/png/512/4059/premium/4059788.png?token=exp=1649896950~hmac=e44b3c1a4e510805c1074bcdc8ae2698'/>
					</div>
                    <button onClick={()=>navigate('skills')}>next</button>
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
`
const FormBlock = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 80px;
	width: 800px;
	height: 500px;
	background-color: white;
	opacity: 0.9;
`
const FormBlock1 = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
	margin-right: 100px;
	width: 200px;
	div {
		padding: 10px;
		width: 250px;
		height: 35px;
		margin: 0 0 1.2em;
		border-radius: 4px;
		font-size: 15px;
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;
	}
	input {
		border: none;
		outline: none;
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
			width: 82px;
            
		}
       
	}
	.date_second {
		display: flex;
		justify-content: center;
        height: 10px;

		input {
			width: 82px;
		}
	}
    button {
		width: 100px;
		height: 40px;
        background-color: rgb(79, 79, 112);
        
		border: 2px solid #dfe1e6;
		margin: 0 0 1.2em;
		border-radius: 4px;
        opacity: 0.9;
	}
`
const FormBlock2 = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	margin-top: 60px;
	margin-right: 200px;

	div {
		padding: 10px;
		width: 380px;
		height: 140px;
		margin: 0 0 1.2em;
		border-radius: 4px;

		font-size: 15px;
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;
	}
	textarea {
		border: none;
		outline: none;
	}
    img{
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
        margin-left: 300px;
        opacity: 0.9;
	}
	
	
`
