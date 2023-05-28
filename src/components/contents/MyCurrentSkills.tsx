import React from 'react';
import styled from "styled-components";


const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    background-color: white;
  `,
}
function MyCurrentSkills() {
  return (
    <S.Container></S.Container>
  );
}

export default MyCurrentSkills;