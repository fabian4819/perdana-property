import { MapPin, Bed, Bath, Wifi, Shield, Users, CheckCircle, Phone, School, ShoppingBag, Car, Coffee } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

export default function KosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full animate-blob animation-delay-500"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-lg rotate-45 animate-float-2"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full animate-wave animation-delay-1500"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2">
              🏠 Modern Student & Worker Housing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Kos Perdana
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hunian modern khusus mahasiswa dan pekerja muda dengan fasilitas lengkap, keamanan 24 jam,
              dan lokasi strategis dekat kampus-kampus terkemuka.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Kincir Wetan, Langgenharjo, Juwana, Pati, Jawa Tengah</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>3 Tipe Kamar Tersedia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Pilihan Tipe Kamar</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berbagai pilihan kamar yang nyaman dan modern sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Standard Room */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                [Kamar Standard Image]
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Kamar Standard</CardTitle>
                  <Badge variant="secondary">Available</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">
                    Rp 1,200,000
                    <span className="text-sm text-slate-500 font-normal">/bulan</span>
                  </p>
                  <p className="text-sm text-slate-600">Sudah termasuk listrik & air</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-3 py-4 bg-slate-50 rounded-lg px-4">
                  <div className="flex items-center text-sm">
                    <Bed className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Kasur Single</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Bath className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Kamar Mandi Luar</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Wifi className="h-4 w-4 mr-2 text-blue-600" />
                    <span>WiFi Gratis</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Security 24/7</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Fasilitas Kamar:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Kasur single + bantal guling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Lemari pakaian</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Meja belajar + kursi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>AC split</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wide font-semibold">
                      Book Sekarang
                    </span>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Room */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg ring-2 ring-blue-200">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-lg font-semibold">
                  [Kamar Premium Image]
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500">Paling Diminati</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Kamar Premium</CardTitle>
                  <Badge className="bg-orange-100 text-orange-700">Popular</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">
                    Rp 1,800,000
                    <span className="text-sm text-slate-500 font-normal">/bulan</span>
                  </p>
                  <p className="text-sm text-slate-600">All inclusive</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-3 py-4 bg-slate-50 rounded-lg px-4">
                  <div className="flex items-center text-sm">
                    <Bed className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Kasur Queen</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Bath className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Kamar Mandi Dalam</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Wifi className="h-4 w-4 mr-2 text-blue-600" />
                    <span>High-speed WiFi</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Security 24/7</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Fasilitas Kamar:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Kasur queen + bedcover set</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Lemari sliding door</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Meja belajar + kursi ergonomis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>AC inverter + water heater</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wide font-semibold">
                      Book Sekarang
                    </span>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </Button>
              </CardContent>
            </Card>

            {/* Deluxe Room */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-lg font-semibold">
                [Kamar Deluxe Image]
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Kamar Deluxe</CardTitle>
                  <Badge className="bg-purple-100 text-purple-700">Luxury</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">
                    Rp 2,500,000
                    <span className="text-sm text-slate-500 font-normal">/bulan</span>
                  </p>
                  <p className="text-sm text-slate-600">Full service + cleaning</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-3 py-4 bg-slate-50 rounded-lg px-4">
                  <div className="flex items-center text-sm">
                    <Bed className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Kasur King</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Bath className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Bathroom Ensuite</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Wifi className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Premium WiFi</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Area Santai</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Fasilitas Kamar:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Kasur king size + premium bedding</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Walk-in closet</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Study area + sofa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>AC dual + mini fridge</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wide font-semibold">
                      Book Sekarang
                    </span>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities & Location */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Fasilitas & Lokasi</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fasilitas lengkap dan lokasi strategis untuk mendukung aktivitas belajar dan bekerja
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Facilities */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fasilitas Bersama</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Dapur Bersama</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Ruang Cuci</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Ruang Tamu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Parkir Motor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">CCTV Area</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Dispenser Air</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Aturan Kos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Khusus Mahasiswa & Pekerja</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Jam berkunjung: 06.00 - 22.00</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Lingkungan bersih dan kondusif</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Dilarang membawa tamu menginap</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bonus Fasilitas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Coffee className="h-4 w-4 text-orange-600" />
                      <span>Free Coffee Corner</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-4 w-4 text-blue-600" />
                      <span>High-Speed Internet 100 Mbps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Smart Door Lock System</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>Co-working Space</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span>Lokasi Strategis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg flex items-center justify-center text-slate-600 font-semibold mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.664032769568!2d111.049019!3d-6.705024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70d2f7e3b3e3e1%3A0x6e8e7b9e8e7b9e8e!2sKos%20Perdana%2C%20Kincir%20Wetan%2C%20Langgenharjo%2C%20Juwana%2C%20Pati%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1715680000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kos Perdana"
                  ></iframe>
                </div>
                <p className="text-slate-600 mb-6">
                  <strong>Alamat:</strong> Kincir Wetan, Langgenharjo, Juwana, Pati, Jawa Tengah
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-800">Jarak ke Kampus:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <School className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">5 menit ke Universitas Indonesia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <School className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">10 menit ke Universitas Gunadarma</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <School className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">15 menit ke Universitas Pancasila</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-slate-800 pt-4">Akses Transportasi:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Car className="h-5 w-5 text-green-600" />
                      <span className="text-sm">2 menit ke Halte TransJakarta</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ShoppingBag className="h-5 w-5 text-purple-600" />
                      <span className="text-sm">5 menit ke D'Mall Depok</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Coffee className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Walking distance ke cafe & resto</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Sistem Pembayaran</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sistem pembayaran yang fleksibel untuk memudahkan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Deposit Awal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-2xl font-bold text-blue-600">Rp 500,000</p>
                  <p className="text-sm text-slate-600">Deposit keamanan (dapat dikembalikan)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 ring-2 ring-blue-200">
              <CardHeader>
                <CardTitle className="text-xl">Pembayaran Bulanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-2xl font-bold text-blue-600">Sebelum Tanggal 5</p>
                  <p className="text-sm text-slate-600">Pembayaran sewa kamar per bulan</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Promo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-2xl font-bold text-green-600">Diskon 10%</p>
                  <p className="text-sm text-slate-600">Untuk pembayaran 6 bulan di muka</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Segera Booking Kamar Impian Anda!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Kamar terbatas! Konsultasi gratis dan survey langsung. Dapatkan kamar terbaik sebelum kehabisan.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 group-hover:shadow-2xl">
                <a
                  href="https://wa.me/6282323349674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-lg group"
                >
                  <div className="relative">
                    <Phone className="h-6 w-6 text-white transition-all duration-300 group-hover:text-green-300 group-hover:rotate-12 group-hover:scale-125" />
                    <div className="absolute -inset-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-pulse"></div>
                    <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </div>
                  <span className="font-semibold text-white transition-all duration-300 group-hover:text-green-200 group-hover:tracking-wide">
                    +62 823-2334-9674
                  </span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></div>
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>

            <Button
              size="lg"
              className="relative overflow-hidden bg-white text-blue-600 border-2 border-white hover:border-green-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl group px-8 py-4"
              onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="relative z-10 flex items-center text-lg font-bold">
                <Phone className="mr-3 h-6 w-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-white" />
                <span className="transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
                  Book Sekarang
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