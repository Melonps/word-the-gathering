import { Box, Text, VStack, Tag } from '@yamada-ui/react'
import {
  EnglishIcon,
  ChineseIcon,
  JapaneseIcon,
  DefaultIcon
} from '@renderer/components/customIcon'

const languageDict = {
  japanese: { code: 'JP', icon: JapaneseIcon },
  english: { code: 'EN', icon: EnglishIcon },
  chinese: { code: 'CN', icon: ChineseIcon },
  unknown: { code: 'UN', icon: DefaultIcon }
}

export const LanguageDisplay = ({ language }: { language: string }): JSX.Element => {
  const normalizedLanguage = language.toLowerCase()
  const languageData = languageDict[normalizedLanguage] || languageDict.unknown
  const IconComponent = languageData.icon

  return (
    <Box display="flex" alignItems="center" gap="4px">
      <IconComponent size={4} />
      <Text>{languageData.code}</Text>
    </Box>
  )
}
