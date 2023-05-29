import styled from 'styled-components';
import {PURPLE} from "../../constants/colors";

const S = {
  Container: styled.div`
    width: 4rem;
    font-weight: 900;
    border-bottom: 1px solid white;
    padding: 4px;
    cursor: pointer;
    :hover {
      color: ${PURPLE['500']};
      border-bottom: 1px solid ${PURPLE['500']};
    }
  `,
};

function Logo() {
  return (
    <S.Container>DEV:KI</S.Container>
  );
}

export default Logo;