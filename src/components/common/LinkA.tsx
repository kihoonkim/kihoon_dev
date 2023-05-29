import styled from 'styled-components';
import Text, {FontType} from "./Text";
import {BLUE} from "../../constants/colors";

const S = {
  Container: styled.a`
    width: fit-content;
  `,
};

interface AppProps {
  type: FontType
  link: string
}

function LinkA({ type, link }: AppProps) {
  return (
    <S.Container href={link} target={"_blank"}>
      <Text type={type} text={link} hoverColor={BLUE['600']} />
    </S.Container>
  );
}

export default LinkA;