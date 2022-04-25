import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useEffect } from 'react'
import SkillsItem from './SkillsItem'

const SkillsList = () => {
   const skills = useSelector((state) => {
      return state.skills
   })
   console.log(skills)
   useEffect(() => {
      localStorage.setItem('skills', JSON.stringify(skills))
   }, [skills])
   return (
      <Container>
         <UL>
            {skills.map((skill) => (
               <SkillsItem key={skill.id} id={skill.id} title={skill.name} />
            ))}
         </UL>
      </Container>
   )
}
export default SkillsList
const Container = styled.div`
   display: flex;
   justify-content: space-around;
`
const UL = styled.ul`
   margin-right: 50px;
`
