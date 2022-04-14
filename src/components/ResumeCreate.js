import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


const ResumeCreate = () => {
    const navigate = useNavigate()
	return (
		<>
    
			<GlobalStyle />
			<H1>Contact information</H1>
			<Form>
				<Block>
					<label>First Name</label>
                    <div>
                    <input />
                    <img src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png'/> 
                    </div>
					
					<br />
					<label>Phone Number</label>
					<div>
                    <input />
                    <img src='https://cdn-icons-png.flaticon.com/128/1077/1077055.png'/>
                    </div>
					<br />
					<label>Facebook</label>
					<div>
                    <input />
                    <img src='https://cdn-icons-png.flaticon.com/128/1051/1051360.png'/>
                    </div>
					<br />
					<button>Back</button>
				</Block>
				<BlockSecond>
					<label>Last Name</label>
				<div>
                <input />
                <img src='https://cdn-icons-png.flaticon.com/512/126/126486.png'/>
                </div>
					<br />
					<label>Email Address</label>
					<div>
                    <input />
                    <img src='https://cdn-icons-png.flaticon.com/512/684/684828.png'/>
                    </div>
					<br />
					<label>Instagram</label>
				<div>
                <input />
                <img src='https://cdn-icons-png.flaticon.com/512/87/87390.png'/>
                </div>
					<br />
					<button onClick={()=>navigate('education')}>Next</button>
				</BlockSecond>
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
const H1 = styled.h1`
	color: rgb(79, 79, 112);
	font-size: 70px;
`

const Form = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 80px;
	width: 800px;
	height: 500px;
	background-color: white;
	opacity: 0.9;
    label{
        color: rgb(79, 79, 112);
    }
`

const Block = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
	margin-right: 100px;
	width: 200px;
    div{
        padding: 10px;
		width: 250px;
		height: 35px;
		margin: 0 0 1.2em;
		border-radius: 4px;
		font-size: 15px;
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;

    }
    img{
        width: 40px;
        height: 40px;
    }
	input {
        border: none;
        outline: none;
	
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

const BlockSecond = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	margin-top: 60px;
	margin-right: 80px;

    div{
        padding: 10px;
		width: 250px;
		height: 35px;
		margin: 0 0 1.2em;
		border-radius: 4px;
		font-size: 15px;
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;

    }
    img{
        width: 40px;
        height: 40px;
    }
	input {
        border: none;
        outline: none;
	
        
	}

    button {
		width: 100px;
		height: 40px;
		/* background-color: #ff2400; */
        background-color: rgb(79, 79, 112);
		border: 2px solid #dfe1e6;
		margin: 0 0 1.2em;
		border-radius: 4px;
        margin-left: 170px;
        opacity: 0.9;
	}
`
