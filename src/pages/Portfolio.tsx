import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Construction Estimating Portfolio",
    "description": "Successful project estimates across residential, commercial, and industrial sectors"
  };

  const projects = [
    {
      title: "GENERAL CONTACTOR (GC)",
      subtitle: "",
      image: "/assets/portfolio/GeneralContracter.webp",
      items: [
        "75 UNIT AFFORDABLE ED-1 HOUSING PROJECT – $13.29M",
        "McDonald’s - 2438 W. CERMAK ROAD – $1.256M",
        "THE GREEN BERRY – $1.025M",
        "4415 IOWA AVA NW WASHINGTON DC – $2.565M",
      ]
    },
    {
      title: "CONCRETE ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/Concrete.webp",
      items: [
        "7 ELEVEN– $0.723M",
        "CHICK FIL-A– $0.582M",
        "TO-ROGERS FLEX WAREHOUSE– $0.475M",
        "Lipp America Tank Sytem – $0.3156M",
      ]
    },
    {
      title: "MASONARY ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/MASONARY.webp",
      items: [
        " High Point Treatment Center– $0.323M",
        "Cape St Claire Firestation – $0.392M",
        "Civitas Georgetown – $0.525M",
        "O'REILLY AUTO PARTS GROUND UP– $0.215M"
      ]
    },
    {
      title: "DRYWALL ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/DRYWALL.webp",
      items: [
        "KIDS EMPIRE– $0.523M",
        "GERBER COLLISION & GLASS– $0.312M",
        "Pop Mart Danbury Fair– $0.415M",
        "Planet fitness– $0.315M"
      ]
    },
    {
      title: "ROOFING ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/ROOFING.webp",
      items: [
        "5925 Woodland Avenue – $0.232M",
        "Newnan City Church – $0.322M",
        "RENOVATION AND EXPANSION OF SPS– $0.475M",
        "AVANZA AT HYDE PARK– $0.3215M"
      ]
    },
    {
      title: "MECHANICAL ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/MECHANICAL.webp",
      items: [
        "MECHANICAL (HVAC)",
        "Planet Fitness– $0.15M",
        " ID PICKLR - FREMONT– $0.375M",
        "Chevron– $0.4215M"
      ]
    },
    {
      title: "ELECTRICAL ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/ELECTRICAL.webp",
      items: [
        "Transition Learning Center 18+– $0.242M",
        "Whiteville Community Center– $0.16M",
        "Solid waste convenience center– $0.245M",
        "AutoZone Store No. 9361– $0.1215M"
      ]
    },
    {
      title: "PLUMBING ESTIMATING",
      subtitle: "",
      image: "/assets/portfolio/PLUMBING.webp",
      items: [
        "Snarf's Sandwiches – $0.142M",
        "Civitas Georgetown– $0.265M",
        "Voter Registration – $0.345M",
        "LensCrafter – $0.112M"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Project Portfolio | Paradise Construction Estimating"
        description="View our successful construction estimating projects across residential, commercial, and industrial sectors. 2000+ completed projects."
        canonical="https://paradiseestimating.com/portfolio"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]">
          {/* Abstract Background */}
          <div className="absolute inset-0 z-0">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Glowing Orbs */}
            <motion.div
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
            />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3" />
            <div className="absolute left-0 top-1/2 h-[300px] w-[300px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2" />
          </div>

          <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Paradise Estimating</span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight mb-8 text-white drop-shadow-sm">



                Precise, Accurate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary bg-300% animate-gradient">
                  Estimates
                </span> for Every Project
              </h1>

              <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mt-10 mx-auto leading-relaxed font-light">
                Below is a curated selection of projects we have supported. It shows the precision, detail, and reliability you can expect when working with us.
              </p>

              <div className="flex justify-center mt-10">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg gap-3"
                  onClick={() => window.location.href = "tel:+17187196171"}
                >
                  <Phone className="h-5 w-5" />
                  Call Us: (718) 719-6171
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

        {/* Portfolio Grid */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
                >
                  {/* Image Section */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-black text-black mb-4 uppercase tracking-wide border-b border-gray-100 pb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <ul className="space-y-2.5">
                      {project.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-gray-600 text-xs lg:text-sm font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate("/contact")}
              >
                Request a Quote for Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
