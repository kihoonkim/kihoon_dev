import styled from "styled-components";
import Text from "../common/Text";
import LinkA from "../common/LinkA";
import MarimbaImage from '../../assets/marimba.png'
import BuffaiImage from '../../assets/buffai.jpeg'
import WezGalleryImage from '../../assets/wez-gallery.png'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  PortfolioContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  `,
  TechContainer: styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: white;
  `,
  TechCardTitle: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 1rem;
  `,
  TechCardText: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
  `,
  TechCardImage: styled.img`
    width: 100%;
    height: 10rem;
  `,
}
function Portfolios() {
  return (
    <S.Container>
      <Text type={"H3"} text={"프로젝트"} weight={800} />
      <S.PortfolioContainer>
        <S.TechContainer>
          <S.TechCardImage src={MarimbaImage} />
          <S.TechCardTitle>
            <Text type={"B2"} text={"Web"} weight={900} />
            <Text type={"B2"} text={"Marimba"}/>
          </S.TechCardTitle>
          <S.TechCardText>
            <LinkA type={"B2"} link={"https://marimba.team"}/>
          </S.TechCardText>
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCardImage src={BuffaiImage} />
          <S.TechCardTitle>
            <Text type={"B2"} text={"AI"} weight={900} />
            <Text type={"B2"} text={"BuffAI"}/>
          </S.TechCardTitle>
          <S.TechCardText>
            <LinkA type={"B2"} link={"https://buffai.io"}/>
          </S.TechCardText>
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCardImage />
          <S.TechCardTitle>
            <Text type={"B2"} text={"Web"} weight={900} />
            <Text type={"B2"} text={"Paperlog"}/>
          </S.TechCardTitle>
          <S.TechCardText>
            <LinkA type={"B2"} link={"https://paperlog.kihoon.dev"}/>
          </S.TechCardText>
        </S.TechContainer>

        <S.TechContainer>
          <S.TechCardImage src={WezGalleryImage} />
          <S.TechCardTitle>
            <Text type={"B2"} text={"Web3"} weight={900} />
            <Text type={"B2"} text={"Wez Gallery"} />
          </S.TechCardTitle>
          <S.TechCardText>
            <LinkA type={"B2"} link={"https://we-z.xyz"}/>
          </S.TechCardText>
        </S.TechContainer>
      </S.PortfolioContainer>
    </S.Container>
  );
}

export default Portfolios;