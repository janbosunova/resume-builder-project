import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const WelcomePage = () => {
   const navigate = useNavigate()
   const { t } = useTranslation()
   return (
      <>
         <header></header>
         <Block>
            <h1>{t('welcome')}</h1>
            <img
               src="https://media.istockphoto.com/vectors/summary-icon-vector-sign-and-symbol-isolated-on-white-background-vector-id1001231546"
               alt="Resume-foto"
            />
            <p>
               {t('Create a resume online')} <br />
               {t(' that will bring you to your goal')}!
            </p>
            <button onClick={() => navigate('resume')}>
               {t('Create Resume Online')}
            </button>
         </Block>
      </>
   )
}
export default WelcomePage

const Block = styled.div`
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   max-width: 950px;
   height: 600px;
   background-color: white;
   border-radius: 5px;
   margin-top: 150px;

   h1 {
      font-weight: bold;
      margin-top: 50px;
      color: rgb(79, 79, 112);
      font-size: 60px;
   }
   img {
      border: 0px;
      height: 200px;
   }
   p {
      font-size: 30px;
      color: rgb(79, 79, 112);
   }
   button {
      width: 350px;
      border: 0px;
      height: 50px;
      margin: 0 0 1.2em;
      border-radius: 5px;
      font-weight: bold;
      font-size: 20px;
      color: white;
      background: rgb(79, 79, 112);
   }
`
