import styled from "styled-components";
import Text from "../common/Text";


const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
}
function MyExperiencedSkills() {
  return (
    <S.Container>
      <Text type={"H3"} text={"Experienced Skills"} weight={800} />

      <div>
        Typescript, Java, Kotlin, Go, Ruby
        React, Next.js, Redux, Recoil, RxJS, Konva.js, Vue
        Axios, Socket.io,
        Node.js, Express, Nest.js, Spring, Spring Cloud,
        Android, Jetpack Compose, Robolectric, Dagger,
        Jest, Enzyme, JUnit, Storybook, Cypress,
        Jenkins, Github Action, ArgoCD, Docker, Kubernetes
        AWS, ECS, EKS, ECR, S3, CF, DocDB, SQS,
        MongoDB, MySql, Redis, ElasticSearch, RabbitMQ
        Firebase, Realtime Database,
      </div>
    </S.Container>
  );
}

export default MyExperiencedSkills;