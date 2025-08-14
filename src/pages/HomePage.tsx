import { Home, Building2, MapPin, Shield, Users, CheckCircle, Star, Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

interface HomePageProps {
  onPageChange: (page: 'perumahan' | 'kos') => void
}

export default function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Animated Hero Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-blob animation-delay-1000"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-lg rotate-45 animate-wave animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full animate-pulse-slow animation-delay-3000"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-800/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2">
            🏡 Solusi Hunian Terpercaya
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Temukan Hunian
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Impian Anda</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dari rumah keluarga yang nyaman hingga kos modern untuk mahasiswa. 
            Kami menyediakan hunian berkualitas dengan lokasi strategis dan harga terjangkau.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              onClick={() => onPageChange('perumahan')}
            >
              <Home className="mr-3 h-6 w-6" />
              Lihat Perumahan
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4"
              onClick={() => onPageChange('kos')}
            >
              <Building2 className="mr-3 h-6 w-6" />
              Lihat Kos
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-r from-green-100/30 to-emerald-100/30 rounded-full animate-float-1 animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Mengapa Memilih Perdana Property?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Lebih dari 10 tahun pengalaman dalam menyediakan hunian berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Sertifikat lengkap, legalitas jelas, dan proses transaksi yang aman dan transparan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Lokasi Strategis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Dekat dengan pusat kota, kampus, sekolah, dan fasilitas umum lainnya.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Pelayanan Prima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Tim profesional yang siap membantu Anda 24/7 dengan pelayanan terbaik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Perumahan */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                [Griya Perdana Asri Image]
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-3xl">Griya Perdana Asri</CardTitle>
                  <Badge className="bg-green-100 text-green-700">Premium Housing</Badge>
                </div>
                <p className="text-slate-600 text-lg">Hunian keluarga modern dengan fasilitas lengkap</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Mulai 485 Juta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">3 Tipe Rumah</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Lokasi Strategis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">KPR Tersedia</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => onPageChange('perumahan')}
                >
                  Lihat Detail Perumahan
                </Button>
              </CardContent>
            </Card>

            {/* Kos */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                [Kos Perdana Image]
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-3xl">Kos Perdana</CardTitle>
                  <Badge className="bg-blue-100 text-blue-700">Student & Worker Housing</Badge>
                </div>
                <p className="text-slate-600 text-lg">Kos modern untuk mahasiswa dan pekerja muda</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Mulai 1.2 Juta/bulan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">3 Tipe Kamar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Dekat Kampus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Fasilitas Lengkap</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  onClick={() => onPageChange('kos')}
                >
                  Lihat Detail Kos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Testimoni dari pelanggan yang telah mempercayakan hunian mereka kepada kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-xl">Bapak Sandi</CardTitle>
                <p className="text-slate-600">Pembeli Rumah Type 45</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 italic">
                  "Proses pembelian sangat mudah dan transparan. Rumahnya berkualitas bagus dan lokasi sangat strategis. Terima kasih Perdana Property!"
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-xl">Rina Mahasiswa UI</CardTitle>
                <p className="text-slate-600">Penghuni Kos Premium</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 italic">
                  "Kos yang sangat nyaman, bersih, dan aman. Fasilitas lengkap dan dekat dengan kampus. Sangat recommended untuk mahasiswa!"
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-xl">Ibu Diah</CardTitle>
                <p className="text-slate-600">Pembeli Rumah Type 60</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 italic">
                  "Pelayanan sangat memuaskan dari awal survey hingga serah terima. Rumah sesuai dengan yang dijanjikan. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        {/* Dynamic CTA Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float-1"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-lg rotate-45 animate-wave animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Menemukan Hunian Impian Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Konsultasikan kebutuhan hunian Anda dengan tim ahli kami. Gratis konsultasi dan survey lokasi!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="group relative">
              <a 
                href="https://wa.me/6282323349674"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-110 hover:shadow-2xl group"
              >
                <div className="relative">
                  <Phone className="h-6 w-6 text-white transition-all duration-300 group-hover:text-green-300 group-hover:rotate-12 group-hover:scale-125" />
                  <div className="absolute -inset-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-pulse"></div>
                  <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="text-lg font-semibold text-white transition-all duration-300 group-hover:text-green-200 group-hover:tracking-wide">
                  +62 823-2334-9674
                </span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce animation-delay-100"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce animation-delay-300"></div>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
            
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-white text-blue-600 border-2 border-white hover:border-green-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl group px-8 py-4"
              onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <span className="relative z-10 flex items-center text-lg font-bold">
                <Phone className="mr-3 h-6 w-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-white" />
                <span className="transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
                  Hubungi Sekarang
                </span>
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}