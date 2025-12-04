import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { serviceAreasData } from "@/data/serviceAreas";

const ServiceAreas = () => {
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Paradise Construction Estimating",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Service Areas | Paradise Construction Estimating"
        description="Professional construction estimating services available across all 50 states. Select your location to learn more."
        canonical="https://paradiseestimating.com/service-areas"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[350px] lg:min-h-[350px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: "url('/assets/services.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          {/* Content Overlay */}
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-6 text-black">
                AREAS WE SERVE
              </h1>

              <h2 className="text-xl lg:text-2xl font-bold tracking-wider text-black mb-6">
                PARADISE ESTIMATING COMPANY
              </h2>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

        {/* Service Areas Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">

            {/* Introduction */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Nationwide Coverage</h2>
              <p className="text-muted-foreground text-lg">
                We provide professional estimating services to contractors in every state.
                Select your state below to see our local service areas.
              </p>
            </div>

            {/* States Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-20">
              {serviceAreasData.map((data) => (
                <button
                  key={data.state}
                  onClick={() => navigate(`/locations/${data.state.toLowerCase().replace(/ /g, "-")}`)}
                  className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow-sm border bg-white text-gray-700 border-gray-100 hover:bg-[#7ED957] hover:text-black hover:border-[#7ED957] hover:shadow-md hover:-translate-y-0.5"
                >
                  {data.state}
                </button>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreas;
