import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesListSection = () => {
  const services = [
    {
      number: "1",
      title: "Construction Estimating Services",
      description: "We provide material takeoff services that lift every part of your plans. We provide a proper list of materials, areas, and quantities for pricing or purchasing. Our customers always appreciate our construction project estimating services. We ensure every estimate is accurate, transparent, and aligned with your project budget.",
    },
    {
      number: "2",
      title: "Construction Cost Estimating Services",
      description:
        "Paradise team translates takeoff data into cost estimates for labor, material, and equipment. It gives you a clear view of your budget before work begins. In this way, we make it easy for customers to estimate budgets at low prices. We give you a clear picture of total expenses.",
    },
    {
      number: "3",
      title: "Residential Estimating Services",
      description:
        "Our team is famous for estimating the size and complexity of large and small projects. We can estimate a home-building or multi-million-dollar commercial project.  Our construction budget estimating reduces your budget burden. Relax and contact our team to share the project and to solve your problem in the project.",
    },
    {
      number: "4",
      title: "Industrial Estimating Services",
      description:
        "We know that industrial construction has complex systems, timelines, and safety standards. That is why we provide complete industrial cost estimating services in detail. We offer you a clear estimation and final budget for bidding. It will give an exact idea of preconstruction takeoffs and final bid proposals.",
    },
    {
      number: "5",
      title: "Construction Takeoff Services",
      description:
        "Our construction takeoff services provide precise material and quantity measurements. These quantities help contractors, builders, and developers bid with confidence. We develop detailed takeoff reports that include areas, lengths, counts, and volumes for every trade. From concrete and masonry to electrical and MEP systems, our experts ensure every detail.",
    },
    {
      number: "6",
      title: "Commercial Estimating Services",
      description:
        "We specialize in delivering accurate, dependable, and timely services. Our services are available for projects of every size and scope.   We help from retail spaces and office buildings to hospitals and schools. We provide detailed costs and exact specifications. Our team reviews architectural and engineering plans to identify every material.",
    },

  ];

  return (
    <section className="">
      <div className="container mx-auto px-4 lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Our Specialized <span className="text-[#7ED957]">Construction Estimating </span>Services
          </h2>

        </div>



        <div className="w-full">
          {/* Items 1-6 in centered 2-column grid */}
          <div className="w-full px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
              {services.slice(0, 6).map((service) => (
                <div key={service.number} className="flex flex-col items-start">
                  <div className="flex gap-0 items-center w-[34rem] bg-[#7ED957] rounded-full shadow-md hover:shadow-lg transition-shadow cursor-default h-12 border-2 border-black">
                    <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center font-bold text-black text-lg bg-white flex-shrink-0">
                      {service.number}.
                    </div>
                    <h3 className="text-lg font-extrabold text-black pl-4 pr-4 truncate">
                      {service.title.toUpperCase()}
                    </h3>
                  </div>
                  <p className="mt-3 w-[34rem] text-black text-sm leading-relaxed text-left">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Item 7 - Centered at the end */}
          <div className="mt-10 w-full flex justify-center">
            <div className="flex flex-col items-center">


              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-700 text-white font-bold uppercase tracking-wide rounded-full 
                             px-8 py-6 text-base
                             shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-700
                             hover:translate-y-1 hover:shadow-none hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
