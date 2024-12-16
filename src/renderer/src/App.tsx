import { Container, Box, Text, Button } from '@yamada-ui/react'
import { useEffect, useState } from 'react'
import { GatheredWordsTable } from './components/GatherdWordTable'
import { useGatherWords } from './hooks/useGather'

function App(): JSX.Element {
  const [clipboardText, setClipboardText] = useState('test')
  const { gatheredWords, addWordString, removeAllGatheredWords, isExistWord } = useGatherWords()

  useEffect(() => {
    window.electron.onClipboardText((_event, text) => {
      if (clipboardText !== text) {
        console.log('clipboardText', text)
        console.log('text', text)
        console.log(clipboardText !== text)
        setClipboardText(text)
        addWordString(text)
      }
    })
  }, [])

  console.log()
  return (
    <Container>
      <Button
        onClick={() => {
          removeAllGatheredWords()
        }}
      >
        すべて削除
      </Button>
      <Box border="1px solid" rounded="md" borderColor="border">
        <Text>クリップボードの内容</Text>
        <Text>吃饱了然后睡着了刚刚</Text>
        <Text>{clipboardText}</Text>
        <Text>言語判定</Text>
        <GatheredWordsTable />
      </Box>
    </Container>
  )
}

export default App
