import TopNavBar from './components/TopNavBar'
import PatternedBackground from './components/PatternedBackground'
import BotProfileCard from './components/BotProfileCard'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '999px',
            background: '#222',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
          },
        }}
      />
      <PatternedBackground />
      <TopNavBar />
      <main className="relative z-10 flex min-h-screen items-start justify-center px-4 pt-[14vh] pb-12">
        <BotProfileCard />
      </main>
    </div>
  )
}
