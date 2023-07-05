import styled from 'styled-components'
import Text from '../common/Text'

const S = {
  TechCard: styled.div`
    height: 100%;
  `,
  TechCardItem: styled.div``,
}

export type SkillType = {
  category: string
  list: { name: string; highlight?: boolean }[]
}
interface AppProps {
  skill: SkillType
}

function SkillCard({ skill }: AppProps) {
  return (
    <S.TechCard>
      <Text type={'B3'} text={skill.category} weight={700} color={'#9D9D9D'} />
      <Text type={'B3'} text={' '} />
      {
        skill.list.map((item) => (
          <S.TechCardItem key={item.name}>
            <Text type={'B2'} text={item.name} weight={item.highlight ? 800 : 400} />
          </S.TechCardItem>
        ))
      }
    </S.TechCard>
  )
}

export default SkillCard
