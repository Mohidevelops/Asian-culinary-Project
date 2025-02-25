import React, { useEffect, useRef } from "react";
import { Menu, ShoppingCart, User, Heart, Mail, Info } from "lucide-react";

function App() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<any>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const content = marqueeRef.current.innerHTML;
      marqueeRef.current.innerHTML = content.repeat(10); // Repeat content to ensure continuous flow
    }
  }, []);

  useEffect(() => {
    import("@splinetool/viewer");
  }, []);

  const handleLoad = (event: any) => {
    splineRef.current = event.target;
    
    // Restrict Camera Movement
    splineRef.current.setAttribute("orbit-controls", "enabled: false"); // Disable full orbit control
    splineRef.current.setCameraPosition(0, 2, 5); // Reset rotation
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold text-[#ce342c]"
            style={{ fontFamily: "aurora-lights-pro, sans-serif" }}
          >
            Ramen House
          </a>

          <nav className="hidden md:flex items-center gap-8 nav-border">
            <NavLink icon={<Menu size={18} />} text="MENU" />
            <NavLink icon={<Heart size={18} />} text="DELIVERY" />
            <NavLink icon={<Info size={18} />} text="ABOUT" />
            <NavLink icon={<Mail size={18} />} text="CONTACTS" />
          </nav>

          <div className="flex items-center gap-4">
            <button className="icon-border hover:bg-red-50 transition-colors">
              <User className="w-6 h-6 text-[#ce342c]" />
            </button>
            <button className="icon-border hover:bg-red-50 transition-colors">
              <ShoppingCart className="w-6 h-6 text-[#ce342c]" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Spline Animation */}
      <main className="pt-32 pb-16 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-7xl font-bold text-[#ce342c] leading-tight tracking-tight"
              style={{ fontFamily: "radiate-sans, sans-serif" }}
            >
              YOUR <span className="striped-circle inline-block"></span> ASIAN{" "}
              <span className="striped-circle inline-block"></span> CULINARY
              DREAM
            </h1>
            <p
              className="mt-6 text-lg text-[#ce342c] leading-relaxed"
              style={{ fontFamily: "SF Pro Display, sans-serif", fontWeight: "bold" }}
            >
              Welcome to our temporary - a place where every plate of ramen
              becomes a real work of art that you can enjoy on your lips.
            </p>
            <button className="mt-8 px-8 py-4 bg-[#ce342c] text-white rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Menu size={20} />
              MAKE AN ORDER
            </button>
          </div>
        </div>

        {/* Spline Animation with Camera Restrictions */}
        <div className="spline-container">
    <spline-viewer
      url="https://prod.spline.design/KoEXRMcMikJtAC0I/scene.splinecode"
      className="spline-viewer"
      onLoad={handleLoad}
    ></spline-viewer>
  </div>
</main>

      {/* Marquee Footer */}
      <footer className="fixed bottom-[40px] left-0 right-0 border-t border-b border-[#ce342c] py-3 overflow-hidden">
        <div className="marquee-container">
          <div ref={marqueeRef} className="marquee-content text-[#ce342c]">
            <span> MADE WITH LOVE</span>
            <span>🔥</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 text-[#ce342c] hover:opacity-80 transition-opacity">
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}

export default App;
