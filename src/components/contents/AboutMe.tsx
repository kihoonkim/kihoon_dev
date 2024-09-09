import styled from "styled-components";
import Text from "../common/Text";
import EmailLink from "../common/EmailLink";
import { TABLET_L_MAX_WIDTH } from "../../constants/breakpoints";
import ProfileImage from "../../assets/profile.jpeg";
import EmailIcon from "../../assets/ic-email.svg";

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      flex-direction: column-reverse;
      gap: 5rem;
    }
  `,
  LeftContainer: styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 100%;
    }
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
    border-bottom: white solid 0.125rem;
    margin-bottom: 1rem;
  `,
  RightContainer: styled.div`
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  ProfileImage: styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 20rem;
    border: 1px solid #ffffff;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 15rem;
      height: 15rem;
    }
  `,
  EmailContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
}
function AboutMe() {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Title>
          <Text type='H1' text={"안녕하세요. 김기훈 입니다."} color={'#DEDEDE'} />
        </S.Title>
        <S.Description>
          <Text
            type='B1'
            text={'저는 사용자에게 가치있는 기능을 빠르게 전달하는 것을 가장 중요하게 생각합니다.'}
            color={'#959595'}
            hoverColor={'#959595'}
          />
          <Text
            type='B1'
            text={
              "그리고 그 과정 속에서 제품과 팀이 더 나아 질 수 있도록 돕는 일을 좋아합니다."
            }
            color={'#959595'}
            hoverColor={'#959595'}
          />
        </S.Description>
        <S.Contact>
          <S.ShortDivider />
          <div>
            <Text type='B2' text={'‍채용 제안 및 커피챗은 아래 email 로 연락 주세요.'} />
          </div>
          <S.EmailContainer>
            <img src={EmailIcon} alt="email"/>
            <EmailLink type='B1' email='kihoon.dev@gmail.com' />
          </S.EmailContainer>
        </S.Contact>
      </S.LeftContainer>

      <S.RightContainer>
        <S.ProfileImage src={ProfileImage} />
      </S.RightContainer>
    </S.Container>
  )
}

export default AboutMe
