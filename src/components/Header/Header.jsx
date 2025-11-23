import { MapPin, Home, Users, Heart, Plane, Youtube, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-4">
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
          </a>

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
              href="/"
              className="px-6 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md hover:shadow-lg font-normal text-sm tracking-wide flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Ana Sayfa
            </a>
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
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md font-normal text-sm"
            >
              <Home className="w-5 h-5" />
              Ana Sayfa
            </a>
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
  );
}
