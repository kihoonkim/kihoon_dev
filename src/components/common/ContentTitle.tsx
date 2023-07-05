import styled from "styled-components";
import Text from "./Text";

const S = {
  Container: styled.div`
    padding-bottom: 1rem;
  `
};

interface AppProps {
  title: string
}

function ContentTitle({ title }: AppProps) {
  return (
    <S.Container>
      <Text type={'H2'} text={title} weight={800} />
    </S.Container>
  );
}

export default ContentTitle;