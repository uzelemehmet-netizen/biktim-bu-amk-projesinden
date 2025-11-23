import {
  MapPin,
  Heart,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  MessageCircle,
  Mail,
  Youtube,
  Instagram,
  Clock,
  Shield,
  Award,
  Download,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { trackVisitor, trackTabClick } from "../../admin/trackVisitor";

export default function EvlilikPage() {
  useEffect(() => {
    trackVisitor("evlilik");
  }, []);
  const [activeTab, setActiveTab] = useState("turk");

  const steps = [
    {
      id: 1,
      title: "İlk Görüşme",
      description: "Süreç hakkında detaylı bilgilendirme",
      icon: MessageCircle,
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Belge Hazırlığı",
      description: "Gerekli evrakların toplanması",
      icon: FileText,
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Resmi İşlemler",
      description: "Yasal prosedürlerin takibi",
      icon: Shield,
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Nikah Töreni",
      description: "Özel gününüzün organizasyonu",
      icon: Heart,
      color: "bg-red-600",
    },
  ];

  const services = [
    {
      title: "Danışmanlık",
      description: "Endonezya evlilik kanunları hakkında detaylı bilgilendirme",
      features: [
        "Gerekli belgeler listesi",
        "Yasal prosedürler rehberliği",
        "Süreç takibi",
      ],
    },
    {
      title: "Belge İşlemleri",
      description: "Tüm evrak işlemlerinde profesyonel destek",
      features: [
        "Belge çevirisi",
        "Resmi kurum başvuruları",
        "Takip ve koordinasyon",
      ],
    },
    {
      title: "Organizasyon Desteği",
      description: "Nikah töreninizin mükemmel organizasyonu",
      features: [
        "Mekan seçimi",
        "Fotoğraf ve video çekimi",
        "Özel araçla ulaşım desteği",
        "Özel anılar",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sari & Mehmet",
      text: "Endonezya Kaşifi sayesinde evlilik sürecimiz çok kolay geçti. Her adımda yanımızdaydı.",
      date: "Ocak 2024",
    },
    {
      name: "Dewi & Ali",
      text: "Profesyonel yaklaşımı ve samimi desteği için çok teşekkür ederiz. Harika bir deneyimdi.",
      date: "Mart 2024",
    },
    {
      name: "Indira & Emre",
      text: "Tüm süreç boyunca güvenilir rehberlik aldık. Kesinlikle tavsiye ediyoruz.",
      date: "Mayıs 2024",
    },
  ];

  const documentCategories = {
    turk: {
      title: "Türk Vatandaşı İçin Gerekli Belgeler",
      icon: "🇹🇷",
      documents: [
        {
          name: "Nüfus Cüzdanı",
          description: "Türkiye'den getirilecek asıl nüfus cüzdanı",
          required: true,
          apostil: false,
          translation: true,
        },
        {
          name: "Pasaport",
          description: "En az 6 ay geçerli pasaport",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Bekarlık Belgesi",
          description: "Türkiye'den alınacak ve apostilli olması gerekir",
          required: true,
          apostil: true,
          translation: true,
        },
        {
          name: "Sağlık Raporu",
          description: "Endonezya'da alınacak genel sağlık raporu",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Pasaport Fotoğrafları",
          description: "4x6 boyutunda renkli fotoğraflar (6 adet)",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Mali Durum Belgesi",
          description: "Gelir durumunu gösteren belge (opsiyonel)",
          required: false,
          apostil: true,
          translation: true,
        },
      ],
    },
    indonezya: {
      title: "Endonezya Vatandaşı İçin Gerekli Belgeler",
      icon: "🇮🇩",
      documents: [
        {
          name: "KTP (Kartu Tanda Penduduk)",
          description: "Geçerli Endonezya kimlik kartı",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Kartu Keluarga",
          description: "Aile kartı - güncel olmalı",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Akta Kelahiran",
          description: "Doğum belgesi asıl nüshası",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Surat Keterangan Belum Menikah",
          description: "Kelurahan'dan alınacak bekar belgesi",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Surat Keterangan Sehat",
          description: "Puskesmas veya hastaneden sağlık raporu",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Pas Foto",
          description: "4x6 boyutunda renkli fotoğraflar (6 adet)",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Izin Orang Tua",
          description: "21 yaş altı için ebeveyn izni (gerekiyorsa)",
          required: false,
          apostil: false,
          translation: false,
        },
      ],
    },
    prosedur: {
      title: "Prosedür ve İşlem Adımları",
      icon: "📋",
      documents: [
        {
          name: "Belge Çevirisi",
          description:
            "Türkçe belgeler resmi çevirmen tarafından Endonezce'ye çevrilmeli",
          required: true,
          apostil: false,
          translation: true,
        },
        {
          name: "Apostil İşlemi",
          description: "Türkiye'deki belgeler apostil edilmeli",
          required: true,
          apostil: true,
          translation: false,
        },
        {
          name: "Kantor Urusan Agama Başvurusu",
          description: "KUA'ya resmi nikah başvurusu yapılması",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Dinas Kependudukan Başvurusu",
          description: "Resmi evlilik kaydı için başvuru",
          required: true,
          apostil: false,
          translation: false,
        },
        {
          name: "Konsolosluk Bildirimi",
          description: "Türk Konsolosluğu'na evlilik bildirimi",
          required: true,
          apostil: false,
          translation: false,
        },
      ],
    },
  };

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
                href="/youtube"
                className="text-gray-600 hover:text-red-600 transition-colors px-4 py-2"
              >
                YouTube
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Endonezya'da
            <span className="text-red-600"> Evlilik</span>
            <br />
            Süreç Danışmanlığı
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Endonezya'da evlilik sürecinizi baştan sona profesyonel rehberlik
            ile tamamlayın. Yasal işlemlerden nikah törenine kadar her adımda
            yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#surecler"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              Süreci Keşfedin
            </a>
            <a
              href="#iletisim"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
            >
              Ücretsiz Danışmanlık
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Neden Bizi Seçmelisiniz?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Deneyimli Rehberlik
              </h4>
              <p className="text-gray-600">
                Endonezya'da yaşayan bir Türk olarak, evlilik süreçlerinde uzman
                rehberlik sunuyorum.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Güvenilir Hizmet
              </h4>
              <p className="text-gray-600">
                Tüm yasal prosedürlerde güvenilir ve profesyonel destek
                sağlıyorum.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                7/24 Destek
              </h4>
              <p className="text-gray-600">
                Süreç boyunca her an ulaşabileceğiniz destek hizmeti sunuyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section
        id="surecler"
        className="py-20 bg-gradient-to-br from-blue-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Evlilik Süreci Adımları
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                    {step.id}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Detaylı Hizmetlerimiz
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Endonezya'da Evlilik İçin Gerekli Belgeler
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Evlilik süreciniz için ihtiyacınız olan tüm belgeler detaylı olarak
            aşağıda listelenmiştir. Her kategori için gerekli işlemleri de
            belirtmiş bulunmaktayım.
          </p>

          {/* Document Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {Object.keys(documentCategories).map((key) => (
              <button
                key={key}
                onClick={() => {
                  const tabName = key === "turk" ? "Türk Vatandaşı" : key === "indonezya" ? "Endonezya Vatandaşı" : "Prosedürler";
                  trackTabClick(`Evlilik Doküman: ${tabName}`);
                  setActiveTab(key);
                }}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{documentCategories[key].icon}</span>
                {key === "turk"
                  ? "Türk Vatandaşı"
                  : key === "indonezya"
                    ? "Endonezya Vatandaşı"
                    : "Prosedürler"}
              </button>
            ))}
          </div>

          {/* Document Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <span className="mr-3 text-3xl">
                {documentCategories[activeTab].icon}
              </span>
              {documentCategories[activeTab].title}
            </h4>

            <div className="grid gap-6">
              {documentCategories[activeTab].documents.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 mt-1 ${
                          doc.required ? "bg-red-500" : "bg-yellow-500"
                        }`}
                      ></div>
                      <h5 className="text-lg font-bold text-gray-900">
                        {doc.name}
                        {doc.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </h5>
                    </div>
                    <div className="flex space-x-2">
                      {doc.apostil && (
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                          Apostil
                        </span>
                      )}
                      {doc.translation && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          Çeviri
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600">{doc.description}</p>
                  {!doc.required && (
                    <p className="text-sm text-yellow-600 mt-2 italic">
                      * Opsiyonel - Duruma göre gerekli olabilir
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Important Notes */}
            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h6 className="font-bold text-yellow-800 mb-2">
                    Önemli Notlar:
                  </h6>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Tüm belgeler 6 aydan yeni olmalıdır</li>
                    <li>• Apostil işlemi Türkiye'de yapılmalıdır</li>
                    <li>
                      • Çeviri işlemleri Endonezya'da resmi çevirmen tarafından
                      yapılabilir
                    </li>
                    <li>
                      • Belge listesi değişiklik gösterebilir, güncel bilgi için
                      benimle iletişime geçin
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download Guide Button */}
            <div className="text-center mt-8">
              <a
                href="#iletisim"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Download className="w-5 h-5" />
                <span>Detaylı Rehber İsteyin</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mutlu Çiftlerimizden
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sık Sorulan Sorular
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Evlilik süreci ne kadar sürer?
              </h4>
              <p className="text-gray-600">
                Belgelerinizin hazır olması durumunda, ortalama 2-4 hafta içinde
                tüm işlemler tamamlanabilir.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Hangi şehirlerde hizmet veriyorsunuz?
              </h4>
              <p className="text-gray-600">
                Jakarta, Bali, Bandung, Yogyakarta ve tüm Endonezya genelinde
                hizmet vermekteyim.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Nikah töreni organizasyonu da yapıyor musunuz?
              </h4>
              <p className="text-gray-600">
                Evet, nikah töreninizin organizasyonundan fotoğraf çekimine
                kadar tüm detayları organize ediyorum.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Hizmet ücretleriniz nedir?
              </h4>
              <p className="text-gray-600">
                Hizmet paketlerimiz ihtiyaçlarınıza göre değişiklik
                göstermektedir. Detaylı bilgi için benimle iletişime geçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Hayalinizdeki Evliliğe Başlayın!
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Endonezya'da evlilik sürecinizi profesyonel rehberlik ile
            tamamlayın. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp ile İletişim</span>
            </a>
            <a
              href="mailto:info@endonezyakasifi.com"
              className="inline-flex items-center justify-center space-x-2 border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold"
            >
              <Mail className="w-6 h-6" />
              <span>Email Gönder</span>
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
              href="/youtube"
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
