import { Tag } from '@yamada-ui/react'

export const GatheredWordsColumns = [
  {
    Header: 'Word',
    accessorKey: 'word'
  },
  {
    Header: 'Language',
    accessorKey: 'language'
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
