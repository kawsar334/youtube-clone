import styled from "styled-components"



const Container = styled.div`
    display:flex;
    gap:10px; 
    margin:30px 0px;
` ;
const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit:cover;


`

const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px; 

`
const Name = styled.span`
font-size:16px;
font-weight:600;
color:${({ theme }) => theme.text};


` 
const Date = styled.span`
     font-size:12px;
     color:${({theme})=>theme.textSoft} ;
     font-weight:400;
     margin-left:5px;
` 
const Text = styled.span`
    font-size:14px;
    color:${({ theme }) => theme.textSoft} ;



` ;


const Comment = () => {
  return (
    <Container>

          <Avatar src="https://images.pexels.com/photos/1028707/pexels-photo-1028707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..."/>
<Details>
    <Name>Kawsar firoz <Date>1 Day ago .</Date> </Name>
    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam est, assumenda necessitatibus aspernatur enim quod consequuntur soluta hic libero incidunt exercitationem sapiente nulla et tenetur excepturi. Perferendis, voluptas nisi?</Text>
</Details>

    </Container>
  )
}

export default Comment