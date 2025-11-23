import {
  Sun,
  Building,
  Mountain,
  Waves,
  TreePine,
  Globe,
  Star,
} from "lucide-react";

export function PopularDestinations() {
  const destinations = [
    { name: "Bali", icon: Sun, description: "Tropik cennet ve kültür" },
    {
      name: "Jakarta",
      icon: Building,
      description: "Modern şehir ve alışveriş",
    },
    { name: "Yogyakarta", icon: Mountain, description: "Tarihi tapınaklar" },
    { name: "Lombok", icon: Waves, description: "El değmemiş doğa" },
    {
      name: "Bandung",
      icon: TreePine,
      description: "Dağ şehri ve fabrika outlet",
    },
    { name: "Surabaya", icon: Globe, description: "Ticaret ve kültür merkezi" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Popüler Destinasyonlar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => {
            const IconComponent = destination.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Çok Popüler</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
