import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";

const ServiceButtons = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 lg:py-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {/* Call Button */}
          <Button
            asChild
            size="lg"
            className="bg-[#7ED957] text-black font-bold uppercase tracking-wide rounded-full 
                       px-6 py-6 text-xl
                       shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-y-1 hover:shadow-none transition-all"
          >
            <a href="tel:+17187196171" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call (718) 719-6171
            </a>
          </Button>

          {/* Contact Page Button */}
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-gray-700 text-white font-bold uppercase tracking-wide rounded-full 
                       px-6 py-6 text-xl
                       shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                       hover:bg-gray-700 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceButtons;
