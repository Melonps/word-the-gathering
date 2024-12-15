import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/base.css'
import { theme } from '@renderer/theme'
import { UIProvider } from '@yamada-ui/react'
import { Route, BrowserRouter, Routes } from 'react-router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UIProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  </React.StrictMode>
)
