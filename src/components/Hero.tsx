import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[550px] bg-background">

      {/* Background Image Wrapper */}
      <div className="relative w-full h-full">
        <img
          src="assets/hero_illustration.jpeg"
          alt="Construction Estimating Services Background"
          className="w-full h-full object-cover object-bottom"
          fetchPriority="high"
        />

        {/* Centered Content */}
        <div className="absolute top-4 sm:top-8 lg:top-12 left-4 sm:left-8 lg:left-10 z-20 
                        flex flex-col items-start sm:items-center justify-center
                        text-black space-y-3 sm:space-y-4 lg:space-y-5 w-[90%] sm:w-[70%] lg:w-[50%] p-2 sm:p-4">

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-left sm:text-center">

            Accurate Takeoff, <span className="text-[#7ED957]">Construction Estimating Services</span>
          </h1>



          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/80 text-left sm:text-center">
            Stop Guessing, Start Winning. With Paradise Estimating's expert construction estimating services, get accurate estimates that help you bid confidently, reduce risk & boost bid-win ratio upto 98%.

          </p>

          <button onClick={() => navigate('/services/category-1')} className="bg-[#7ED957] text-black font-bold uppercase py-2 sm:py-3 px-4 sm:px-6 rounded-full 
                             text-sm sm:text-base md:text-lg shadow-[3px_3px_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_rgba(0,0,0,1)]
                             hover:translate-y-1 hover:shadow-none transition-all">
            Explore our Services
          </button>

        </div>
      </div>

    </section>
  );
};

export default Hero;
