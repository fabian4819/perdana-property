import { Building2, Phone } from 'lucide-react'
import { Button } from './ui/button'

interface NavbarProps {
  currentPage: 'home' | 'perumahan' | 'kos'
  onPageChange: (page: 'home' | 'perumahan' | 'kos') => void
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onPageChange('home')}
          >
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perdana Property
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onPageChange('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('perumahan')}
              className={`font-medium transition-colors ${
                currentPage === 'perumahan' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Perumahan
            </button>
            <button 
              onClick={() => onPageChange('kos')}
              className={`font-medium transition-colors ${
                currentPage === 'kos' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Kos
            </button>
            
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <a 
                href="https://wa.me/6282323349674"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-lg hover:scale-105"
              >
                <div className="relative">
                  <Phone className="h-4 w-4 transition-all duration-300 group-hover:text-green-600 group-hover:rotate-12 group-hover:scale-110" />
                  <div className="absolute -inset-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="relative transition-all duration-300 group-hover:text-green-600 group-hover:font-semibold">
                  +62 823-2334-9674
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 group-hover:w-full"></div>
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></div>
              </a>
            </div>
            
            <Button 
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <Phone className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Hubungi Kami
              </span>
              <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 bg-white/20 rounded-full"></div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}