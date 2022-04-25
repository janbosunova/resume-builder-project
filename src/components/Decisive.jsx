import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { Preview, print } from 'react-html2pdf'
import { t } from 'i18next'

const Decisive = () => {
	const resume = useSelector((state) => state.resume)
	const skills = useSelector((state) => state.skills)
	console.log(resume.contact)
	console.log(resume)

	const pdfHandler = () => print('a', 'resume')

	return (
		<>
			<GlobalStyle />
			<BtnDownLoad onClick={pdfHandler}>Download</BtnDownLoad>
			<Preview id={'resume'}>
				<Container>
					<Colona>
						{/* <h1>{t('Resume')}</h1> */}

						<div className='name'>
							<p className='name_p'>{resume.contact.name}</p>
							<p className='name_p'>{resume.contact.lastName}</p>
						</div>
						<Contact>
							<h2> {t('Сontact')}</h2>
							<div className='contact-style'>
								<div className='contact-box'>
									<BsWhatsapp
										fontSize='20px'
										color='rgb(59, 59, 59)'
									/>
									<p>{resume.contact.phone}</p>
								</div>
								<div className='contact-box'>
									<AiOutlineFacebook
										fontSize='20px'
										color='rgb(59, 59, 59)'
									/>

									<p>{resume.contact.faceBook}</p>
								</div>
								<div className='contact-box'>
									<AiOutlineMail
										fontSize='20px'
										color='rgb(59, 59, 59)'
									/>

									<p> {resume.contact.email}</p>
								</div>
								<div className='contact-box'>
									<BsInstagram
										fontSize='20px'
										color='rgb(59, 59, 59)'
									/>
									<p> {resume.contact.instagram}</p>
								</div>
							</div>
						</Contact>
						<div>
							<Experience>
								<h2>{t('Experience')}</h2>
								<div className='experience-style'>
									<div className='experience-box'>
										<label>{t('Job Title')}:</label>
										<p>{resume.experience.JobTitle}</p>
									</div>
									<div className='experience-box'>
										<label>{t('Employer')}:</label>
										<p>{resume.experience.Employer}</p>
									</div>
									<div className='experience-box'>
										<label>{t('City')}:</label>
										<p>{resume.experience.City}</p>
									</div>
									<div className='experience-box'>
										<label>{t('Start Date')}:</label>
										<p>{resume.experience.StartDate}</p>
									</div>
									<div className='experience-box'>
										<label>{t('End Date')}:</label>
										<p>{resume.experience.EndDate}</p>
									</div>
									<div className='experience-box'>
										<label>{t('Description')}:</label>
										<p>{resume.experience.Description}</p>
									</div>
								</div>
							</Experience>
							<Education>
								<h2>{t('Education')}</h2>
								<div className='education-style'>
									<div className='education-box'>
										<label>{t('School')}:</label>
										<p>{resume.education.school}</p>
									</div>
									<div className='education-box'>
										<label>{t('finish')}:</label>
										<p>{resume.education.schoolFinish}</p>
									</div>
									<div className='education-box'>
										<label>{t('University')}:</label>
										<p>{resume.education.university}</p>
									</div>
									<div className='education-box'>
										<label>{t('finish')}:</label>
										<p>
											{resume.education.universityFinish}
										</p>
									</div>
									<div className='education-box'>
										<label>
											{t('description school')}:
										</label>
										<p>
											{resume.education.descriptionSchool}
										</p>
									</div>
									<div className='education-box'>
										<label>
											{t('description university')}:
										</label>

										<p>
											{
												resume.education
													.descriptionUniversity
											}
										</p>
									</div>
								</div>
							</Education>
						</div>

						<Skills>
							<h2>{t('Skills')}</h2>

							{skills.map((res) => (
								<div>
									<li>{res.name}</li>
								</div>
							))}
						</Skills>
					</Colona>
				</Container>
			</Preview>
		</>
	)
}
export default Decisive
const GlobalStyle = createGlobalStyle`
body{
    background-image: url('https://www.freelanceukraine.com/wp-content/uploads/2019/12/rezyume-frilansera.jpg');
	background-attachment: fixed;
	margin: 0 auto;
}
`
const Container = styled.div`
	margin: 0 auto;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	margin-top: 80px;
	width: 700px;
	background-color: white;
	/* h1 {
		text-align: center;
		font-size: 50px;
	} */
	.name {
		display: flex;
		justify-content: center;
		border-bottom: 1px solid black;
		width: 700px;
	}
	.name_p {
		margin-right: 50px;
		font-size: 30px;
		color: #3d0707;
	}
`
const Colona = styled.div``

const Contact = styled.div`
	display: flex;
	margin-top: -30px;
	justify-content: flex-start;
	flex-direction: column;
	border-bottom: 1px solid black;
	width: 700px;

	h2 {
		color: #036fdb;
		margin-right: 630px;
	}
	p {
		color: #036fdb;
		font-weight: bold;
	}
	img {
		width: 25px;
		height: 25px;
	}
	.contact-style {
		display: flex;
		justify-content: start;
		flex-direction: column;
		margin-left: 200px;
	}
	.contact-box {
		display: flex;
		align-items: center;
	}
`
const Experience = styled.div`
	border-bottom: 1px solid black;
	width: 700px;
	h2 {
		color: #036fdb;
		margin-right: 600px;
	}
	p {
		color: #110919;
	}
	label {
		color: #036fdb;
		font-weight: bold;
	}
	.experience-style {
		display: flex;
		justify-content: start;
		flex-direction: column;
		margin-left: 200px;
	}
	.experience-box {
		display: flex;
		align-items: center;
	}
`
const Education = styled.div`
	border-bottom: 1px solid black;
	width: 700px;
	h2 {
		color: #036fdb;
		margin-right: 600px;
	}
	p {
		color: #110919;
	}
	label {
		color: #036fdb;
		font-weight: bold;
	}
	.education-style {
		display: flex;
		justify-content: start;
		flex-direction: column;
		margin-left: 200px;
	}
	.education-box {
		display: flex;
		align-items: center;
	}
`
const Skills = styled.ul`
	h2 {
		color: #036fdb;
		margin-right: 700px;
	}
	div {
		margin-left: 180px;
		color: #110919;
		li {
			margin-right: 300px;
		}
	}
`
const BtnDownLoad = styled.button`
	padding: 0.7rem 1.6rem;
	border: none;
	color: #62738f;
	font-weight: bold;
	text-transform: uppercase;
	box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	font-size: 20px;
	cursor: pointer;
	transition: 0.2s;
	position: fixed;
	right: 0;
	&:hover {
		background-color: #62738f;
		color: white;
	}
`
