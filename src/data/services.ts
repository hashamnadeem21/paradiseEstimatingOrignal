export interface ServiceContent {
    heroTitle: string;
    heroSubtitle: string;
    mainHeading: string;
    tagline: string;
    description: string;
    items: {
        title: string;
        description: string;
    }[];
}

export const serviceCategories = ["Commercial Estimating", "Industrial Estimating", "Residential Estimating",
];

export const tradeCategories = [
    "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping", "Thermal/Moisture Protection"
];

const defaultContent: ServiceContent = {
    heroTitle: "100% ACCURATE QUANTITY TAKE-OFF SERVICES",
    heroSubtitle: "PARADISE ESTIMATING SERVICE COMPANY",
    mainHeading: "Quantity Take-Off Services",
    tagline: "accurate. reliable. efficient",
    description: "At Paradise Estimating, we believe construction estimating goes beyond numbers—it's about creating accurate, reliable estimates that are functional, comprehensive, and reflective of your project's unique requirements. Our approach integrates precision, practicality, and industry expertise to deliver estimates that enhance project success, improve efficiency, and elevate your bidding confidence. Whether it's a residential project, a commercial development, or an industrial facility, we craft estimates that blend accuracy with purpose.",
    items: [
        {
            title: "Detailed Quantity Takeoff",
            description: "We work closely with you to perform comprehensive quantity takeoffs that align with your project scope, timeline, and budget requirements. From material lists to labor calculations, we ensure every detail is accurately measured and documented."
        },
        {
            title: "Cost Analysis & Budget Planning",
            description: "We maximize your project value by providing detailed cost breakdowns and budget forecasts. Our analysis helps you understand where every dollar goes, enabling better financial planning and cost control throughout the project lifecycle."
        },
        {
            title: "Material & Labor Optimization",
            description: "We identify opportunities to optimize material usage and labor allocation, ensuring your project runs efficiently without compromising quality. Our recommendations help reduce waste, minimize costs, and improve overall project profitability."
        },
        {
            title: "Bid Preparation & Submission Support",
            description: "Whether you're preparing a competitive bid or responding to an RFP, we provide comprehensive support including detailed estimates, professional documentation, and strategic pricing guidance to help you win more projects."
        }
    ]
};

// Service-specific content mapping
const serviceContentMap: Record<string, Partial<ServiceContent>> = {
    "commercial-estimating": {
        heroTitle: "Accurate Commercial Estimating Services",
        mainHeading: "Commercial Estimating Services",
        tagline: "professional. precise. profitable",
        description: "Our commercial estimating services provide accurate cost projections for office buildings, retail spaces, restaurants, and mixed-use developments. We understand the unique challenges of commercial construction and deliver estimates that help you bid competitively while maintaining healthy profit margins.",
    },
    "residential-estimating": {
        heroTitle: "Accurate Residential Estimating Services",
        mainHeading: "Residential Estimating Services",
        tagline: "Accurate. Reliable. Efficient",
        description: "Home construction or remodeling projects start with accurate cost planning. If you have a clear estimate, it will save money. Your cost overruns when your project estimate is right and clear. It will increase profit margins and build trust with clients. Our Residential Estimating Services provide material takeoffs and labor cost lists. You can bid on new home builds and on renovating interior properties.",
    },
    "industrial-estimating": {
        heroTitle: "Accurate Industrial Estimating Services",
        mainHeading: "Industrial Estimating Services",
        tagline: "robust. reliable. results-driven",
        description: "Industrial projects demand specialized knowledge and precision. Our industrial estimating services cover warehouses, manufacturing facilities, processing plants, and heavy industrial construction with accurate material quantities, equipment costs, and labor projections.",
    },

};

export const getServiceBySlug = (slug: string) => {
    const title = serviceCategories.find(
        (service) => service.toLowerCase().replace(/ /g, "-").replace(/\//g, "-") === slug
    );

    if (!title) return null;

    // Get service-specific content or use default
    const customContent = serviceContentMap[slug] || {};
    const content: ServiceContent = {
        ...defaultContent,
        ...customContent,
    };

    return {
        title,
        subtitle: "PARADISE ESTIMATING SERVICES COMPANY",
        description: `Professional ${title} services. We provide accurate and reliable estimates for all your construction needs.`,
        content,
    };
};

export const generateSlug = (service: string) => {
    return service.toLowerCase().replace(/ /g, "-").replace(/\//g, "-");
};
