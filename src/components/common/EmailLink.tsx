import styled from 'styled-components'
import Text, { FontType } from './Text'

const S = {
  Container: styled.a`
    width: fit-content;
  `,
}

interface AppProps {
  type: FontType
  email: string
}

function EmailLink({ type, email }: AppProps) {
  return (
    <S.Container href={`mailto:${email}`}>
      <Text type={type} text={email} hoverColor={'#959595'} />
    </S.Container>
  )
}

export default EmailLink
