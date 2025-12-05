
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
    const PACKAGES = [
        {
            title: "Single Trade Package",
            scope: "Single Trade",
            description: "Ideal for subcontractors focusing on a single trade (e.g., electrical, plumbing, HVAC). Includes detailed Quantity takeoffs and trade-specific cost analysis.",
            price: "$150 - $250",
            priceUnit: "per project",
            features: [
                { label: "Turnaround Time", value: "Within two working days" },
                { label: "Revisions", value: "Multiple revisions allowed" },
                { label: "Coverage", value: "All USA Regions" }
            ]
        },
        {
            title: "Standard Package",
            scope: "Multiple Trade / GC",
            description: "Best for general contractors handling small to mid size projects. Includes complete trade breakdown, CSI-Coded summary and pricing sheets.",
            price: "$400 - $600",
            priceUnit: "per project",
            features: [
                { label: "Turnaround Time", value: "Within four working days" },
                { label: "Revisions", value: "Multiple revisions allowed" },
                { label: "Coverage", value: "All USA Regions" }
            ]
        },
        {
            title: "Premium Packages",
            scope: "Full Project Estimation",
            description: "Designed for large GC or developers needing Comprehensive and prioritized estimates. Includes Value engineering, detailed reports, and clarifications.",
            price: "$1000 - $1500",
            priceUnit: "per project",
            features: [
                { label: "Turnaround Time", value: "Within four working days" },
                { label: "Revisions", value: "Unlimited revisions" },
                { label: "Coverage", value: "All USA Regions" }
            ],
            isPopular: true
        },
        {
            title: "Residential Monthly Package",
            scope: "Residential Project",
            description: "For builders or contractors managing residential projects per month. Includes recurring report, project tracking, and fast delivery.",
            price: "$2500 - $3500",
            priceUnit: "per month",
            features: [
                { label: "No. of Projects", value: "15" },
                { label: "Project Size", value: "Two story buildings" },
                { label: "Turnaround Time", value: "3 days per project" },
                { label: "Revisions", value: "Multiple revisions" },
                { label: "Coverage", value: "All USA Regions" }
            ]
        },
        {
            title: "Commercial Monthly Package",
            scope: "Commercial Project",
            description: "For commercial GCs and developers needing consistent monthly estimating support. Includes material takeoffs and dedicated estimator access.",
            price: "$3500 - $4500",
            priceUnit: "per month",
            features: [
                { label: "No. of Projects", value: "15" },
                { label: "Project Size", value: "10,000 SF to 20,000 SF" },
                { label: "Turnaround Time", value: "3 days per project" },
                { label: "Revisions", value: "Multiple revisions" },
                { label: "Coverage", value: "All USA Regions" }
            ]
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "PriceList",
        "name": "Paradise Estimating Pricing",
        "description": "Construction estimating service packages and pricing",
        "offers": PACKAGES.map(pkg => ({
            "@type": "Offer",
            "name": pkg.title,
            "description": pkg.description,
            "priceCurrency": "USD",
            "price": pkg.price.replace(/[^0-9]/g, "") // Simplified price representation
        }))
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title="Pricing | Construction Estimating Services Costs"
                description="Transparent pricing for construction estimating services. Single trade, full project, and monthly packages available."
                canonical="https://paradiseestimating.com/pricing"
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
                                Transparent <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary bg-300% animate-gradient">
                                    Pricing Packages
                                </span>
                            </h1>

                            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mt-10 mx-auto leading-relaxed font-light">
                                Choose the package that fits your project requirements. From single trades to comprehensive monthly support, we have you covered.
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

                {/* Pricing Packages Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
                                Transparent <span className="text-[#7ED957]">Pricing</span> For Every Need
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Choose the package that fits your project requirements. From single trades to comprehensive monthly support, we have you covered.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {PACKAGES.map((pkg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col bg-white rounded-2xl p-8 shadow-lg border-2 ${pkg.isPopular ? 'border-[#7ED957]' : 'border-transparent'} hover:border-[#7ED957]/50 transition-colors w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]`}
                                >
                                    {pkg.isPopular && (
                                        <div className="absolute top-0 right-0 bg-[#7ED957] text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-6 text-center">
                                        <h3 className="text-2xl font-bold text-black mb-2">{pkg.title}</h3>
                                        <p className="text-[#7ED957] font-semibold text-sm uppercase tracking-wide mb-4">{pkg.scope}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
                                    </div>

                                    <div className="mb-8 p-4 bg-gray-50 rounded-xl text-center">
                                        <span className="block text-3xl font-black text-black">{pkg.price}</span>
                                        <span className="text-gray-500 text-sm">{pkg.priceUnit}</span>
                                    </div>

                                    <div className="space-y-4 mb-8 flex-grow">
                                        <h4 className="font-bold text-black text-sm uppercase border-b border-gray-100 pb-2 text-center">Package Details</h4>
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex justify-between items-start text-sm gap-4">
                                                <span className="text-gray-500 font-medium whitespace-nowrap">{feature.label}:</span>
                                                <span className="text-black font-semibold text-right">{feature.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        onClick={() => window.location.href = "/contact"}
                                        className={`w-full font-bold py-6 rounded-xl text-base ${pkg.isPopular
                                            ? 'bg-[#7ED957] text-black hover:bg-[#6BC847]'
                                            : 'bg-black text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        Get Started
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;
