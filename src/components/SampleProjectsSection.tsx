import { Check } from "lucide-react";

const projects = [
    {
        title: "GENERAL CONTACTOR (GC)",
        subtitle: "",
        image: "/assets/portfolio/GeneralContracter.webp", // Placeholder, will use a generic one if needed
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

const SampleProjectsSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-5xl font-black text-black mb-6 uppercase tracking-tight">
                        Our Work Samples with Top <span className="text-primary">Construction Estimating </span>Companies
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full pause-on-hover">
                <div className="flex gap-8 animate-marquee w-max px-4">
                    {[...projects, ...projects].map((project, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[400px] group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1 flex-shrink-0"
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
            </div>
        </section>
    );
};

export default SampleProjectsSection;
