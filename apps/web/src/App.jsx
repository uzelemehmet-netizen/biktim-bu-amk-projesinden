import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./app/page";
import Hakkimizda from "./app/hakkinda/page";
import EvlilikPage from "./app/evlilik/page";
import SeyahatPage from "./app/seyahat/page";
import YoutubePage from "./app/youtube/page";
import IletisimPage from "./app/iletisim/page";
import KullanimSartlariPage from "./app/kullanim-sartlari/page";
import GizlilikPolitikasiPage from "./app/gizlilik-politikasi/page";
import AdminPage from "./app/admin/page";

function NotFound() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
      <a href="/" style={{ color: "#e53e3e", textDecoration: "underline" }}>Ana sayfaya dön</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkinda" element={<Hakkimizda />} />
        <Route path="/evlilik" element={<EvlilikPage />} />
        <Route path="/seyahat" element={<SeyahatPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
        <Route path="/kullanim-sartlari" element={<KullanimSartlariPage />} />
        <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasiPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
