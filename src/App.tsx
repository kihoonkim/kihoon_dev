import './App.css'
import Header from "./components/top/Header";
import styled from "styled-components";
import AboutMe from "./components/contents/AboutMe";
import MyCurrentSkills from "./components/contents/MyCurrentSkills";
import {PC_S_MAX_WIDTH} from "./constants/breakpoints";

const S = {
  Container: styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
  HeaderContainer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 4rem);
    height: 5rem;
    padding: 0 2rem;
  `,
  MainContainer: styled.div`
    width: calc(100% - 10rem);
    max-width: ${PC_S_MAX_WIDTH}px;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `
}
function App() {

  return (
    <S.Container>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>

      <S.MainContainer>
        <AboutMe />
        <MyCurrentSkills />
      </S.MainContainer>
    </S.Container>
  )
}

export default App
