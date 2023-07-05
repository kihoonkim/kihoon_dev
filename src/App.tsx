import './App.css'
import Header from './components/top/Header'
import styled from 'styled-components'
import AboutMe from './components/contents/AboutMe'
import MyCurrentSkills from './components/contents/MyCurrentSkills'
import { PC_S_MAX_WIDTH, TABLET_S_MAX_WIDTH } from './constants/breakpoints'
import MyExperiencedSkills from './components/contents/MyExperiencedSkills'
import FeaturedProducts from './components/contents/FeaturedProducts'
import Experience from './components/contents/Experience'
import Architecture from './components/contents/Architecture'
import Presentations from './components/contents/Presentations'

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
    width: 100%;
    height: 5rem;
    z-index: 1000;
  `,
  MainContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8rem;
  `,
  WideContainer: styled.div<{ bgColor: string }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    // background-color: ${({ bgColor }) => bgColor || 'white'};
  `,
  StaticContainer: styled.div`
    width: calc(100% - 12rem);
    max-width: ${PC_S_MAX_WIDTH}px;
    padding: 6rem;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      width: calc(100% - 4rem);
      padding: 4rem 2rem;
    }
  `,
}
function App() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>

      <S.MainContainer>
        <S.StaticContainer>
          <AboutMe />
        </S.StaticContainer>

        <S.StaticContainer>
          <FeaturedProducts />
        </S.StaticContainer>

        {/*<S.StaticContainer>*/}
        {/*  <PersonalInformation />*/}
        {/*</S.StaticContainer>*/}

        <S.StaticContainer>
          <MyCurrentSkills />
        </S.StaticContainer>

        <S.StaticContainer>
          <MyExperiencedSkills />
        </S.StaticContainer>

        <S.StaticContainer>
          <Experience />
        </S.StaticContainer>



        <S.StaticContainer>
          <Architecture />
        </S.StaticContainer>

        <S.StaticContainer>
          <Presentations />
        </S.StaticContainer>
      </S.MainContainer>
    </S.Container>
  )
}

export default App
