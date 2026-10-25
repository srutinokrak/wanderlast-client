
import Banner from "@/components/banner";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/cta-section";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <Banner />
        <WhyChooseUs />
        <Testimonials />
        <CtaSection />
      </main>
    
    </div>
  );
}
