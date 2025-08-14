import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PerumahanPage from './pages/PerumahanPage'
import KosPage from './pages/KosPage'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'perumahan' | 'kos'>('home')

  const handlePageChange = (page: 'home' | 'perumahan' | 'kos') => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />
      case 'perumahan':
        return <PerumahanPage />
      case 'kos':
        return <KosPage />
      default:
        return <HomePage onPageChange={handlePageChange} />
    }
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
        {renderCurrentPage()}
      </div>
      
      {/* Footer */}
      <footer className="relative bg-slate-800 text-white py-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  PP
                </div>
                <h3 className="text-2xl font-bold">Perdana Property</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Solusi hunian terpercaya dengan kualitas premium dan pelayanan terbaik di Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Properti Kami</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button 
                    onClick={() => handlePageChange('perumahan')}
                    className="hover:text-white transition-colors"
                  >
                    Griya Perdana Asri
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageChange('kos')}
                    className="hover:text-white transition-colors"
                  >
                    Kos Perdana
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-slate-400">
                <a 
                  href="https://wa.me/6282323349674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                >
                  <div className="relative">
                    <span className="h-4 w-4 mr-2 transition-all duration-300 group-hover:scale-125">📞</span>
                    <div className="absolute -inset-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </div>
                  <span className="transition-all duration-300 group-hover:text-green-400 group-hover:font-semibold group-hover:tracking-wide">
                    +62 823-2334-9674
                  </span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></div>
                </a>
                <p className="flex items-center">
                  <span className="h-4 w-4 mr-2">👤</span>
                  Perdana
                </p>
                <p className="flex items-center">
                  <span className="h-4 w-4 mr-2">📍</span>
                  Pati, Jawa Tengah, Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Perdana Property. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App