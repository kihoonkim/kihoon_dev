import './App.css'
import Header from './components/top/Header'
import styled from 'styled-components'
import AboutMe from './components/contents/AboutMe'
import MyCurrentSkills from './components/contents/MyCurrentSkills'
import { PC_S_MAX_WIDTH, TABLET_S_MAX_WIDTH } from './constants/breakpoints'
import PersonalInformation from './components/contents/PersonalInformation'
import MyExperiencedSkills from './components/contents/MyExperiencedSkills'
import Portfolios from './components/contents/Portfolios'
import Experience from './components/contents/Experience'
import { PURPLE } from './constants/colors'
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
    width: calc(100% - 4rem);
    height: 5rem;
    padding: 0 2rem;
    background-color: white;
    z-index: 1000;
  `,
  MainContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5rem;
  `,
  WideContainer: styled.div<{ bgColor: string }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${({ bgColor }) => bgColor || 'white'};
  `,
  StaticContainer: styled.div`
    width: calc(100% - 10rem);
    max-width: ${PC_S_MAX_WIDTH}px;
    padding: 5rem;

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
        <S.WideContainer bgColor={PURPLE['200']}>
          <S.StaticContainer>
            <AboutMe />
          </S.StaticContainer>
        </S.WideContainer>

        <S.StaticContainer>
          <PersonalInformation />
        </S.StaticContainer>

        <S.WideContainer bgColor={PURPLE['100']}>
          <S.StaticContainer>
            <MyCurrentSkills />
          </S.StaticContainer>
        </S.WideContainer>

        <S.StaticContainer>
          <MyExperiencedSkills />
        </S.StaticContainer>

        <S.StaticContainer>
          <Experience />
        </S.StaticContainer>

        <S.WideContainer bgColor={PURPLE['100']}>
          <S.StaticContainer>
            <Portfolios />
          </S.StaticContainer>
        </S.WideContainer>

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
