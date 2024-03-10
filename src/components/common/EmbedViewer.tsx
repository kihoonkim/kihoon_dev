import styled from "styled-components";

const S = {
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  Iframe: styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
  `
};

interface AppProps {
  src: string
}

function EmbedViewer({ src }: AppProps) {
  return (
    <S.Container>
      <S.Iframe src={src} />
    </S.Container>
  );
}

export default EmbedViewer;
