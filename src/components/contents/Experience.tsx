import styled from 'styled-components'
import Text from '../common/Text'
import { TABLET_S_MAX_WIDTH } from '../../constants/breakpoints'
import ContentTitle from '../common/ContentTitle'

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
    border-radius: 0.5rem;
    padding: 2rem;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      width: calc(100% - 4rem);
    }
  `,
}
function Experience() {
  return (
    <S.Container>
      <ContentTitle title={'경력'} />

      <S.CardList>
        <S.CardContainer>
          <Text type={'B1'} text={'NPX TeraArk'} weight={900} />
          <Text type={'B2'} text={' '} />
          <Text type={'B2'} text={'21.11 ~ 23.07 : 1년 9개월'} />
          <Text type={'B2'} text={'Venture Studio'} weight={800} />
          <Text type={'B2'} text={'Developer, SRE'} />
          <Text type={'B2'} text={'BuffAI, SpeakEdi, Ontonomy, Point Avenue'} />
        </S.CardContainer>

        <S.CardContainer>
          <Text type={'B1'} text={'Samsung SDS'} weight={900} />
          <Text type={'B2'} text={' '} />
          <Text type={'B2'} text={'11.08 ~ 21.11 : 10년 3개월'} />
          <Text type={'B2'} text={'Agile Core Team, SW Engineering Team'} weight={800} />
          <Text type={'B2'} text={'Developer, Architect'} />
          <Text type={'B2'} text={'Marimba, Digital Signage, Allianz Life'} />
        </S.CardContainer>
      </S.CardList>
    </S.Container>
  )
}

export default Experience
