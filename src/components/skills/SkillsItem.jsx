import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteSkills } from '../../store/skills'

const SkillsItem = ({ id, title }) => {
   const dispatch = useDispatch()
   const removeSkill = () => {
      dispatch(
         deleteSkills({
            id: id,
         })
      )
   }
   return (
      <Skills>
         <div>{title}</div>

         <img
            src="https://img.icons8.com/nolan/2x/delete-forever.png"
            onClick={() => {
               removeSkill()
            }}
            alt=""
         />
      </Skills>
   )
}
export default SkillsItem

const Skills = styled.li`
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   width: 600px;
   color: black;
   font-size: 20px;
   border-radius: 4px;
   margin: 5px;
   height: 30px;
   border: 2px solid rgb(79, 79, 112);
   opacity: 0.9;
   box-shadow: 9px 2px 9px 2px rgb(79, 79, 112);

   img {
      width: 30px;
      height: 30px;
   }
`
