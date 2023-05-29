import React from 'react';
import styled from "styled-components";
import Text from "../common/Text";


const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    padding: 1rem;
  `,
  LeftContainer: styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
  `,
  RightContainer: styled.div`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
  `,
  TechContainer: styled.div`
    width: 160px;
    height: 10rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
  `,
  TechCard: styled.div`
    height: 100%;
  `,
  TechCardItem: styled.div``
}
function MyCurrentSkills() {
  return (
    <S.Container>
      <S.LeftContainer>
        <Text type={"H3"} text={"Current Skills"} weight={800} />
        <Text type={"B1"} text={"어쩌구 저쩌구.."} />
      </S.LeftContainer>
      <S.RightContainer>
        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"React.js"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Next.js"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Typescript"}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B1"} text={"Web"} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"Android"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Kotlin"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Jetpack Compose"}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B1"} text={"Mobile"} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"Node.js"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Nest.js"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"MSA"}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B1"} text={"B/E"} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"Mongodb"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Mysql"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Redis"}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B1"} text={"DB"} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"Git"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Github Action"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Jenkins"}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B1"} text={"CI/CD"} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"ECS"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"S3"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"DocDB"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"..."}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B2"} text={"AWS"} weight={600} />
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCard>
            <S.TechCardItem><Text type={"B2"} text={"Docker"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"Agile"}/></S.TechCardItem>
            <S.TechCardItem><Text type={"B2"} text={"TDD"}/></S.TechCardItem>
          </S.TechCard>
          <Text type={"B2"} text={"ETC"} weight={600} />
        </S.TechContainer>
      </S.RightContainer>

    </S.Container>
  );
}

export default MyCurrentSkills;