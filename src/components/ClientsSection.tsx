const ClientsSection = () => {
  const clients = [
    { name: "ABC Construction", logo: "/assets/logos/client-1-color.jpg" },
    { name: "XYZ Developers", logo: "/assets/logos/client-2.jpg" },
    { name: "Metro Builders", logo: "/assets/logos/client-4.jpg" },
    { name: "City Contractors", logo: "/assets/logos/client-5.jpg" },
    { name: "Elite Engineers", logo: "/assets/logos/client-6.jpg" },
    { name: "Global Construction", logo: "/assets/logos/client-7.jpg" },
    { name: "Landmark Projects", logo: "/assets/logos/client-8.jpg" },
    { name: "Premier Properties", logo: "/assets/logos/client-10.jpg" },
    { name: "Global Construction", logo: "/assets/logos/client-11.jpg" },
    { name: "Landmark Projects", logo: "/assets/logos/client-12.jpg" },
    { name: "Premier Properties", logo: "/assets/logos/client-13.jpg" },
    { name: "Landmark Projects", logo: "/assets/logos/client-14.jpg" },
    { name: "Premier Properties", logo: "/assets/logos/client-15.jpg" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 mb-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-black uppercase mb-4 text-white">
            OUR <span className="text-primary">2000+ TRUSTED</span> CONSTRUCTION ESTIMATING CLIENTS
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proud to work with industry-leading construction companies across the nation.
          </p>
        </div>
      </div>

      <div className="relative w-full pause-on-hover">
        <div className="flex gap-12 animate-marquee w-max px-4 items-center">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="w-[180px] h-[100px] flex items-center justify-center bg-white backdrop-blur-sm rounded-xl shadow-sm border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
