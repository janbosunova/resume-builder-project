import { useSelector } from 'react-redux'
import SkillsItem from './SkillsItem'
import styled from 'styled-components'
import { useEffect } from 'react'

const SkillsList = () => {
	const skills = useSelector((state) => {
		return state.skills
	})
	console.log(skills);
	useEffect(()=>{
		localStorage.setItem('skills',JSON.stringify(skills))
	},[skills])
	return (
	<Container>
        	<UL>
			{skills.map((skill) => (
				<SkillsItem
				    key={skill.id}
					id={skill.id}
					title={skill.name}
					completed={skill.status}
				/>
			))}
		</UL>
    </Container>
	)
}
export default SkillsList
const Container = styled.div `
    margin: 0 auto;
	width: 800px;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	margin-top: 80px;
	
	height: 100px;
	background-color: white;
	opacity: 0.9;
	
`
const UL = styled.ul`
	display: flex;
	align-items: center;
`
