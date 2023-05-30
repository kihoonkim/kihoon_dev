import styled from "styled-components";
import Text from "../common/Text";
import BuffAiArchitectureImage from '../../assets/buffai-architecture.png'
import {PHONE_MAX_WIDTH} from "../../constants/breakpoints";

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
    @media(max-width: ${PHONE_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  Image: styled.img`
    width: 25rem;
    height: 20rem;

    @media(max-width: ${PHONE_MAX_WIDTH}px) {
      width: 100%;
    }
  `
}
function Architecture() {
  const list = [
    { name: 'BuffAi', link: '', image: BuffAiArchitectureImage},
    { name: 'Wez NFT Gallery', link: '', image: BuffAiArchitectureImage},
    { name: 'Marimba', link: '', image: BuffAiArchitectureImage},
  ]
  return (
    <S.Container>
      <Text type={"H3"} text={"아키텍쳐"} weight={800} />

      <S.ArchitectureList>
        {
          list.map((item) => (
            <S.ArchitectureContainer key={item.name}>
              <Text type={"B2"} text={item.name} weight={800} />
              <S.Image src={item.image} />
            </S.ArchitectureContainer>
          ))
        }
      </S.ArchitectureList>
    </S.Container>
  );
}

export default Architecture;