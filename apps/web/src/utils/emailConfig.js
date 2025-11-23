// EmailJS Yapılandırması
// https://emailjs.com adresinden hesap oluşturduktan sonra:
// 1. Service ID'nizi alın (Gmail bağlantısı)
// 2. Template ID'lerinizi oluşturun
// 3. Public Key'inizi alın

export const emailConfig = {
  serviceId: 'service_nymo6z4',
  templateIds: {
    travelPlanning: 'template_7qzw3t6', // Seyahat Talebi template'i
    contact: 'template_rsmu1gk', // İletişim Mesajı template'i
  },
  publicKey: 'RD9IcpOFrg9qQ4QdV',
};

// EmailJS Template Örnekleri:
// 
// Seyahat Formu Template:
// Konu: Yeni Seyahat Planı Talebi - {{package_name}}
// İçerik:
// Ad Soyad: {{name}}
// Email: {{email}}
// Telefon: {{phone}}
// Paket: {{package_name}}
// Kalkış Tarihi: {{departure_date}}
// Dönüş Tarihi: {{return_date}}
// Kişi Sayısı: {{travelers}}
// Ek Notlar: {{notes}}
//
// İletişim Formu Template:
// Konu: Yeni İletişim Formu Mesajı
// İçerik:
// Ad Soyad: {{name}}
// Email: {{email}}
// Telefon: {{phone}}
// Mesaj: {{message}}
