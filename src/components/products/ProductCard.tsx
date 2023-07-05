import styled from 'styled-components'
import { useState } from 'react'
import ProductDetailPopup from './ProductDetailPopup'

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;
  `,
  CardImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
  `,
}

export type ProductType = {
  category: string
  name: string
  description: string
  contribution: string
  techStack: string
  link: string[]
  image: string
}

interface AppProps {
  product: ProductType
}

function ProductCard({ product }: AppProps) {
  const [open, setOpen] = useState(false)
  return (
    <S.Container onClick={() => setOpen(!open)}>
      <S.CardImage src={product.image} />

      <ProductDetailPopup product={product} isOpen={open} onClose={() => setOpen(false)} />
    </S.Container>
  )
}

export default ProductCard
