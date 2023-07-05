import styled from "styled-components";
import CommonModal from "./CommonModal";

const S = {
  Container: styled.div`
    width: 90vw;
    height: 90vh;;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `
};

interface AppProps {
  src: string
  isOpen: boolean
  onClose: ()=>void
}

function FullscreenImageViewer({ src, isOpen, onClose }: AppProps) {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <S.Container>
        <S.Image src={src} />
      </S.Container>
    </CommonModal>
  );
}

export default FullscreenImageViewer;