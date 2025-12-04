import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Award, Target, Users, Zap, DollarSign, Headphones, FastForward, Wrench, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccordionSection from "@/components/AccordionSection";

const AboutUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paradise Construction Estimating",
      "description": "15+ years of excellence in construction estimating services",
      "foundingDate": "2009",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "20-50"
      }
    }
  };

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We maintain a 98% accuracy rate through rigorous quality control and advanced technology.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast turnaround times without compromising quality, helping you meet tight deadlines.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our clients as partners, working collaboratively to ensure project success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality estimates in the construction industry.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Us | Paradise Construction Estimating - 15+ Years Experience"
        description="Learn about Paradise Construction Estimating. 15+ years of expertise, 2000+ successful projects, and commitment to accuracy and excellence."
        canonical="https://paradiseestimating.com/about-us"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[500px] lg:min-h-[500px] flex items-center ">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: "url('/assets/aboutus.webp')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          {/* Content Overlay */}
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-8 text-black">
                ABOUT <span className="text-[#7ED957]">PARADISE</span><br />
                ESTIMATION COMPANY
              </h1>
              <div className="space-y-6 text-lg font-small text-black/80 leading-relaxed">
                <p>
                  Welcome to Paradise Estimating. Your trusted partner for accurate, timely, and
                  professional construction estimating services. We help contractors, builders, developers,
                  and homeowners make confident decisions by delivering reliable estimates. That reduces
                  risk, saves time, and improves project outcomes.
                </p>
                <p>
                  In today's competitive construction industry, bidding mistakes can be costly. Many
                  contractors lose projects because of inaccurate takeoffs, missed quantities, or limited
                  time to prepare bids. That is why we built our service to provide high-quality estimating
                  support that empowers you to win more jobs and avoid delays, overspending, and
                  uncertainty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/who.webp"
                  alt="Team of construction estimators"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-black text-black">
                  Who We Are
                </h2>

                <div className="space-y-6 text-lg text-black/80 leading-relaxed font-medium">
                  <p>
                    We are a team of construction estimators with quantity surveyors and cost
                    consultants. But we are also experts in residential, commercial, and industrial
                    construction. We understand how to break down complex drawings, evaluate
                    project scope. Estimators prepare precise cost estimates that reflect current
                    market pricing.
                  </p>
                  <p>
                    Our goal is not just to deliver numbers. It provides clarity, confidence, and value.
                    Our estimates goes through a full review after preparation. Moreover, our accuracy
                    is set by using advanced software tools.
                  </p>
                </div>

                <Button
                  asChild
                  className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-lg px-6 py-2 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all "
                >
                  <a href="tel:+17187196171">
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Offer Section */}
        <section className="py-0 lg:py-0 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-black">
              What We Do Offer
            </h2>

            <div className="flex flex-col gap-6 items-center">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {[
                  "Detailed quantity takeoffs",
                  "Value engineering and cost analysis",
                  "Project budgeting and cost planning"
                ].map((item, i) => (
                  <div key={i} className="bg-white px-8 py-6 rounded-xl shadow-sm border border-black/5 flex items-center gap-4 min-w-[300px] hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 bg-[#82E658] rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="font-bold text-black text-lg">{item}</span>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {[
                  "Material, labor, and equipment cost estimating",
                  "Bid preparation and support for contractors"
                ].map((item, i) => (
                  <div key={i} className="bg-white px-8 py-6 rounded-xl shadow-sm border border-black/5 flex items-center gap-4 min-w-[300px] hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 bg-[#82E658] rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="font-bold text-black text-lg">{item}</span>
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {[
                  "Estimating for residential, commercial, and industrial projects"
                ].map((item, i) => (
                  <div key={i} className="bg-white px-8 py-6 rounded-xl shadow-sm border border-black/5 flex items-center gap-4 min-w-[300px] hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 bg-[#82E658] rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="font-bold text-black text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        {/* Our Goal Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-center px-6 py-12">
              {/* Background with Overlay */}
              <div
                className="absolute inset-0 bg-[#2A2A2A]"
                style={{
                  backgroundImage: "url('/assets/hero1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              />
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-10 h-10 text-[#82E658]" />
                  <h2 className="text-4xl font-bold">Our Goal</h2>
                </div>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl">
                  Our mission is to make construction estimating simple, accurate, and accessible for everyone in the industry. We aim to support contractors and businesses by providing cost-effective solutions. So that they help people win more bids, reduce workload, and improve profitability.
                </p>

                <Button
                  asChild
                  className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-lg px-8 py-6 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black"
                >
                  <a href="tel:+17187196171">
                    Call US Today and Get 30% Off
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Protection Section */}
        <section className="py-6 lg:py-10 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-10">
                <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight">
                  How We Protect Your Information
                </h2>

                <div className="space-y-4 text-base text-black/80 leading-normal font-medium">
                  <p>
                    Your information is important to us. We use multiple security measures to safeguard your data, including:
                  </p>
                  <ul className="space-y-1 list-disc pl-5 marker:text-black">
                    <li>Encrypted storage</li>
                    <li>Secure servers</li>
                    <li>Restricted access to sensitive files</li>
                    <li>Regular system updates and monitoring</li>
                  </ul>
                  <p>
                    We do not sell, trade, or share your information with unauthorized third parties.
                  </p>
                </div>

                <Button
                  asChild
                  className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-base px-4 py-2 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all "
                >
                  <a href="tel:+17187196171" className="flex items-center gap-2">
                    Get a Quote
                  </a>
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/protect.webp"
                  alt="Data Protection Security"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <AccordionSection />
        </section>

        <section className="py-4 lg:py-0 ">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  About Paradise Estimating
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Usman Chaudary started Paradise Estimating with a simple idea. This  was to make life easier for contractors who are worried between the job site and the bidding desk. After spending two decades working in construction management, estimating, and hands-on field operations, he noticed the same problem everywhere he went. Contractors were juggling too much, and preparing accurate, competitive bids was becoming harder with every project.

                    Seeing this gap in the industry, he set out to create a solution. That’s how Paradise Estimating was born. A service built to take the pressure off contractors, deliver reliable numbers. It gave them the support they need to win more work without sacrificing their time. They need to win more projects, reduce workload, and operate with confidence.

                    He holds a Bachelor’s degree in Architecture, is LEED certified.  He maintains active involvement with the American Society of Professional Estimators. Throughout his career, he has contributed to several high-profile projects. Including work for Bacardi, the University of Miami, private development firms, and most recently, the U.S. Embassy in Jerusalem.

                    He oversees our entire team. The team consists of skilled professionals, including engineers, architects, and civil engineers. Every one of us comes from a construction background and brings experience.
                  </p>
                </div>

              </div>

              {/* Right side - Illustration */}
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  {/* Green circle background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full bg-primary opacity-90"></div>
                  </div>

                  {/* Illustration - SVG image */}
                  <div className="relative z-10 flex items-center justify-center">
                    <img src="assets/about.png" alt="About Us Illustration" className="w-full h-auto max-w-[500px] object-contain" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[0.5px] w-full bg-black opacity-20 mt-10" />
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 lg:py-18 bg-[#333333]">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-12 h-12 text-[#82E658]" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Commitment to You</h2>
              </div>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10">
                We are more than just an estimating service; we are your partner in growth. Our goal is to help you reduce stress and save time. Focusing on managing projects, securing clients, and growing your business makes us unique. At our estimating company, your success is our first priority. We are happy in delivering right, professional, and trustworthy services that support your business at every stage.
              </p>

              <Button
                asChild
                className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-lg px-4 py-4 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <a href="tel:+17187196171" className="flex items-center gap-2">
                  Call US Today and Get 30% Off
                </a>

              </Button>
            </div>
          </div>
        </section>

        <section className="py-6 lg:py-10 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-10">
                <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight">
                  Our Client
                </h2>

                <div className="space-y-4 text-base text-black/80 leading-normal font-medium">
                  <p>
                    Your information is important to us. We use multiple security measures to safeguard your data, including:
                  </p>
                  <ul className="space-y-1 list-disc pl-5 marker:text-black">
                    <li>Encrypted storage</li>
                    <li>Secure servers</li>
                    <li>Restricted access to sensitive files</li>
                    <li>Regular system updates and monitoring</li>
                  </ul>
                  <p>
                    We do not sell, trade, or share your information with unauthorized third parties.
                  </p>
                </div>

                <Button
                  asChild
                  className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-base px-4 py-2 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all "
                >
                  <a href="tel:+17187196171" className="flex items-center gap-2">
                    Get a Quote
                  </a>
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/client.webp"
                  alt="Our Clients"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 lg:py-10 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-16 text-black">
              Why Choose Us For Construction Estimating Service?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#7ED957] hover:border-[#7ED957]">
                <div className="w-16 h-16 bg-[#82E658] rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <DollarSign className="w-8 h-8 text-black group-hover:text-[#7ED957] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">Save Money and Time</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Money and time are the two most valuable resources for any contractor. Outsourcing your estimating to Paradise Estimating helps you save both money and time. Instead of hiring full-time staff, you should only pay per project and save 70% cost.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#7ED957] hover:border-[#7ED957]">
                <div className="w-16 h-16 bg-[#82E658] rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <Headphones className="w-8 h-8 text-black group-hover:text-[#7ED957] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">Reliable 24/7 Customer Support</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  At Paradise Estimation, your satisfaction comes first. Our friendly support team is available 24/7 to answer your questions and solve issues. We are here to guide you through every step of the construction cost estimating process. We are always here to help you to grow your business.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#7ED957] hover:border-[#7ED957]">
                <div className="w-16 h-16 bg-[#82E658] rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <FastForward className="w-8 h-8 text-black group-hover:text-[#7ED957] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">Fast Turnaround</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We understand bid deadline issues and construction bid estimating services. That is why we deliver quick estimates within 24-48 hours and maintain your scope. We are suitable partners if you are handling a single project or leading multiple projects.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#7ED957] hover:border-[#7ED957]">
                <div className="w-16 h-16 bg-[#82E658] rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <Users className="w-8 h-8 text-black group-hover:text-[#7ED957] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">Estimators Experience</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  With extensive experience, our certified estimators understand every trade and its management. From concrete and drywall to electrical, MEP, and civil works, we have expertise. You will gain real insight that gives real-world cost accuracy and smarter bidding strategies.
                </p>
              </div>

              {/* Card 5 */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#7ED957] hover:border-[#7ED957]">
                <div className="w-16 h-16 bg-[#82E658] rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <Wrench className="w-8 h-8 text-black group-hover:text-[#7ED957] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">Best Tools</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Our takeoff and estimate reports give real facts. We provide clear, data-backed insights, negotiate properly with suppliers and subcontractors. You can secure stronger margins with clear quantities, labor breakdowns, and cost insights.
                </p>
              </div>

              {/* Card 6 */}
              <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#7ED957] hover:border-[#7ED957]">
                <div className="w-16 h-16 bg-[#82E658] rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <ShieldCheck className="w-8 h-8 text-black group-hover:text-[#7ED957] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">Takeoff Technology</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We use advanced software tools, Bluebeam, Planswift, and CostX for fast digital takeoffs. This ensures quicker turnaround times, fewer errors, and streamlined workflows. So you can focus on winning bids, not manual calculations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governmental Services Section */}
        <section className="py-6 lg:py-10 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-5xl font-black text-black leading-tight">
                  Some Other Governmental and Military Services
                </h2>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-4">
                    {[
                      "US Embassy Jerusalem",
                      "US Embassy Renovation South Africa",
                      "Camp Lejeune, US Marines",
                      "Fort Belvoir",
                      "Government Buildings"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-[#82E658] rounded-full p-0.5 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-black font-bold text-base leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      "US Embassy Expansion Brazil",
                      "Fort Bragg, US Army",
                      "Whiteman Air Force Base",
                      "County Schools",
                      "VA Hospital"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-[#82E658] rounded-full p-0.5 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-black font-bold text-base leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <Button
                  asChild
                  className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-lg px-4 py-2 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <a href="tel:+17187196171">
                    Get a Quote
                  </a>
                </Button> */}
              </div>

              {/* Right Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/assets/governmental.webp"
                  alt="Governmental and Military Construction"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
