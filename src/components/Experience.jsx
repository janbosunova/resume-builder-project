import styled, { createGlobalStyle } from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import useInput from '../hooks/Input'
import { experience } from '../store/contact'
const Experience = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const JobTitle = useInput('')
   const Employer = useInput('')
   const City = useInput('')
   const StartDate = useInput('')
   const EndDate = useInput('')
   const Description = useInput('')

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(
         experience({
            JobTitle: JobTitle.value,
            Employer: Employer.value,
            City: City.value,
            StartDate: StartDate.value,
            EndDate: EndDate.value,
            Description: Description.value,
         })
      )
      return navigate('decisive')
   }

   return (
      <>
         <GlobalStyle />
         <Title>{t('Experience')}</Title>

         <Form onSubmit={submitHandler}>
            <Block>
               <label>{t('Job Title')}</label>
               <div>
                  <input
                     name="Title"
                     value={JobTitle.value}
                     onChange={JobTitle.onchange}
                  />
               </div>

               <br />
               <label>{t('Employer')}</label>
               <div>
                  <input
                     name="Employer"
                     value={Employer.value}
                     onChange={Employer.onchange}
                  />
               </div>
               <br />
               <label>{t('City')}</label>
               <div>
                  <input
                     name="City"
                     value={City.value}
                     onChange={City.onchange}
                  />
               </div>
               <br />
               <button onClick={() => navigate('/resume/education/skills')}>
                  {t('Back')}
               </button>
            </Block>
            <BlockSecond>
               <label>{t('Start Date')} </label>
               <div>
                  <input
                     name="Start Date"
                     type="date"
                     value={StartDate.value}
                     onChange={StartDate.onchange}
                  />
               </div>
               <br />
               <label>{t('End Date')}</label>
               <div>
                  <input
                     name="End Date"
                     type="date"
                     value={EndDate.value}
                     onChange={EndDate.onchange}
                  />
               </div>
               <br />
               <label>{t('Short Description')}</label>
               <div>
                  <textarea
                     name="description"
                     value={Description.value}
                     onChange={Description.onchange}
                  />
               </div>
               <br />
               <button type="submit">{t('Next')}</button>
            </BlockSecond>
         </Form>
      </>
   )
}
export default Experience
const GlobalStyle = createGlobalStyle`
body{
   
    background-image: url('https://klusdesign.eu/files/112fbfb8-c546-4e86-9936-ee4dcb45447f/JAZ%20mleczna.jpg');
    width: 100%;
	background-attachment: fixed;
 
}
`
const Title = styled.h1`
   color: rgb(79, 79, 112);
   font-size: 70px;
   text-align: center;
   margin-top: 100px;
`

const Form = styled.form`
   display: flex;
   justify-content: space-around;
   margin: 0 auto;
   width: 1000px;
   height: 550px;
   background-color: white;
   border: 2px solid rgb(45, 45, 45);
   box-shadow: 9px 2px 9px 2px rgb(79, 79, 112);
   label {
      color: rgb(59, 59, 59);
      font-size: 20px;
   }
   button {
      width: 115px;
      height: 40px;
      background-color: rgb(79, 79, 112);
      border: 2px solid #dfe1e6;
      margin: 0 0 1.2em;
      border-radius: 4px;
      color: white;
      font-size: 18px;
   }
   input {
      border: none;
      outline: none;
      font-size: 20px;
      width: 380px;
      height: 40px;
   }
   textarea {
      border: none;
      outline: none;
      font-size: 20px;
      width: 380px;
      height: 40px;
   }
`
const Block = styled.div`
   margin-top: 30px;
   div {
      padding: 10px;
      width: 350px;
      height: 35px;
      margin: 0 0 3em;
      border-radius: 4px;
      border: 2px solid rgb(45, 45, 45);
      display: flex;
      align-items: center;
   }
`
const BlockSecond = styled.div`
   margin-top: 30px;
   div {
      padding: 10px;
      width: 350px;
      height: 35px;
      margin: 0 0 3em;
      border-radius: 4px;
      border: 2px solid rgb(45, 45, 45);
      display: flex;
      align-items: center;
   }
`
