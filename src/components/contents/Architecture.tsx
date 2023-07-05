import styled from 'styled-components'
import Text from '../common/Text'
import BuffAiArchitectureImage from '../../assets/buffai-architecture.png'
import { TABLET_L_MAX_WIDTH, TABLET_S_MAX_WIDTH } from '../../constants/breakpoints'
import ContentTitle from '../common/ContentTitle'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  ArchitectureList: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  ArchitectureContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Image: styled.img`
    width: 100%;
    object-fit: cover;
  `,
}
function Architecture() {
  const list = [
    { name: 'BuffAi', link: '', image: BuffAiArchitectureImage },
    { name: 'Wez NFT Gallery', link: '', image: BuffAiArchitectureImage },
    { name: 'Marimba', link: '', image: BuffAiArchitectureImage },
  ]
  return (
    <S.Container>
      <ContentTitle title={'아키텍쳐'} />

      <S.ArchitectureList>
        {list.map((item) => (
          <S.ArchitectureContainer key={item.name}>
            <Text type={'B2'} text={item.name} weight={800} />
            <S.Image src={item.image} />
          </S.ArchitectureContainer>
        ))}
      </S.ArchitectureList>
    </S.Container>
  )
}

export default Architecture
