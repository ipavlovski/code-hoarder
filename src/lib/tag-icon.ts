import { SiPrisma } from 'react-icons/si'
import { SiAdobeaftereffects } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiYoutube } from 'react-icons/si'
import { SiCloudflare } from 'react-icons/si'
import { SiDigitalocean } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiGooglechrome } from 'react-icons/si'

import { TbSquareRoundedLetterA } from 'react-icons/tb'
import { TbSquareRoundedLetterB } from 'react-icons/tb'
import { TbSquareRoundedLetterC } from 'react-icons/tb'
import { TbSquareRoundedLetterD } from 'react-icons/tb'
import { TbSquareRoundedLetterE } from 'react-icons/tb'
import { TbSquareRoundedLetterF } from 'react-icons/tb'
import { TbSquareRoundedLetterG } from 'react-icons/tb'
import { TbSquareRoundedLetterH } from 'react-icons/tb'
import { TbSquareRoundedLetterI } from 'react-icons/tb'
import { TbSquareRoundedLetterJ } from 'react-icons/tb'
import { TbSquareRoundedLetterK } from 'react-icons/tb'
import { TbSquareRoundedLetterL } from 'react-icons/tb'
import { TbSquareRoundedLetterM } from 'react-icons/tb'
import { TbSquareRoundedLetterN } from 'react-icons/tb'
import { TbSquareRoundedLetterO } from 'react-icons/tb'
import { TbSquareRoundedLetterP } from 'react-icons/tb'
import { TbSquareRoundedLetterQ } from 'react-icons/tb'
import { TbSquareRoundedLetterR } from 'react-icons/tb'
import { TbSquareRoundedLetterS } from 'react-icons/tb'
import { TbSquareRoundedLetterT } from 'react-icons/tb'
import { TbSquareRoundedLetterU } from 'react-icons/tb'
import { TbSquareRoundedLetterV } from 'react-icons/tb'
import { TbSquareRoundedLetterW } from 'react-icons/tb'
import { TbSquareRoundedLetterX } from 'react-icons/tb'
import { TbSquareRoundedLetterY } from 'react-icons/tb'
import { TbSquareRoundedLetterZ } from 'react-icons/tb'

const letters = [
  { letter: 'a', icon: TbSquareRoundedLetterA },
  { letter: 'b', icon: TbSquareRoundedLetterB },
  { letter: 'c', icon: TbSquareRoundedLetterC },
  { letter: 'd', icon: TbSquareRoundedLetterD },
  { letter: 'e', icon: TbSquareRoundedLetterE },
  { letter: 'f', icon: TbSquareRoundedLetterF },
  { letter: 'g', icon: TbSquareRoundedLetterG },
  { letter: 'h', icon: TbSquareRoundedLetterH },
  { letter: 'i', icon: TbSquareRoundedLetterI },
  { letter: 'j', icon: TbSquareRoundedLetterJ },
  { letter: 'k', icon: TbSquareRoundedLetterK },
  { letter: 'l', icon: TbSquareRoundedLetterL },
  { letter: 'm', icon: TbSquareRoundedLetterM },
  { letter: 'n', icon: TbSquareRoundedLetterN },
  { letter: 'o', icon: TbSquareRoundedLetterO },
  { letter: 'p', icon: TbSquareRoundedLetterP },
  { letter: 'q', icon: TbSquareRoundedLetterQ },
  { letter: 'r', icon: TbSquareRoundedLetterR },
  { letter: 's', icon: TbSquareRoundedLetterS },
  { letter: 't', icon: TbSquareRoundedLetterT },
  { letter: 'u', icon: TbSquareRoundedLetterU },
  { letter: 'v', icon: TbSquareRoundedLetterV },
  { letter: 'w', icon: TbSquareRoundedLetterW },
  { letter: 'x', icon: TbSquareRoundedLetterX },
  { letter: 'y', icon: TbSquareRoundedLetterY },
  { letter: 'z', icon: TbSquareRoundedLetterZ },
]

const tags = [
  { tag: 'prisma', icon: SiPrisma },
  { tag: 'aftereffects', icon: SiAdobeaftereffects },
  { tag: 'illustrator', icon: SiAdobeillustrator },
  { tag: 'photoshop', icon: SiAdobephotoshop },
  { tag: 'youtube', icon: SiYoutube },
  { tag: 'cloudflare', icon: SiCloudflare },
  { tag: 'digitalocean', icon: SiDigitalocean },
  { tag: 'typescript', icon: SiTypescript },
  { tag: 'nodejs', icon: SiNodedotjs },
  { tag: 'chrome', icon: SiGooglechrome },
]

export default (tag: string) => {
  const match = tags.find((v) => v.tag == tag)

  if (match) return match

  const firstLetter = tag.at(0) || 'a'
  return letters.find((v) => v.letter == firstLetter) || letters[0]
}
