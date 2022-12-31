import styled from "styled-components"
import Cart from "../components/Cart"





const Container = styled.div`

    display:flex;
    justify-conent: space-around ;
    align-items:center;
    flex-wrap:wrap;
    gap:10px ;
    background:${({theme})=>theme.bg}

`
const Home = () => {
  return (
    <Container>
        <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
       
        <Cart />
        <Cart />
        <Cart /> <Cart />
        <Cart />
          <Cart /> <Cart />
          <Cart />
          <Cart /> <Cart />
          <Cart />
          <Cart />
       

    
    
    </Container>
  )
}

export default Home