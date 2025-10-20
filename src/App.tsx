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
    <div className=" px-[100px] pt-[60px]">
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
