import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#d66ba0]/10 to-[#9d65c9]/10 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-[#333333] mb-6 leading-tight">
              Empowering Women Through <span className="text-[#d66ba0]">Healthcare Equality</span>
            </h1>
            <p className="text-lg mb-8 text-[#4b4b4b]">
              Advocating for research, awareness, and equitable access to women's health services across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/statistics" 
                className="inline-block bg-[#d66ba0] hover:bg-[#d66ba0]/90 text-white font-medium py-3 px-6 rounded-md shadow-md transition-all text-center"
              >
                Explore the Data
              </Link>
              <Link 
                href="/advocacy" 
                className="inline-block bg-white hover:bg-[#e9e3e7] text-[#d66ba0] border border-[#d66ba0] font-medium py-3 px-6 rounded-md shadow-sm transition-all text-center"
              >
                Take Action
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Diverse group of women healthcare professionals" 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
