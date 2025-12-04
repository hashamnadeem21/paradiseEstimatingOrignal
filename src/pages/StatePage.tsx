import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
    CheckCircle2, Clock, Shield, DollarSign, Users, Zap, Headphones, Phone, ChevronDown, ChevronUp, LucideIcon
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stateData } from "@/data/stateData";

const iconMap: Record<string, LucideIcon> = {
    DollarSign,
    CheckCircle2,
    Zap,
    Users,
    Shield,
    Clock,
    Headphones
};

// Helper function to colorize 2nd or 3rd word in headings
const colorizeHeading = (heading: string) => {
    const words = heading.split(' ');
    if (words.length < 2) return heading;

    // Determine which word to colorize (prefer 3rd word if exists, otherwise 2nd)
    const colorIndex = words.length >= 3 ? 1 : 0;

    return (
        <>
            {words.map((word, index) => (
                <span key={index}>
                    {index === colorIndex ? (
                        <span className="text-[#7ED957]">{word}</span>
                    ) : (
                        word
                    )}
                    {index < words.length - 1 && ' '}
                </span>
            ))}
        </>
    );
};

const StatePage = () => {
    const { state } = useParams();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [portfolioOpenIndex, setPortfolioOpenIndex] = useState<number | null>(0);

    // Normalize state slug to key (e.g., "california")
    const stateKey = state?.toLowerCase() || "california";
    const data = stateData[stateKey];

    // Fallback if data is missing
    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">State Not Found</h1>
                        <p className="text-gray-600 mb-8">Sorry, we couldn't find data for the requested state.</p>
                        <Button onClick={() => window.history.back()}>Go Back</Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const isSmallCount = data.process.steps.length <= 3;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <SEOHead
                title={`${data.stateName} Construction Estimation Service | Paradise Estimating`}
                description={`Reliable construction estimating service in ${data.stateName}. Best local construction estimators for residential, commercial, and industrial projects.`}
                canonical={`https://paradiseestimating.com/locations/${state}`}
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": `${data.stateName} Construction Estimation Service`,
                    "areaServed": {
                        "@type": "State",
                        "name": data.stateName,
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "US"
                        }
                    }
                }}
            />
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full py-12 lg:py-20 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="space-y-6">
                                <h1 className="text-2xl lg:text-4xl font-black uppercase text-[#7ED957] leading-tight">
                                    {data.stateName}{' '}
                                    <span className="text-black">Construction Estimation Service</span>
                                </h1>
                                <div className="text-base text-gray-700 font-medium leading-relaxed max-w-xl text-justify space-y-3">
                                    {data.hero.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-[#7ED957] text-black hover:bg-[#7ED957]/90 font-bold text-base px-6 py-5 rounded-full shadow-lg transition-transform hover:scale-105">
                                        Get Your Free Quote
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-base px-6 py-5 rounded-full transition-colors">
                                        <Phone className="w-5 h-5 mr-2" />
                                        (718) 719-6171
                                    </Button>
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                <div className="absolute -inset-4 bg-[#7ED957]/20 rounded-[2rem] transform rotate-3"></div>
                                <img
                                    src={data.hero.image}
                                    alt={`${data.stateName} Construction Estimating`}
                                    className="relative rounded-[1.5rem] shadow-2xl w-full object-cover h-[380px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unique Approach Section */}
                <section className="py-16 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left Content */}
                            <div className="lg:col-span-7 space-y-8">
                                <h2 className="text-2xl lg:text-4xl font-black text-black leading-tight">
                                    {colorizeHeading(data.uniqueApproach.heading)}
                                </h2>
                                <div className="w-24 h-1.5 bg-[#7ED957] rounded-full"></div>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                                    {data.uniqueApproach.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                                <Button className="bg-gradient-to-r from-[#7ED957] to-[#6BC847] text-black hover:from-[#6BC847] hover:to-[#7ED957] font-black text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden group">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="text-2xl">🎉</span>
                                        Avail 50% OFF Discount Now!
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                            </div>

                            {/* Right List */}
                            <div className="lg:col-span-5 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {data.uniqueApproach.points.map((item, index) => (
                                        <div key={index} className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[#7ED957] transition-all duration-300 group">
                                            <div className="w-10 h-10 rounded-full bg-[#7ED957]/10 flex items-center justify-center text-[#7ED957] group-hover:bg-[#7ED957] group-hover:text-white transition-colors mb-3">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-bold text-gray-900 leading-tight">{item}</h3>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-black text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#7ED957]/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                    <div className="relative z-10 flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-[#7ED957] flex items-center justify-center text-black shadow-[0_0_20px_rgba(126,217,87,0.4)]">
                                            <Clock className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-[#7ED957] font-bold uppercase tracking-wider text-sm mb-1">Turnaround Time</p>
                                            <p className="text-3xl font-black">{data.uniqueApproach.turnaroundTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-12 relative overflow-hidden bg-[#7ED957]">
                    {/* Dreamy Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-3xl mx-auto bg-white/20 backdrop-blur-lg border border-white/30 rounded-[2.5rem] p-8 lg:p-10 text-center shadow-xl"
                        >
                            <h2 className="text-xl lg:text-3xl font-black text-black mb-8 leading-tight">
                                {data.cta.heading}
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button className="bg-black text-white hover:bg-black/80 text-base font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                                    Contact Us Now
                                </Button>
                                <Button variant="outline" className="bg-transparent border-4 border-black text-black hover:bg-black hover:text-white text-base font-bold py-6 px-8 rounded-xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                                    Get a Free Quote
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Reliable Services Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left Content */}
                            <div className="lg:col-span-6 space-y-8">
                                <h2 className="text-2xl lg:text-4xl font-black text-black mb-6 leading-tight">
                                    {colorizeHeading(data.reliableServices.heading)}
                                </h2>
                                <div className="space-y-6 text-base text-gray-600 text-justify leading-relaxed">
                                    {data.reliableServices.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Right List (The Box) */}
                            <div className="lg:col-span-6">
                                <div className="bg-[#7ED957]/5 p-8 lg:p-10 rounded-3xl shadow-xl border border-[#7ED957]/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#7ED957]/10 rounded-bl-full -mr-8 -mt-8"></div>

                                    <h3 className="text-2xl font-bold mb-8 text-black relative z-10">Our Services:</h3>
                                    <ul className="grid grid-cols-2 gap-x-6 gap-y-4 relative z-10">
                                        {data.reliableServices.services.map((service, index) => (
                                            <li key={index} className="flex items-start gap-3 group">
                                                <div className="w-2 h-2 rounded-full bg-[#7ED957] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                                <span className="font-bold text-gray-800 leading-tight">{service.title}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Estimates & Takeoff Services Section */}
                <section className="py-16 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-2xl lg:text-4xl font-black text-black mb-6 leading-tight">
                                {colorizeHeading(data.estimatesAndTakeoff.heading)}
                            </h2>
                            <p className="text-base text-gray-600 leading-relaxed">
                                {data.estimatesAndTakeoff.description}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.estimatesAndTakeoff.cards.map((card, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.currentTarget.src = "/assets/services.png"; // Fallback image
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#7ED957] transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {card.desc}
                                        </p>
                                        <ul className="space-y-2">
                                            {card.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#7ED957] mt-1.5 flex-shrink-0"></div>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Services & Trades Section */}
                <section className="py-16 lg:py-24 bg-[#1A1F2C] text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#7ED957 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Left: Services List */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-2xl lg:text-4xl font-black mb-6 leading-tight">
                                        {colorizeHeading(data.detailedServices.heading)}
                                    </h2>
                                    <div className="w-20 h-1.5 bg-[#7ED957] rounded-full mb-8"></div>
                                    {data.detailedServices.description.map((desc, index) => (
                                        <p key={index} className="text-gray-300 text-base leading-relaxed mb-8">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Trades Grid */}
                            <div className="bg-white text-black p-8 lg:p-10 rounded-3xl shadow-2xl">
                                <h3 className="text-2xl font-black mb-8 border-b border-gray-100 pb-4">
                                    Trades We Cover
                                </h3>
                                <div className="grid sm:grid-cols-3 gap-x-4 gap-y-4">
                                    {data.detailedServices.trades.map((trade, index) => (
                                        <div key={index} className="flex items-center gap-3 group cursor-default">
                                            <div className="w-2 h-2 bg-[#7ED957] rounded-full group-hover:scale-150 transition-transform"></div>
                                            <span className="font-bold text-gray-700 group-hover:text-black transition-colors">{trade}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-100">
                                    <Button className="w-full bg-[#7ED957] text-black hover:bg-[#7ED957]/90 font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                        Get a Quote for Your Trade
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Our Clients Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center max-w-4xl mx-auto mb-12">
                            <h2 className="text-2xl lg:text-4xl font-black text-black mb-6 leading-tight">
                                {colorizeHeading(data.ourClients.heading)}
                            </h2>
                            {data.ourClients.description.map((desc, index) => (
                                <p key={index} className={`text-base text-gray-600 leading-relaxed ${index === data.ourClients.description.length - 1 ? "font-bold" : "mb-6"}`}>
                                    {desc}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {data.ourClients.clients.map((client, index) => (
                                <div key={index} className="bg-[#7ED957]/10 rounded-xl p-6 text-center hover:bg-[#7ED957] hover:text-white transition-all duration-300 group cursor-default shadow-sm hover:shadow-lg border border-[#7ED957]/20 w-[calc(20%-1.2rem)] min-w-[150px]">
                                    <span className="font-bold text-lg">{client}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 lg:py-24 bg-[#111] text-white relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7ED957] rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7ED957] rounded-full blur-[120px]"></div>
                    </div>

                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-2xl lg:text-4xl font-black mb-6 leading-tight">
                                {colorizeHeading(data.process.heading)}
                            </h2>
                            <p className="text-base text-gray-300 leading-relaxed mb-8">
                                {data.process.description}
                            </p>
                            <div className="inline-block bg-[#7ED957] text-black font-bold px-6 py-2 rounded-full">
                                {!isSmallCount ? "The process we follow while doing estimations is:" : "The procedure we follow while doing estimations is:"}
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                            {(() => {
                                // Check if any step has a description
                                const hasAnyDescription = data.process.steps.some(step =>
                                    typeof step === 'object' && step.description && step.description.trim() !== ''
                                );

                                return data.process.steps.map((step, index) => {
                                    const stepTitle = typeof step === 'string' ? step : step.title;
                                    const stepDescription = typeof step === 'object' ? step.description : undefined;
                                    const showDescription = stepDescription && stepDescription.trim() !== '';

                                    // Determine width classes based on step count
                                    const widthClass = isSmallCount
                                        ? 'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] max-w-sm'
                                        : 'w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(16.666%-1.25rem)]';

                                    return (
                                        <div key={index} className={`relative group ${widthClass}`}>
                                            <div className="bg-[#1A1F2C] p-6 rounded-2xl border border-gray-800 hover:border-[#7ED957] transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 h-full">
                                                <div className="w-12 h-12 rounded-2xl bg-[#7ED957]/10 text-[#7ED957] font-black text-xl flex items-center justify-center mb-4 group-hover:bg-[#7ED957] group-hover:text-black transition-colors">
                                                    {index + 1}
                                                </div>
                                                <h3 className="font-bold text-base leading-tight mb-2">{stepTitle}</h3>
                                                {showDescription && (
                                                    <p className="text-sm text-gray-400 leading-relaxed mt-2">{stepDescription}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>
                </section>

                {/* Tools & Software Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <h2 className="text-2xl lg:text-4xl font-black text-black leading-tight">
                                    {colorizeHeading(data.tools.heading)}
                                </h2>
                                <div className="w-24 h-1.5 bg-[#7ED957] rounded-full"></div>
                                <div className="space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                                    {data.tools.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold">
                                                User
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm font-bold">
                                        <span className="text-[#7ED957]">{data.tools.bidWinRatio}</span> Bid Win Ratio
                                    </div>
                                </div>
                            </div>

                            {/* Right Tools Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {data.tools.toolsList.map((tool, index) => {
                                    const Icon = tool.iconName ? iconMap[tool.iconName] : null;
                                    return (
                                        <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#7ED957] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 group text-center h-full">
                                            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-sm p-2 group-hover:scale-110 transition-transform duration-300">
                                                {tool.image ? (
                                                    <img
                                                        src={tool.image}
                                                        alt={tool.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <div className="text-gray-400 group-hover:text-[#7ED957] transition-colors">
                                                        {Icon && <Icon className="w-8 h-8" />}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-bold text-gray-800 group-hover:text-black transition-colors">{tool.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expert Local Estimating Service Section */}
                <section className="py-16 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-6">
                        {/* Centered Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl lg:text-4xl font-black text-black leading-tight mb-6 line-clamp-2 text-center">
                                {colorizeHeading(data.expertLocalService.heading)}
                            </h2>
                            <div className="w-24 h-1.5 bg-[#7ED957] rounded-full mx-auto"></div>
                        </div>

                        {/* Two Column Content */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <div className="space-y-4 text-base text-gray-700 leading-relaxed text-justify">
                                    {data.expertLocalService.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                                <Button className="bg-[#7ED957] text-black hover:bg-[#7ED957]/90 font-bold text-base px-6 py-5 rounded-full shadow-lg transition-transform hover:scale-105">
                                    Get Started Today
                                </Button>
                            </div>

                            {/* Right Image */}
                            <div className="relative flex items-center">
                                <div className="absolute -inset-4 bg-[#7ED957]/20 rounded-[2rem] transform -rotate-3"></div>
                                <img
                                    src={data.expertLocalService.image}
                                    alt={`Construction Estimating in ${data.stateName}`}
                                    className="relative rounded-[1.5rem] shadow-2xl w-full object-cover h-[380px]"
                                    onError={(e) => {
                                        e.currentTarget.src = "/assets/services.png";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl lg:text-4xl font-bold text-black">
                                Frequently <span className="text-[#7ED957]">Asked</span> Questions
                            </h2>

                        </div>

                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex flex-col gap-4">
                                {data.faq.items.filter((_, index) => index % 2 === 0).map((faq, index) => {
                                    const actualIndex = index * 2;
                                    const isOpen = openIndex === actualIndex;
                                    return (
                                        <div
                                            key={actualIndex}
                                            className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-[#7ED957]"}`}
                                        >
                                            <button
                                                onClick={() => toggleFAQ(actualIndex)}
                                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-lg font-bold text-black pr-4">
                                                    {faq.question}
                                                </span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-6 h-6 text-black flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-6 h-6 text-black flex-shrink-0" />
                                                )}
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-4">
                                {data.faq.items.filter((_, index) => index % 2 !== 0).map((faq, index) => {
                                    const actualIndex = index * 2 + 1;
                                    const isOpen = openIndex === actualIndex;
                                    return (
                                        <div
                                            key={actualIndex}
                                            className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-[#7ED957]"}`}
                                        >
                                            <button
                                                onClick={() => toggleFAQ(actualIndex)}
                                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-lg font-bold text-black pr-4">
                                                    {faq.question}
                                                </span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-6 h-6 text-black flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-6 h-6 text-black flex-shrink-0" />
                                                )}
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="py-16 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl lg:text-4xl font-black text-black mb-6 leading-tight">
                                {colorizeHeading(data.portfolio.heading)}
                            </h2>
                            <div className="w-24 h-1.5 bg-[#7ED957] rounded-full mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div className="space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                                    {data.portfolio.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                                <Button className="bg-[#7ED957] text-black hover:bg-[#7ED957]/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                                    Our Estimation Samples Document
                                </Button>
                            </div>

                            {/* Right Accordion */}
                            <div className="flex flex-col gap-4">
                                {data.portfolio.items.map((item, index) => {
                                    const isOpen = portfolioOpenIndex === index;
                                    return (
                                        <div
                                            key={index}
                                            className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-gray-200"}`}
                                        >
                                            <button
                                                onClick={() => setPortfolioOpenIndex(isOpen ? null : index)}
                                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-lg font-bold text-black pr-4">
                                                    {item.heading}
                                                </span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-6 h-6 text-black flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-6 h-6 text-black flex-shrink-0" />
                                                )}
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-white">
                                                            {item.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Area Near Me Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <h2 className="text-2xl lg:text-4xl font-black text-black leading-tight">
                                    {colorizeHeading(data.areaNearMe.heading)}
                                </h2>
                                <div className="w-24 h-1.5 bg-[#7ED957] rounded-full"></div>
                                <div className="space-y-6 text-base text-gray-700 leading-relaxed text-justify">
                                    {data.areaNearMe.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Right Map */}
                            <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(data.stateName)}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
                                    allowFullScreen
                                    title={`Map of ${data.stateName}`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default StatePage;
