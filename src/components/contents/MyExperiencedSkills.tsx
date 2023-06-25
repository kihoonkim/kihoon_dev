import styled from 'styled-components'
import Text from '../common/Text'
import SkillImage from '../../assets/skill.jpg'
import { TABLET_S_MAX_WIDTH } from '../../constants/breakpoints'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  Contents: styled.div`
    display: flex;
  `,
  List: styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  Image: styled.img`
    width: 35%;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      display: none;
    }
  `,
}
function MyExperiencedSkills() {
  return (
    <S.Container>
      <Text type={'H3'} text={'사용해본 기술들'} weight={800} />

      <S.Contents>
        <S.List>
          <Text type={'B1'} text={'Typescript, Java, Kotlin, Go, Ruby'} />
          <Text type={'B1'} text={'React, Next.js, Redux, Recoil, RxJS, Konva.js, Vue'} />
          <Text type={'B1'} text={'REST Api, Socket.io,'} />
          <Text type={'B1'} text={'Node.js, Express, Nest.js, Spring, Spring Cloud'} />
          <Text type={'B1'} text={'Android, Jetpack Compose, Robolectric, Dagger'} />
          <Text type={'B1'} text={'Jest, Enzyme, JUnit, Storybook, Cypress'} />
          <Text type={'B1'} text={'Jenkins, Github Action, ArgoCD, Docker, Kubernetes'} />
          <Text type={'B1'} text={'AWS, ECS, EKS, ECR, S3, CF, DocDB, SQS'} />
          <Text type={'B1'} text={'MongoDB, MySql, Redis, ElasticSearch, RabbitMQ'} />
          <Text type={'B1'} text={'Firebase, Realtime Database'} />
        </S.List>

        <S.Image src={SkillImage} />
      </S.Contents>
    </S.Container>
  )
}

export default MyExperiencedSkills
