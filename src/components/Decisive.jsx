import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import DecisiveSecond from './DecisiveSecond'

const Decisive = () => {
	const resume = useSelector(({ contact, skills }) => {
		return { contact, skills }
	})
	console.log(resume.contact)
	console.log(resume)

	return (
		<>
			<GlobalStyle />
			<Container>
				{resume.contact.map((res) => (
					<DecisiveSecond
						id={res.id}
						key={res.id}
						name={res.name}
						lastName={res.lastName}
						phone={res.phone}
						faceBook={res.faceBook}
						email={res.email}
						instagram={res.instagram}
						school={res.school}
						schoolFinish={res.schoolFinish}
						descriptionSchool={res.descriptionSchool}
						universityFinish={res.universityFinish}
						descriptionUniversity={res.descriptionUniversity}
						JobTitle={res.JobTitle}
						Employer={res.Employer}
						City={res.City}
						StartDate={res.StartDate}
						EndDate={res.EndDate}
						Description={res.Description}
					/>
				))}
				{resume.skills.map((res) => (
					<Skills>
						{/* <li>Skills</li> */}
						<li>{res.name}</li>
					</Skills>
				))}
			</Container>
		</>
	)
}
export default Decisive
const GlobalStyle = createGlobalStyle`
body{
    background-image: url('https://autogear.ru/misc/i/gallery/43581/2539400.jpg');
 
}
`
const Container = styled.div`
	/* display: flex;
	justify-content: space-around; */
	margin: 0 auto;
	margin-top: 80px;
	width: 700px;
	height: 700px;
	background-color: white;
	/* opacity: 0.9; */
`
const Skills = styled.ul`
	margin-right: 300px;
`
