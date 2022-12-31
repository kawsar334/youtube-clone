
import './App.css';

import styled, { ThemeProvider } from "styled-components"
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import { Routes,  Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './pages/Login';



const Container = styled.div`

  background:#181818;
  display:flex;


` ;
const Main  = styled.div`
flex:7;
background:${({theme})=>theme.bg}

` ;
const Wrapper = styled.div`
padding:22px;

` ;


function App() {
  const [darkMode  , setDarkMode ] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

    <Container >
     <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Wrapper>
          <Routes>
            <Route path='/' element={<Home />} />
              <Route path='/video/:id' element={<Video />} />
              <Route path='/login' element={<Login />} />


          </Routes>
        </Wrapper>
        </Main>  
     
    </Container>
    </ThemeProvider>
  );
}

export default App;
