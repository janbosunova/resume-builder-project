import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
const Skills = ()=>{
return(
    <>
    <GlobalStyle/>
<Title>Skills</Title>
<Block>
    <h1>Tell me your Skills</h1>
    <img src='https://cdn-icons-png.flaticon.com/512/3095/3095221.png'/>
    <div>
    <textarea placeholder='skills description*'/>
    <img src='https://st2.depositphotos.com/1803840/8114/v/950/depositphotos_81143288-stock-illustration-vector-teamwork-skills-icon-of.jpg'/>
    </div>
</Block>

    </>
)
}
export default Skills
const GlobalStyle = createGlobalStyle`
body{
   
    background-image: url('https://kingslanduniversity.com/wp-content/uploads/2021/02/Full-Stack-Developers.jpg');
    width: 100%;
 
}
`
const Title = styled.h1`
	color: rgb(79, 79, 112);
	font-size: 70px;
    
`
const Block = styled.div`
    	/* display: flex;
	justify-content: space-around; */
	margin: 0 auto;
	/* margin-top: 80px; */
	width: 800px;
	height: 500px;
	background-color: white;
	opacity: 0.9;
    img{
        width: 100px;
        height: 100px;
    }
    div{
        /* padding: 10px; */
		width: 650px;
		height: 240px;
		/* margin: 0 0 1.2em; */
		border-radius: 6px;
       
        
        margin-left: 70px;
       

		/* font-size: 15px; */
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;
        img{
            width: 200px;
            height: 200px;
            margin-left: 180px;
            margin-top: 30px;
        }
    }
    textarea{
        
        border: none;
		outline: none;
       width: 250px;
        height: 200px;
        
      

    }
`