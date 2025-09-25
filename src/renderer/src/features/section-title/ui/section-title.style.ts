import { cva, VariantProps } from 'class-variance-authority'

export const sectionTitleVariants = cva(
  'sticky top-0 p-3 backdrop-blur-lg text-center transition-[max-height] duration-600 -ml-3 -mr-3',
  {
    variants: {
      align: {
        default: '',
        center: 'text-center',
        left: 'text-left',
        right: 'text-right'
      },
      expanded: {
        true: 'max-h-[170px]',
        false: 'max-h-[52px]'
      }
    },
    defaultVariants: {
      align: 'default',
      expanded: true
    }
  }
)

export const sectionTitleH2Variant = cva(
  'transition-[font-size] duration-600 relative translate-y-0',
  {
    variants: {
      expanded: {
        true: 'text-3xl',
        false: 'text-xl'
      }
    },
    defaultVariants: {
      expanded: true
    }
  }
)

export const sectionTitleH4Variant = cva('font-light transition-opacity duration-300', {
  variants: {
    expanded: {
      true: 'opacity-100',
      false: 'opacity-0'
    }
  },
  defaultVariants: {
    expanded: true
  }
})

export type SectionTitleVariants = VariantProps<typeof sectionTitleVariants>
