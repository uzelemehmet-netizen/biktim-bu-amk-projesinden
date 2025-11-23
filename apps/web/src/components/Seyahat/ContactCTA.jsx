import { MessageCircle, Send } from "lucide-react";

export function ContactCTA({ onTourSelect }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Endonezya Maceranıza Başlayın!
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Unutulmaz bir Endonezya seyahati için benimle iletişime geçin. Size
          özel tur paketinizi birlikte oluşturalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onTourSelect && onTourSelect(null)}
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            <Send className="w-6 h-6" />
            <span>Seyahat Formunu Doldurun</span>
          </button>

          <a
            href="https://wa.me/905550343852"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            <MessageCircle className="w-6 h-6" />
            <span>WhatsApp ile Hemen Yazın</span>
          </a>

          <a
            href="/iletisim"
            className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
          >
            Detaylı İletişim Bilgileri
          </a>
        </div>
      </div>
    </section>
  );
}
