import styled from 'styled-components'
import Text from '../common/Text'
import { PHONE_MAX_WIDTH, TABLET_L_MAX_WIDTH } from '../../constants/breakpoints'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      flex-direction: column;
    }
  `,
  LeftContainer: styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  RightContainer: styled.div`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  TechContainer: styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
    :hover {
      transform: scale(1.01);
    }
    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 8rem;
    }
    @media (max-width: ${PHONE_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  TechCard: styled.div`
    height: 100%;
  `,
  TechCardItem: styled.div``,
}
function MyCurrentSkills() {
  return (
    <S.Container>
      <S.LeftContainer>
        <Text type={'H3'} text={'현재 기술 스택'} weight={800} />
        <Text type={'B1'} text={' '} />
        <Text
          type={'B1'}
          text={
            'PM, Designer 와 끊임 없이 대화하며 사용자의 문제를 해결 하는 것에 보람을 느끼고, ' +
            '동료 개발자들과 제품을 개발해 나가며 함께 성장하는 것에 즐거움을 느낍니다.'
          }
        />
        <Text type={'B3'} text={' '} />
        <Text
          type={'B1'}
          text={
            '그렇기 때문에 하나의 제품을 front, backend 구분 없이 처음부터 끝까지 만드는 것을 좋아합니다.'
          }
        />

        <Text type={'B3'} text={' '} />
        <Text type={'B1'} text={'현재 제가 가장 많이 사용 하는 기술 스택은'} />
        <Text
          type={'B1'}
          text={'Typescript, React(F/E), Nest.js(B/E), MongoDB, AWS(ECS, S3) 입니다.'}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'React.js'} weight={800} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Next.js'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Typescript'} weight={800} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B1'} text={'Web'} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'Android'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Kotlin'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Jetpack Compose'} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B1'} text={'Mobile'} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'Node.js'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Nest.js'} weight={800} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'MSA'} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B1'} text={'B/E'} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'Mongodb'} weight={800} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Mysql'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Redis'} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B1'} text={'DB'} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'Git'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Github Action'} weight={800} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Jenkins'} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B1'} text={'CI/CD'} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'ECS'} weight={800} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'S3'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'DocDB'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'...'} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B2'} text={'AWS'} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem>
              <Text type={'B2'} text={'Docker'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'Agile'} />
            </S.TechCardItem>
            <S.TechCardItem>
              <Text type={'B2'} text={'TDD'} />
            </S.TechCardItem>
          </S.TechCard>
          <Text type={'B2'} text={'ETC'} weight={600} />
        </S.TechContainer>
      </S.RightContainer>
    </S.Container>
  )
}

export default MyCurrentSkills
