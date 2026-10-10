import { useMemo, useState } from 'react'
import './App.css'
import SiteBackground from './components/Backgrounds/SiteBackground'
import GlassFilter from './components/Glass/GlassFilter'
import BottomNav, { type Page } from './components/Nav/BottomNav'
import ClickSpark from './components/ClickSpark/ClickSpark'
import ProfileCard from './components/ProfileCard/ProfileCard'
import Peripherals from './components/Peripherals/Peripherals'
import { useTheme } from './hooks/useTheme'
import { cssVar } from './utils/cssVar'

function renderPage(page: Page) {
  switch (page) {
    case 'home':
      return <ProfileCard />
    case 'peripherals':
      return <Peripherals />
  }
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const [theme] = useTheme()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sparkColor = useMemo(() => cssVar('--color-accent'), [theme])

  return (
    <ClickSpark sparkColor={sparkColor}>
      <SiteBackground />
      <GlassFilter />
      <main className={`page${page === 'home' ? ' page--home' : ''}`}>{renderPage(page)}</main>
      <BottomNav active={page} onChange={setPage} />
    </ClickSpark>
  )
}

export default App
