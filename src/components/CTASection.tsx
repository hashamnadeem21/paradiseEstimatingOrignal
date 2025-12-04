import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-8 lg:py-14">
      <div className="container mx-auto px-4 lg:px-6">
        <div
          className="relative w-full rounded-[40px] overflow-hidden min-h-[300px] flex items-center justify-center px-6 py-12 lg:px-24"
          style={{
            backgroundImage: "url('/assets/ready.webp')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl gap-8 lg:gap-12">

            {/* Text Content */}
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-2xl lg:text-4xl font-black uppercase mb-3 tracking-tight text-black">
                READY TO TAKE NEXT STEP !
              </h2>
              <p className="text-base lg:text-lg font-medium text-black/80 leading-relaxed">
                Start saving time and winning more bids with  Paradise Estimating Company.
              </p>
            </div>

            {/* Button Section */}
            <div className="flex flex-col items-center lg:items-center flex-shrink-0">

              <Button
                className="bg-[#82E658] hover:bg-[#72d648] text-black font-black text-lg lg:text-xl px-4 py-4 lg:py-3 h-auto rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black uppercase tracking-wide animate-bounce"
              >

                <a href="tel:+17187196171" className="flex items-center gap-2">
                  START WINNING 30% OFF!
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
