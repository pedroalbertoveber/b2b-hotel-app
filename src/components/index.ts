import { Whitebox } from './PageBlocks/Whitebox'
import Container from './PageBlocks/Container'
import { Divisor } from './Atoms/Divisor'
import Title from './Texts/Title'
import Subtitle from './Texts/Subtitle'
import { Tooltip } from './Utils/Tooltip'

export const B2BPattern = {
  Containers: {
    Container,
    Divisor,
    Whitebox,
  },
  Utils: {
    Tooltip,
  },
  Texts: {
    Title,
    Subtitle,
  },
}
