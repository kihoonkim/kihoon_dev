import Logo from './Logo'
import styled from 'styled-components'

const S = {
  Container: styled.div`
    width: calc(100% - 4rem);
    height: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background: rgba(50, 50, 50, 0.70);
    backdrop-filter: blur(10px);
  `,
}
function Header() {
  return (
    <S.Container>
      <Logo />
    </S.Container>
  )
}

export default Header
