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
  Image: styled.img`
    width: 30rem;
    height: 20rem;
  `
}
function Architecture() {
  return (
    <S.Container>
      <Text type={"H3"} text={"Architecture"} weight={800} />

      <div>
        <Text type={"B1"} text={"BuffAi Architecture"} />
        <S.Image src={BuffAiArchitectureImage} />

        <Text type={"B1"} text={"Wez Architecture"} />
        <S.Image src={BuffAiArchitectureImage} />

        <Text type={"B1"} text={"Marimba Architecture"} />
        <S.Image src={BuffAiArchitectureImage} />
      </div>
    </S.Container>
  );
}

export default Architecture;