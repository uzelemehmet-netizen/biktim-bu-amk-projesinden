import { Users, Globe, Camera, CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Yerel Rehber Avantajı",
      description:
        "Endonezya'da yaşıyor olmam sayesinde en güzel yerleri, en iyi fiyatları ve gizli cennetleri biliyorum. Turistik tuzaklardan kaçınarak size gerçek Endonezya deneyimi sunuyorum.",
      color: "bg-blue-600",
    },
    {
      icon: Globe,
      title: "Dil Avantajı",
      description:
        "Türkçe ve Endonezce konuşabildiğim için hem sizinle rahat iletişim kuruyor, hem de yerel halkla pazarlık yapıp en iyi fiyatları alıyorum. Tercüman masrafı yok!",
      color: "bg-green-600",
    },
    {
      icon: Camera,
      title: "Video Belgeleme",
      description:
        "Seyahatinizi profesyonel videolarla ölümsüzleştiriyorum. YouTube kanalımda paylaşabiliriz veya size özel bir anı videosu hazırlayabilirim.",
      color: "bg-orange-600",
    },
    {
      icon: CheckCircle,
      title: "Güvenilir Hizmet",
      description:
        "Türk vatandaşı olarak sizinle aynı kültürden geliyorum. Güvenilir, samimi ve profesyonel hizmet garantisi veriyorum. Mutlu müşteri referanslarım mevcut.",
      color: "bg-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Neden Beni Seyahat Rehberiniz Olarak Seçmelisiniz?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div
                  className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
