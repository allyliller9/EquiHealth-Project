const MissionSection = () => {
  const missionPoints = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
        </svg>
      ),
      title: "Illuminate Disparities",
      description: "Using research and data to reveal healthcare inequalities affecting women across demographics and regions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
      ),
      title: "Educate & Inform",
      description: "Providing accessible, evidence-based resources to empower women and healthcare providers."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 11c5.333 0 5.333-8 0-8" />
          <path d="M6 11h8" />
          <path d="M10 13v4" />
          <path d="M14 15h2.5a1.5 1.5 0 010 3h-.943a2 2 0 01-2-2v-6" />
          <path d="M6 15h2.5a1.5 1.5 0 010 3h-.943a2 2 0 01-2-2v-6" />
        </svg>
      ),
      title: "Drive Change",
      description: "Equipping advocates with tools and strategies to influence policy and improve healthcare outcomes."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-['Montserrat'] text-3xl font-bold mb-6 text-[#333333]">Our Mission</h2>
          <p className="text-lg text-[#4b4b4b]">
            We are dedicated to highlighting disparities in women's health, providing evidence-based resources, and empowering advocacy efforts to create meaningful change in healthcare systems worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-[#f8f5f7] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${
                index === 0 
                  ? "text-[#9d65c9]" 
                  : index === 1 
                    ? "text-[#4a6fa1]" 
                    : "text-[#d66ba0]"
              } mb-4 flex justify-center`}>
                {point.icon}
              </div>
              <h3 className="font-['Montserrat'] text-xl font-semibold mb-3 text-center">
                {point.title}
              </h3>
              <p className="text-[#4b4b4b]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
