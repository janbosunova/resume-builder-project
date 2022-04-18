import { useDispatch } from 'react-redux'
import { deleteSkills } from '../../store/skills'
import styled from 'styled-components'

const SkillsItem = ({ id, title }) => {
	const dispatch = useDispatch()
	const removeSkill = () => {
		dispatch(
			deleteSkills({
				id: id,
			}),
		)
	}
	return (
		<Skills>
			<div>{title}</div>

			<img
				src='https://img.icons8.com/nolan/2x/delete-forever.png'
				onClick={() => {
					removeSkill()
				}}
			/>
		</Skills>
	)
}
export default SkillsItem

const Skills = styled.li`
	margin: 0 auto;
    display: flex;
  
    border-radius: 4px;
    margin: 5px;
	height: 30px;
	background-color:rgb(255, 182, 193);
	opacity: 0.9;
	img {
		width: 30px;
		height: 30px;
	}
`
