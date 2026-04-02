import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AmbientBackground } from './components/layout/AmbientBackground'
import { LandingPage } from './pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <AmbientBackground />
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
