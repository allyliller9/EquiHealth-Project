import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Empowering Women Through <span className="text-pink-600">Healthcare Equality</span>
            </h1>
            <p className="text-lg mb-6 text-gray-600">
              Advocating for research, awareness, and equitable access to women's health services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/statistics" 
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-5 rounded-md transition-all text-center"
              >
                Explore the Data
              </Link>
              <Link 
                href="/advocacy" 
                className="inline-block bg-white hover:bg-gray-100 text-pink-600 border border-pink-600 font-medium py-2 px-5 rounded-md transition-all text-center"
              >
                Take Action
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Diverse group of women healthcare professionals" 
              className="rounded-md shadow-md w-full h-auto object-cover" 
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
