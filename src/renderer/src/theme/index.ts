import { extendTheme, UsageTheme } from '@yamada-ui/react'
// import { styles } from './styles'
// import { components } from './components'
// import { tokens } from './tokens'

export const fonts = {
  heading: `-apple-system, Noto Sans CN, PingFangSC-Regular, PingFang SC, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `-apple-system, Noto Sans CN, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "游ゴシック体", YuGothic, "YuGothic M", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular, Noto Sans CN, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
}

const customTheme: UsageTheme = {
  // styles,
  // components,
  // ...tokens,
  fonts
}

export const theme = extendTheme(customTheme)()
