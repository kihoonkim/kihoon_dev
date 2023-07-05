import styled from 'styled-components'

const S = {
  Container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  OutsideContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
    z-index: 0;
  `,
  ContentContainer: styled.div`
    z-index: 1;
    cursor: default;
  `
}

interface AppProps {
  isOpen: boolean
  onClose: () => void
  children: JSX.Element
}

function CommonModal({ isOpen, onClose, children }: AppProps) {
  if (!isOpen) {
    return <></>
  }

  return <S.Container>
    <S.OutsideContainer onClick={onClose}/>
    <S.ContentContainer onClick={(e)=>{ e.stopPropagation() }}>
      {children}
    </S.ContentContainer>
  </S.Container>
}

export default CommonModal
