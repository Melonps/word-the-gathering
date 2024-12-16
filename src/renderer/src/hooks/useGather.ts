import { GatheredWordLists } from '@renderer/lib/jotai_state'
import { GatheredWord } from '@renderer/lib/type'
import { useAtom } from 'jotai'
import guesslanguage from 'guesslanguage'

export const useGatherWords = () => {
  const [gatheredWords, setGatheredWords] = useAtom(GatheredWordLists)

  const isExistWord = (wordString: string): boolean => {
    return gatheredWords.some((word) => word.word === wordString)
  }
  const addWordString = (wordString: string): void => {
    guesslanguage.guessLanguage.name(wordString, (callback) => {
      console.log('callback', callback)
      const newWord: GatheredWord = {
        word: wordString,
        language: callback,
        status: 'unregistered'
      }
      console.log('newWord', newWord)
      console.log(gatheredWords)
      if (isExistWord(wordString)) {
        console.log('word is already exist')
        return
      }
      setGatheredWords((prev) => [...prev, newWord])
    })
  }

  const removeGatheredWord = (word: GatheredWord): void => {
    setGatheredWords((prev) => prev.filter((w) => w !== word))
  }

  const removeAllGatheredWords = (): void => {
    setGatheredWords([])
  }

  return { isExistWord, gatheredWords, addWordString, removeGatheredWord, removeAllGatheredWords }
}
