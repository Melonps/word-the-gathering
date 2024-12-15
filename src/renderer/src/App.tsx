import { Container, Box, Text } from '@yamada-ui/react'
import { useEffect, useState } from 'react'
import { GatheredWordsTable } from './components/GatherdWordTable'
import guesslanguage from 'guesslanguage'

function App(): JSX.Element {
  const [clipboardText, setClipboardText] = useState('test')

  useEffect(() => {
    window.electron.onClipboardText((_event, text) => {
      setClipboardText(text)
    })
  }, [])

  console.log(
    guesslanguage.guessLanguage.name('吃饱了然后睡着了刚刚', (callback) => {
      console.log(callback)
    })
  )
  return (
    <Container>
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
