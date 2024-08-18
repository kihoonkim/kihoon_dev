import styled from 'styled-components'
import Text from '../common/Text'
import LinkA from '../common/LinkA'
import ContentTitle from '../common/ContentTitle'
import { TABLET_S_MAX_WIDTH } from "../../constants/breakpoints";

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  ArticleListContainer: styled.div`
    display: flex;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      flex-direction: column;
      gap: 2rem;
    }
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
      link: 'https://descr.dev/slides/8xFKsRuN4QcU4yfJ7cnZMu',
    },
    {
      name: 'MSA 해본 척 하기',
      link: 'https://descr.dev/slides/8VjRQ7WRwUuCp9gFV1eBSJ',
    },
    {
      name: 'Agile Fundamentals',
      link: 'https://descr.dev/slides/gSHtCT2TL5m3H7MrnoL1wX',
    },
    {
      name: 'TDD',
      link: 'https://descr.dev/slides/egH9x5cSk8YMeyq7S5SEjA',
    },
    {
      name: 'Konva Position 51% 이해하기',
      link: 'https://descr.dev/slides/fwuz5WHXh5NxjYgysYKpd7',
    },
    {
      name: 'OOP',
      link: 'https://descr.dev/slides/8jmmxzm88a9rVAv9xNH4d8',
    },
    {
      name: 'Javascript Function',
      link: 'https://descr.dev/slides/cpDXxqyj6hHG7DEmCpjo4n',
    },
    {
      name: 'JS는 Single Thread 일까?',
      link: 'https://descr.dev/slides/kBe9rWRpVjPYBfef25wR67',
    },
  ]
  return (
    <S.Container>
      <ContentTitle title={'발표 & 글'} />

      <S.ArticleListContainer>
        <S.ArticleList>
          <Text type={'B1'} text={'Presentation'} weight={800} />

          {presentations.map((item) => (
            <LinkA type={'B2'} text={item.name} link={item.link} key={item.name} />
          ))}
        </S.ArticleList>

        <S.ArticleList>
          <Text type={'B1'} text={'Blog'} weight={800} />

          {articles.map((item) => (
            <LinkA type={'B2'} text={item.name} link={item.link} key={item.name} />
          ))}
        </S.ArticleList>
      </S.ArticleListContainer>
    </S.Container>
  )
}

export default Presentations
