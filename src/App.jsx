import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SocialShowcase from "./components/SocialShowcase";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Services />
        <SocialShowcase />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
