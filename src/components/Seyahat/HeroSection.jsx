import { Plane, MapPin, Send } from "lucide-react";

export function HeroSection({ onTourSelect }) {
  return (
    <section
      className="py-20 px-4 text-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://ucarecdn.com/a9708957-cfdf-4e11-951f-ea3bf8eac6dc/-/format/auto/')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Plane className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Seyahat & Tatil
          <br />
          <span className="text-yellow-300">Rehberliği</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Endonezya'nın en güzel yerlerini keşfedin. Özel turlar, konaklama
          organizasyonu ve unutulmaz deneyimler için yanınızdayım.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onTourSelect && onTourSelect(null)}
            className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold inline-flex items-center space-x-2 shadow-lg"
          >
            <Send className="w-6 h-6" />
            <span>Seyahatınızı Planlayın</span>
          </button>

          <a
            href="#tur-paketleri"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg font-semibold inline-flex items-center space-x-2 shadow-lg"
          >
            <MapPin className="w-6 h-6" />
            <span>Tur Paketlerini İnceleyin</span>
          </a>
        </div>
      </div>
    </section>
  );
}
