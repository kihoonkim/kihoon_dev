import styled from 'styled-components'
import Text from '../common/Text'
import { PURPLE } from '../../constants/colors'
import { TABLET_S_MAX_WIDTH } from '../../constants/breakpoints'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  CardList: styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      flex-direction: column;
    }
  `,
  CardContainer: styled.div`
    width: calc(50% - 4rem);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: ${PURPLE['600']} solid 0.125rem;
    border-radius: 0.5rem;
    background-color: white;
    padding: 2rem;

    :hover {
      background-color: ${PURPLE['50']};
    }
    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      width: calc(100% - 4rem);
    }
  `,
}
function Experience() {
  return (
    <S.Container>
      <Text type={'H3'} text={'경력'} weight={800} />

      <S.CardList>
        <S.CardContainer>
          <Text type={'B1'} text={'NPX TeraArk'} weight={900} />
          <Text type={'B2'} text={' '} />
          <Text type={'B2'} text={'21.11 ~ 23.06 : 1년 8개월'} />
          <Text type={'B2'} text={'Venture Studio'} weight={800} />
          <Text type={'B2'} text={'Developer, DevOps'} />
          <Text type={'B2'} text={'BuffAI, SpeakEdi, Ontonomy, Point Avenue'} />
        </S.CardContainer>

        <S.CardContainer>
          <Text type={'B1'} text={'Samssung SDS'} weight={900} />
          <Text type={'B2'} text={' '} />
          <Text type={'B2'} text={'11.08 ~ 21.10 : 10년 3개월'} />
          <Text type={'B2'} text={'Agile Core Team, SW Engineering Team'} weight={800} />
          <Text type={'B2'} text={'Developer, Architect'} />
          <Text type={'B2'} text={'Marimba, Digital signage, Allianz Life'} />
        </S.CardContainer>
      </S.CardList>
    </S.Container>
  )
}

export default Experience
