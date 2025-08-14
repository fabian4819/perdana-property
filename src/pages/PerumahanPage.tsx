import { MapPin, Bed, Bath, Car, Phone, CheckCircle, Home, School, ShoppingBag, Hospital } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

export default function PerumahanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full animate-float-1"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg rotate-12 animate-wave animation-delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-emerald-400/15 to-green-400/15 rounded-full animate-pulse-slow animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2">
              🏡 Premium Housing Complex
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Griya Perdana Asri
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hunian keluarga modern dengan konsep lingkungan asri, fasilitas lengkap, dan lokasi strategis di Pati.
              Wujudkan impian memiliki rumah dengan cicilan yang terjangkau.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span>Langgen, Langgenharjo, Juwana, Pati, Jawa Tengah 59185</span>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-green-600" />
                <span>3 Tipe Rumah Tersedia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Pilihan Tipe Rumah</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berbagai pilihan tipe rumah yang sesuai dengan kebutuhan dan budget keluarga Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Type 36/72 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                <img
                  src="/assets/perumahan-1.jpeg"
                  alt="Rumah Type 36/72"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Type 36/72</CardTitle>
                  <Badge variant="secondary">Ready Stock</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">Rp 485,000,000</p>
                  <p className="text-sm text-slate-600">Cicilan mulai Rp 3.2 juta/bulan*</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 py-4 bg-slate-50 rounded-lg px-4">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">2 Kamar Tidur</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">1 Kamar Mandi</p>
                  </div>
                  <div className="text-center">
                    <Car className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">Carport</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Spesifikasi:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luas Bangunan 36m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luas Tanah 72m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Listrik 1300 Watt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Air PDAM</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wide font-semibold">
                      Konsultasi Sekarang
                    </span>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </Button>
              </CardContent>
            </Card>

            {/* Type 45/90 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg ring-2 ring-green-200">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-semibold">
                  <img
                    src="/assets/perumahan-2.jpeg"
                    alt="Rumah Type 45/90"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500">Paling Populer</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Type 45/90</CardTitle>
                  <Badge className="bg-orange-100 text-orange-700">Limited</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">Rp 625,000,000</p>
                  <p className="text-sm text-slate-600">Cicilan mulai Rp 4.1 juta/bulan*</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 py-4 bg-slate-50 rounded-lg px-4">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">3 Kamar Tidur</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">2 Kamar Mandi</p>
                  </div>
                  <div className="text-center">
                    <Car className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">Carport</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Spesifikasi:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luas Bangunan 45m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luas Tanah 90m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Listrik 2200 Watt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Air PDAM</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wide font-semibold">
                      Konsultasi Sekarang
                    </span>
                  </span>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </Button>
              </CardContent>
            </Card>

            {/* Type 60/120 */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-lg font-semibold">
                <img
                  src="/assets/perumahan-3.jpeg"
                  alt="Rumah Type 60/120"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">Type 60/120</CardTitle>
                  <Badge className="bg-purple-100 text-purple-700">Premium</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">Rp 825,000,000</p>
                  <p className="text-sm text-slate-600">Cicilan mulai Rp 5.4 juta/bulan*</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4 py-4 bg-slate-50 rounded-lg px-4">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">4 Kamar Tidur</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">3 Kamar Mandi</p>
                  </div>
                  <div className="text-center">
                    <Car className="h-6 w-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">Garasi Mobil</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Spesifikasi:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luas Bangunan 60m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Luas Tanah 120m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Listrik 2200 Watt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Air PDAM</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wide font-semibold">
                      Konsultasi Sekarang
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

      {/* Location & Facilities */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Lokasi & Fasilitas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Lokasi strategis dengan akses mudah ke berbagai fasilitas umum
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Map */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <span>Lokasi Strategis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center text-slate-600 font-semibold mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.661963839974!2d111.048017!3d-6.704984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70d2f7e3b3e3e1%3A0x6e8e7b9e8e7b9e8e!2sLanggen%2C%20Langgenharjo%2C%20Juwana%2C%20Pati%2C%20Jawa%20Tengah%2059185!5e0!3m2!1sid!2sid!4v1715680000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Griya Perdana Asri"
                  ></iframe>
                </div>
                <p className="text-slate-600 mb-4">
                  <strong>Alamat:</strong> Langgen, Langgenharjo, Juwana, Pati, Jawa Tengah 59185
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <School className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">5 menit ke SD/SMP Negeri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">10 menit ke Mall Metropolitan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Hospital className="h-5 w-5 text-red-600" />
                    <span className="text-sm">15 menit ke RS Hermina Bekasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-green-600" />
                    <span className="text-sm">20 menit ke Stasiun Bekasi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fasilitas Cluster</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Security 24 Jam</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">CCTV Area</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Taman Bermain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Jogging Track</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Area Parkir Luas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Masjid/Mushola</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Keunggulan Lokasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Akses Transportasi</p>
                        <p className="text-sm text-slate-600">Dekat dengan jalan raya utama dan transportasi umum</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Lingkungan Asri</p>
                        <p className="text-sm text-slate-600">Dikelilingi area hijau dengan udara yang sejuk</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Investasi Menguntungkan</p>
                        <p className="text-sm text-slate-600">Nilai properti terus meningkat setiap tahun</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Skema Pembiayaan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berbagai pilihan pembiayaan yang fleksibel untuk mempermudah kepemilikan rumah impian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">KPR Bank</CardTitle>
                <p className="text-slate-600">Kredit Pemilikan Rumah dengan bunga kompetitif</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>DP Minimum:</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tenor:</span>
                    <span className="font-semibold">5-20 Tahun</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bunga:</span>
                    <span className="font-semibold">Mulai 6.5%*</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-slate-600">*Syarat dan ketentuan berlaku</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Cash Bertahap</CardTitle>
                <p className="text-slate-600">Pembayaran tunai dengan sistem bertahap</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Booking Fee:</span>
                    <span className="font-semibold">Rp 5 Juta</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DP:</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pelunasan:</span>
                    <span className="font-semibold">Saat Akad</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-slate-600">Diskon khusus untuk pembayaran cash</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mulai Wujudkan Rumah Impian Anda
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Konsultasi gratis dengan tim ahli kami. Dapatkan penawaran terbaik dan survey lokasi gratis!
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
              className="relative overflow-hidden bg-white text-green-600 border-2 border-white hover:border-green-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl group px-8 py-4"
              onClick={() => window.open('https://wa.me/6282323349674', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="relative z-10 flex items-center text-lg font-bold">
                <Phone className="mr-3 h-6 w-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-white" />
                <span className="transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
                  Konsultasi Gratis
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