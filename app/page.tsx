import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-noise"></div>
      
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-electric opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-purple opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>

      <Navigation />

      <main className="pt-32 pb-24 px-4 min-h-screen flex flex-col justify-center items-center">
        <Hero />
        <BentoGrid />
      </main>

      <Footer />
    </>
  );
}

