import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { FileText, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Categories provided by the user
const categories = [
    "All",
    "Concrete",
    "Drywalls",
    "Electrical",
    "GC",
    "HVAC",
    "HVAC & Plumbing",
    "MEP",
    "Metals",
    "Roofing",
    "Plumbing",
    "Sitework",
    "Sitework & Grading",
    "Sprinkler System & Plumbing"
];

// Configuration for available samples per category
const categoryConfig: Record<string, number> = {
    "Concrete": 2,
    "Drywalls": 2,
    "Electrical": 1,
    "GC": 3,
    "HVAC": 1,
    "HVAC & Plumbing": 1,
    "MEP": 1,
    "Metals": 1,
    "Roofing": 1,
    "Plumbing": 1,
    "Sitework": 1,
    "Sitework & Grading": 1,
    "Sprinkler System & Plumbing": 1
};

// Dummy data generation
const generateSamples = () => {
    const samples = [];
    const baseCategories = categories.filter(c => c !== "All");

    baseCategories.forEach((cat) => {
        const count = categoryConfig[cat] !== undefined ? categoryConfig[cat] : 2;

        for (let i = 1; i <= count; i++) {
            let imageUrl = null;
            // Specific images for Concrete samples
            if (cat === "Concrete") {
                if (i === 1) imageUrl = "/assets/samples/concrete-1.png";
                if (i === 2) imageUrl = "/assets/samples/concrete-2.png";
            }

            else if (cat === "Drywalls") {
                if (i === 1) imageUrl = "/assets/samples/Drywall-1.png";
                if (i === 2) imageUrl = "/assets/samples/Drywall-2.png";
            }
            else if (cat === "Electrical") {
                if (i === 1) imageUrl = "/assets/samples/Electrical.png";
            }
            else if (cat === "GC") {
                if (i === 1) imageUrl = "/assets/samples/GC1.png";
                if (i === 2) imageUrl = "/assets/samples/GC2.png";
                if (i === 3) imageUrl = "/assets/samples/GC3.png";
            }
            else if (cat === "HVAC") {
                if (i === 1) imageUrl = "/assets/samples/HVAC.png";
            }
            else if (cat === "HVAC & Plumbing") {
                if (i === 1) imageUrl = "/assets/samples/HVACP.png";
            }
            else if (cat === "MEP") {
                if (i === 1) imageUrl = "/assets/samples/MEP.png";
            }
            else if (cat === "Metals") {
                if (i === 1) imageUrl = "/assets/samples/metals.png";
            }
            else if (cat === "Roofing") {
                if (i === 1) imageUrl = "/assets/samples/Roofing.png";
            }
            else if (cat === "Plumbing") {
                if (i === 1) imageUrl = "/assets/samples/Plumbing.png";
            }
            else if (cat === "Sitework") {
                if (i === 1) imageUrl = "/assets/samples/SiteWork.png";
            }
            else if (cat === "Sitework & Grading") {
                if (i === 1) imageUrl = "/assets/samples/SiteG.png";
            }
            else if (cat === "Sprinkler System & Plumbing") {
                if (i === 1) imageUrl = "/assets/samples/sprinkler.jpeg";
            }

            samples.push({
                id: `${cat}-${i}`,
                title: `${cat} Project Sample ${i}`,
                category: cat,
                description: `Detailed estimation and takeoff for a commercial ${cat.toLowerCase()} project.`,
                pdfUrl: `/samples/${cat.toLowerCase().replace(/ /g, '-')}-sample-${i}.pdf`,
                imageUrl: imageUrl
            });
        }
    });
    return samples;
};

const allSamples = generateSamples();

const Sample = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSamples = activeCategory === "All"
        ? allSamples
        : allSamples.filter(sample => sample.category === activeCategory);

    const handleSampleClick = (pdfUrl: string) => {
        // In a real scenario, this would open the PDF
        // For now, we'll try to open it, but if it doesn't exist, it might 404
        window.open(pdfUrl, '_blank');
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Construction Estimating Samples",
        "description": "Browse our collection of construction estimating samples across various trades including Concrete, HVAC, Electrical, and more."
    };

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
            <SEOHead
                title="Estimating Samples | Paradise Estimating"
                description="View our professional construction estimating samples. We cover all trades including Concrete, Electrical, HVAC, Plumbing, and more."
                canonical="https://paradiseestimating.com/sample"
                structuredData={structuredData}
            />
            <Header />

            <main className="pb-20">
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
                                How We Estimate <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary bg-300% animate-gradient">
                                    Samples
                                </span> for Clarity
                            </h1>

                            <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                                At Paradise Estimating, clear information is the basis of trust. That is why we provide sample estimates to show you how accurate and well-organised our work is. Each sample of our services shows our real process, cost details, pricing, and quantity takeoffs. You find easy-to-understand summaries that help you make confident decisions.
                                Whether you are a contractor, builder, developer, or homeowner, our sample estimate gives you a preview of the professional quality and attention to detail. Our sample helps you understand how we support your bidding strategy, budgeting, and project planning from day one.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-white/10 py-6 mb-12 shadow-sm">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="flex flex-wrap justify-center gap-3 pb-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 border border-primary/20">
                                <Filter className="w-5 h-5" />
                            </div>

                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`
                                        relative whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                                        ${activeCategory === category
                                            ? "border-primary/50 text-black shadow-[0_0_20px_rgba(132,204,22,0.3)] scale-105"
                                            : "bg-card/50 border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-card hover:shadow-md"}
                                    `}
                                >
                                    {activeCategory === category && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-primary to-[#86efac] rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Samples Grid */}
                <section className="container mx-auto px-4 lg:px-6 min-h-[400px]">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredSamples.map((sample) => (
                                <motion.div
                                    layout
                                    key={sample.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <a
                                        href={sample.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full w-full"
                                    >
                                        {/* Card Header / Icon Area */}
                                        <div className="h-48 bg-gradient-to-br from-secondary to-secondary/30 flex items-center justify-center relative overflow-hidden group-hover:from-primary/10 group-hover:to-primary/5 transition-colors duration-500">
                                            {sample.imageUrl ? (
                                                <img
                                                    src={sample.imageUrl}
                                                    alt={sample.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                                                    <div className="w-16 h-16 rounded-2xl bg-background shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 z-10">
                                                        <FileText className="w-8 h-8 text-primary" />
                                                    </div>
                                                </>
                                            )}

                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    View PDF <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/80 px-2 py-1 rounded-md">
                                                    {sample.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                                {sample.title}
                                            </h3>


                                            <Button
                                                className="w-full bg-gradient-to-r mt-5 from-primary to-[#86efac] hover:from-[#86efac] hover:to-primary text-primary-foreground border-none shadow-md group/btn relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                                <span className="relative z-10 flex items-center justify-center gap-2 font-bold">
                                                    Download Sample <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </span>
                                            </Button>
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredSamples.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">No samples found for this category.</p>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Sample;
