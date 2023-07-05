import styled from 'styled-components'
import Text from '../common/Text'
import MarimbaImage from '../../assets/marimba.png'
import UjetImage from '../../assets/ujetcx.jpeg'
import BuffaiImage from '../../assets/buffai.jpeg'
import HomepagesImage from '../../assets/npx-homepages.png'
import WezGalleryImage from '../../assets/wez-gallery.png'
import PaperlogImage from '../../assets/paperlog.png'
import ProductCard, { ProductType } from '../products/ProductCard'
import ContentTitle from '../common/ContentTitle'
import { TABLET_L_MAX_WIDTH, TABLET_S_MAX_WIDTH } from '../../constants/breakpoints'

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  ProductsContainer: styled.div`
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
}
function FeaturedProducts() {
  const list: ProductType[] = [
    {
      category: 'web',
      name: 'UJET',
      description: '',
      contribution: 'Twilio 및 MS Teams Integration',
      techStack: 'Ruby, MySql, Twilio, MS Graph API',
      link: ['https://ujet.cx'],
      image: UjetImage,
    },
    {
      category: 'ai',
      name: 'BuffAI',
      description: '게임 Asset을 Stable Diffusion 기반으로 다양하게 생성해 주는 AI 플랫폼',
      contribution: 'AWS Sagemaker 기반 아키텍쳐 수립 및 F/E, B/E 개발 리딩',
      techStack: 'Typescript, React, Nest.js, MongoDB, AWS(ECS, S3, SageMaker)',
      link: ['https://buffai.io'],
      image: BuffaiImage,
    },
    {
      category: 'web3',
      name: 'Wez NFT Gallery',
      description: '여러 지갑을 연결하여 NFT를 한번에 모아서 볼 수 있는 APP',
      contribution: 'B/E 및 Android 개발',
      techStack:
        '- B/E: Typescript, Nest.js, MongoDB\n- Android: Kotlin, Jetpack Compose\n- AWS: ECS, S3',
      link: ['https://we-z.xyz'],
      image: WezGalleryImage,
    },
    {
      category: 'web',
      name: 'Homepages',
      description: 'NPX 계열사 홈페이지 개발',
      contribution: 'F/E 개발 리딩',
      techStack: '- F/E: Typescript, Next.js\n- AWS: S3, Cloudfront, Lambda',
      link: [
        'https://npxcap.com',
        'https://npxteraark.com',
        'https://www.npxcapitalpe.com',
        'https://www.npxcapitalvc.com',
      ],
      image: HomepagesImage,
    },
    {
      category: 'web',
      name: 'Marimba',
      description: '화이트보드, 채팅, 비디오콜 기능이 있는 온라인 협업 툴',
      contribution:
        'F/E, B/E 개발리딩. 화이트보드 및 채팅 기능 개발. 쿠버네티스 기반 아키텍쳐 구현',
      techStack:
        '- F/E: javascript, React.js, Konva.js, Socket.io\n- B/E: Node.js, Express, Redis\n- AWS: EKS, S3, Cloudfront, DocDB',
      link: ['https://marimba.team'],
      image: MarimbaImage,
    },
  ]

  const sides: ProductType[] = [
    {
      category: 'web',
      name: 'Paperlog',
      description: '캔버스위에 자유롭게 쓰는 블로그',
      contribution: '',
      techStack: '',
      link: ['https://paperlog.kihoon.dev'],
      image: PaperlogImage,
    },
    // {
    //   category: 'web',
    //   name: 'OnePic',
    //   description: '하루 중 가장 아름다운 사진 한장',
    //   contribution: 'F/E, B/E 개발',
    //   techStack: '',
    //   link: ['https://onepic.kihoon.dev'],
    //   image: OnepicImage,
    // },
    // {
    //   category: 'mobile',
    //   name: 'Korean Dictation',
    //   description: '받아쓰기 앱',
    //   contribution: 'F/E, B/E 개발',
    //   techStack: '',
    //   link: ['https://dictation.kihoon.dev'],
    //   image: DictationImage,
    // },
    // {
    //   category: 'web',
    //   name: 'Sliding',
    //   description: 'Google Slide 를 ',
    //   contribution: 'F/E, B/E 개발',
    //   techStack: '',
    //   link: ['https://sliding.kihoon.dev'],
    //   image: SlidingImage,
    // },
  ]
  return (
    <S.Container>
      <ContentTitle title={'주요 프로젝트'} />
      <S.ProductsContainer>
        {list.map((item) => (
          <ProductCard product={item} key={item.name} />
        ))}
      </S.ProductsContainer>

      <Text type={'H3'} text={' '} />
      <ContentTitle title={'사이드 프로젝트'} />
      <S.ProductsContainer>
        {sides.map((item) => (
          <ProductCard product={item} key={item.name} />
        ))}
      </S.ProductsContainer>
    </S.Container>
  )
}

export default FeaturedProducts
