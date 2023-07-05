import styled from 'styled-components'
import Text, { FontType } from './Text'

const S = {
  Container: styled.a`
    width: fit-content;
  `,
}

interface AppProps {
  type: FontType
  link: string
  text?: string
  color?: string
  hoverColor?: string
}

function LinkA({ type, text, link, color, hoverColor }: AppProps) {
  return (
    <S.Container href={link} target={'_blank'}>
      <Text type={type} text={text || link} color={color || 'white'} hoverColor={hoverColor || '#959595'} />
    </S.Container>
  )
}

export default LinkA
