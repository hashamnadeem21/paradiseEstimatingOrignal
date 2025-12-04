import { Award, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: TrendingUp,
      title: "Precision That Wins Bids",
      description:
        "Tired of losing bids due to Delays or guesswork? Our estimates are tailored To give you the competitive edge.",
    },
    {
      icon: Award,
      title: "Insurance-Certified Expertise",
      description:
        "Turn project roadblocks into Resolutions with IRC- compliant damage reports trusted by insurers.",
    },
    {
      icon: Zap,
      title: "Seamless Tech Integration",
      description:
        "Your tools,our expertise, Effortlessly incorporate our estimates into your Planswift, Bluebeam and Excel workflows.",
    },
  ];

  return (
    <section className="py-2 lg:py-2">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 mt-10">
            STOP GUESSING, <span className="text-[#7ED957]">START</span> WINNING
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isCenter = index === 1; // center div
            const isHovered = hoveredIndex === index;
            const isGreen = isHovered || (hoveredIndex === null && isCenter);

            const bgColor = isGreen ? "bg-[#7ED957]" : "bg-[#fbfaf9]";
            const textColor = isGreen ? "text-white" : "text-muted-foreground";
            const iconColor = "text-white";

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`text-center p-8 rounded-lg shadow-card hover:shadow-hover transition-all ${bgColor} ${textColor}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${isGreen ? "bg-gray-700" : "bg-[#7ED957]"}`}>
                  <feature.icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black opacity-20 mt-10" />
    </section>
  );
};

export default FeaturesSection;
