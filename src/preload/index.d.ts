declare global {
  interface Window {
    electron: {
      onClipboardText: (callback: (_event: Electron.IpcRendererEvent, text: string) => void) => void
    }
    api: unknown
  }
}

export {}
