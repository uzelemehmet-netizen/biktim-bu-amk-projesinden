# EmailJS Kurulum Rehberi

EmailJS entegrasyonu tamamlandı! Artık backend sunucusuna ihtiyacınız yok. Formlarınız doğrudan tarayıcıdan güvenli bir şekilde email gönderebilir.

## 🎯 Avantajları

✅ **Deployment Kolaylığı**: Sadece web sitesini yayınlamanız yeterli, ayrı email sunucusu gerekmez
✅ **Google Ads Uyumlu**: %100 politika uyumlu, güvenlik uyarısı almayacaksınız
✅ **Güvenli**: HTTPS şifrelemeli, profesyonel SaaS platformu
✅ **Ücretsiz**: Ayda 200 email ücretsiz (siteniz için yeterli)
✅ **Kolay Yönetim**: Template'leri görsel arayüzden düzenleyin

## 📝 Adım Adım Kurulum

### 1️⃣ EmailJS Hesabı Oluşturun

1. https://emailjs.com adresine gidin
2. "Sign Up" butonuna tıklayın
3. Email ve şifre ile kaydolun (ücretsiz)

### 2️⃣ Email Servisini Bağlayın

1. Dashboard'da "Email Services" bölümüne gidin
2. "Add New Service" butonuna tıklayın
3. **Gmail** seçin
4. Gmail hesabınızla giriş yapın (uzelemehmet@gmail.com)
5. İzinleri onaylayın
6. Service ID'yi kopyalayın (örnek: `service_abc123`)

### 3️⃣ Email Template'lerini Oluşturun

**ÖNEMLİ:** 2 ayrı template oluşturmanız gerekiyor:
- **Template 1:** Seyahat paketleri için "Plan Oluşturun" formu
- **Template 2:** İletişim sayfasındaki "Mesaj Gönderin" formu

#### A) Seyahat Formu Template'i (Tur Paketleri İçin)

Bu template, kullanıcılar seyahat paketlerinden birini seçip form doldurduğunda kullanılır.

1. Dashboard'da "Email Templates" bölümüne gidin
2. "Create New Template" tıklayın
3. Template Name: `Seyahat Talebi`
4. **Subject (Konu)**: 
   ```
   🎯 Yeni Seyahat Planı - {{package_type}} - {{from_name}}
   ```

5. **Content (İçerik)**: Aşağıdaki template'i kopyalayın
   ```html
   <h2>🎯 YENİ SEYAHAT TALEBI</h2>
   
   <h3>👤 KİŞİSEL BİLGİLER</h3>
   <ul>
     <li><strong>Ad Soyad:</strong> {{from_name}}</li>
     <li><strong>Email:</strong> {{from_email}}</li>
     <li><strong>Telefon:</strong> {{from_phone}}</li>
     <li><strong>Yaş:</strong> {{age}}</li>
     <li><strong>Şehir:</strong> {{city}}</li>
   </ul>
   
   <h3>📦 PAKET BİLGİLERİ</h3>
   <ul>
     <li><strong>Seçilen Paket:</strong> {{package_type}}</li>
     <li><strong>Destinasyon:</strong> {{destination}}</li>
   </ul>
   
   <h3>✈️ SEYAHAT DETAYLARI</h3>
   <ul>
     <li><strong>Başlangıç Tarihi:</strong> {{start_date}}</li>
     <li><strong>Bitiş Tarihi:</strong> {{end_date}}</li>
     <li><strong>Kişi Sayısı:</strong> {{travelers}}</li>
     <li><strong>Bütçe:</strong> {{budget}}</li>
     <li><strong>Konaklama:</strong> {{accommodation}}</li>
   </ul>
   
   <h3>🎨 İLGİ ALANLARI</h3>
   <p>{{interests}}</p>
   
   <h3>💭 ÖZEL İSTEKLER</h3>
   <p>{{special_requests}}</p>
   
   <hr>
   <p><small>Gönderim Tarihi: {{send_date}}</small></p>
   ```

6. "To Email" alanına: `{{to_email}}`
7. Template ID'yi kopyalayın (örnek: `template_xyz456`)
8. "Save" butonuna tıklayın

---

#### B) İletişim Formu Template'i (Mesaj Gönderin Formu İçin)

