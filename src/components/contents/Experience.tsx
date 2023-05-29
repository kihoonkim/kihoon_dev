import React from 'react';
import styled from "styled-components";
import Text from "../common/Text";
import {PURPLE} from "../../constants/colors";


const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  CardList: styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
  `,
  CardContainer: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: ${PURPLE['600']} solid 0.125rem;
    padding: 2rem;
    gap: 0.5rem
  `,
}
function Experience() {
  return (
    <S.Container>
      <Text type={"H3"} text={"Experience"} weight={800} />

      <S.CardList>
        <S.CardContainer>
          <Text type={"B1"} text={"NPX TeraArk"} weight={900} />
          <Text type={"B2"} text={" "} />
          <Text type={"B2"} text={"21.11 ~ 20 : 1년 8개월"} />
          <Text type={"B2"} text={"Venture Studio"} weight={800}/>
          <Text type={"B2"} text={"Developer, DevOps"} />
          <Text type={"B2"} text={"BuffAI, SpeakEdi, Ontonomy, Point Avenue"} />
        </S.CardContainer>

        <S.CardContainer>
          <Text type={"B1"} text={"Samssung SDS"} weight={900} />
          <Text type={"B2"} text={" "} />
          <Text type={"B2"} text={"11.08 ~ 21.10 : 10년 3개월"} />
          <Text type={"B2"} text={"Agile Core Team, SW Engineering Team"} weight={800} />
          <Text type={"B2"} text={"Developer, Architect"} />
          <Text type={"B2"} text={"Marimba, Digital signage, "} />
        </S.CardContainer>
      </S.CardList>
    </S.Container>
  );
}

export default Experience;