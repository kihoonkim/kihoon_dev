import React from 'react';
import Logo from "./Logo";
import styled from "styled-components";

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `
}
function Header() {
  return (
    <S.Container>
      <Logo/>
    </S.Container>
  );
}

export default Header;