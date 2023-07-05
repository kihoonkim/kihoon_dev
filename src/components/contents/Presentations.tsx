import styled from 'styled-components'
import Text from '../common/Text'
import LinkA from '../common/LinkA'
import ContentTitle from '../common/ContentTitle'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  ArticleList: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
}
function Presentations() {
  const articles = [
    {
      name: '지난 10년. 어떤 기술 흐름속에 살았을까?',
      link: 'https://kihoonkim.github.io/2021/08/16/retro/10-years/',
    },
    {
      name: '마이크로서비스 아키텍처(MSA). 서비스 개발팀 이야기',
      link: 'https://kihoonkim.github.io/2018/03/25/Microservices%20Architecture/first-msa-retro/',
    },
    {
      name: '페어 프로그래밍이란 무엇 일까?',
      link: 'https://kihoonkim.github.io/2018/01/01/Agile/pair-programming/',
    },
  ]

  const presentations = [
    {
      name: '개발자는 어떻게 일하는가?',
      link: 'https://docs.google.com/presentation/d/1NJg7EDywRWXyIG6m1xXim3h1iLkCJvXZnEDDG_0zYGg/edit#slide=id.p',
    },
    {
      name: 'MSA 해본 척 하기',
      link: 'https://docs.google.com/presentation/d/1Ms-waJ6rtHUD1qr1EvD451zlMIuKUwuMTNbnoQADmxQ/edit#slide=id.p',
    },
    {
      name: 'Agile Fundamentals',
      link: 'https://docs.google.com/presentation/d/1IITWa2bP5VS36y3IcxWRmXm_0b83VbadaHJbqpZzriw/edit#slide=id.p',
    },
    {
      name: 'Why to do TDD?',
      link: 'https://docs.google.com/presentation/d/1LFw2FzCTItFZy4DT8InMcN6o8cK0CmKxLCzF-3REPOY/edit#slide=id.p',
    },
    {
      name: 'Konva Position 51% 이해하기',
      link: 'https://docs.google.com/presentation/d/1nWPsQ6MqUHy2c2saqjDzJDd01zDa9sF4RoFr0w2DO2o/edit#slide=id.g7859a8b883_0_23',
    },
    {
      name: 'OOP',
      link: 'https://docs.google.com/presentation/d/1DRRVlRpx2Xwo5loflz8NN4zejlJF7eSX9y9r-OnoUog/edit#slide=id.p',
    },
    {
      name: 'Javascript Function',
      link: 'https://docs.google.com/presentation/d/1tfflNZV_PLZjfJ2AdV3NGTxy28rRQYQtnvzwSm_PsW0/edit#slide=id.p',
    },
    {
      name: 'JS는 Single Thread 일까?',
      link: 'https://docs.google.com/presentation/d/1-5KdlEstIuTYbNQJ2u3XMVtZV5zJdM5iSzNnuE4EoMc/edit#slide=id.p',
    },
  ]
  return (
    <S.Container>
      <ContentTitle title={'발표 & 글'} />

      <S.ArticleList>
        <Text type={'B1'} text={'Blog'} weight={800} />

        {articles.map((item) => (
          <LinkA type={'B2'} text={item.name} link={item.link} key={item.name} />
        ))}
      </S.ArticleList>

      <S.ArticleList>
        <Text type={'B1'} text={'Presentation'} weight={800} />

        {presentations.map((item) => (
          <LinkA type={'B2'} text={item.name} link={item.link} key={item.name} />
        ))}
      </S.ArticleList>
    </S.Container>
  )
}

export default Presentations
