import styled from "styled-components";
import ProfileImage from '../../assets/profile.jpeg'
import Text from "../common/Text";
import LinkA from "../common/LinkA";
import EmailLink from "../common/EmailLink";
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ProfileCard: styled.div`
    width: 100%;
    height: 22rem;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  `,
  ImageContainer: styled.div`
    width: 40%;
    height: 100%;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
  `,
  InformationContainer: styled.div`
    width: 60%;
    height: calc(100% - 4rem);  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    background-color: white;
  `,
  Title: styled.div`
    padding-bottom: 0.5rem;
  `,
  Data: styled.div`
    display: flex;
    margin-top: 0.5rem;
  `,
  Label: styled.div`
    min-width: 5rem;
  `,
  Value: styled.div``,
  ShortDivider: styled.div`
    width: 7rem;
    height: 0.25rem;
    border-bottom: rebeccapurple solid 0.25rem;
    margin-top: 7rem;
    margin-bottom: 2rem;
  `,
}
function PersonalInformation() {
  return (
    <S.Container>
      <S.ProfileCard>
        <S.ImageContainer>
          <S.Image src={ProfileImage}/>
        </S.ImageContainer>

        <S.InformationContainer>
          <S.Title>
            <Text type={'B2'} text={"Senior Fullstack Developer"} weight={800} />
          </S.Title>

          <S.Data>
            <S.Label><Text type={'B3'} text={'이름'} weight={800} /></S.Label>
            <S.Value><Text type={'B3'} text={'김기훈 (Kihoon Kim)'} /></S.Value>
          </S.Data>
          <S.Data>
            <S.Label><Text type={'B3'} text={'닉네임'} weight={800} /></S.Label>
            <S.Value><Text type={'B3'} text={'키 (Ki)'} /></S.Value>
          </S.Data>
          <S.Data>
            <S.Label><Text type={'B3'} text={'지역'} weight={800} /></S.Label>
            <S.Value><Text type={'B3'} text={'서울'} /></S.Value>
          </S.Data>
          <S.Data>
            <S.Label><Text type={'B3'} text={'역할'} weight={800} /></S.Label>
            <S.Value><Text type={'B3'} text={'Developer, SRE'} /></S.Value>
          </S.Data>
          <S.Data>
            <S.Label><Text type={'B3'} text={'이메일'} weight={800} /></S.Label>
            <S.Value><EmailLink type={'B3'} email={'kihoon.dev@gmail.com'} /></S.Value>
          </S.Data>
          <S.Data>
            <S.Label><Text type={'B3'} text={'linkedin'} weight={800} /></S.Label>
            <S.Value><LinkA type={'B3'} link={'https://www.linkedin.com/in/kihoon-kim-4630ba13b'} /></S.Value>
          </S.Data>
          <S.Data>
            <S.Label><Text type={'B3'} text={'github'} weight={800} /></S.Label>
            <S.Value><LinkA type={'B3'} link={'https://github.com/kihoonkim'} /></S.Value>
          </S.Data>
        </S.InformationContainer>
      </S.ProfileCard>

      <S.ShortDivider />
      <Text type={"H1"} text={"bla bla bal"} />
    </S.Container>
  );
}

export default PersonalInformation;