import styled from "styled-components"
import Cart from "../components/Cart";
import Comments from "../components/Comments";




const Container = styled.div`

display:flex;
gap:24px; 


` ;

const Content = styled.div`
    flex:5;
` ;

const VideoWrapper = styled.div``
const Title = styled.h1`
    font-size:18px;
    font-weight:600;
    margin-bottom:10px;
    color:${({theme})=>theme.text}

`;
const Details = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
     
`;
const Info = styled.span`
    color:${({ theme }) => theme.textSoft}
`;
const Buttons= styled.div`
    display:flex;
    gap:15px ;

` ;
const Button = styled.button`
    padding:5px 10px ;
    border:none;
    cursor:pointer;
    backgroun:${({theme})=>theme.bg} ;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:5px;
` ;
const Hr = styled.hr`
border:0.5px solid ${({theme})=>theme.soft} ;
margin:15px 0;

`
const Channel = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`
const Channelnfo = styled.div`
    display:flex;
    gap:20px;
` ;
const Image = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`
const ChannelDetails = styled.div`
    display:flex;
    flex-direction:column;
    color:${({theme})=>theme.text} ;
` ;
const ChannelName= styled.span`
font-weight:600;
text-transform:capitalize;


`
const  ChannelCounter = styled.div`
    margin-top:5px;
    margin-bottom:20px;
    color:${({theme})=>theme.textSoft}
    font-size:12px;
` ;
const Description = styled.div`
    font-size:14px;
    text-align:justify;
    margin-right:20px ;
` ;
const Subscribe  = styled.button`
    background-color:#cc1a00; 
    color:white;
    border:none;
    border:1px solid white;
    padding:10px 20px ;
    font-weight:500;
    cursor:pointer;
    border-radius:20px ;

`
// Recomendetion start =============================
const Recommendation = styled.div`
flex:2;
` ;


const Video = () => {


  return (
    <Container>
<Content>
    <VideoWrapper>
        <video src="/w.mp4" style={{width:"100%", height:"100%", objectFit:"cover"}} controls />
    </VideoWrapper>
    <Title>Python bangla Tutorial . </Title>
    <Details>
        <Info>7,948, 154. Jun 22, 2022</Info>
        <Buttons>
                      <Button>100k <i class="fa-solid fa-thumbs-up"></i></Button>
                      <Button>Dislike <i class="fa-solid fa-thumbs-down"></i></Button>
                      <Button>Share <i class="fa-solid fa-share"></i></Button>
                      <Button>Embade <i class="fa-solid fa-crop-simple"></i></Button>
        </Buttons>
    </Details>
    <Hr />
    <Channel>
        <Channelnfo>
            <Image src="/imgs/mee.png" />
            <ChannelDetails>
                <ChannelName>kawsar firoz</ChannelName>
                <ChannelCounter>200k subscriber </ChannelCounter>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quisquam excepturi nulla unde perferendis, cumque numquam eos dolorem incidunt explicabo ab ut ducimus 
                </Description>

                
            </ChannelDetails>
        </Channelnfo>
            <Subscribe>Subscribe </Subscribe>
    </Channel>
    <Hr />

    <Comments /> 

</Content>
{/* recommendation section start here  */}
<Recommendation>
              <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" /> <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" /> <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" /> <Cart type="sm" />
              <Cart type="sm" />
              <Cart type="sm" />

             

    
</Recommendation>

    </Container>
  )
}

export default Video