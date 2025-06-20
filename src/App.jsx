import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  UniverseCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section with Background Image */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Sections with Stars Background */}
        <div className="relative z-0">
          <StarsCanvas />
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>

        {/* Contact Section with Universe */}
        <div className="relative z-0">
          <Contact />
          <UniverseCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
