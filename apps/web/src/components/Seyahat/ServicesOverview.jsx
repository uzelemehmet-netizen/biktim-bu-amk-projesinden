import { MapPin, Hotel, Car, Utensils } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: MapPin,
      title: "Özel Turlar",
      description: "İsteklerinize özel hazırlanmış gezi rotaları",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600",
    },
    {
      icon: Hotel,
      title: "Konaklama",
      description: "En iyi fiyatlarla otel rezervasyonu",
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600",
    },
    {
      icon: Car,
      title: "Ulaşım",
      description: "Tüm seyahat boyunca özel araçla yolculuk hizmeti",
      gradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-600",
    },
    {
      icon: Utensils,
      title: "Yerel Lezzetler",
      description: "En iyi restoranlar ve sokak lezzetleri",
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Seyahat Hizmetlerimiz
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${service.gradient} rounded-2xl`}
              >
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
