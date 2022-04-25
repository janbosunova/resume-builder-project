import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Decisive from './components/Decisive'
import Education from './components/Education'
import Experience from './components/Experience'
import ResumeCreate from './components/ResumeCreate'
import Skills from './components/skills/Skills'
import WelcomePage from './components/WelcomePage'

const language = [
	{
		code: 'en',
	},
	{
		code: 'ru',
	},
]

function App() {
	const { i18n } = useTranslation()
	const changeLanguage = (e) => {
		i18n.changeLanguage(e.target.value)
	}
	return (
		<div className='App'>
			<Header>
				<h1>Resume</h1>
				<select onChange={changeLanguage}>
					{language.map((el) => (
						<option>{el.code}</option>
					))}
				</select>
			</Header>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='resume' element={<ResumeCreate />} />
				<Route path='resume/education' element={<Education />} />
				<Route path='resume/education/skills' element={<Skills />} />
				<Route
					path='resume/education/skills/experience'
					element={<Experience />}
				/>
				<Route
					path='resume/education/skills/experience/decisive'
					element={<Decisive />}
				/>
			</Routes>
		</div>
	)
}
const Header = styled.header`
	width: 1225px;
	height: 5rem;
	background-color: rgb(79, 79, 112);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10%;
	position: fixed;
	top: -10px;

	select {
		width: 70px;
		height: 50px;
	}

	h1 {
		font-size: 60px;
		color: white;
	}

	img {
		width: 100px;
		height: 100px;
	}
`
export default App
