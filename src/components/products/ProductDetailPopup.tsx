import styled from 'styled-components'
import Text from '../common/Text'
import LinkA from '../common/LinkA'
import CommonModal from '../common/CommonModal'
import { ProductType } from './ProductCard'
import { TABLET_L_MAX_WIDTH, TABLET_S_MAX_WIDTH } from "../../constants/breakpoints";

const S = {
  Container: styled.div`
    display: flex;
    width: 60vw;
    height: 50vh;
    background-color: #202020;
    border-radius: 0.5rem;
    overflow: hidden;
    max-width: 55rem;
    max-height: 30rem;
    
    @media (max-width: ${TABLET_L_MAX_WIDTH}px) {
      width: 80vw;
      height: 40vh;
    }
    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      flex-direction: column;
      width: 85vw;
      height: 80vh;
    }
  `,
  ProductImage: styled.img`
    width: 40%;
    height: 100%;
    object-fit: contain;

    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      width: 100%;
      height: 35%;
    }
  `,
  Description: styled.div`
    width: 60%;
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #ffffff;
    overflow: scroll;
    overscroll-behavior: none;
    padding: 1rem 0;
    
    @media (max-width: ${TABLET_S_MAX_WIDTH}px) {
      width: 100%;
      height: 65%;
    }
  `,
  CardTitle: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
    padding: 0 1rem;
  `,
  CardText: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  `,
}

interface AppProps {
  isOpen: boolean
  onClose: () => void
  product: ProductType
}

function ProductDetailPopup({ isOpen, onClose, product }: AppProps) {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <S.Container>
        <S.ProductImage src={product.image} />
        <S.Description>
          <S.CardTitle>
            <Text type={'B2'} text={product.category} weight={900} color={'#959595'} />
            <Text type={'B1'} text={product.name} weight={900} color={'black'} />
          </S.CardTitle>
          <S.CardText>
            <Text type={'B3'} text={product.description} color={'black'} />
          </S.CardText>
          <S.CardText>
            <Text type={'B3'} text={'Contribution'} weight={900} color={'black'} />
            <Text type={'B3'} text={product.contribution} color={'black'} />
          </S.CardText>
          <S.CardText>
            <Text type={'B3'} text={'Tech Stack'} weight={900} color={'black'} />
            <Text type={'B3'} text={product.techStack} color={'black'} />
          </S.CardText>
          <S.CardText>
            <Text type={'B3'} text={'Link'} weight={900} color={'black'} />
            {product.link.map((link) => (
              <LinkA type={'B3'} link={link} color={'black'} key={link} />
            ))}
          </S.CardText>
        </S.Description>
      </S.Container>
    </CommonModal>
  )
}

export default ProductDetailPopup
