import React from 'react';
import styled from 'styled-components';

type StyledProps = {
  lineHeight: string;
  size: string;
  weight: number;
  color: string
  hoverColor: string
};
const S = {
  Container: styled.div`
    display: inline-block;
    white-space: pre-wrap;
    font-size: ${({size}: StyledProps) => size};
    font-weight: ${({weight}: StyledProps) => weight};
    line-height: ${({lineHeight}: StyledProps) => lineHeight};
    color: ${({color}: StyledProps) => color};
    :hover {
      color: ${({hoverColor}: StyledProps) => hoverColor};
    }
  `,
};

export type FontType = 'H0' | 'H1' | 'H2' | 'B1' | 'B2'
const FontStyle = {
  H0: {
    lineHeight: '120%',
    size: '4rem',
  },
  H1: {
    lineHeight: '140%',
    size: '3rem',
  },
  H2: {
    lineHeight: '140%',
    size: '2rem',
  },
  H3: {
    lineHeight: '140%',
    size: '1.75rem',
  },
  B1: {
    lineHeight: '160%',
    size: '1.25rem',
  },
  B2: {
    lineHeight: '160%',
    size: '1rem',
  },
}
interface AppProps {
  type: FontType
  text: string
  weight?: number
  color?: string
  hoverColor?: string
}

function Text({ type, text, weight = 400, color = 'white', hoverColor = 'white' }: AppProps) {
  return (
    <S.Container {...FontStyle[type]} weight={weight} color={color} hoverColor={hoverColor}>{text}</S.Container>
  );
}

export default Text;