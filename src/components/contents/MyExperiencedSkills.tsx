import styled from 'styled-components'
import Text from '../common/Text'
import SkillImage from '../../assets/dont-give-up.jpg'
import { PHONE_MAX_WIDTH, TABLET_L_MAX_WIDTH } from "../../constants/breakpoints";
import ContentTitle from '../common/ContentTitle'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  Contents: styled.div`
    display: flex;
    gap: 1rem;
    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      flex-direction: column;
    }
  `,
  List: styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  Image: styled.img`
    width: 40%;
    object-fit: contain;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 60%;
    }
    @media (max-width: ${PHONE_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
}
function MyExperiencedSkills() {
  return (
    <S.Container>
      <ContentTitle title={'사용해본 기술들'} />

      <S.Contents>
        <S.List>
          <Text type={'B1'} text={'Typescript, Java, Kotlin, Go, Ruby'} />
          <Text type={'B1'} text={'React, Next.js, Redux, Recoil, RxJS, Konva.js, Vue'} />
          <Text type={'B1'} text={'REST Api, Socket.io, Graphql'} />
          <Text type={'B1'} text={'Nest.js, Node.js, Express, Spring, Spring Cloud'} />
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
