import {
  Clock,
  Star,
  CheckCircle,
  MessageCircle,
  DollarSign,
  Users,
  Award,
  Car, // Yeni ikon ekliyoruz
  MapPin, // Yeni ikon ekliyoruz
  Utensils, // Yeni ikon ekliyoruz
} from "lucide-react";
import { trackTabClick } from "../../admin/trackVisitor";

export function TourPackages({ onTourSelect }) {
  const packageTypes = [
    {
      id: "ekonomik",
      name: "Ekonomik Paket",
      subtitle: "Bütçe Dostu Keşif",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      description:
        "Endonezya'yı ekonomik bir şekilde keşfetmek isteyenler için ideal paket",
      duration: "6 Gece / 5 Gün",
      cities: "1 Lokasyon",
      features: [
        "Apart Otel Konaklaması",
        "Özel Araçla Seyahat",
        "Gezi Programları",
        "3 Öğün Yemek (Kahvaltı, Öğle, Akşam)",
        "Havalimanı Transfer",
        "Rehberlik Hizmeti",
      ],
      highlights: [
        "Apart otel konaklaması",
        "Özel araç ile ulaşım",
        "Tam pansiyon yemek",
        "Organize gezi programları",
      ],
      details: [
        { icon: Car, label: "Özel Araç", value: "Tam Zamanlı" },
        { icon: MapPin, label: "Lokasyon", value: "1 Şehir" },
        { icon: Utensils, label: "Yemek", value: "3 Öğün" },
        { icon: Clock, label: "Süre", value: "6 Gece 5 Gün" },
      ],
    },
    {
      id: "standart",
      name: "Standart Paket",
      subtitle: "Konforlu Deneyim",
      icon: Star,
      color: "from-blue-500 to-indigo-600",
      description: "Konfor ve deneyimi bir arada sunan dengeli paket",
      duration: "10 Gece / 9 Gün",
      cities: "2 Farklı Tatil Lokasyonu",
      features: [
        "4★ Otel Konaklaması",
        "Özel Araçla Seyahat",
        "Gezi ve Aktiviteler",
        "3 Öğün Yemek (Öğle Yemeği Opsiyonel)",
        "Şehirler Arası Ulaşım",
        "Profesyonel Rehberlik Hizmeti",
        "Havalimanı Transfer",
      ],
      highlights: [
        "Konforlu 4★ otel konaklaması",
        "2 farklı lokasyon deneyimi",
        "Esnek yemek seçenekleri",
        "Çeşitli aktivite programları",
      ],
      details: [
        { icon: Car, label: "Özel Araç", value: "Tam Zamanlı" },
        { icon: MapPin, label: "Lokasyon", value: "2 Farklı Şehir" },
        { icon: Utensils, label: "Yemek", value: "3 Öğün (Esnek)" },
        { icon: Clock, label: "Süre", value: "10 Gece 9 Gün" },
      ],
    },
    {
      id: "vip",
      name: "VIP Paket",
      subtitle: "Lüks ve Özel Deneyim",
      icon: Award,
      color: "from-purple-500 to-pink-600",
      description: "En lüks ve kişiselleştirilmiş Endonezya deneyimi",
      duration: "15 Gece / 14 Gün",
      cities: "3 Farklı Lokasyon",
      features: [
        "5★ Otel veya Özel Villa Konaklaması",
        "Özel Araçla Seyahat",
        "Türkçe Bilen Özel Asistan",
        "Özel Fotoğraf ve Video Çekimleri",
        "Tüm Öğünler Opsiyonel",
        "Şehirler Arası Ulaşım",
        "Profesyonel Rehberlik Hizmeti",
        "Havalimanı Transfer",
      ],
      highlights: [
        "5★ otel veya özel villa seçenekleri",
        "24/7 Türkçe konuşan asistan",
        "Profesyonel fotoğraf ve video çekimleri",
        "Tüm öğünlerde esneklik",
      ],
      details: [
        { icon: Car, label: "Özel Araç", value: "Tam Zamanlı" },
        { icon: MapPin, label: "Lokasyon", value: "3 Farklı Şehir" },
        { icon: Utensils, label: "Yemek", value: "Opsiyonel" },
        { icon: Clock, label: "Süre", value: "15 Gece 14 Gün" },
      ],
    },
  ];

  return (
    <section id="tur-paketleri" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Seyahat Paket Seçenekleri
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          İhtiyaçlarınıza uygun paket seçin. Her paket kişiselleştirilebilir. Detaylar için formu doldurunuz.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packageTypes.map((packageType) => {
            const IconComponent = packageType.icon;
            return (
              <div
                key={packageType.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div
                  className={`h-4 bg-gradient-to-r ${packageType.color}`}
                ></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${packageType.color} rounded-full flex items-center justify-center mr-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {packageType.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {packageType.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">
                    {packageType.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {packageType.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {packageType.cities}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Paket Özellikleri:
                    </h4>
                    <ul className="space-y-1">
                      {packageType.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start space-x-2"
                        >
                          <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Dahil Olanlar:
                    </h4>
                    <ul className="space-y-1 max-h-32 overflow-y-auto">
                      {packageType.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start space-x-2"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>



                  <button
                    onClick={() => {
                      trackTabClick(`Tur Paketi: ${packageType.name}`);
                      onTourSelect({
                        ...packageType,
                        name: packageType.name,
                        id: packageType.id,
                      });
                    }}
                    className={`w-full bg-gradient-to-r ${packageType.color} text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all text-center font-semibold shadow-md`}
                  >
                    Bu Paketi Seç
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Kişiselleştirilmiş Fiyatlandırma
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Her paket, seyahat tarihlerinize, grup büyüklüğünüze ve özel isteklerinize göre kişiselleştirilir. Formunuzu doldurun, size en uygun teklifi hazırlayalım.
            </p>
            <button
              onClick={() => {
                trackTabClick("Özel Teklif İsteyin");
                onTourSelect(null);
              }}
              className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Özel Teklif İsteyin</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
