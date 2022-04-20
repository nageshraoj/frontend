import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import studentStore from './store'
import App from './components/common/App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={studentStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
