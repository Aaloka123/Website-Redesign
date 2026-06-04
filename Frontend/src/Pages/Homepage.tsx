import Header from "../Components/Header";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import LogoSection from "../Components/LogoSection";
import GetInvolved from "../Components/GetInvolved";
import OurMission from "../Components/OurMission";
import RecentEvents from "../Components/RecentEvents";
import CallToAction from "../Components/CallToAction";
import UpcomingEvents from "../Components/UpcomingEvents";
import VolunteerOfTheYear from "../Components/VolunteerOfTheYear";
import InspiringPeople from "../Components/InspiringPeople";
import PhotoGallery from "../Components/PhotoGallery";
import NewsUpdates from "../Components/NewsUpdates";

const Homepage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50 w-full shadow-md">
        <TopBar />
        <Header />
      </div>
      <main className="flex-1">
        <Hero />
        <LogoSection />
        <GetInvolved />
        <OurMission />
        <RecentEvents />
        <CallToAction />
        <UpcomingEvents />
        <VolunteerOfTheYear />
        <InspiringPeople />
        <PhotoGallery />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
