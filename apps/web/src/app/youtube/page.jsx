import {
  MapPin,
  Youtube,
  Play,
  MessageCircle,
  Mail,
  Instagram,
  Eye,
  ThumbsUp,
  Calendar,
} from "lucide-react";

import { useEffect } from "react";
import { trackVisitor, trackTabClick } from "../../admin/trackVisitor";

export default function YoutubePage() {
  useEffect(() => {
    trackVisitor("youtube");
  }, []);
  const videos = [
    {
      id: 1,
      title: "Hayvanat Bahçesinde neler oldu?",
      thumbnail: "https://img.youtube.com/vi/OiUBcYcFv-c/maxresdefault.jpg",
      videoUrl: "https://youtu.be/OiUBcYcFv-c",
      views: "25K",
      likes: "1.8K",
      date: "1 hafta önce",
    },
    {
      id: 2,
      title: "Maymun Savaşının Ortasında Kaldık..",
      thumbnail: "https://img.youtube.com/vi/Jt3crcPmGUc/maxresdefault.jpg",
      videoUrl: "https://youtu.be/Jt3crcPmGUc",
      views: "18K",
      likes: "1.2K",
      date: "2 hafta önce",
    },
    {
      id: 3,
      title: "Haritada olmayan cennet..",
      thumbnail: "https://img.youtube.com/vi/5ICrq1qT6Gc/maxresdefault.jpg",
      videoUrl: "https://youtu.be/5ICrq1qT6Gc",
      views: "32K",
      likes: "2.5K",
      date: "3 hafta önce",
    },
    {
      id: 4,
      title: "Pangandaran sahili",
      thumbnail: "https://img.youtube.com/vi/FLCXfirhON4/maxresdefault.jpg",
      videoUrl: "https://youtu.be/FLCXfirhON4",
      views: "15K",
      likes: "980",
      date: "1 ay önce",
    },
    {
      id: 5,
      title: "Bandung'da Görülmemiş düğün",
      thumbnail: "https://img.youtube.com/vi/VZiBxoD3zLA/maxresdefault.jpg",
      videoUrl: "https://youtu.be/VZiBxoD3zLA",
      views: "22K",
      likes: "1.6K",
      date: "1 ay önce",
    },
    {
      id: 6,
      title: "Endonezya'da Yayla Turu",
      thumbnail: "https://img.youtube.com/vi/mE6NI9EhzZM/maxresdefault.jpg",
      videoUrl: "https://youtu.be/mE6NI9EhzZM",
      views: "28K",
      likes: "2.1K",
      date: "6 hafta önce",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
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
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-gray-600 hover:text-red-600 transition-colors px-4 py-2"
              >
                Ana Sayfa
              </a>
              <a
                href="/iletisim"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 relative">
        {/* YouTube Banner Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/da8140b0-d985-4c30-8f5f-21a143d5785c/-/format/auto/)",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Profile and username on the left */}
          <div className="flex items-center justify-start">
            {/* Profile Photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-4 border-white mr-4">
              <img
                src="https://ucarecdn.com/67370e7b-c3d8-422c-ab06-a3405c80d97b/-/format/auto/"
                alt="Endonezya Kaşifi - Profil Fotoğrafı"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Youtube className="w-6 h-6 text-red-400" />
              <span className="text-white text-lg drop-shadow-md">
                @Endonezyakasifi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Below Banner */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Endonezya'daki deneyimlerimizi, seyahat ipuçlarımızı ve evlilik
            süreçlerini vlog tarzında videolarla paylaşıyoruz. Kanalımıza abone
            olun ve hiçbir videoyu kaçırmayın!
          </p>
          <a
            href="https://www.youtube.com/@Endonezyakasifi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackTabClick("YouTube: Kanalımıza Abone Olun")}
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <Youtube className="w-6 h-6" />
            <span>Kanalımıza Abone Olun</span>
          </a>
        </div>
      </section>

      {/* Channel Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Video</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100K+</h3>
              <p className="text-gray-600">Toplam İzlenme</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5K+</h3>
              <p className="text-gray-600">Abone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            En Son Videolarımız
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={() => trackTabClick(`YouTube Video: ${video.title}`)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.views} görüntüleme</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{video.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@Endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTabClick("YouTube: Tüm Videoları İzleyin")}
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              <Youtube className="w-6 h-6" />
              <span>Tüm Videoları İzleyin</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Content Categories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Video İçeriklerimiz
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Seyahat Vlogları
              </h4>
              <p className="text-gray-600 mb-4">
                Endonezya'nın en güzel yerlerini keşfedin. Bali, Jakarta,
                Yogyakarta ve daha fazlası...
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gezi rotaları ve ipuçları</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Yerel deneyimler</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gizli cennetler</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Evlilik Süreçleri
              </h4>
              <p className="text-gray-600 mb-4">
                Endonezya'da evlilik sürecini adım adım anlatan videolar.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Yasal prosedürler</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gerekli belgeler</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gerçek deneyimler</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Kültür & Yaşam
              </h4>
              <p className="text-gray-600 mb-4">
                Endonezya'da yaşam, kültür ve günlük deneyimler.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Yerel yemekler</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kültürel etkinlikler</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Günlük yaşam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Neden Abone Olmalısınız?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Gerçek Deneyimler
              </h4>
              <p className="text-gray-600">
                Endonezya'da yaşayan bir Türk olarak, gerçek deneyimlerimi ve
                ipuçlarımı paylaşıyorum.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Düzenli İçerik
              </h4>
              <p className="text-gray-600">
                Her hafta yeni videolar yayınlıyorum. Endonezya hakkında her
                şeyi öğrenin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Kaliteli Prodüksiyon
              </h4>
              <p className="text-gray-600">
                Profesyonel ekipmanlarla çekilmiş, kaliteli ve izlemesi keyifli
                videolar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Etkileşim
              </h4>
              <p className="text-gray-600">
                Sorularınızı yanıtlıyorum ve isteklerinize göre içerik
                üretiyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Endonezya Macerasına Başlayın!
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            YouTube kanalımıza abone olun ve Endonezya'yı birlikte keşfedelim.
            Sorularınız için benimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@Endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTabClick("YouTube: Abone Ol (CTA)")}
              className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              <Youtube className="w-6 h-6" />
              <span>Abone Ol</span>
            </a>
            <a
              href="/iletisim"
              onClick={() => trackTabClick("YouTube: İletişime Geçin")}
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
            >
              İletişime Geçin
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
              href="https://www.youtube.com/@Endonezyakasifi"
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
