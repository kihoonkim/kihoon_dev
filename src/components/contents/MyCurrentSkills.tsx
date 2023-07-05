import styled from 'styled-components'
import Text from '../common/Text'
import { PHONE_MAX_WIDTH, TABLET_L_MAX_WIDTH } from "../../constants/breakpoints";
import SkillCard, { SkillType } from '../skills/SkillCard'
import ContentTitle from '../common/ContentTitle'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      flex-direction: column;
    }
  `,
  LeftContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  RightContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
  `,
  SkillContainer: styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    :hover {
      transform: scale(1.05);
    }

    @media (max-width: ${PHONE_MAX_WIDTH}px) {
      width: 100%;
      height: auto;
    }
  `,
}
function MyCurrentSkills() {
  const list: SkillType[] = [
    {
      category: 'Web',
      list: [{ name: 'Typescript' }, { name: 'React.js' }, { name: 'Next.js' }],
    },
    {
      category: 'Android',
      list: [{ name: 'Kotlin' }, { name: 'Jetpack Compose' }],
    },
    {
      category: 'BackEnd',
      list: [{ name: 'Typescript' }, { name: 'Node.js' }, { name: 'Nest.js' }, { name: 'MSA' }],
    },
    {
      category: 'DB',
      list: [{ name: 'Mongodb' }, { name: 'Mysql' }, { name: 'Redis' }],
    },
    {
      category: 'CI/CD',
      list: [{ name: 'Git' }, { name: 'Docker' }, { name: 'Github Action' }, { name: 'Jenkins' }],
    },
    {
      category: 'AWS',
      list: [{ name: 'ECS' }, { name: 'SQS' }, { name: 'S3' }, { name: 'DocumentDB' }],
    },
    {
      category: 'Process',
      list: [{ name: 'Agile' }, { name: 'XP' }, { name: 'TDD' }],
    },
  ]
  return (
    <S.Container>
      <S.LeftContainer>
        <ContentTitle title={'현재 기술 스택'} />

        <Text
          type={'B1'}
          text={'Typescript,  React, Next.js(F/E),  Nest.js(B/E),  AWS,  MongoDB'}
          weight={800}
        />
        <Text type={'B3'} text={' '} />
        <Text
          type={'B2'}
          text={
            'PM, Designer 와 끊임 없이 대화하며 사용자의 문제를 해결 하는 것에 보람을 느끼고,  ' +
            '동료 개발자들과 제품을 개발해 나가며 함께 성장하는 것에 즐거움을 느낍니다.  '
          }
        />
        <Text
          type={'B2'}
          text={
            '그렇기 때문에 하나의 제품을 front, backend 구분 없이 처음부터 끝까지 만드는 것을 좋아합니다.'
          }
        />
      </S.LeftContainer>

      <S.RightContainer>
        {list.map((skill) => (
          <S.SkillContainer key={skill.category}>
            <SkillCard skill={skill} />
          </S.SkillContainer>
        ))}
      </S.RightContainer>
    </S.Container>
  )
}

export default MyCurrentSkills
