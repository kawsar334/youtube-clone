import styled from "styled-components"

import Comment from "./Comment"

const Container = styled.div`` ;

const NewComment = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
` ;
const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit:cover;


`
const Input = styled.input`
    border:none;
    border-bottom:1px solid ${({ theme }) => theme.textSoft}  ;
    background:transparent;
    width:100%;
    outline:none;


` ;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="/imgs/mee.png" alt="Loading..."/>
            <Input placeholder="Add a comment..." />   
        </NewComment>
        <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment /> <Comment />
          <Comment />
          <Comment />
     
         
    </Container>
  )
}

export default Comments