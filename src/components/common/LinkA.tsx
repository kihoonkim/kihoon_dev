import styled from 'styled-components'
import Text, { FontType } from './Text'
import LinkIcon from '../../assets/ic-link.svg'

const S = {
  Container: styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  Link: styled.a`
    width: fit-content;
    cursor: pointer;
  `,
  Image: styled.img`
    width: 1rem;
    height: 1rem;
  `,
}

interface AppProps {
  type: FontType
  link: string
  text?: string
  color?: string
  hoverColor?: string
  weight?: number
  hasIcon?: boolean
}

function LinkA({ type, text, link, color, hoverColor, weight, hasIcon = false }: AppProps) {
  return (
    <S.Container>
      <S.Link href={link} target={'_blank'}>
        <Text
          type={type}
          text={text || link}
          color={color || 'white'}
          hoverColor={hoverColor || '#959595'}
          weight={weight || 400}
        />
      </S.Link>
      {hasIcon && <S.Image src={LinkIcon} alt={'link'} />}
    </S.Container>
  )
}

export default LinkA