Bu template, kullanıcılar "İletişim" sayfasındaki "Mesaj Gönderin" formunu doldurduğunda kullanılır.

1. Yeni bir template daha oluşturun
2. Template Name: `İletişim Mesajı`
3. **Subject (Konu)**:
   ```
   📧 Yeni İletişim Mesajı - {{from_name}}
   ```

4. **Content (İçerik)**:
   ```html
   <h2>📧 YENİ İLETİŞİM MESAJI</h2>
   
   <h3>GÖNDEREN BİLGİLERİ</h3>
   <ul>
     <li><strong>Ad Soyad:</strong> {{from_name}}</li>
     <li><strong>Email:</strong> {{from_email}}</li>
     <li><strong>Telefon:</strong> {{from_phone}}</li>
     <li><strong>Hizmet Türü:</strong> {{service_type}}</li>
   </ul>
   
   <h3>MESAJ</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><small>Gönderim Tarihi: {{send_date}}</small></p>
   ```

5. "To Email" alanına: `{{to_email}}`
6. Template ID'yi kopyalayın (örnek: `template_def789`)
7. "Save" butonuna tıklayın

### 4️⃣ Public Key'i Alın

1. Dashboard'da "Account" → "General" bölümüne gidin
2. "Public Key" bölümünü bulun
3. Public Key'i kopyalayın (örnek: `aBcDeFgHiJkLmNoPq`)

### 5️⃣ Yapılandırma Dosyasını Güncelleyin

`src/utils/emailConfig.js` dosyasını açın ve aldığınız bilgileri girin:

```javascript
export const emailConfig = {
  serviceId: 'service_abc123',  // Adım 2'de aldığınız Service ID
  templateIds: {
    travelPlanning: 'template_xyz456',  // Adım 3A'da aldığınız Seyahat Template ID
    contact: 'template_def789',          // Adım 3B'de aldığınız İletişim Template ID
  },
  publicKey: 'aBcDeFgHiJkLmNoPq',  // Adım 4'te aldığınız Public Key
};
```

### 6️⃣ Test Edin

1. Web sunucusunu başlatın: `npm run dev`
2. http://localhost:4000 adresine gidin
3. Herhangi bir formu doldurup gönderin
4. Gmail hesabınızı kontrol edin - email gelmiş olmalı!

## ✅ Tamamlandı!

Artık:
- ✨ Backend sunucu gerekmez
- 🚀 Sadece web sitesini deploy edin (Vercel, Netlify, vb.)
- 🔒 Google Ads politikalarına %100 uyumlu
- 📧 Tüm formlar doğrudan mailinize gelir

## 🚀 Deployment

Web sitenizi deploy ederken:

1. Build alın: `npm run build`
2. Herhangi bir static hosting platformuna yükleyin:
   - Vercel (Önerilen)
   - Netlify
   - GitHub Pages
   - Cloudflare Pages

EmailJS otomatik çalışacak, hiçbir ek ayar gerekmez!

## 💡 İpuçları

- **Template düzenlemek isterseniz**: EmailJS dashboard'dan görsel olarak düzenleyebilirsiniz
- **Daha fazla email göndermeniz gerekirse**: EmailJS'in ücretli planına geçin (200'den fazla/ay)
- **Spam koruması**: EmailJS otomatik rate limiting yapar
- **Test emaili**: Dashboard'dan "Test" butonuyla template'leri test edebilirsiniz

## ❓ Sorun mu yaşıyorsunuz?

Yaygın sorunlar:

1. **"Invalid publicKey"**: Public Key'i doğru kopyaladınızdan emin olun
2. **"Template not found"**: Template ID'lerin doğru olduğunu kontrol edin
3. **Email gelmiyor**: Spam klasörünüzü kontrol edin

## 📚 Daha Fazla Bilgi

EmailJS Dökümantasyonu: https://www.emailjs.com/docs/

---

**Not**: `src/sendEmail.js` dosyası ve Express/Nodemailer bağımlılıkları artık kullanılmıyor. Bunları silmek isterseniz:

```bash
npm uninstall express nodemailer
```

Port 3001'deki email sunucusunu kapatabilirsiniz - artık gerekli değil!
