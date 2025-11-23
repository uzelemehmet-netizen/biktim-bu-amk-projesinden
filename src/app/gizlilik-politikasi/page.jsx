import { Header } from "../../components/Header/Header";
import { FileText } from "lucide-react";

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gizlilik Politikası
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              Son Güncellenme: 22 Kasım 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Giriş
              </h2>
              <p>
                Endonezya Kaşifi olarak, gizliliğinize saygı duyuyoruz ve kişisel
                verilerinizi korumayı taahhüt ediyoruz. Bu gizlilik politikası,
                web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda
                kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve
                koruduğumuzu açıklar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Topladığımız Bilgiler
              </h2>
              <p>
                Web sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ad ve soyadınız</li>
                <li>E-posta adresiniz</li>
                <li>Telefon numaranız</li>
                <li>Mesajlaşma ve iletişim içeriği</li>
                <li>Hizmet taleplerinizdeki bilgiler (seyahat planları, evlilik danışmanlığı vb.)</li>
                <li>IP adresi ve tarayıcı bilgileri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Bilgileri Nasıl Kullanıyoruz
              </h2>
              <p>
                Topladığımız bilgileri şu amaçlarla kullanırız:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmet taleplerinize yanıt vermek</li>
                <li>Seyahat ve evlilik danışmanlığı hizmetleri sağlamak</li>
                <li>İletişim kurmak ve bilgi paylaşmak</li>
                <li>Web sitemizi ve hizmetlerimizi geliştirmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Bilgi Paylaşımı
              </h2>
              <p>
                Kişisel bilgilerinizi üçüncü taraflarla paylaşmıyoruz. Ancak
                aşağıdaki durumlarda bilgi paylaşımı gerekebilir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yasal zorunluluklar (mahkeme kararı, resmi talep vb.)</li>
                <li>Hizmet sağlayıcılar (EmailJS gibi e-posta servisleri)</li>
                <li>Açık izniniz dahilinde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Çerezler (Cookies)
              </h2>
              <p>
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler
                kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı
                bırakabilirsiniz, ancak bu bazı özelliklerin çalışmamasına neden
                olabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Veri Güvenliği
              </h2>
              <p>
                Kişisel bilgilerinizi korumak için endüstri standardı güvenlik
                önlemleri kullanıyoruz. HTTPS şifrelemesi, güvenli sunucular ve
                düzenli güvenlik güncellemeleri ile verilerinizi koruyoruz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Haklarınız
              </h2>
              <p>
                KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki
                haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin düzeltilmesini isteme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğması halinde itiraz etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Çocukların Gizliliği
              </h2>
              <p>
                Hizmetlerimiz 18 yaş ve üzeri kişilere yöneliktir. 18 yaşından
                küçük kişilerden bilerek kişisel bilgi toplamıyoruz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Değişiklikler
              </h2>
              <p>
                Bu gizlilik politikasını zaman zaman güncelleyebiliriz.
                Değişiklikler bu sayfada yayınlanacaktır. Düzenli olarak kontrol
                etmenizi öneririz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. İletişim
              </h2>
              <p>
                Gizlilik politikamız hakkında sorularınız varsa veya haklarınızı
                kullanmak istiyorsanız bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-orange-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-gray-900">Endonezya Kaşifi</p>
                <p className="text-gray-700 mt-2">
                  E-posta: uzelemehmet@gmail.com
                </p>
                <p className="text-gray-700">
                  Web: endonezyakasifi.com
                </p>
              </div>
            </section>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-sm text-gray-500 text-center">
                Bu gizlilik politikası Türkiye Cumhuriyeti Kişisel Verilerin
                Korunması Kanunu (KVKK) ve ilgili mevzuata uygun olarak
                hazırlanmıştır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
