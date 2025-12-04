import { Button } from "@/components/ui/button";

const HelpContractorsSection = () => {
    return (
        <section className="py-8 lg:py-12 bg-[#7ED957]/10">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
                    {/* Left Content */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight">
                            How do we help <span className="text-[#7ED957]">Contractors</span> to Win Guaranteed Projects?
                        </h2>

                        <div className="text-base text-gray-600 space-y-4 leading-relaxed">
                            <ul className="space-y-3 ml-4 list-disc marker:text-[#7ED957]">
                                <li className="pl-2">
                                    Our mission is simple. We are here to empower builders and developers to grow their businesses.
                                </li>
                                <li className="pl-2">
                                    We bridge the gap between project vision and cost reality. Our target is to help contractors in today’s fast-moving construction market. Our clients, builders, and contractors can get key benefits as:
                                </li>
                                <li className="pl-2">
                                    <strong className="font-semibold text-gray-900">Contractors rely on our accuracy</strong> to submit competitive bids and win without costly overruns.
                                </li>
                                <li className="pl-2">
                                    <strong className="font-semibold text-gray-900">No human error</strong> in project timelines by using advanced techniques.
                                </li>
                                <li className="pl-2">
                                    Our <strong className="font-semibold text-gray-900">flexible outsourcing model</strong> gives instant access to professional estimators for a small residential project or a multi-million-dollar industry.
                                </li>
                                <li className="pl-2">
                                    We have helped contractors in the <strong className="font-semibold text-gray-900">U.S., Canada, the U.K., Australia, and the Middle East</strong> navigate regional market differences.
                                </li>
                                <li className="pl-2">
                                    Our insights give you a <strong className="font-semibold text-gray-900">strategic edge</strong>, not just a spreadsheet.
                                </li>
                                <li className="pl-2">
                                    We are not just a one-time service provider; we provide a <strong className="font-semibold text-gray-900">long-term estimating partner</strong>.
                                </li>
                            </ul>
                        </div>


                    </div>

                    {/* Right Image */}
                    <div className="lg:col-span-5 relative  overflow-hidden shadow-2xl">
                        <img
                            src="/assets/help.webp"
                            alt="Construction Estimating"
                            className="w-full h-full object-cover max-h-[600px] lg:min-h-[450px]"
                            loading="lazy"
                        />
                        {/* Optional Overlay/Gradient if needed to match the 'premium' feel, but standard image is requested */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpContractorsSection;
