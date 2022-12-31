import { Link } from "react-router-dom";
import styled from "styled-components"  ;




const Container = styled.div`

display:flex;
align-items:center;
justify-content:center;
height:calc(100vh - 56px ) ;
color:${({theme})=>theme.text} ;


`
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
   background-color:${({ theme }) => theme.bgLight} ;
   padding:20px 50px   ;
   border:1px solid ${({ theme }) => theme.text} ;
   gap:10px ;

`  ;

const Title = styled.h1`
    font-size:24px ;
    font-weight:500;

    
` ;
const Subtitle = styled.h2`
font-size:20px;
font-weight:300;


` ;
const Input = styled.input`
    border:1px solid ${({ theme }) => theme.text}  ;
    border-radius:3px ;
    background:transparent;
    width:100%;
    padding:5px; 
` ;
const Button= styled.button`
    background:transparent;
    color:${({ theme }) => theme.text} ;
    padding:5px 10px ;
    border-radius:3px ;
    cursor:pointer;
    border:1px solid ${({ theme }) => theme.text} ; 


`;
const More = styled.div`` ;
const Links = styled.div`

display:flex;
gap:10px;
color:${({ theme }) => theme.text} ;
cursor:pointer;


` ;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
              <Subtitle>To continue to NewTube </Subtitle>

              <Input  type="text" placeholder="username"/>
              <Input type="password" placeholder="Password." />
              <Button> Signin </Button>
              <Title>Or</Title>
              <Title>Sign Up</Title>
              <Input type="text" placeholder="username" />
              <Input type="password" placeholder="Password." />
              <Button> Signup </Button>


                <More>
                    English (USA) 
                    <Links>
                    <Link to="#">Help</Link>
                      <Link to="#">Privacy</Link>
                      <Link to="#">Help</Link>
                      <Link to="#">Terms</Link>


                    
                    </Links>
                </More>


        </Wrapper>
    </Container>
  )
}

export default Login