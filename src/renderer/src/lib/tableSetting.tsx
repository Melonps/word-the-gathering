import { Tag } from '@yamada-ui/react'
import { LanguageDisplay } from '@renderer/components/language'

export const GatheredWordsColumns = [
  {
    Header: 'Word',
    accessorKey: 'word'
  },
  {
    Header: 'Language',
    accessorKey: 'language',
    cell: (info: any) => {
      return <LanguageDisplay language={info.row.original.language} />
    }
  },
  {
    Header: 'status',
    accessorKey: 'status',
    cell: (info: any) => {
      if (info.row.original.status === 'active') {
        return <Tag>{info.row.original.status}</Tag>
      } else {
        return <Tag colorScheme="red">{info.row.original.status}</Tag>
      }
    }
  }
]
