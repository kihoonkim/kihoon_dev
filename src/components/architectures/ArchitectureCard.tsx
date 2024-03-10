import styled from 'styled-components'
import LinkA from '../common/LinkA'
import Text from '../common/Text'
import EmbedViewer from '../common/EmbedViewer.tsx'
import { TABLET_L_MAX_WIDTH, TABLET_S_MAX_WIDTH } from '../../constants/breakpoints.ts'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  `,
  Box: styled.div`
    position: relative;
    padding-top: 72%;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      padding-top: 70%;
    }

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
    }
  `,
}

interface AppProps {
  item: ArchitectureType
}

export type ArchitectureType = {
  name: string
  description: string
  link: string
  embedLink: string
}

function ArchitectureCard({ item }: AppProps) {
  return (
    <S.Container>
      <LinkA type={'B2'} link={item.link} text={item.name} weight={800} hasIcon />
      <Text type={'B2'} text={item.description} />
      <S.Box>
        <EmbedViewer src={item.embedLink} />
      </S.Box>
    </S.Container>
  )
}

export default ArchitectureCard
