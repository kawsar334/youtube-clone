import { Link } from "react-router-dom";
import styled from "styled-components"


const Container = styled.div`

width:270px  ;
margin-bottom:${(props) => props.type === "sm" ? "10px" :"45px"};
cursor:pointer;
border-radius:10px;
overflow:hidden;
display:${(props)=>props.type === "sm" && "flex"} ;

`

const Image = styled.img`
        width:100% ;
        height:${(props)=>props.type === "sm" ? "150px" :"190px"}; 
        background:#999;
        object-fit:cover;
        border-radius:10px;
        overflow:hidden;
        border:1px solid white;

` ;

const Details = styled.div`
    display:flex;
    margin-top:16px;
    gap:12px; 
    justify-content:flex-start;
    padding: 0px 10px; 
` ;

const ChanelImg = styled.img`
    width:36px ;
    height:36px;
    border-radius:50%;
    object-fit:cover;
  display:  ${(props) => props.type === "sm" && "none"}; 

`

const Texts = styled.div`` ;
const Title = styled.h1`
font-size:16px;
color:${({theme})=>theme.text}

`  ;
const ChannelName = styled.h2`
font-size:14px ;
font-weight:400;
color:${({ theme }) => theme.textSoft};
margin:5px 0px; 

` ;
const Info = styled.div`
        font-size:14px;
        color:#444;
        font-weight:600;
        color:${({ theme }) => theme.textSoft};

`;

const Cart = ({type}) => {
  return (
    <Link to="/video/:id">
    <Container type={type}>

              <Image src="https://images.pexels.com/photos/8801189/pexels-photo-8801189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." type={type} />

              <Details type={type}>
            
                  <ChanelImg src="/imgs/mee.png" alt="Loading..." type={type}  />
              <Texts>
                  <Title>Python Bangla tutorial . </Title>
                <ChannelName>Kawsar firoz </ChannelName>
                <Info>6660,908 views . 1 day ago .</Info>
              </Texts>
          </Details>
    </Container>
    </Link>
  )
}

export default Cart