import "./App.css";
import LandingPage from "./components/landing-page";
import MakeHappenSection from "./components/make-happen";
import {
  Services,
  CaseStudies,
  WorkProcess,
  Team,
  Testimonials,
  ContactUs,
  Footer
} from "./index";

function App() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] lg:pt-[60px] pt-[20px]">
      <LandingPage />
      <Services />
      <MakeHappenSection />
      <CaseStudies />
      <WorkProcess />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
