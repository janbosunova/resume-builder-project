import { useSelector } from 'react-redux'

const Decisive = () => {
	const resume = useSelector(({ contact, skills }) => {
		return { contact, skills }
	})
	console.log(resume.contact)
    console.log(resume);

	return (
		<div>
			{resume.contact.map((res) => (
                <ul id = {res.id}>
                    <li>{res.name}</li>
                    
                </ul>
            ))}
           
		</div>
	)   
}
export default Decisive
