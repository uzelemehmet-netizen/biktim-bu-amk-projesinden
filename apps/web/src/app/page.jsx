import {
  MapPin,
  Heart,
  Camera,
  Phone,
  Mail,
  MessageCircle,
  Youtube,
  Instagram,
  FileText,
  Plane,
  Users,
  Home,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { trackVisitor } from "../admin/trackVisitor";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    trackVisitor("home");
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="logo-text">
                <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
                  <span className="text-red-600">Endonezya</span>{" "}
                  <span className="text-orange-600">Kaşifi</span>
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Türk Rehber & Danışman
                </p>
              </div>
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menü"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-3">
              <a
                href="/hakkinda"
                className="px-6 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md hover:shadow-lg font-normal text-sm tracking-wide flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Hakkımızda
              </a>
              <a
                href="/evlilik"
                className="px-6 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md hover:shadow-lg font-normal text-sm tracking-wide flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Evlilik
              </a>
              <a
                href="/seyahat"
                className="px-6 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md hover:shadow-lg font-normal text-sm tracking-wide flex items-center gap-2"
              >
                <Plane className="w-4 h-4" />
                Seyahat
              </a>
              <a
                href="/youtube"
                className="px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all shadow-md hover:shadow-lg font-normal text-sm tracking-wide flex items-center gap-2"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
              <a
                href="/iletisim"
                className="px-6 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md hover:shadow-lg font-medium text-sm tracking-wide flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                İletişim
              </a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-2">
              <a
                href="/hakkinda"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md font-normal text-sm"
              >
                <Users className="w-5 h-5" />
                Hakkımızda
              </a>
              <a
                href="/evlilik"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md font-normal text-sm"
              >
                <Heart className="w-5 h-5" />
                Evlilik
              </a>
              <a
                href="/seyahat"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md font-normal text-sm"
              >
                <Plane className="w-5 h-5" />
                Seyahat
              </a>
              <a
                href="/youtube"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all shadow-md font-normal text-sm"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
              <a
                href="/iletisim"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md font-medium text-sm"
              >
                <Phone className="w-5 h-5" />
                İletişim
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-red-600">Endonezya</span>{" "}
              <span className="text-orange-600">Kaşifi</span>
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Endonezya'da
            <span className="text-red-600"> Güvenilir</span>
            <br />
            Türk Rehberiniz
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Endonezya'da yaşayan bir Türk olarak, tatil planlarınızdan evlilik
            süreçlerinize kadar tüm ihtiyaçlarınızda yanınızdayım. Profesyonel
            rehberlik ve danışmanlık hizmetleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/evlilik"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              Evlilik Danışmanlığı
            </a>
            <a
              href="/seyahat"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
            >
              Seyahat Rehberliği
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hizmet Alanlarımız
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="/evlilik"
              className="group p-8 bg-gradient-to-br from-pink-50 to-red-100 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Evlilik & Oturum İzni
              </h4>
              <p className="text-gray-600">
                Yasal işlemler, KITAS/KITAP başvuruları ve tüm evlilik süreçleri
              </p>
            </a>

            <a
              href="/seyahat"
              className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Seyahat & Tatil
              </h4>
              <p className="text-gray-600">
                Özel turlar, konaklama, ulaşım ve yerel deneyimler
              </p>
            </a>

            <a
              href="/youtube"
              className="group p-8 bg-gradient-to-br from-purple-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                YouTube Kanalım
              </h4>
              <p className="text-gray-600">
                Vlog videoları, deneyimler ve Endonezya hakkında her şey
              </p>
            </a>

            <a
              href="/hakkinda"
              className="group p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Hakkımızda
              </h4>
              <p className="text-gray-600">
                Kim olduğum, deneyimlerim ve neden beni seçmelisiniz
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Hemen İletişime Geçin
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Endonezya macera planlarınız için bugün konuşmaya başlayalım!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
            <a
              href="/iletisim"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
            >
              Tüm İletişim Bilgileri
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-2xl font-bold">
              <span className="text-red-400">Endonezya</span>{" "}
              <span className="text-orange-400">Kaşifi</span>
            </h4>
          </div>
          <p className="text-gray-400 mb-6">
            Endonezya'da güvenilir Türk rehberiniz ve danışmanınız
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@endonezyakasifi.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            <p>&copy; 2025 Endonezya Kaşifi. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
