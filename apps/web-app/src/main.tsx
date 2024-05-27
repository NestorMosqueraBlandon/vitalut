import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application.js'
import '@vitalut/design-system/web/global.css'
import "./styles/general.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
)
