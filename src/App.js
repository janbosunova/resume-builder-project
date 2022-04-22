import { Route, Routes } from 'react-router-dom'
import './App.css'
import Decisive from './components/Decisive'
import Education from './components/Education'
import Experience from './components/Experience'
import ResumeCreate from './components/ResumeCreate'
import Skills from './components/skills/Skills'
import WelcomePage from './components/WelcomePage'

function App() {
	return (
		<div className='App'>
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

export default App
