import { H2, H4 } from '@renderer/components/typography'
import { SectionTitleProps } from '../model'
import { useScrollDirection } from '@renderer/hooks/use-scroll-direction'
import {
  sectionTitleVariants,
  SectionTitleVariants,
  sectionTitleH2Variant,
  sectionTitleH4Variant
} from './section-title.style'
import { useMemo } from 'react'

export const SectionTitle = ({
  title,
  hint,
  align = 'center'
}: SectionTitleProps & Omit<SectionTitleVariants, 'expanded'>): React.JSX.Element => {
  const scrollDirection = useScrollDirection()

  const expanded = useMemo(() => scrollDirection === 'up', [scrollDirection])

  return (
    <section className={sectionTitleVariants({ align, expanded })}>
      <H2 className={sectionTitleH2Variant({ expanded })}>{title}</H2>
      {hint && <H4 className={sectionTitleH4Variant({ expanded })}>{hint}</H4>}
    </section>
  )
}
