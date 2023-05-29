import styled from "styled-components";
import Text from "../common/Text";

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
function Presentations() {
  return (
    <S.Container>
      <Text type={"H3"} text={"발표 & 글"} weight={800} />

      <S.ArchitectureList>

      </S.ArchitectureList>
    </S.Container>
  );
}

export default Presentations;