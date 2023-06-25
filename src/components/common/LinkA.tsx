import styled from 'styled-components'
import Text, { FontType } from './Text'
import { BLUE } from '../../constants/colors'

const S = {
  Container: styled.a`
    width: fit-content;
  `,
}

interface AppProps {
  type: FontType
  link: string
  text?: string
}

function LinkA({ type, text, link }: AppProps) {
  return (
    <S.Container href={link} target={'_blank'}>
      <Text type={type} text={text || link} hoverColor={BLUE['600']} />
    </S.Container>
  )
}

export default LinkA
