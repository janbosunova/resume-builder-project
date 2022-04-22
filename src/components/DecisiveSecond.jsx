import styled from 'styled-components'
const DecisiveSecond = (res) => {
	return (
		<div>
			<div id={res.id}>
				<h2>{res.name}</h2>

				<h2>{res.lastName}</h2>

				<Contact>
					Contact
					<div>
						<img src='https://img2.freepng.ru/20180420/kqe/kisspng-computer-icons-telephone-mobile-phones-telephone-number-5ad991742b43a0.4842856715242079881772.jpg' />
						<p>{res.phone}</p>
					</div>
					<div>
						<img src='https://img.icons8.com/ios/500/facebook--v1.png' />
						<p>{res.faceBook}</p>
					</div>
					<div>
						{/* <img src='https://w7.pngwing.com/pngs/36/701/png-transparent-computer-icons-email-desktop-email-miscellaneous-angle-triangle.png' /> */}
						{res.email}
					</div>
					<div>
						{/* <img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/instagram_icon_138461.png' /> */}
						<p> {res.instagram}</p>
					</div>
				</Contact>
				<div>
					<h4>Education</h4>
					{res.school}
					{/* <div> {res.schoolStart}</div> */}
					{res.schoolFinish}
					{res.descriptionSchool}
					{/* <div> {res.universityStart}</div> */}
					{res.universityFinish}
					{res.descriptionUniversity}
				</div>

				<div>
					<h4>Experience</h4>
					<div>{res.JobTitle}</div>
					<div>{res.Employer}</div>
					<div>{res.City}</div>
					<div>{res.StartDate}</div>
					<div>{res.EndDate}</div>
					<div>{res.Description}</div>
				</div>
			</div>
		</div>
	)
}
export default DecisiveSecond
const Contact = styled.form`
	margin-right: 300px;
	/* display: flex;
flex-direction: column-reverse; */

	div {
		display: flex;
		align-items: center;
		/* justify-content: start; */
	}

	img {
		width: 25px;
		height: 25px;
	}
`
