import './App.css'
import TypingComparition from './components/organisms/TypingComparition/TypingComparition'
import { TypingProvider } from './context/TypingContext'

function App() {

  return (
    <TypingProvider>
      <TypingComparition />
    </TypingProvider>
  )
}

export default App
