import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FreeEstimateSection from "@/components/FreeEstimateSection";

const Category1 = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Construction Estimating Services - Paradise Estimating",
        "description": "From quantity takeoffs to comprehensive project support, we deliver accurate and detailed estimating services for construction projects of all types and sizes.",
        "provider": {
            "@type": "Organization",
            "name": "Paradise Construction Estimating"
        }
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title="Professional Construction Estimating Services | Paradise Estimating"
                description="From quantity takeoffs to comprehensive project support, we deliver accurate and detailed estimating services for construction projects of all types and sizes."
                canonical="https://paradiseestimating.com/services/category-1"
                structuredData={structuredData}
            />
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full z-0"
                        style={{
                            backgroundImage: "url('/assets/aboutus.webp')",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />

                    {/* Content Overlay */}
                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6 text-black">
                                Professional <span className="text-[#7ED957]">Construction </span>Estimating Services
                            </h1>



                            <p className="text-base lg:text-lg text-black/80 leading-relaxed max-w-2xl">
                                At Paradise Estimating, we provide professional and reliable construction estimating services.  Our goal is to provide accurate, clear, and cost-effective estimating solutions. That will save your time, reduce mistakes, and increase your chances of winning bids.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* Our Services Categories Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-5xl font-black uppercase text-black mb-3">
                                Our Services Categories
                            </h2>
                            <p className="text-xl lg:text-2xl font-bold text-[#82E658] mb-6">
                                Accurate, Reliable, Efficient
                            </p>
                            <p className="text-base text-black/70 max-w-4xl mx-auto">
                                For 20 years Paradise Estimating has been providing top class estimating services. As a result many busy,beginner and advanced builders took advantage. Here are some services that our professionals are providing.
                            </p>
                        </div>

                        {/* Services List */}
                        <div className="max-w-6xl mx-auto border-t border-gray-300">
                            {[
                                { number: "1", title: "Home Addition Estimation Services" },
                                { number: "2", title: "Quantity Takeoff" },
                                { number: "3", title: "Bridge Estimating" },
                                { number: "4", title: "Freelance Estimating" },
                                { number: "5", title: "Blueprint Estimating" },
                            ].map((service, index) => (
                                <div key={index} className="group transition-colors duration-300 hover:bg-[#7ED957]">
                                    {/* Mobile Layout */}
                                    <div className="md:hidden border-b border-gray-300 p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-[#545454] flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl font-black text-[#82E658]">
                                                    {service.number}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-black">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-black/80 leading-relaxed">
                                            From quantity takeoffs to comprehensive project support, we deliver accurate and detailed estimating services for construction projects of all types and sizes.
                                        </p>
                                    </div>

                                    {/* Desktop Layout */}
                                    <div className="hidden md:grid grid-cols-[120px_1px_350px_1px_1fr] gap-0 border-b border-gray-300">
                                        {/* Column 1: Number Circle */}
                                        <div className="py-6 px-4 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-[20px] bg-[#6B6B6B] flex items-center justify-center">
                                                <span className="text-3xl font-black text-[#82E658]">
                                                    {service.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Vertical Line 1 */}
                                        <div className="bg-gray-300 w-full h-full"></div>

                                        {/* Column 2: Service Title */}
                                        <div className="py-6 px-8 flex items-center">
                                            <h3 className="font-extrabold text-xl text-black">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Vertical Line 2 */}
                                        <div className="bg-gray-300 w-full h-full"></div>

                                        {/* Column 3: Service Description */}
                                        <div className="py-6 px-8 flex items-center">
                                            <p className="text-base text-black/80 leading-relaxed font-medium">
                                                From quantity takeoffs to comprehensive project support, we deliver accurate and detailed estimating services for construction projects of all types and sizes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* Industries/Sectors We Are Serving Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-5xl font-black uppercase text-black mb-3">
                                Industries/Sectors We Are Serving
                            </h2>
                            <p className="text-xl lg:text-2xl font-bold text-[#82E658]">
                                specialized estimating services for diverse industry sectors.
                            </p>
                        </div>

                        {/* Industries Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {[
                                "Strategy and Planning",
                                "Strategy and Planning",
                                "Strategy and Planning",
                                "Strategy and Planning",
                                "Strategy and Planning",
                                "Strategy and Planning"
                            ].map((industry, index) => (
                                <div
                                    key={index}
                                    className="group bg-white hover:bg-[#82E658] p-8 rounded-lg border border-gray-200 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <svg
                                            width="48"
                                            height="48"
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-[#82E658] group-hover:text-white transition-colors duration-300"
                                        >
                                            <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="12" cy="28" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <circle cx="36" cy="28" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                                            <line x1="24" y1="16" x2="24" y2="24" stroke="currentColor" strokeWidth="2" />
                                            <line x1="24" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="2" />
                                            <line x1="24" y1="24" x2="32" y2="28" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-300">
                                        {industry}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 group-hover:text-white mb-6 transition-colors duration-300">
                                        We bring the right people together to challenge established thinking and drive transform in 2020
                                    </p>

                                    {/* Read More Button */}
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="flex items-center gap-2 text-black group-hover:text-white font-semibold transition-colors duration-300"
                                    >
                                        Read More
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform group-hover:translate-x-1"
                                        >
                                            <path
                                                d="M6 3L11 8L6 13"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <section className="py-16 lg:py-24 bg-white">
                    <ProcessSection />
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <WhyChooseSection />

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <FreeEstimateSection />


            </main>
            <Footer />
        </div>
    );
};

export default Category1;
