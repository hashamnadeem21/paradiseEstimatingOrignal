import { useState } from "react";
import { Button } from "@/components/ui/button";

const HowToBeginSection = () => {
    const [openIndex, setOpenIndex] = useState(2); // "Get A Quote" open by default (index 2)

    const steps = [
        {
            number: "1",
            title: "Submit Your Drawing Plans",
            description: "First, send your drawings or blueprints (PDF, DWG, or CAD) on our contact number or gmail. Add all details about the project, such as scope, trade, and deadlines. Our team will review all the details of your submitted plans and provide an estimate. So that you will get an accurate estimation of your plans on time, with an accurate budget.",
        },
        {
            number: "2",
            title: "We Review The Plans",
            description: "We will review your plans after preparing material quantities, labor costs, and pricing breakdowns. We will check your estimate according to the local market rates.",
        },
        {
            number: "3",
            title: "Get A Quote & Approval",
            description: "We will review your documents in detail. We will send you a custom quote based on project size, trade, and complexity. After your approval, we will assign an estimator specialized in your project type to you.",
        },
        {
            number: "4",
            title: "Receive an Estimate",
            description: "You will receive your complete estimate report in Excel and PDF formats. CSI divisions, cost summaries, and detailed line items will also be included in the provided list. We also offer follow-up revisions in case of scope or design updates.",
        },
    ];

    return (
        <section className="py-4 lg:py-6 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl lg:text-4xl font-black text-black mb-2">
                        How to Begin <span className="text-[#7ED957]">Construction</span> Estimation
                    </h2>
                    <h2 className="text-3xl lg:text-4xl font-black text-black">
                        & Quantity Takeoffs with Us
                    </h2>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
                    {/* Left - Image */}
                    <div className="flex justify-center">
                        <img
                            src="/assets/estimation.webp"
                            alt="Construction Estimation Process"
                            className="w-full max-w-lg h-auto object-contain"
                            loading="lazy"
                        />
                    </div>

                    {/* Right - Vertical Progress Bar Accordion */}
                    <div className="relative pl-2">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex gap-6">
                                {/* Vertical Line */}
                                {index < steps.length - 1 && (
                                    <div
                                        className={`absolute left-[23px] top-12 w-0.5 h-[calc(100%-12px)] border-l-2 border-dashed z-0 ${openIndex === index ? "border-[#7ED957]" : "border-gray-300"
                                            }`}
                                    ></div>
                                )}

                                {/* Number Circle */}
                                <div className="relative z-10 flex-shrink-0">
                                    <button
                                        onClick={() => setOpenIndex(index)}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border-2 transition-all duration-300 ${openIndex === index
                                            ? "bg-[#4ca928] text-white border-[#4ca928]"
                                            : "bg-white text-black border-gray-300 hover:border-[#7ED957]"
                                            }`}
                                    >
                                        {step.number}
                                    </button>
                                </div>

                                {/* Content */}
                                <div className={`flex-1 pb-4 ${index !== steps.length - 1 ? "border-b border-gray-100" : ""}`}>
                                    <button
                                        onClick={() => setOpenIndex(index)}
                                        className="text-left w-full pt-2"
                                    >
                                        <h3 className="text-xl font-medium text-black mb-2">
                                            {step.title}
                                        </h3>
                                    </button>

                                    {/* Description */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* CTA Button */}
                        <div className="flex  items-center lg:items-center flex-shrink-0 mt-8">
                            <Button
                                className="bg-[#82E658] hover:bg-[#72d648] text-black font-black text-lg lg:text-xl px-4 py-4 lg:py-3 h-auto rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all  uppercase tracking-wide animate-bounce"
                            >
                                <a href="tel:+17187196171" className="flex items-center gap-2">
                                    START WINNING 30% OFF!
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HowToBeginSection;
