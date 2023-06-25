import styled from 'styled-components'
import Text from '../common/Text'
import LinkA from '../common/LinkA'
import MarimbaImage from '../../assets/marimba.png'
import BuffaiImage from '../../assets/buffai.jpeg'
import WezGalleryImage from '../../assets/wez-gallery.png'
import { PHONE_MAX_WIDTH } from '../../constants/breakpoints'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  PortfolioContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  `,
  TechContainer: styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: white;

    cursor: pointer;
    :hover {
      transform: scale(1.01);
    }

    @media (max-width: ${PHONE_MAX_WIDTH}px) {
      width: 100%;
    }
  `,
  TechCardTitle: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 1rem;
  `,
  TechCardText: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
  `,
  TechCardImage: styled.img`
    width: 100%;
    height: 10rem;

    @media (max-width: ${PHONE_MAX_WIDTH}px) {
      height: 12rem;
    }
  `,
}
function Portfolios() {
  const list = [
    { category: 'AI', name: 'BuffAI', link: 'https://buffai.io', image: BuffaiImage },
    { category: 'Web', name: 'Marimba', link: 'https://marimba.team', image: MarimbaImage },
    { category: 'Web3', name: 'Wez NFT Gallery', link: 'https://we-z.xyz', image: WezGalleryImage },
    { category: 'Web', name: 'Paperlog', link: 'https://paperlog.kihoon.dev', image: '' },
  ]
  return (
    <S.Container>
      <Text type={'H3'} text={'프로젝트'} weight={800} />
      <S.PortfolioContainer>
        {list.map((item) => (
          <S.TechContainer>
            <S.TechCardImage src={item.image} />
            <S.TechCardTitle>
              <Text type={'B2'} text={item.category} weight={900} />
              <Text type={'B2'} text={item.name} />
            </S.TechCardTitle>
            <S.TechCardText>
              <LinkA type={'B2'} link={item.link} />
            </S.TechCardText>
          </S.TechContainer>
        ))}
      </S.PortfolioContainer>
    </S.Container>
  )
}

export default Portfolios
