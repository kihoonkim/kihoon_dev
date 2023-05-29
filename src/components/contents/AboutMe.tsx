import styled from "styled-components";
import MainImage from '../../assets/main-image.webp'
import Text from "../common/Text";
import EmailLink from "../common/EmailLink";

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
  `,
  LeftContainer: styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,
  Greeting: styled.div``,
  Title: styled.div``,
  Description: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  Contact: styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  ShortDivider: styled.div`
    width: 5rem;
    height: 0.125rem;
    border-bottom: rebeccapurple solid 0.125rem;
    margin-bottom: 1rem;
  `,
  RightContainer: styled.div`
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `,
  ProfileContainer: styled.div`
    position: relative;
    width: 30rem;
    height: 30rem;
  `,
  ProfileImage: styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
  `
}
function AboutMe() {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Greeting>
          <Text type="H3" text={"안녕하세요."} />
          <Text type="H1" text={"김기훈"} weight={800} />
          <Text type="H3" text={" 입니다."} />
        </S.Greeting>
        <S.Title>
          <Text type="H3" text={"저는 "} />
          <Text type="H2" text={"Fullstack Developer"} weight={800} />
          <Text type="H3" text={" 입니다."} />
        </S.Title>
        <S.Description>
          <Text type="B2" text={"사용자에게 가치있는 기능을 빠르게 전달하는 것을 가장 중요하게 생각합니다."} />
          <Text type="B2" text={"그리고 그 과정속에서 어떻게 하면 제품과 팀이 더 나아 질 수 있을지 고민하는 것을 좋아합니다."} />
        </S.Description>
        <S.Contact>
          <S.ShortDivider />
          <div>
            <Text type="B2" text={"‍채용 제안"} weight={800} />
            <Text type="B2" text={" 및 "} />
            <Text type="B2" text={"커피 챗"} weight={800} />
            <Text type="B2" text={"은 아래 "} />
            <Text type="B2" text={"Email"} weight={800} />
            <Text type="B2" text={" 로 연락해 주세요"} />
          </div>
          <EmailLink type="B1" email="kihoon.dev@gmail.com" />
        </S.Contact>
      </S.LeftContainer>

      <S.RightContainer>
        <S.ProfileContainer>
          <S.ProfileImage src={MainImage}/>
        </S.ProfileContainer>
      </S.RightContainer>
    </S.Container>
  );
}

export default AboutMe;