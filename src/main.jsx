import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GlobalStyles>
    <App />
  </GlobalStyles>
  // </React.StrictMode>,
)
