import styled from "styled-components";
import Text from "../common/Text";
import BuffAiArchitectureImage from '../../assets/buffai-architecture.png'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  ArchitectureList: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  `,
  ArchitectureContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Image: styled.img`
    width: 25rem;
    height: 20rem;
  `
}
function Architecture() {
  return (
    <S.Container>
      <Text type={"H3"} text={"아키텍쳐"} weight={800} />

      <S.ArchitectureList>
        <S.ArchitectureContainer>
          <Text type={"B1"} text={"BuffAi Architecture"} />
          <S.Image src={BuffAiArchitectureImage} />
        </S.ArchitectureContainer>
        <S.ArchitectureContainer>
          <Text type={"B1"} text={"Wez Architecture"} />
          <S.Image src={BuffAiArchitectureImage} />
        </S.ArchitectureContainer>
        <S.ArchitectureContainer>
          <Text type={"B1"} text={"Marimba Architecture"} />
          <S.Image src={BuffAiArchitectureImage} />
        </S.ArchitectureContainer>
      </S.ArchitectureList>
    </S.Container>
  );
}

export default Architecture;