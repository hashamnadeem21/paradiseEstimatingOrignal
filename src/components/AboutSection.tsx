import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AboutUsSVG from "../../src/assets/about-us.svg"; // <-- Import your SVG

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 lg:py-8 ">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left side - Content */}

          <div className="w-full flex flex-col justify-center">
            <h2 className="text-3xl lg:text-5xl font-black mb-4">
              About <span className="text-[#7ED957]">Paradise</span><span className="font-black"> Estimating Company</span>
            </h2>
            <div className="space-y-2 text-gray-800">
              <p className="text-base leading-normal">
                We provide <strong className="font-bold text-black">construction cost estimating</strong> and <strong className="font-bold text-black">quantity takeoff services</strong> worldwide. Our preconstruction estimating helps you win more projects and save time. For 20 years, we have been providing <strong className="font-bold text-black">construction estimating services</strong> across the U.S., Canada, and Australia. Our construction estimation portfolio shows our best construction services across all trades.
              </p>

              <p className="text-base leading-normal">
                Our team of professional estimators uses Bluebeam, Planswift, and CostX to deliver clear takeoffs and exact cost estimates for every trade. We offer the world's best, committed, and accurate estimators to the busy contractor.
              </p>

              <ul className="space-y-1.5 ml-5">
                <li className="text-base leading-normal list-disc">
                  We always follow the construction estimating laws, like the <strong className="font-bold text-black">American Association of Cost Engineers(AACE).</strong>
                </li>
                <li className="text-base leading-normal list-disc">
                  We accept zip-code-based pricing, which is a good sign for a small business owner.
                </li>
                <li className="text-base leading-normal list-disc">
                  Groups like <strong className="font-bold text-black">RICS, POMI, FIDIC, AACE, ASPE, ASTM, ACI, ICE, NAHB, and AGC</strong> are top safe companies. We follow their laws and strategies to maintain your privacy.
                </li>
                <li className="text-base leading-normal list-disc">
                  We use Non-Disclosure Agreements (NDAs) to keep your documents safe. We never compromise on your personal and confidential information. You can trust us with the safety of your data.
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <Button
                size="lg"
                onClick={() => navigate("/about-us")}
                className="bg-[#7ED957] text-black font-bold uppercase tracking-wide rounded-full 
                           px-8 py-6 text-base
                           shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                           hover:translate-y-1 hover:shadow-none transition-all"
              >
                About Us
              </Button>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative flex items-center justify-center h-full">
            <div className="relative w-full h-full flex items-center justify-center bg-[#7ED957]/10 rounded-3xl p-8">
              {/* Illustration - SVG image */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <img src="assets/about.png" alt="About Us Illustration" className="w-full h-full max-h-[500px] object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black opacity-20 mt-10" />
    </section>
  );
};

export default AboutSection;
