import styled from "styled-components";
import ContentTitle from "../common/ContentTitle";
import LinkA from "../common/LinkA";
import EmailLink from "../common/EmailLink";

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `
};

function ContactMe() {
  return (
    <S.Container>
      <ContentTitle title={'Contact Me'} />

      <EmailLink type={'B3'} email={'kihoon.dev@gmail.com'} />
      <LinkA type={'B3'} link={'https://www.linkedin.com/in/kihoon-kim-4630ba13b'} />
    </S.Container>
  );
}

export default ContactMe;
