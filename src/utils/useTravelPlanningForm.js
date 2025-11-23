import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { emailConfig } from './emailConfig';
import { trackTabClick } from '../admin/trackVisitor';

// EmailJS'i başlat
emailjs.init(emailConfig.publicKey);

export function useTravelPlanningForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "", // Yeni eklenen yaş alanı
    city: "", // Yeni eklenen şehir alanı
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "",
    budget: "",
    packageType: "", // Yeni eklenen paket türü alanı
    accommodation: "",
    interests: [],
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const openModal = (tour) => {
    setSelectedTour(tour);
    setFormData((prev) => ({
      ...prev,
      destination: tour ? tour.name : "",
      packageType: tour ? tour.id : "", // Seçilen paket varsa otomatik seç
    }));
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setSubmitMessage("");
    document.body.style.overflow = "unset";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Paket türü bilgisi
      const packageNames = {
        ekonomik: "Ekonomik Paket",
        standart: "Standart Paket",
        vip: "VIP Paket",
      };

      // EmailJS ile email gönder
      const templateParams = {
        to_email: "uzelemehmet@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        age: formData.age,
        city: formData.city,
        package_type: packageNames[formData.packageType] || formData.packageType,
        destination: formData.destination,
        start_date: formData.startDate,
        end_date: formData.endDate,
        travelers: formData.travelers,
        budget: formData.budget,
        accommodation: formData.accommodation || "Belirtilmedi",
        interests: formData.interests.length > 0 ? formData.interests.join(", ") : "Belirtilmedi",
        special_requests: formData.specialRequests || "Özel istek belirtilmedi",
        send_date: new Date().toLocaleString("tr-TR", { timeZone: "Asia/Jakarta" }),
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateIds.travelPlanning,
        templateParams,
        emailConfig.publicKey
      );

      // İstatistik takibi
      trackTabClick("Seyahat Formu Gönderildi");
      setSubmitMessage(
        "🎉 Seyahat planınız başarıyla gönderildi! Size özel bir teklif hazırlayıp 24 saat içinde dönüş yapacağım.",
      );

      // Form başarıyla gönderildikten sonra temizle
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        city: "",
        destination: "",
        startDate: "",
        endDate: "",
        travelers: "",
        budget: "",
        packageType: "",
        accommodation: "",
        interests: [],
        specialRequests: "",
      });

      // 3 saniye sonra modal'ı kapat
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      console.error("Hata detayı:", error.text, error.status);
      setSubmitMessage(
        "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isModalOpen,
    selectedTour,
    formData,
    isSubmitting,
    submitMessage,
    handleInputChange,
    openModal,
    closeModal,
    handleFormSubmit,
  };
}
