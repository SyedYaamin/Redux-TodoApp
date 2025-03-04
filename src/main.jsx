import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Config/Redux/Store/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
