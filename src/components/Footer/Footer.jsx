import { MapPin, MessageCircle, Mail, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
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
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <a
              href="/gizlilik-politikasi"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Gizlilik Politikası
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="/kullanim-sartlari"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Kullanım Şartları
            </a>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2025 Endonezya Kaşifi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
