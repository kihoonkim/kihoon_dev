import styled from 'styled-components'
import Text from "./Text";

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
  CloseButton: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 2;
    
    :hover {
      background-color: #959595;
      color: black;
    }
  `,
  OutsideContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
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
    <S.CloseButton onClick={onClose}>
      <Text type={'H3'} text={'X'} weight={800} />
    </S.CloseButton>
    <S.ContentContainer onClick={(e)=>{ e.stopPropagation() }}>
      {children}
    </S.ContentContainer>
  </S.Container>
}

export default CommonModal
