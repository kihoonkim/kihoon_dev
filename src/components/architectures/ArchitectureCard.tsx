import styled from 'styled-components'
import FullscreenImageViewer from '../common/FullscreenImageViewer'
import { useState } from 'react'
import LinkA from "../common/LinkA";

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  Image: styled.img`
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  `,
}

interface AppProps {
  item: ArchitectureType
}

export type ArchitectureType = {
  name: string
  link: string
  image: string
}

function ArchitectureCard({ item }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <LinkA type={'B2'} link={item.link} text={item.name} weight={800} hasIcon />
      <S.Image src={item.image} onClick={() => setIsOpen(true)} />

      <FullscreenImageViewer src={item.image} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </S.Container>
  )
}

export default ArchitectureCard
