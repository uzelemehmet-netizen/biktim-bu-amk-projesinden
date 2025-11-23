"use client";

import { useState, useEffect } from "react";
import { Lock, LogOut, Key, Save, MessageCircle, ImageIcon, FileText, BarChart3, TrendingUp, Eye, Calendar, Users, MousePointerClick } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePasswordError, setChangePasswordError] = useState("");
  const [changePasswordSuccess, setChangePasswordSuccess] = useState("");
  const [activeTab, setActiveTab] = useState("settings"); // settings veya stats
  
  // CMS State
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [stats, setStats] = useState(null);
  const [tabStats, setTabStats] = useState(null);

  // Sayfa yüklendiğinde session kontrolü
  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      loadContent();
      loadStats();
    }
  }, []);

  // İstatistikleri yükle
  const loadStats = () => {
    const siteStats = localStorage.getItem("siteStats");
    if (siteStats) {
      setStats(JSON.parse(siteStats));
    } else {
      setStats({});
    }
    
    const tabClickStats = localStorage.getItem("tabStats");
    if (tabClickStats) {
      setTabStats(JSON.parse(tabClickStats));
    } else {
      setTabStats({});
    }
  };

  // İstatistikleri sıfırla
  const resetStats = () => {
    if (confirm("Tüm istatistikleri sıfırlamak istediğinizden emin misiniz?")) {
      localStorage.removeItem("siteStats");
      localStorage.removeItem("tabStats");
      setStats({});
      setTabStats({});
      alert("✅ İstatistikler sıfırlandı!");
    }
  };

  // İçeriği yükle (localStorage'dan)
  const loadContent = async () => {
    setLoading(true);
    try {
      const savedContent = localStorage.getItem("siteContent");
      if (savedContent) {
        setContent(JSON.parse(savedContent));
      } else {
        // Varsayılan ayarlar
        const defaultContent = {
          settings: {
            whatsappNumber: "+905550343852",
            contact: {
              phone: "+90 555 034 38 52",
              email: "uzelemehmet@gmail.com",
              workingHours: "Pazartesi - Pazar: 08:00 - 22:00",
              address: "Jakarta, Endonezya"
            },
            socialMedia: {
              youtube: "https://youtube.com/@endonezyakasifi",
              instagram: "https://www.instagram.com/endonezyakasifi/"
            },
            heroBackgrounds: {
              homepage: "",
              about: "",
              contact: "",
              marriage: "",
              travel: ""
            }
          }
        };
        setContent(defaultContent);
        localStorage.setItem("siteContent", JSON.stringify(defaultContent));
      }
    } catch (error) {
      console.error('İçerik yüklenemedi:', error);
      setSaveMessage("❌ İçerik yüklenemedi: " + error.message);
    }
    setLoading(false);
  };

  // İçeriği kaydet
  const saveContent = async () => {
    setLoading(true);
    setSaveMessage("");
    try {
      localStorage.setItem("siteContent", JSON.stringify(content));
      setSaveMessage("✅ Değişiklikler başarıyla kaydedildi!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      setSaveMessage("❌ Kayıt başarısız: " + error.message);
    }
    setLoading(false);
  };

  // Şifre fonksiyonları
  const getStoredPassword = () => {
    return localStorage.getItem("adminPassword") || "271283";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === getStoredPassword()) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      setError("");
      loadContent();
    } else {
      setError("Yanlış şifre! Lütfen tekrar deneyin.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
    setPassword("");
    setShowChangePassword(false);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setChangePasswordError("");
    setChangePasswordSuccess("");

    if (currentPassword !== getStoredPassword()) {
      setChangePasswordError("Mevcut şifre yanlış!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setChangePasswordError("Yeni şifreler eşleşmiyor!");
      return;
    }

    if (newPassword.length < 4) {
      setChangePasswordError("Yeni şifre en az 4 karakter olmalıdır!");
      return;
    }

    localStorage.setItem("adminPassword", newPassword);
    setChangePasswordSuccess("✅ Şifre başarıyla değiştirildi!");
    
    setTimeout(() => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowChangePassword(false);
      setChangePasswordSuccess("");
    }, 2000);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Paneli</h1>
            <p className="text-gray-600 mt-2">Yönetici girişi yapın</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Şifre
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                placeholder="Şifrenizi girin"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Panel
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">⚙️ Site Yönetim Paneli</h1>
              <p className="text-sm text-gray-600 mt-1">Ayarlar ve İstatistikler</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={loadStats}
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Yenile</span>
              </button>
              <button
                onClick={() => setShowChangePassword(!showChangePassword)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Key className="w-4 h-4" />
                <span>Şifre Değiştir</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Çıkış</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔐 Şifre Değiştir</h3>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mevcut Şifre</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Yeni Şifre</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Yeni Şifre (Tekrar)</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {changePasswordError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                  {changePasswordError}
                </div>
              )}

              {changePasswordSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm">
                  {changePasswordSuccess}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowChangePassword(false);
                    setCurrentPassword("");
                    setNewPassword("");
                    setConfirmPassword("");
                    setChangePasswordError("");
                    setChangePasswordSuccess("");
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Şifreyi Değiştir
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Content Editor */}
      {content && !showChangePassword && (
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors border-b-2 ${
                  activeTab === "settings"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>⚙️ Ayarlar</span>
              </button>
              <button
                onClick={() => setActiveTab("stats")}
                className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors border-b-2 ${
                  activeTab === "stats"
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>📊 İstatistikler</span>
              </button>
            </div>
          </div>

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-lg shadow-sm p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full mx-auto"></div>
                <p className="mt-4 text-gray-600">Yükleniyor...</p>
              </div>
            ) : (
              <div className="space-y-8">
                
                {/* WhatsApp Numarası */}
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Numarası (Tüm Butonlar İçin)
                  </h3>
                  <p className="text-sm text-green-700 mb-4">
                    Bu numara sitedeki <strong>TÜM WhatsApp butonlarında</strong> kullanılacak
                  </p>
                  <input
                    type="text"
                    value={content.settings?.whatsappNumber || ""}
                    onChange={(e) => {
                      const newContent = { ...content };
                      if (!newContent.settings) newContent.settings = {};
                      newContent.settings.whatsappNumber = e.target.value;
                      setContent(newContent);
                    }}
                    className="w-full px-4 py-3 text-lg border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="+905550343852"
                  />
                </div>

                {/* İletişim Bilgileri */}
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">📞 İletişim Bilgileri</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">Telefon</label>
                      <input
                        type="text"
                        value={content.settings?.contact?.phone || ""}
                        onChange={(e) => {
                          const newContent = { ...content };
                          if (!newContent.settings) newContent.settings = {};
                          if (!newContent.settings.contact) newContent.settings.contact = {};
                          newContent.settings.contact.phone = e.target.value;
                          setContent(newContent);
                        }}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="+90 555 034 38 52"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">E-posta</label>
                      <input
                        type="email"
                        value={content.settings?.contact?.email || ""}
                        onChange={(e) => {
                          const newContent = { ...content };
                          if (!newContent.settings) newContent.settings = {};
                          if (!newContent.settings.contact) newContent.settings.contact = {};
                          newContent.settings.contact.email = e.target.value;
                          setContent(newContent);
                        }}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="uzelemehmet@gmail.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">Çalışma Saatleri</label>
                      <input
                        type="text"
                        value={content.settings?.contact?.workingHours || ""}
                        onChange={(e) => {
                          const newContent = { ...content };
                          if (!newContent.settings) newContent.settings = {};
                          if (!newContent.settings.contact) newContent.settings.contact = {};
                          newContent.settings.contact.workingHours = e.target.value;
                          setContent(newContent);
                        }}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Pazartesi - Pazar: 08:00 - 22:00"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">Adres</label>
                      <input
                        type="text"
                        value={content.settings?.contact?.address || ""}
                        onChange={(e) => {
                          const newContent = { ...content };
                          if (!newContent.settings) newContent.settings = {};
                          if (!newContent.settings.contact) newContent.settings.contact = {};
                          newContent.settings.contact.address = e.target.value;
                          setContent(newContent);
                        }}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Jakarta, Endonezya"
                      />
                    </div>
                  </div>
                </div>

                {/* Sosyal Medya */}
                <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-purple-900 mb-4">🌐 Sosyal Medya Linkleri</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-purple-900 mb-2">YouTube Kanal Linki</label>
                      <input
                        type="text"
                        value={content.settings?.socialMedia?.youtube || ""}
                        onChange={(e) => {
                          const newContent = { ...content };
                          if (!newContent.settings) newContent.settings = {};
                          if (!newContent.settings.socialMedia) newContent.settings.socialMedia = {};
                          newContent.settings.socialMedia.youtube = e.target.value;
                          setContent(newContent);
                        }}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        placeholder="https://youtube.com/@endonezyakasifi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-purple-900 mb-2">Instagram Profil Linki</label>
                      <input
                        type="text"
                        value={content.settings?.socialMedia?.instagram || ""}
                        onChange={(e) => {
                          const newContent = { ...content };
                          if (!newContent.settings) newContent.settings = {};
                          if (!newContent.settings.socialMedia) newContent.settings.socialMedia = {};
                          newContent.settings.socialMedia.instagram = e.target.value;
                          setContent(newContent);
                        }}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        placeholder="https://instagram.com/endonezyakasifi"
                      />
                    </div>
                  </div>
                </div>

                {/* Sayfa Başlık Arka Planları */}
                <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-900 mb-4">🎨 Sayfa Başlık Arka Plan Görselleri</h3>
                  <p className="text-sm text-orange-700 mb-6">
                    Her sayfa başlığının arka plan görselini buradan yükleyebilirsiniz
                  </p>
                  
                  {["homepage", "about", "contact", "marriage", "travel"].map((page) => {
                    const pageNames = {
                      homepage: "🏠 Anasayfa",
                      about: "📋 Hakkımızda",
                      contact: "📞 İletişim",
                      marriage: "💑 Evlilik",
                      travel: "✈️ Seyahat"
                    };
                    
                    return (
                      <div key={page} className="mb-6 pb-6 border-b border-orange-200 last:border-b-0">
                        <h4 className="font-semibold text-orange-900 mb-3">{pageNames[page]}</h4>
                        <div className="flex items-center space-x-4">
                          {content.settings?.heroBackgrounds?.[page] && (
                            <img
                              src={content.settings.heroBackgrounds[page]}
                              alt={`${page} background`}
                              className="w-40 h-24 object-cover rounded-lg border-2 border-orange-300"
                            />
                          )}
                          <div>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  const newContent = { ...content };
                                  if (!newContent.settings) newContent.settings = {};
                                  if (!newContent.settings.heroBackgrounds) {
                                    newContent.settings.heroBackgrounds = {};
                                  }
                                  newContent.settings.heroBackgrounds[page] = reader.result;
                                  setContent(newContent);
                                  setSaveMessage(`✅ ${pageNames[page]} görseli eklendi! Kaydet butonuna basın.`);
                                };
                                reader.readAsDataURL(file);
                              }}
                              className="hidden"
                              id={`bg-${page}`}
                            />
                            <label
                              htmlFor={`bg-${page}`}
                              className="cursor-pointer inline-flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                            >
                              <ImageIcon className="w-4 h-4" />
                              <span>Görsel Seç</span>
                            </label>
                            {content.settings?.heroBackgrounds?.[page] && (
                              <button
                                onClick={() => {
                                  const newContent = { ...content };
                                  if (newContent.settings?.heroBackgrounds) {
                                    newContent.settings.heroBackgrounds[page] = "";
                                  }
                                  setContent(newContent);
                                }}
                                className="ml-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
                              >
                                Kaldır
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Save Message */}
                {saveMessage && (
                  <div className={`p-4 rounded-lg text-center font-semibold ${
                    saveMessage.includes("✅") 
                      ? "bg-green-50 text-green-700 border-2 border-green-200" 
                      : "bg-red-50 text-red-700 border-2 border-red-200"
                  }`}>
                    {saveMessage}
                  </div>
                )}

                {/* Save Button */}
                <div className="flex justify-center">
                  <button
                    onClick={saveContent}
                    disabled={loading}
                    className="flex items-center space-x-2 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
                  >
                    <Save className="w-6 h-6" />
                    <span>{loading ? "Kaydediliyor..." : "Tüm Değişiklikleri Kaydet"}</span>
                  </button>
                </div>
                </div>
              )}
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === "stats" && (
            <div className="space-y-6">
              {/* Genel Özet */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                      <BarChart3 className="w-7 h-7 mr-3" />
                      📊 Kullanıcı İstatistikleri
                    </h2>
                    <p className="text-blue-700 mt-2">Sayfa ziyaretleri ve etkileşim verileri</p>
                  </div>
                  <button
                    onClick={resetStats}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
                  >
                    🗑️ İstatistikleri Sıfırla
                  </button>
                </div>

                {/* Toplam İstatistikler */}
                {stats && Object.keys(stats).length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Toplam Ziyaret</p>
                          <p className="text-3xl font-bold text-blue-600 mt-1">
                            {Object.values(stats).reduce((sum, page) => sum + (page.visits || 0), 0)}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Toplam Sayfa</p>
                          <p className="text-3xl font-bold text-green-600 mt-1">
                            {Object.keys(stats).length}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">En Popüler</p>
                          <p className="text-xl font-bold text-purple-600 mt-1">
                            {Object.entries(stats).sort((a, b) => (b[1].visits || 0) - (a[1].visits || 0))[0]?.[0] || "-"}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-orange-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Son Ziyaret</p>
                          <p className="text-xs font-semibold text-orange-600 mt-1">
                            {Object.values(stats).map(p => p.lastVisit).filter(d => d !== "-").sort().pop()?.split(",")[0] || "-"}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-orange-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Henüz ziyaret verisi yok</p>
                  </div>
                )}
              </div>

              {/* Detaylı Sayfa İstatistikleri */}
              <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Sayfa Bazında Detaylar
                </h3>
                
                {stats && Object.keys(stats).length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-bold text-gray-700">Sayfa</th>
                          <th className="text-center py-3 px-4 font-bold text-gray-700">Ziyaret Sayısı</th>
                          <th className="text-center py-3 px-4 font-bold text-gray-700">Son Ziyaret</th>
                          <th className="text-center py-3 px-4 font-bold text-gray-700">Popülerlik</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(stats)
                          .sort((a, b) => (b[1].visits || 0) - (a[1].visits || 0))
                          .map(([page, data]) => {
                            const pageNames = {
                              home: "🏠 Anasayfa",
                              about: "📋 Hakkımızda",
                              contact: "📞 İletişim",
                              evlilik: "💑 Evlilik",
                              seyahat: "✈️ Seyahat",
                              youtube: "📺 YouTube"
                            };
                            
                            const totalVisits = Object.values(stats).reduce((sum, p) => sum + (p.visits || 0), 0);
                            const percentage = ((data.visits / totalVisits) * 100).toFixed(1);
                            
                            return (
                              <tr key={page} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-4">
                                  <span className="font-semibold text-gray-900">
                                    {pageNames[page] || page}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-4">
                                  <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full font-bold text-lg">
                                    {data.visits}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-4 text-sm text-gray-600">
                                  {data.lastVisit || "-"}
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center space-x-3">
                                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                                      <div
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all"
                                        style={{ width: `${percentage}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 min-w-[45px]">
                                      {percentage}%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-semibold mb-2">Henüz sayfa ziyareti kaydı yok</p>
                    <p className="text-gray-400 text-sm">Site sayfalarını ziyaret ettiğinizde burada görünecek</p>
                  </div>
                )}
              </div>

              {/* Bilgi Notu */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-lg">ℹ️</span>
                  </div>
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">İstatistikler Hakkında</p>
                    <ul className="space-y-1 list-disc list-inside text-blue-700">
                      <li>Veriler tarayıcınızın localStorage'ında saklanır</li>
                      <li>Her sayfa ziyaretinde otomatik olarak güncellenir</li>
                      <li>İstatistikleri istediğiniz zaman sıfırlayabilirsiniz</li>
                      <li>Veriler cihaza özgüdür, başka cihazlarda görünmez</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kullanıcı Etkileşimleri - Kategorilere Ayrılmış */}
              <div className="bg-white rounded-lg shadow-sm border-2 border-purple-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <MousePointerClick className="w-6 h-6 mr-2 text-purple-600" />
                  Kullanıcı Etkileşim İstatistikleri
                </h3>
                
                {tabStats && Object.keys(tabStats).length > 0 ? (
                  <div className="space-y-8">
                    {/* Tur Paketleri */}
                    {Object.keys(tabStats).some(key => key.startsWith("Tur Paketi:")) && (
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                          <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">✈️</span>
                          Tur Paket Seçimleri
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(tabStats)
                            .filter(([key]) => key.startsWith("Tur Paketi:"))
                            .sort((a, b) => (b[1].clicks || 0) - (a[1].clicks || 0))
                            .map(([tabName, data]) => {
                              const totalClicks = Object.entries(tabStats).filter(([k]) => k.startsWith("Tur Paketi:")).reduce((sum, [, t]) => sum + (t.clicks || 0), 0);
                              const percentage = ((data.clicks / totalClicks) * 100).toFixed(1);
                              
                              return (
                                <div key={tabName} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border-2 border-blue-100">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-blue-900 text-sm">{tabName.replace("Tur Paketi: ", "")}</h5>
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                      <span className="text-white font-bold text-sm">{data.clicks}</span>
                                    </div>
                                  </div>
                                  <div className="bg-blue-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-blue-600 h-full rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                  </div>
                                  <div className="text-xs text-blue-600 mt-1">%{percentage}</div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Form Gönderileri */}
                    {Object.keys(tabStats).some(key => key.includes("Form") || key.includes("Formu")) && (
                      <div>
                        <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center">
                          <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">📝</span>
                          Form Gönderileri
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(tabStats)
                            .filter(([key]) => key.includes("Form") || key.includes("Formu"))
                            .sort((a, b) => (b[1].clicks || 0) - (a[1].clicks || 0))
                            .map(([tabName, data]) => {
                              const totalClicks = Object.entries(tabStats).filter(([k]) => k.includes("Form") || k.includes("Formu")).reduce((sum, [, t]) => sum + (t.clicks || 0), 0);
                              const percentage = ((data.clicks / totalClicks) * 100).toFixed(1);
                              
                              return (
                                <div key={tabName} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-100">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-green-900 text-sm">{tabName}</h5>
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                      <span className="text-white font-bold text-sm">{data.clicks}</span>
                                    </div>
                                  </div>
                                  <div className="bg-green-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-green-600 h-full rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                  </div>
                                  <div className="text-xs text-green-600 mt-1">%{percentage}</div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Evlilik Doküman Sekmeleri */}
                    {Object.keys(tabStats).some(key => key.startsWith("Evlilik Doküman:")) && (
                      <div>
                        <h4 className="text-lg font-bold text-pink-900 mb-4 flex items-center">
                          <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">💑</span>
                          Evlilik Doküman Sekmeleri
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(tabStats)
                            .filter(([key]) => key.startsWith("Evlilik Doküman:"))
                            .sort((a, b) => (b[1].clicks || 0) - (a[1].clicks || 0))
                            .map(([tabName, data]) => {
                              const totalClicks = Object.entries(tabStats).filter(([k]) => k.startsWith("Evlilik Doküman:")).reduce((sum, [, t]) => sum + (t.clicks || 0), 0);
                              const percentage = ((data.clicks / totalClicks) * 100).toFixed(1);
                              
                              return (
                                <div key={tabName} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border-2 border-pink-100">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-pink-900 text-sm">{tabName.replace("Evlilik Doküman: ", "")}</h5>
                                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                                      <span className="text-white font-bold text-sm">{data.clicks}</span>
                                    </div>
                                  </div>
                                  <div className="bg-pink-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-pink-600 h-full rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                  </div>
                                  <div className="text-xs text-pink-600 mt-1">%{percentage}</div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* YouTube Etkileşimleri */}
                    {Object.keys(tabStats).some(key => key.startsWith("YouTube")) && (
                      <div>
                        <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center">
                          <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">📺</span>
                          YouTube Etkileşimleri
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Object.entries(tabStats)
                            .filter(([key]) => key.startsWith("YouTube"))
                            .sort((a, b) => (b[1].clicks || 0) - (a[1].clicks || 0))
                            .map(([tabName, data]) => {
                              const totalClicks = Object.entries(tabStats).filter(([k]) => k.startsWith("YouTube")).reduce((sum, [, t]) => sum + (t.clicks || 0), 0);
                              const percentage = ((data.clicks / totalClicks) * 100).toFixed(1);
                              
                              return (
                                <div key={tabName} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-2 border-red-100">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-red-900 text-sm">{tabName}</h5>
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                      <span className="text-white font-bold text-sm">{data.clicks}</span>
                                    </div>
                                  </div>
                                  <div className="bg-red-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-red-600 h-full rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                  </div>
                                  <div className="text-xs text-red-600 mt-1">%{percentage}</div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Diğer Etkileşimler */}
                    {Object.keys(tabStats).some(key => 
                      !key.startsWith("Tur Paketi:") && 
                      !key.includes("Form") && 
                      !key.includes("Formu") &&
                      !key.startsWith("Evlilik Doküman:") &&
                      !key.startsWith("YouTube")
                    ) && (
                      <div>
                        <h4 className="text-lg font-bold text-purple-900 mb-4 flex items-center">
                          <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">🎯</span>
                          Diğer Etkileşimler
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(tabStats)
                            .filter(([key]) => 
                              !key.startsWith("Tur Paketi:") && 
                              !key.includes("Form") && 
                              !key.includes("Formu") &&
                              !key.startsWith("Evlilik Doküman:") &&
                              !key.startsWith("YouTube")
                            )
                            .sort((a, b) => (b[1].clicks || 0) - (a[1].clicks || 0))
                            .map(([tabName, data]) => {
                              const totalClicks = Object.values(tabStats).reduce((sum, t) => sum + (t.clicks || 0), 0);
                              const percentage = ((data.clicks / totalClicks) * 100).toFixed(1);
                              
                              return (
                                <div key={tabName} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-100">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-bold text-purple-900 text-sm">{tabName}</h5>
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                      <span className="text-white font-bold text-sm">{data.clicks}</span>
                                    </div>
                                  </div>
                                  <div className="bg-purple-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-purple-600 h-full rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                  </div>
                                  <div className="text-xs text-purple-600 mt-1">%{percentage}</div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MousePointerClick className="w-16 h-16 text-purple-200 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-semibold mb-2">Henüz sekme tıklama kaydı yok</p>
                    <p className="text-gray-400 text-sm">Tur paketlerine, formlara veya sekmelere tıkladığınızda burada görünecek</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
