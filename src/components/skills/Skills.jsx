import styled, { createGlobalStyle } from 'styled-components'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import SkillsList from './SkillsList'
import { addSkills } from '../../store/skills'
const Skills = () => {
   const [value, setValue] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const addSkillsHandler = (e) => {
      e.preventDefault()
      if (value.trim().length === 0) {
         alert('enter a skill before adding !!')
         setValue('')
         return
      }
      dispatch(
         addSkills({
            skills: value,
         })
      )
      setValue('')
   }
   return (
      <>
         <GlobalStyle />
         <Title>{t('Skills')}</Title>

         <Block>
            <h2>{t('Skills and abilities')}</h2>

            <DIVAdd>
               <input
                  value={value}
                  placeholder={t('Skills')}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button onClick={addSkillsHandler}>{t('Add')}</button>
            </DIVAdd>
            <List>
               <SkillsList />
            </List>

            <Button className="buttonDiv">
               <button onClick={() => navigate('/resume/education')}>
                  {t('Back')}
               </button>
               <button onClick={() => navigate('experience')}>
                  {t('Next')}
               </button>
            </Button>
         </Block>
      </>
   )
}
export default Skills
const GlobalStyle = createGlobalStyle`
body{
   
    background-image: url('https://www.freelanceukraine.com/wp-content/uploads/2019/12/rezyume-frilansera.jpg');
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
const Block = styled.div`
   margin: 0 auto;
   width: 800px;
   height: 500px;
   background-color: white;
   box-shadow: 9px 2px 9px 2px rgb(79, 79, 112);
   h2 {
      color: rgb(79, 79, 112);
   }
`
const List = styled.div``
const Button = styled.div`
   display: flex;
   justify-content: space-around;

   button {
      width: 125px;
      background-color: rgb(79, 79, 112);
      border: 2px solid #dfe1e6;
      border-radius: 4px;
      color: white;
      height: 40px;
      font-size: 20px;
   }
`
const DIVAdd = styled.div`
   input {
      padding: 10px;
      width: 500px;
      height: 20px;
      margin: 0 0 3em;
      border-radius: 4px;
      border: 2px solid rgb(45, 45, 45);
      font-size: 20px;
      box-shadow: 9px 2px 9px 2px rgb(79, 79, 112);
   }
   button {
      width: 100px;
      background-color: rgb(79, 79, 112);
      border: 2px solid #dfe1e6;
      border-radius: 4px;
      color: white;
      height: 45px;
      font-size: 20px;
      box-shadow: 9px 2px 9px 2px rgb(79, 79, 112);
   }
`
