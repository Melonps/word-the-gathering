import { GatheredWord } from '@renderer/lib/type'
import { GatheredWordsColumns } from '@renderer/lib/tableSetting'
import { Box, Text, useDisclosure, VStack, Container } from '@yamada-ui/react'
import { PagingTable } from '@yamada-ui/table'
import { Tag } from '@yamada-ui/react'

interface tableProps {
  WordInfo: GatheredWord
  status: string
}

const sampleData = [
  {
    word: 'sample',
    language: 'English',
    status: 'active'
  },
  {
    word: 'サンプル',
    language: 'Japanese',
    status: 'active'
  }
]

export const GatheredWordsTable = () => {
  return (
    <Container>
      <VStack gap={4}>
        <PagingTable
          layout={'initial'}
          columns={GatheredWordsColumns}
          data={sampleData}
          defaultPageSize={5}
          rowsClickSelect
          highlightOnHover
          size="md"
          onChangeSelect={(selectedIds) => {
            console.log('selectedIds', selectedIds)
          }}
        />
      </VStack>
    </Container>
  )
}
