import React, { useState, useEffect } from "react";

const initialContent = {
  title: "Hoşgeldiniz!",
  description: "Bu metni ve görselleri buradan değiştirebilirsiniz.",
  image: "default.jpg"
};

export default function AdminPanel() {
  const [content, setContent] = useState(initialContent);
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Basit dosya tabanlı simülasyon: localStorage
    const saved = localStorage.getItem("siteContent");
    if (saved) setContent(JSON.parse(saved));
    const statSaved = localStorage.getItem("siteStats");
    if (statSaved) setStats(JSON.parse(statSaved));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setContent((prev) => ({ ...prev, image: file.name }));
      // Gerçek dosya yükleme backend ile yapılmalı
    }
  };

  const handleSave = () => {
    localStorage.setItem("siteContent", JSON.stringify(content));
    alert("Değişiklikler kaydedildi!");
  };

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: "auto" }}>
      <h2>Yönetici Paneli</h2>
      <label>Başlık:</label>
      <input name="title" value={content.title} onChange={handleChange} style={{ width: "100%" }} />
      <label>Açıklama:</label>
      <textarea name="description" value={content.description} onChange={handleChange} style={{ width: "100%" }} />
      <label>Görsel:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <p>Mevcut görsel: {content.image}</p>
      <button onClick={handleSave}>Kaydet</button>
      <hr />
      <h3>Site Etkileşim Takibi</h3>
      <ul>
        <li><b>Ana Sayfa:</b> Ziyaret: {stats.home?.visits || 0}, Son Ziyaret: {stats.home?.lastVisit || "-"}</li>
        <li><b>Seyahat:</b> Ziyaret: {stats.seyahat?.visits || 0}, Son Ziyaret: {stats.seyahat?.lastVisit || "-"}</li>
        <li><b>Evlilik:</b> Ziyaret: {stats.evlilik?.visits || 0}, Son Ziyaret: {stats.evlilik?.lastVisit || "-"}</li>
        <li><b>Youtube:</b> Ziyaret: {stats.youtube?.visits || 0}, Son Ziyaret: {stats.youtube?.lastVisit || "-"}</li>
      </ul>
    </div>
  );
}
