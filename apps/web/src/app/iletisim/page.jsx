import {
  MapPin,
  MessageCircle,
  Mail,
  Youtube,
  Instagram,
  Phone,
  Clock,
  Send,
} from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../utils/emailConfig';
import { trackTabClick } from "../../admin/trackVisitor";

// EmailJS'i başlat
emailjs.init(emailConfig.publicKey);

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage("");

    try {
      // EmailJS ile email gönder
      const templateParams = {
        to_email: "uzelemehmet@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "Belirtilmemiş",
        service_type: formData.service || "Belirtilmemiş",
        message: formData.message,
        send_date: new Date().toLocaleString("tr-TR", { timeZone: "Asia/Jakarta" }),
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateIds.contact,
        templateParams,
        emailConfig.publicKey
      );

      // İstatistik takibi
      trackTabClick("İletişim Formu Gönderildi");
      setSubmitMessage("Mesajınız başarıyla gönderildi!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setSubmitMessage(
        error.message ||
          "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      );
    } finally {
      setIsLoading(false);
    }
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bizimle
            <span className="text-red-600"> İletişime</span> Geçin
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Endonezya'daki tatil planlarınız veya evlilik süreçleriniz için
            benimle iletişime geçin. Size en iyi hizmeti sunmak için buradayım.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            İletişim Kanalları
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://wa.me/+905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                WhatsApp
              </h4>
              <p className="text-gray-600 text-center text-sm">
                Hızlı iletişim için
              </p>
            </a>

            <a
              href="mailto:uzelemehmet@gmail.com"
              className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                Gmail
              </h4>
              <p className="text-gray-600 text-center text-sm">
                uzelemehmet@gmail.com
              </p>
            </a>

            <a
              href="https://youtube.com/@endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                YouTube
              </h4>
              <p className="text-gray-600 text-center text-sm">
                Vlog videolarımı izleyin
              </p>
            </a>

            <a
              href="https://www.instagram.com/endonezyakasifi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors group"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">
                Instagram
              </h4>
              <p className="text-gray-600 text-center text-sm">
                Güncel paylaşımlarım
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  İletişim Bilgileri
                </h3>
                <p className="text-gray-600 mb-8">
                  Endonezya'da yaşayan bir Türk olarak, tüm sorularınızı
                  yanıtlamak ve size en iyi hizmeti sunmak için buradayım.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      E-posta
                    </h4>
                    <p className="text-gray-600">uzelemehmet@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600">+90 555 034 38 52</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Çalışma Saatleri
                    </h4>
                    <p className="text-gray-600">
                      Pazartesi - Pazar: 08:00 - 22:00
                    </p>
                    <p className="text-gray-500 text-sm">
                      (Endonezya Saati - WIB)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Hizmet Alanları
                    </h4>
                    <p className="text-gray-600">Tüm Endonezya geneli</p>
                    <p className="text-gray-500 text-sm">
                      17.000+ ada ve 34 eyalet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mesaj Gönderin
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="+90 5XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Seçiniz</option>
                    <option value="tatil">Tatil & Seyahat Rehberliği</option>
                    <option value="evlilik">Evlilik Süreç Danışmanlığı</option>
                    <option value="video">Video İçerik Üretimi</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg text-center font-semibold ${
                      submitMessage.includes("başarıyla")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <div className="text-sm text-gray-600 text-center">
                  Formu göndererek{" "}
                  <a
                    href="/gizlilik-politikasi"
                    className="text-orange-600 hover:text-orange-700 underline"
                    target="_blank"
                  >
                    Gizlilik Politikasını
                  </a>{" "}
                  ve{" "}
                  <a
                    href="/kullanim-sartlari"
                    className="text-orange-600 hover:text-orange-700 underline"
                    target="_blank"
                  >
                    Kullanım Şartlarını
                  </a>{" "}
                  kabul etmiş olursunuz.
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={() => !isLoading && trackTabClick("İletişim Formu Gönderildi")}
                  className={`w-full px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isLoading ? "Gönderiliyor..." : "Mesajı Gönder"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Hızlı Erişim
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#hizmetler"
              className="px-6 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
            >
              Hizmetlerimiz
            </a>
            <a
              href="https://wa.me/+905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-semibold"
            >
              WhatsApp ile İletişim
            </a>
            <a
              href="https://youtube.com/@endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-semibold"
            >
              YouTube Kanalı
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
              href="https://wa.me/+905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="mailto:uzelemehmet@gmail.com"
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
              href="https://www.instagram.com/endonezyakasifi/"
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
