import { Header } from "../../components/Header/Header";
import { FileText } from "lucide-react";

export default function KullanimSartlariPage() {
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
              Kullanım Şartları
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              Son Güncellenme: 22 Kasım 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Hizmet Kapsamı
              </h2>
              <p>
                Endonezya Kaşifi, Endonezya'da yaşayan Türk rehber ve danışman
                olarak aşağıdaki hizmetleri sunmaktadır:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Seyahat rehberliği ve danışmanlığı</li>
                <li>Evlilik süreçleri danışmanlığı</li>
                <li>Endonezya hakkında bilgilendirme ve destek</li>
                <li>Kültürel ve pratik bilgi paylaşımı</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Hizmet Kullanımı
              </h2>
              <p>
                Web sitemizi ve hizmetlerimizi kullanarak aşağıdakileri kabul
                etmiş olursunuz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>18 yaş veya üzerinde olduğunuzu</li>
                <li>Verdiğiniz bilgilerin doğru ve güncel olduğunu</li>
                <li>Hizmetlerimizi yasal amaçlarla kullanacağınızı</li>
                <li>Bu kullanım şartlarına uyacağınızı</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Danışmanlık Hizmetleri
              </h2>
              <p>
                Sunduğumuz danışmanlık hizmetleri:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bilgilendirme ve rehberlik amaçlıdır</li>
                <li>Yasal danışmanlık yerine geçmez</li>
                <li>Kişisel deneyim ve bilgiye dayanır</li>
                <li>Sonuçları garanti etmez</li>
              </ul>
              <p className="mt-4">
                Resmi işlemler (vize, evlilik belgesi vb.) için yetkili mercilere
                başvurmanız gerekmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Ödeme ve İptal
              </h2>
              <p>
                Hizmet ücretleri ve ödeme koşulları:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmet bedelleri önceden belirtilir</li>
                <li>Ödemeler güvenli yöntemlerle alınır</li>
                <li>İptal koşulları hizmete göre değişebilir</li>
                <li>İade politikası hizmet başlamadan önce bildirilir</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Sorumluluk Reddi
              </h2>
              <p>
                Endonezya Kaşifi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verilen bilgilerin doğruluğu için azami çaba gösterir ancak değişen koşullar nedeniyle güncel olmayabilir</li>
                <li>Üçüncü taraf hizmet sağlayıcıların (oteller, havayolları vb.) davranışlarından sorumlu değildir</li>
                <li>Web sitesindeki teknik hatalar veya kesintilerden sorumlu tutulamaz</li>
                <li>Kullanıcıların kişisel kararlarından doğan sonuçlardan sorumlu değildir</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Fikri Mülkiyet
              </h2>
              <p>
                Web sitesindeki tüm içerik (metin, görsel, video, logo vb.)
                Endonezya Kaşifi'nin fikri mülkiyetidir. İzinsiz kullanımı,
                kopyalanması veya dağıtılması yasaktır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Yasaklanan Davranışlar
              </h2>
              <p>
                Hizmetlerimizi kullanırken aşağıdakiler yasaktır:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yanlış veya yanıltıcı bilgi vermek</li>
                <li>Başkasının kimliğine bürünmek</li>
                <li>Zararlı yazılım göndermek</li>
                <li>Sistemi manipüle etmeye çalışmak</li>
                <li>Diğer kullanıcılara zarar vermek</li>
                <li>Yasal olmayan faaliyetler için kullanmak</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Gizlilik
              </h2>
              <p>
                Kişisel verilerinizin işlenmesi{" "}
                <a href="/gizlilik-politikasi" className="text-orange-600 hover:text-orange-700 underline">
                  Gizlilik Politikamızda
                </a>{" "}
                detaylı olarak açıklanmıştır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Değişiklikler
              </h2>
              <p>
                Bu kullanım şartlarını herhangi bir zamanda değiştirme hakkını
                saklı tutarız. Değişiklikler bu sayfada yayınlanacak ve devam
                eden kullanımınız değişiklikleri kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Uygulanacak Hukuk
              </h2>
              <p>
                Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir.
                Uyuşmazlıklar Türkiye mahkemelerinde çözümlenecektir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. İletişim
              </h2>
              <p>
                Kullanım şartları hakkında sorularınız için:
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
                Bu kullanım şartlarını kabul ederek hizmetlerimizi kullanmaya
                devam edebilirsiniz. Kabul etmiyorsanız lütfen web sitemizi
                kullanmayı bırakın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
