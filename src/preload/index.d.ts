declare global {
  interface Window {
    electron: {
      removeListener: (channel: string, listener: (...args: any[]) => void) => void
      onClipboardText: (callback: (_event: Electron.IpcRendererEvent, text: string) => void) => void
    }
    api: unknown
  }
}

export {}
