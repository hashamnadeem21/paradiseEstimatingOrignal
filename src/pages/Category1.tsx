import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FreeEstimateSection from "@/components/FreeEstimateSection";
import { useNavigate } from "react-router-dom";
import { Calculator, Monitor, Users, Phone } from "lucide-react";

const Category1 = () => {
    const navigate = useNavigate();
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

    const steps = [
        {
            number: "1",
            title: "Submit Your Drawing Plans",
            description:
                "First, send your drawings or blueprints (PDF, DWG, or CAD) on our contact number. Add all details about the project, such as scope, trade, and deadlines.",
        },
        {
            number: "2",
            title: "Review The Plan",
            description:
                "We will review your plans after preparing material quantities, labor costs, and pricing. Then ,we will check your estimate according to the local market rates.",
        },
        {
            number: "3",
            title: "Get A Quote & Approval",
            description:
                "We will review your documents in detail. We will send you a custom quote based on project size, trade, and complexity. After your approval, we will assign an estimator specialized in your project type to you.",
        },
        {
            number: "4",
            title: "Receive an Estimate",
            description:
                "You will receive your complete estimate report in Excel and PDF formats. CSI divisions, cost summaries, and detailed line items also in the provided list.",
        },
    ];

    const features = [
        {
            icon: Calculator,
            title: "Save Money and Time",
            description:
                "Money and time are the two most valuable resources for any contractor. Outsourcing your estimating to Paradise Estimating helps you save both money and time. Instead of hiring full-time staff, you should only pay per project and save 30% cost.",
        },
        {
            icon: Monitor,
            title: "Fast Turnaround",
            description:
                "We understand bid deadline issues and construction bid estimating services. That is why we deliver quick estimates within 9–24 hours and maintain your scope. We are suitable partners if you are handling a single project or leading many projects.",
        },
        {
            icon: Users,
            title: "Professional Estimators",
            description:
                "With large experience, our expert estimators understand every trade and its management. From concrete and drywall to electrical, MEP, and civil works, we have expertise. You will get a real report that gives real cost accuracy and smarter bidding strategies",
        },
        {
            icon: Users,
            title: "Best Software Tools",
            description:
                "Our takeoff and estimate reports give you the facts that are important for your estimation.  You can negotiate properly with clear, data-backed insights, suppliers and subcontractors. You can secure stronger margins with clear quantities, labor breakdowns, and cost insights.",
        },
    ];

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

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="px-8 py-3 bg-[#7ED957] hover:bg-[#6BC847] text-[#1A2E1A] font-bold rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
                                >
                                    Get a Quote
                                </button>
                                <a
                                    href="tel:+17187196171"
                                    className="px-8 py-3 bg-[#1A2E1A] hover:bg-black text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-lg"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call Us</span>
                                </a>
                            </div>
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
                                {
                                    number: "1",
                                    title: "Home Addition Estimation Services",
                                    description: "We will provide all home addition services and structural changes. Such as the room, kitchen, and dining room. Our accurate home services will help you prevent unexpected costs and overruns."
                                },
                                {
                                    number: "2",
                                    title: "Quantity Takeoff",
                                    description: "We provide trade-specific and full-scope takeoffs depending on your project needs. We provide structural steel takeoff, masonry takeoff, and concrete takeoff, and some others"
                                },
                                {
                                    number: "3",
                                    title: "Bridge Estimating",
                                    description: "We specialize in providing bridge estimating services. We offer civil contractors,infrastructure developers, and engineers. Bridge estimating needs a high level of expertise, and we provide all."
                                },
                                {
                                    number: "4",
                                    title: "Freelance Estimating",
                                    description: "Our freelance estimating services help contractors from the loss of hiring full-time staff. Paradise Estimating professional consultants help you to avoid overruns and extra costs."
                                },
                                {
                                    number: "5",
                                    title: "Blueprint Estimating",
                                    description: "We deliver blueprint estimating services based on your design, drawings, and plans. First, architectural and structural plans are often prepared , and then we start work."
                                },
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
                                            {service.description}
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
                                                {service.description}
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
                                Industries/ Sectors We are Serving
                            </h2>
                            <p className="text-xl lg:text-2xl font-bold text-[#82E658]">
                                specialized estimating services for diverse industry sectors.
                            </p>
                        </div>

                        {/* Industries Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {[
                                "Commercial Estimating Services",
                                "Residential Estimating Services",
                                "Industrial Estimating Services",

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



                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <section className="py-8 lg:py-12 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2E1A] mb-4">
                                Our Proven Process
                            </h2>
                            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                                We receive and deliver plans according to a process. This is a very easy and simple step that everyone can understand.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 border border-transparent hover:border-[#7ED957] flex flex-col items-center text-center"
                                >
                                    {/* Number Circle */}
                                    <div className="w-16 h-16 rounded-full bg-[#2A3C2A] group-hover:bg-[#7ED957] transition-colors duration-300 flex items-center justify-center mb-6">
                                        <span className="text-2xl font-bold text-white group-hover:text-black">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#1A2E1A] mb-4">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>
                {/* Why Choose Section */}
                <section className="py-8 lg:py-12 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">
                                Why Choose Paradise Estimating
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                At Paradise Estimating, your satisfaction comes first. Our friendly support team is available 24/7 to answer your questions and solve issues. We are here to guide you through every step of the construction cost estimating process.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-[#7ED957] flex items-center justify-center mb-6 shadow-lg">
                                        <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A2E1A] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <FreeEstimateSection />


            </main>
            <Footer />
        </div>
    );
};

export default Category1;
