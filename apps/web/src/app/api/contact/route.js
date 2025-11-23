export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      message,
      age,
      city,
      packageType,
      destination,
      startDate,
      endDate,
      travelers,
      budget,
    } = body;

    // Form verilerini kontrol et
    if (!name || !email || !message) {
      return Response.json(
        { error: "Ad, email ve mesaj alanları zorunludur." },
        { status: 400 },
      );
    }

    // Seyahat planı talebi ise özel formatlama
    let emailSubject;
    let emailContent;

    if (service === "Seyahat Planı Talebi" && packageType) {
      const packageNames = {
        ekonomik: "Ekonomik Paket",
        standart: "Standart Paket",
        vip: "VIP Paket",
      };

      emailSubject = `🎯 Yeni Seyahat Planı Talebi - ${packageNames[packageType]} - ${name}`;
      emailContent = `
🌟 YENİ SEYAHAT PLANI TALEBİ

===========================================
👤 MÜŞTERİ BİLGİLERİ
===========================================
• Ad Soyad: ${name}
• Yaş: ${age}
• Şehir: ${city}
• Telefon: ${phone || "Belirtilmemiş"}
• Email: ${email}

===========================================
📦 PAKET TERCİHİ
===========================================
• Seçilen Paket: ${packageNames[packageType]}
• Destinasyon: ${destination}

===========================================
✈️ SEYAHAT DETAYLARI
===========================================
• Başlangıç Tarihi: ${startDate}
• Bitiş Tarihi: ${
        startDate && endDate
          ? `${Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} gün`
          : endDate
      }
• Kişi Sayısı: ${travelers}
• Bütçe Aralığı: ${budget}

===========================================
📝 TAM MESAJ İÇERİĞİ
===========================================
${message}

===========================================
📅 TALEP BİLGİLERİ
===========================================
• Gönderim Tarihi: ${new Date().toLocaleString("tr-TR", { timeZone: "Asia/Jakarta" })}
• Talep Türü: ${service}

⚠️ ÖNEMLİ: Bu müşteriye 24 saat içinde geri dönüş yapılması gerekmektedir!
      `.trim();
    } else {
      // Normal iletişim formu için
      emailSubject = `Yeni İletişim Mesajı - ${name}`;
      emailContent = `
Yeni İletişim Formu Mesajı

Gönderen Bilgileri:
- Ad Soyad: ${name}
- Email: ${email}
- Telefon: ${phone || "Belirtilmemiş"}
- Hizmet Türü: ${service || "Belirtilmemiş"}

Mesaj:
${message}

Bu mesaj ${new Date().toLocaleString("tr-TR", { timeZone: "Asia/Jakarta" })} tarihinde gönderilmiştir.
      `.trim();
    }

    // Email gönderimi için sendEmail server'ına istek at
    try {
      const emailResponse = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'uzelemehmet@gmail.com',
          subject: emailSubject,
          text: emailContent,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Email sunucusu hatası:", await emailResponse.text());
        return Response.json(
          { error: "Email gönderilirken bir hata oluştu." },
          { status: 500 },
        );
      }
    } catch (emailError) {
      console.error("Email gönderme hatası:", emailError);
      return Response.json(
        { error: "Email gönderilirken bir hata oluştu." },
        { status: 500 },
      );
    }

    return Response.json(
      { message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 },
    );
  }
}
