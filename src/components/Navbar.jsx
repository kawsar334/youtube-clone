import styled from "styled-components" ;




const Container = styled.div`
position:sticky;
top:0;
background:${({theme})=>theme.bg} ;
height:56px;
z-index:999;

`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
height:100%;
padding:0px 20px;  
position:relative;



`
const SearchContainer = styled.div`
position:absolute;
left:0;
right:0;
margin:auto;
width:40% ;
display:flex ;
justify-content:space-between;
align-items:center;
padding:5px;
border:1px solid #ccc ;
border-radius:3px ;
` ;
const Input = styled.input`
border:none;
background:inherit;
color:${({theme})=>theme.text}


`

const Login = styled.div`
font-size:13px;


`
const Button = styled.button`

border:none;
padding:10px 20px ;
background:transparent ;
border:0.5px solid #3ea6ff; 
color:#3ea6ff; 
cursor:pointer;
margin-left:20px;
border-radius:3px ;
font-weight:500;
display:flex;
justify-content:center;
align-items:center;



`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>


    <SearchContainer>
        <Input type="text"  placeholder="search"/>
        <i class="fa-solid fa-magnifying-glass"></i>
    </SearchContainer>
         <Login>
          <Button><i class="fa-regular fa-circle-user" ></i> SIGNIN</Button>
      </Login>
        </Wrapper>
    </Container>
  )
}

export default Navbar