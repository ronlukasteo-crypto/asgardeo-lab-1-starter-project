import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="nfhibnvM3x2k7gehYwdi1fqmpwsa"
      baseUrl="https://api.asgardeo.io/t/orgron"
      scopes="openid profile"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
)