import {
  X,
  Plane,
  Calendar,
  Users,
  DollarSign,
  Hotel,
  Send,
  Star,
  CheckCircle,
  MapPin, // Şehir ikonu için ekliyorum
  User, // Yaş ikonu için ekliyorum
} from "lucide-react";
import { trackTabClick } from "../../admin/trackVisitor";

export function TravelPlanningModal({
  isOpen,
  selectedTour,
  formData,
  isSubmitting,
  submitMessage,
  onClose,
  onInputChange,
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedTour
                  ? "Seçilen Paket için Plan Oluşturun"
                  : "Seyahat Planınızı Oluşturun"}
              </h2>
              <p className="text-gray-600">
                {selectedTour
                  ? `${selectedTour.name} - ${selectedTour.subtitle}`
                  : "Size özel seyahat planınızı belirleyin"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Selected Package Info */}
        {selectedTour && (
          <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${selectedTour.color} rounded-full flex items-center justify-center`}
              >
                <selectedTour.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Seçilen Paket: {selectedTour.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {selectedTour.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Süre:</span>{" "}
                    {selectedTour.duration}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Kapsam:</span>{" "}
                    {selectedTour.cities}
                  </div>
                </div>
                {selectedTour.highlights && (
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {selectedTour.highlights
                        .slice(0, 3)
                        .map((highlight, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {highlight}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Content */}
        <form onSubmit={onSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              📋 Kişisel Bilgiler
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="Adınız ve soyadınız"
                  value={formData.name}
                  onChange={onInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <User className="w-4 h-4 inline mr-1" />
                  Yaşınız *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="18"
                  max="99"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="25"
                  value={formData.age}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-posta Adresiniz *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="ornek@email.com"
                  value={formData.email}
                  onChange={onInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefon Numaranız *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="+90 5XX XXX XX XX"
                  value={formData.phone}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <MapPin className="w-4 h-4 inline mr-1" />
                Yaşadığınız Şehir *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="İstanbul"
                value={formData.city}
                onChange={onInputChange}
              />
            </div>
          </div>

          {/* Travel Package Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              📦 Tatil Paketi Seçimi
            </h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Hangi tatil paketini tercih ediyorsunuz? *
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    id: "ekonomik",
                    name: "Ekonomik Paket",
                    description: "Apart otel, temel hizmetler",
                    price: "$1,500-2,000",
                    color: "bg-green-50 border-green-200",
                  },
                  {
                    id: "standart",
                    name: "Standart Paket",
                    description: "4★ otel, konforlu deneyim",
                    price: "$2,000-3,500",
                    color: "bg-blue-50 border-blue-200",
                  },
                  {
                    id: "vip",
                    name: "VIP Paket",
                    description: "5★ otel/villa, lüks deneyim",
                    price: "$3,500+",
                    color: "bg-purple-50 border-purple-200",
                  },
                ].map((pkg) => (
                  <label
                    key={pkg.id}
                    className={`block p-4 border-2 rounded-lg cursor-pointer hover:shadow-md transition-all ${
                      formData.packageType === pkg.id
                        ? `${pkg.color} border-current`
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="packageType"
                      value={pkg.id}
                      required
                      className="sr-only"
                      checked={formData.packageType === pkg.id}
                      onChange={(e) => {
                        trackTabClick(`Form Paket Seçimi: ${pkg.name}`);
                        onInputChange(e);
                      }}
                    />
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 mb-1">
                        {pkg.name}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        {pkg.description}
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {pkg.price}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Travel Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              ✈️ Seyahat Detayları
            </h3>

            {/* Travel Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Tatil Başlangıç Tarihi *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  value={formData.startDate}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Tatil Bitiş Tarihi *
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  value={formData.endDate}
                  onChange={onInputChange}
                />
              </div>
            </div>

            {/* Travelers and Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="travelers"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <Users className="w-4 h-4 inline mr-1" />
                  Kaç Kişilik Tatil Planı? *
                </label>
                <select
                  id="travelers"
                  name="travelers"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  value={formData.travelers}
                  onChange={onInputChange}
                >
                  <option value="">Kişi sayısını seçiniz</option>
                  <option value="1">1 Kişi</option>
                  <option value="2">2 Kişi</option>
                  <option value="3">3 Kişi</option>
                  <option value="4">4 Kişi</option>
                  <option value="5">5 Kişi</option>
                  <option value="6">6 Kişi</option>
                  <option value="7">7 Kişi</option>
                  <option value="8">8 Kişi</option>
                  <option value="9+">9+ Kişi</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Bütçe Aralığınız (USD) *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  value={formData.budget}
                  onChange={onInputChange}
                >
                  <option value="">Bütçe aralığı seçiniz</option>
                  <option value="1500-2000">$1,500 - $2,000 (Ekonomik Paket)</option>
                  <option value="2000-3500">$2,000 - $3,500 (Standart Paket)</option>
                  <option value="3500+">$3,500+ (VIP Paket)</option>
                  <option value="flexible">Esnek (Önerinize Açığım)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Tercih Ettiğiniz Destinasyon *
              </label>
              <select
                id="destination"
                name="destination"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                value={formData.destination}
                onChange={onInputChange}
              >
                <option value="">Destinasyon seçiniz</option>
                <option value="Bali">Bali</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="Lombok">Lombok</option>
                <option value="Bandung">Bandung</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Komodo">Komodo Adaları</option>
                <option value="Multiple">Çoklu Şehir Turu</option>
                <option value="Recommendation">
                  Size Uygun Öneri Bekliyorum
                </option>
              </select>
            </div>
          </div>

          {/* Accommodation Preference */}
          <div>
            <label
              htmlFor="accommodation"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              <Hotel className="w-4 h-4 inline mr-1" />
              Konaklama Tercihi
            </label>
            <select
              id="accommodation"
              name="accommodation"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              value={formData.accommodation}
              onChange={onInputChange}
            >
              <option value="">Konaklama tercihi seçiniz</option>
              <option value="apart-otel">Apart Otel (Ekonomik)</option>
              <option value="3-star">3★ Otel</option>
              <option value="4-star">4★ Otel (Standart)</option>
              <option value="5-star">5★ Otel (VIP)</option>
              <option value="boutique">Butik Otel</option>
              <option value="resort">Resort</option>
              <option value="villa">Özel Villa (VIP)</option>
            </select>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              İlgi Alanlarınız (Birden fazla seçebilirsiniz)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Doğa ve Manzara",
                "Kültür ve Tarih",
                "Spa ve Wellness",
                "Macera ve Aktivite",
                "Yemek ve İçecek",
                "Alışveriş",
                "Plaj ve Deniz",
                "Fotoğrafçılık",
                "Geleneksel Köyler",
              ].map((interest) => (
                <label
                  key={interest}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={onInputChange}
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              💭 Ek Bilgiler
            </h3>

            <div>
              <label
                htmlFor="specialRequests"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Özel İstekler ve Notlarınız
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Özel istekleriniz, sağlık durumu, diyet kısıtlamaları, özel günler (balayı, doğum günü vb.) veya merak ettikleriniz..."
                value={formData.specialRequests}
                onChange={onInputChange}
              />
            </div>
          </div>

          {/* Pricing Note */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-start space-x-3">
              <DollarSign className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  💰 Fiyatlandırma Bilgisi
                </h4>
                <p className="text-sm text-gray-700">
                  Tüm paketlerimiz <strong>dolar bazında</strong>{" "}
                  fiyatlandırılmakta ve sizin form bilgilerinize göre
                  kişiselleştirilmektedir. Seçtiğiniz pakete uygun, detaylı
                  fiyat teklifi 24 saat içinde size iletilecektir.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Message */}
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

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => !isSubmitting && trackTabClick("Seyahat Formu Gönderildi")}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              } text-white`}
            >
              <Send className="w-5 h-5" />
              <span>
                {isSubmitting
                  ? "Gönderiliyor..."
                  : "🚀 Seyahat Talebimi Gönder"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
