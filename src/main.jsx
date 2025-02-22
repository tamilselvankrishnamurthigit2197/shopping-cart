
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShoppingCartProvider from './context'
import App from './App'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>
  </BrowserRouter>,
)
