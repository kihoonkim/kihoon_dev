import React from 'react';
import styled from 'styled-components';
import Text, {FontType} from "./Text";
import {BLUE} from "../../constants/colors";

const S = {
  Container: styled.a``,
};

interface AppProps {
  type: FontType
  email: string
}

function EmailLink({ type, email }: AppProps) {
  return (
    <S.Container href={`mailto:${email}`}>
      <Text type={type} text={email} hoverColor={BLUE['600']} />
    </S.Container>
  );
}

export default EmailLink;