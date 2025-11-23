import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { trackVisitor } from "../../admin/trackVisitor";
import { Footer } from "../../components/Footer/Footer";
import { HeroSection } from "../../components/Seyahat/HeroSection";
import { ServicesOverview } from "../../components/Seyahat/ServicesOverview";
import { PopularDestinations } from "../../components/Seyahat/PopularDestinations";
import { TourPackages } from "../../components/Seyahat/TourPackages"; // Tur paketleri bileşeni ekliyorum
import { WhyChooseUs } from "../../components/Seyahat/WhyChooseUs";
import { ContactCTA } from "../../components/Seyahat/ContactCTA";
import { TravelPlanningModal } from "../../components/Seyahat/TravelPlanningModal";
import { useTravelPlanningForm } from "../../utils/useTravelPlanningForm";

export default function SeyahatPage() {
  useEffect(() => {
    trackVisitor("seyahat");
  }, []);
  const {
    isModalOpen,
    selectedTour,
    formData,
    isSubmitting,
    submitMessage,
    handleInputChange,
    openModal,
    closeModal,
    handleFormSubmit,
  } = useTravelPlanningForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />
      <HeroSection onTourSelect={openModal} />
      <ServicesOverview />
      <PopularDestinations />
      <TourPackages onTourSelect={openModal} />
      <WhyChooseUs />
      <ContactCTA onTourSelect={openModal} />
      <Footer />

      <TravelPlanningModal
        isOpen={isModalOpen}
        selectedTour={selectedTour}
        formData={formData}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
        onClose={closeModal}
        onInputChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
