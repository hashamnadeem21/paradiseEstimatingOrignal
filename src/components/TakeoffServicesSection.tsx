import { useState } from "react";
import fourJointImages from "@/assets/four-joint-images.svg";
import {
  Hammer,
  Zap,
  Paintbrush,
  BrickWall,
  Wrench,
  Box,
  DoorOpen,
  Map,
  Shield,
  Trees,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "concrete",
    name: "Concrete Estimating Service",
    icon: Hammer,
    title: "Concrete Estimating Service",
    description: "Our concrete estimating experts provide footings, slabs, foundations, rebar, and formwork. We ensure every cubic yard and linear foot is measured exactly using the latest digital tools. Our experts on advanced tools provide full details for concrete takeoff services. We are here 24/7 for all types of concrete services.",
    image: "/assets/concrete.webp"
  },
  {
    id: "electric",
    name: "Electrical Estimating Service",
    icon: Zap,
    title: "Electrical Estimating Service",
    description: "We provide electrical takeoffs, including wiring, fixtures, conduits, panels, and equipment. If contractors have all items and cost lists, they can reduce rework. We work for conduits, wiring, fixtures, panels, lighting systems, switches, outlets, transformers, and cable trays. You can take help for all electrical estimating services.",
    image: "/assets/electrical.webp"
  },
  {
    id: "finishes",
    name: "Mechanical Estimating Services",
    icon: Paintbrush,
    title: "Mechanical Estimating Services",
    description: "We handle HVAC, ductwork, and plumbing takeoffs with precision. We are covering pipe sizing, fittings, valves, and insulation. If the report matches your trade, it will make planning and installation faster and easier. So it is necessary to identify before starting the project to make the plan easy and valuable.",
    image: "/assets/mechanical.webp"
  },
  {
    id: "masonry",
    name: "Lumber Takeoff Services",
    icon: BrickWall,
    title: "Lumber Takeoff Services",
    description: "We specialize in lumber takeoff services for residential, commercial, and industrial projects. We provide wood framing that helps you order exact materials. We deliver measurements for all lumber components.  They include studs, joists, beams, rafters, headers, blocking, and sheathing. Each quantity is calculated from your architectural and structural drawings.",
    image: "/assets/lumber.webp"
  },
  {
    id: "mep",
    name: "Roofing Estimation Service",
    icon: Wrench,
    title: "Roofing Estimation Service",
    description: "Our roofing estimation services provide the exact cost of roofing projects. First, we measure your roof and calculate the needed materials. With our services, you do not have to guess how much shingles, flashing, or labor will cost. We handle all the exact details, measurements, and pricing for you.",
    image: "/assets/roofing.webp"
  },
  {
    id: "metal",
    name: "Drywall Estimating Service",
    icon: Box,
    title: "Drywall Estimating Service",
    description: "We provide Drywall, framing, and insulation takeoffs for residential and commercial projects. We measure exact quantities for studs, boards, ceilings, and fasteners. These measurements are ready for supplier pricing or bid submission. If you need wood studs, furring channels, or insulation, you can call us for free.",
    image: "/assets/dry wall.webp"
  },
  {
    id: "openings",
    name: "MEP Estimating Services",
    icon: DoorOpen,
    title: "MEP Estimating Services",
    description: "Our MEP services provide mechanical, electrical, and plumbing services in construction projects. Paradise team helps project managers to identify every material, fitting, and equipment cost. Our estimators ensure your bids are competitive, transparent, and profitable. We will help you with projects like HVAC ductwork, electrical wiring, and plumbing networks.",
    image: "/assets/MEP.webp"
  },
  {
    id: "sitework",
    name: "Metal Estimating Services",
    icon: Map,
    title: "Metal Estimating Services",
    description: "We are offering takeoffs for steel, metal framing, decking, and ornamental metals. We work with fabricators, erectors, and general contractors to ensure every bolt, beam, and bracket. For around 20 years, our clients have been receiving 100% precise results. Whenever they need metal estimating services, we are their priority.",
    image: "/assets/Metal.webp"
  },
  {
    id: "thermal",
    name: "Masonry Estimation Services",
    icon: Shield,
    title: "Masonry Estimation",
    description: "We provide concrete blocks, bricks, CMUs, stone veneers, mortar, and grout. We carefully check parts of your masonry project,completely.  We use digital tools for walls, partitions, veneers, and masonry. Every report includes material quantities, labor hours, equipment costs, and waste.",
    image: "/assets/masnory.webp"
  },
  {
    id: "lumber",
    name: "Duct Takeoff Services",
    icon: Trees,
    title: "Duct Takeoff Services",
    description: "We provide quantity measures for all types of HVAC duct system. We help mechanical, fabricators, and HVAC installers save time. We provide complete takeoff reports. These include rectangular, spiral, and round ducts; fittings; dampers; and diffusers. Each takeoff includes sheet metal quantities, gauge details, joint types, and linear footage.",
    image: "/assets/ducting.webp"
  }
];

const TakeoffServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-black">
            Our Construction <span className="text-[#7ED957]">TakeOff</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide accurate and detailed takeoffs that help you bid confidently and win more projects. Key expert takeoff services of our  best construction estimating company:
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - Services list */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeServiceId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left w-full group",
                    isActive
                      ? "bg-[#7ED957] shadow-lg scale-105 z-10"
                      : "hover:bg-gray-50 bg-white"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? "text-black" : "text-[#7ED957]"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={cn(
                    "font-semibold text-lg",
                    isActive ? "text-black" : "text-black"
                  )}>
                    {service.name}
                  </span>
                  {isActive && (
                    <ChevronRight className="w-5 h-5 ml-auto text-black animate-in fade-in slide-in-from-left-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-8 pl-4 lg:pl-8 sticky top-[120px] self-start">
            <div key={activeService.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-[#D0F0C0] rounded-3xl overflow-hidden shadow-sm flex flex-col h-[600px]">
              {/* Text Content - 45% height */}
              <div className="h-[45%] p-8 lg:p-12 pb-6 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-4xl font-bold mb-6 text-black">
                  {activeService.name}
                </h3>

                <p className="text-lg text-gray-800 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Image - 55% height */}
              <div className="h-[55%] w-full relative">
                <img
                  src={activeService.image}
                  alt={`${activeService.name} illustration`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black opacity-20 mt-10" />
    </section>
  );
};

export default TakeoffServicesSection;
