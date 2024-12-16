import { GatheredWord } from '@renderer/lib/type'
import { GatheredWordsColumns } from '@renderer/lib/tableSetting'
import { Box, Text, useDisclosure, VStack, Container } from '@yamada-ui/react'
import { PagingTable } from '@yamada-ui/table'
import { useGatherWords } from '@renderer/hooks/useGather'

export const GatheredWordsTable = () => {
  const { gatheredWords } = useGatherWords()

  return (
    <Container>
      <VStack gap={4}>
        <PagingTable
          layout={'initial'}
          columns={GatheredWordsColumns}
          data={gatheredWords}
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
