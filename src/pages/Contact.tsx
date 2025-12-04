import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { serviceAreasData } from "@/data/serviceAreas";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Paradise Construction Estimating",
      "telephone": "+1-718-719-6171",
      "email": "info@paradiseestimating.com"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us | Get a Free Construction Estimate Quote"
        description="Contact Paradise Construction Estimating for a free consultation and quote. Call +1 (718) 719-6171 or fill out our online form."
        canonical="https://paradiseestimating.com/contact"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
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
              <h1 className="text-2xl lg:text-4xl font-black uppercase leading-tight mb-8 text-black">
                Contact Us— Get To Construction Estimating Services
              </h1>
              <div className="space-y-6 text-xl lg:text-xl font-small text-black/80 leading-relaxed">
                <p>
                  Are you ready to bid smarter, reduce project risks, and get precise cost estimates?
                  You are in the right place. Our team provides fast, accurate, and budget-friendly construction estimating services for contractors, builders, and developers across the globe.
                  Whether you want a quick estimate, a full project takeoff, or expert guidance, we are here to help.

                </p>
                <p>

                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl lg:text-5xl font-black text-black mb-2">
                  Your Construction Outsourcing partner
                </h2>
                <p className="text-xl lg:text-2xl font-bold text-[#82E658] mb-8">
                  is one message away from you.
                </p>

                <div className="space-y-4 flex-grow">
                  {/* Phone Numbers */}
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-black fill-black" />
                      </div>
                      <span className="text-xl font-bold text-black">(718) 719-6171</span>
                    </div>

                  </div>

                  {/* Email */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Email Address:</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-xl font-bold text-black">info@paradiseestimating.com</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Location:</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black fill-black" />
                      </div>
                      <span className="text-xl font-bold text-black">2000 Taylor St, Houston, TX 77007, United States</span>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-6">Social Media:</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                          <Facebook className="w-6 h-6 text-black fill-black" />
                        </div>
                        <span className="text-xl font-bold text-black">Facebook</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                          <Youtube className="w-6 h-6 text-black fill-black" />
                        </div>
                        <span className="text-xl font-bold text-black">Youtube</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                          <Instagram className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-xl font-bold text-black">Instagram</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                          <Linkedin className="w-6 h-6 text-black fill-black" />
                        </div>
                        <span className="text-xl font-bold text-black">Linkedin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Map */}
              <div className="h-full min-h-[500px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.766168926056!2d-95.39587868489163!3d29.76839698198565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bd96d9c6c0c7%3A0x6c6c6c6c6c6c6c6c!2s2000%20Taylor%20St%2C%20Houston%2C%20TX%2077007%2C%20USA!5e0!3m2!1sen!2s!4v1625680000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Form Section */}
        <section className="py-8 lg:py-10 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-4xl font-black text-black leading-tight">
                  Upload Your Plans to Get Started
                </h2>

                <p className="text-lg text-black/80 font-medium max-w-md">
                  Send us your drawings, blueprints, or project files.
                  We will review everything and send you:
                </p>

                <div className="space-y-3 mt-4">
                  {[
                    "A detailed cost breakdown",
                    "Turnaround time (24–48 hours)",
                    "A discounted quote — Get 30% OFF today"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#82E658] font-bold text-xl mt-0.5">✔</span>
                      <span className="text-lg text-black/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-gray-700 p-6 lg:p-8 rounded-3xl shadow-lg">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Get in touch.
                </h3>
                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Your Name</label>
                    <Input
                      className="bg-white border-0 h-10 rounded-full px-4 text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Email Address</label>
                    <Input
                      type="email"
                      className="bg-white border-0 h-10 rounded-full px-4 text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Phone Number</label>
                    <Input
                      type="tel"
                      className="bg-white border-0 h-10 rounded-full px-4 text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Message</label>
                    <Textarea
                      placeholder="Message"
                      className="bg-white border-0 min-h-24 rounded-2xl px-4 py-3 text-black placeholder:text-gray-400 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="button"
                      className="flex-1 bg-[#4A4A4A] hover:bg-black text-white font-medium h-10 rounded-full transition-colors"
                    >
                      Upload Blueprint
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-[#4A4A4A] hover:bg-black text-white font-medium h-10 rounded-full transition-colors"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-8 lg:py-10 bg-[#1A1F2C] items-center justify-center w-full">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex flex-col items-center gap-4 mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Need Help Fast?
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10">
                Our estimating team is available 24/7 to assist you.
                We provide quick updates, revisions, and answers whenever you need them.
              </p>
            </div>
          </div>
        </section>
        {/* What We Do Offer Section */}
        <section className="py-16 lg:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-black">
              Why <span className="text-[#82E658]">Contact</span> Paradise Estimating?
            </h2>

            <div className="flex flex-col gap-6 items-center">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {[
                  "Fast estimates within 9–24 hours",
                  "99% accurate and reliable takeoffs",
                  "Lower cost — save up to 70%"
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
                  "Certified estimators (AACE, ASPE)",
                  "Secure and confidential service"
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
                  "Support for all trades (MEP, Concrete, Framing, Civil, etc.)",
                  "Local pricing for the USA, Canada, UK, and Australia"
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

        {/* Areas We Serve Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-black">
              Areas We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreasData.map((data) => (
                <a
                  key={data.state}
                  href={`/locations/${data.state.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center justify-center p-4 bg-gray-50 hover:bg-[#7ED957] text-gray-700 hover:text-black rounded-lg transition-all duration-300 font-medium text-sm text-center border border-gray-100 hover:border-[#7ED957] hover:shadow-md"
                >
                  {data.state}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
