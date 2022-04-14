
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Education from './components/Education';
import ResumeCreate from './components/ResumeCreate';
import Skills from './components/Skills';
import  WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
    <Routes>
   <Route path='/' element= { < WelcomePage/>}/>
   <Route path="resume" element= {   <ResumeCreate/>}/>
   <Route path='resume/education' element = {<Education/>}/>
   <Route path='resume/education/skills' element = {<Skills/>} />
    </Routes>


    </div>
  );
}

export default App;
