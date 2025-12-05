import Footer from "@/components/Footer";
import FreeEstimateSection from "@/components/FreeEstimateSection";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import ServiceContentWithForm from "@/components/ServiceContentWithForm";
import { getServiceTemplateData } from "@/data/serviceTemplateData";
import { P } from "node_modules/framer-motion/dist/types.d-BJcRxCew";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";


// Trade Accordion Item Component
const TradeAccordionItem = ({
    trade,
    isExpanded,
    onToggle
}: {
    trade: { title: string; description: string };
    isExpanded: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7ED957] transition-all duration-300 overflow-hidden">
            {/* Header - Always Visible */}
            <button
                onClick={onToggle}
                className="w-full p-4 lg:p-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
            >
                <h3 className="text-base lg:text-lg font-bold text-black pr-3">
                    {trade.title}
                </h3>

                {/* Plus/Minus Icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#7ED957] flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="px-4 lg:px-5 pb-4 lg:pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="pt-3 border-t border-gray-300">
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {trade.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

// Trades Accordion Wrapper Component
const TradesAccordion = ({ trades }: { trades: { title: string; description: string }[] }) => {
    const [expandedLeftIndex, setExpandedLeftIndex] = useState<number | null>(0);
    const [expandedRightIndex, setExpandedRightIndex] = useState<number | null>(0);

    // Split trades into two columns
    const leftColumnTrades = trades.filter((_, index) => index % 2 === 0);
    const rightColumnTrades = trades.filter((_, index) => index % 2 === 1);

    return (
        <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* Left Column */}
            <div className="space-y-6">
                {leftColumnTrades.map((trade, index) => (
                    <TradeAccordionItem
                        key={index}
                        trade={trade}
                        isExpanded={expandedLeftIndex === index}
                        onToggle={() => setExpandedLeftIndex(expandedLeftIndex === index ? null : index)}
                    />
                ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                {rightColumnTrades.map((trade, index) => (
                    <TradeAccordionItem
                        key={index}
                        trade={trade}
                        isExpanded={expandedRightIndex === index}
                        onToggle={() => setExpandedRightIndex(expandedRightIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

// Portfolio Accordion Item Component
const PortfolioAccordionItem = ({
    item,
    index,
    isExpanded,
    onToggle
}: {
    item: {
        title: string;
        description: string;
        points?: string[];
        deliverables?: string[];
        subheading?: string;
    };
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 hover:border-[#7ED957] transition-all duration-300 overflow-hidden shadow-sm">
            {/* Header - Always Visible */}
            <button
                onClick={onToggle}
                className="w-full p-4 lg:p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#7ED957] text-black font-bold flex items-center justify-center text-xs">
                        {index + 1}
                    </span>
                    <h3 className="text-base lg:text-lg font-bold text-black pr-2 min-h-[3.5rem] flex items-center">
                        {item.title}
                    </h3>
                </div>

                {/* Plus/Minus Icon */}
                <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="px-4 lg:px-5 pb-4 lg:pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="pt-3 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-sm mb-3">
                            {item.description}
                        </p>
                        {item.subheading && !item.deliverables && (
                            <h4 className="font-bold text-black text-sm mt-3 mb-2">{item.subheading}</h4>
                        )}
                        {item.points && (
                            <ul className="space-y-1.5 mb-3">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="text-[#7ED957] flex-shrink-0 text-sm">•</span>
                                        <span className="text-gray-700 text-sm">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {item.deliverables && (
                            <div className="mt-3 bg-gray-50 rounded-lg p-3">
                                <h4 className="font-bold text-black text-sm mb-2">Deliverables Include:</h4>
                                <ul className="space-y-1.5">
                                    {item.deliverables.map((deliverable, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="text-[#7ED957] flex-shrink-0 text-sm">✓</span>
                                            <span className="text-gray-700 text-sm">{deliverable}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
};

// Portfolio Accordion Wrapper Component
const PortfolioAccordion = ({ items }: { items: any[] }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const itemsWithIndex = items.map((item, index) => ({ ...item, originalIndex: index }));

    const renderColumns = (columnCount: number) => {
        const cols = Array.from({ length: columnCount }, () => [] as typeof itemsWithIndex);
        itemsWithIndex.forEach((item, i) => {
            cols[i % columnCount].push(item);
        });

        return (
            <div className="flex gap-6 items-start">
                {cols.map((colItems, colIndex) => (
                    <div key={colIndex} className="flex-1 space-y-6">
                        {colItems.map((item) => (
                            <PortfolioAccordionItem
                                key={item.originalIndex}
                                item={item}
                                index={item.originalIndex}
                                isExpanded={expandedIndex === item.originalIndex}
                                onToggle={() => setExpandedIndex(expandedIndex === item.originalIndex ? null : item.originalIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:block">
                {renderColumns(3)}
            </div>
            {/* Tablet */}
            <div className="hidden md:block lg:hidden">
                {renderColumns(2)}
            </div>
            {/* Mobile */}
            <div className="md:hidden space-y-6">
                {itemsWithIndex.map((item) => (
                    <PortfolioAccordionItem
                        key={item.originalIndex}
                        item={item}
                        index={item.originalIndex}
                        isExpanded={expandedIndex === item.originalIndex}
                        onToggle={() => setExpandedIndex(expandedIndex === item.originalIndex ? null : item.originalIndex)}
                    />
                ))}
            </div>
        </>
    );
};

// Why Choose Accordion Item Component
const WhyChooseAccordionItem = ({
    item,
    index,
    isExpanded,
    onToggle
}: {
    item: {
        title: string;
        description: string;
        bullets?: string[];
    };
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 hover:border-[#7ED957] transition-all duration-300 overflow-hidden shadow-sm">
            {/* Header - Always Visible */}
            <button
                onClick={onToggle}
                className="w-full p-4 lg:p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7ED957]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#7ED957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-black pr-2">
                        {item.title}
                    </h3>
                </div>

                {/* Plus/Minus Icon */}
                <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="px-4 lg:px-5 pb-4 lg:pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="pt-3 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-sm mb-3">
                            {item.description}
                        </p>
                        {item.bullets && (
                            <ul className="space-y-1.5">
                                {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="text-[#7ED957] flex-shrink-0 text-sm">•</span>
                                        <span className="text-gray-700 text-sm">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// Why Choose Accordion Wrapper Component
const WhyChooseAccordion = ({ items }: { items: any[] }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <WhyChooseAccordionItem
                    key={index}
                    item={item}
                    index={index}
                    isExpanded={expandedIndex === index}
                    onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};

// Service FAQ Section Component
const ServiceFAQSection = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Split FAQs into two columns
    const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
    const rightColumnFaqs = faqs.filter((_, index) => index % 2 !== 0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Helper function to render answer with bullet points
    const renderAnswer = (answer: string) => {
        const lines = answer.split('\n');
        const hasBullets = lines.some(line => line.trim().startsWith('•'));

        if (!hasBullets) {
            return <p className="text-gray-600 leading-relaxed">{answer}</p>;
        }

        return (
            <div className="text-gray-600 leading-relaxed">
                {lines.map((line, idx) => {
                    if (line.trim().startsWith('•')) {
                        return (
                            <div key={idx} className="flex items-start gap-2 mb-2">
                                <span className="text-[#7ED957] mt-1">•</span>
                                <span>{line.trim().substring(1).trim()}</span>
                            </div>
                        );
                    } else if (line.trim()) {
                        return <p key={idx} className="mb-2">{line}</p>;
                    }
                    return null;
                })}
            </div>
        );
    };

    return (
        <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold text-black">
                        Frequently <span className="text-[#7ED957]">Asked</span> Questions
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {leftColumnFaqs.map((faq, index) => {
                            const actualIndex = index * 2;
                            const isOpen = openIndex === actualIndex;
                            return (
                                <div
                                    key={actualIndex}
                                    className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-[#7ED957]"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(actualIndex)}
                                        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black pr-4">
                                            {faq.question}
                                        </span>
                                        {isOpen ? (
                                            <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                            {renderAnswer(faq.answer)}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        {rightColumnFaqs.map((faq, index) => {
                            const actualIndex = index * 2 + 1;
                            const isOpen = openIndex === actualIndex;
                            return (
                                <div
                                    key={actualIndex}
                                    className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-[#7ED957]"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(actualIndex)}
                                        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black pr-4">
                                            {faq.question}
                                        </span>
                                        {isOpen ? (
                                            <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                            {renderAnswer(faq.answer)}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper function to colorize 2nd or 3rd word in headings
const colorizeHeading = (heading: string) => {
    const words = heading.split(' ');
    if (words.length < 2) return heading;

    // Determine which word to colorize (prefer 2nd word)
    const colorIndex = words.length >= 2 ? 1 : 0;

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

const ServiceTemplate = () => {
    const { slug } = useParams<{ slug: string }>();

    // Get service data from external file
    const service = getServiceTemplateData(slug || 'residential-estimating');

    // If service not found, redirect to 404 or show residential by default
    if (!service) {
        return (
            <Navigate to="/NotFound" />
        );
    }

    return (
        <div className="min-h-screen">
            <SEOHead
                title={`${service.title} | Paradise Estimating`}
                description={service.description}
                canonical={`https://www.paradiseestimating.com/services/${slug}`}
            />
            <Header />
            <main>
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
                                {colorizeHeading(service.content.heroTitle)}
                            </h1>

                            <p className="text-xl lg:text-2xl  tracking-wider text-black mb-6">
                                {service.content.heroSubtitle}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <ServiceContentWithForm
                    mainHeading={service.content.mainHeading}
                    heading={service.content.heading}
                    tagline={service.content.tagline}
                    description={service.content.description}
                    items={service.content.items}
                    SubDescription={service.content.SubDescription}
                />

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>
                {/* Takeoff Process */}
                <section className="py-8 lg:py-12 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#1A2E1A] mb-4">
                                {colorizeHeading(service.content.processHeading)}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6 w-[50%] mx-auto">
                                {service.content.processDescription}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.content.processSteps.map((step, index) => (
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
                                    <p className="text-gray-500 leading-relaxed text-sm text-center">
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
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-5xl font-black text-black mb-4">
                                {colorizeHeading(service.content.whyChooseHeading)}
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column - Intro & Image */}
                            <div className="space-y-8">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {service.content.whyChooseIntro}
                                </p>
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/governmental.webp"
                                        alt="Why Choose Us"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Right Column - Accordion */}
                            <div>
                                <WhyChooseAccordion items={service.content.whyChoose} />
                            </div>
                        </div>
                    </div>
                </section>



                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* Residential Estimating Trades Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-5xl font-black text-black mb-4">
                                {colorizeHeading(service.content.tradesHeading)}
                            </h2>
                        </div>
                        <div className=" max-w-5xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
                                {service.content.tradesIntro}
                            </p>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                <ul className="space-y-4">
                                    {service.content.tradesOverview.slice(0, Math.ceil(service.content.tradesOverview.length / 2)).map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#7ED957] flex-shrink-0" />
                                            <span className="text-gray-800 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {service.content.tradesOverview.slice(Math.ceil(service.content.tradesOverview.length / 2)).map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#7ED957] flex-shrink-0" />
                                            <span className="text-gray-800 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <TradesAccordion trades={service.content.trades} />


                    </div>
                </section>



                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* Portfolio Section */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">
                                {colorizeHeading(service.content.portfolio.heading)}
                            </h2>
                            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
                                {service.content.portfolio.intro}
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto text-left">
                                <ul className="space-y-4">
                                    {service.content.portfolio.overview.slice(0, Math.ceil(service.content.portfolio.overview.length / 3)).map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#7ED957] flex-shrink-0" />
                                            <span className="text-gray-800 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {service.content.portfolio.overview.slice(Math.ceil(service.content.portfolio.overview.length / 3), Math.ceil(service.content.portfolio.overview.length * 2 / 3)).map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#7ED957] flex-shrink-0" />
                                            <span className="text-gray-800 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {service.content.portfolio.overview.slice(Math.ceil(service.content.portfolio.overview.length * 2 / 3)).map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#7ED957] flex-shrink-0" />
                                            <span className="text-gray-800 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="w-full">
                            <PortfolioAccordion items={service.content.portfolio.items} />
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* Residential Services Near Me Section */}
                <section className="py-12 lg:py-16 bg-gray-900 text-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 text-center">
                            {colorizeHeading(service.content.nearbyAreasHeading)}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {service.content.nearbyAreas.map((area, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full hover:bg-[#7ED957] hover:text-black transition-colors cursor-pointer border border-gray-700"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* FAQ Section */}
                <ServiceFAQSection faqs={service.content.faqs} />

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                <FreeEstimateSection />
            </main>
            <Footer />
        </div>
    );
};

export default ServiceTemplate;
