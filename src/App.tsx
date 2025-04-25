import './App.css'
import TypingPage from './components/pages/TypingPage/TypingPage'
import { TypingProvider } from './context/TypingContext'

function App() {

  return (
    <TypingProvider>
      <TypingPage />
    </TypingProvider>
  )
}

export default App
