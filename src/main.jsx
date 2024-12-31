import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
createRoot(document.getElementById('root')).render(

  <StrictMode>
<Provider store={store}>

    <RouterProvider router={ Router } />
</Provider>
  </StrictMode>,
  
  
)
