import { atom } from 'jotai'
import { GatheredWord } from '@renderer/lib/type'

export const clipboardTextAtom = atom<GatheredWord[]>([])