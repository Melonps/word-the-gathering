import { Container, Box, Text, Button } from '@yamada-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { GatheredWordsTable } from './components/GatherdWordTable'
import { useGatherWords } from './hooks/useGather'
import { JapaneseIcon } from './components/customIcon'

function App(): JSX.Element {
  const [clipboardText, setClipboardText] = useState('test')
  const { addWordString, removeAllGatheredWords } = useGatherWords()

  const handleClipboardText = useCallback(
    (text: string) => {
      if (clipboardText !== text) {
        setClipboardText(text)
        addWordString(text)
      }
    },
    [clipboardText, addWordString]
  )

  useEffect(() => {
    const clipboardListener = (_event: any, text: string): void => {
      handleClipboardText(text)
    }

    window.electron.onClipboardText(clipboardListener)

    return (): void => {
      window.electron.removeListener('clipboard-text', clipboardListener)
    }
  }, [handleClipboardText])

  return (
    <Container>
      <Button
        onClick={() => {
          removeAllGatheredWords()
        }}
      >
        すべて削除
      </Button>
      <JapaneseIcon size={4} />
      <Box border="1px solid" rounded="md" borderColor="border">
        <Text>クリップボードの内容</Text>
        <Text>{clipboardText}</Text>
        <GatheredWordsTable />
      </Box>
    </Container>
  )
}

export default App
