import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin, FileText, X } from "lucide-react";
import { serviceAreasData } from "@/data/serviceAreas";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/services/formService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { className, ...other } = e.target; // exclude className from destructuring if it was there, but easier to just take value
    // The issue is default Input/TextArea might not pass name if we don't set it.
  };

  // Fix handleChange to actually work
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // We need to ensure we are passing name prop to Input components
    // e.target.name might be undefined if not set on the element?
    // But we will add name prop in the JSX.
    const name = e.target.getAttribute('name');
    const value = e.target.value;
    if (name) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const result = await submitContactForm({
      ...formData,
      file: selectedFile
    });

    if (result.success) {
      toast.success(result.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedFile(null);
    } else {
      toast.error(result.message);
    }

    setIsSubmitting(false);
  };

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
                Contact Us
              </h1>
              <div className="space-y-6 text-xl lg:text-xl font-small text-black/80 leading-relaxed">
                <p>
                  Are you ready to bid smarter, reduce project risks, and get precise cost estimates?
                  You are in the right place. Our team provides fast, accurate, and budget-friendly construction estimating services for contractors, builders, and developers across the globe.
                  Whether you want a quick estimate, a full project takeoff, or expert guidance, we are here to help.
                </p>
                <p>
                </p>
                <motion.a
                  href="tel:+17187196171"
                  className="bg-gray-700 text-[#7ED957] w-[300px] px-5 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg hover:bg-gray-900 transition-colors text-sm lg:text-base"
                  animate={{
                    x: [-2, 2, -2, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Now: (718) 719-6171</span>
                </motion.a>
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
                      <span className="text-xl font-bold text-black">Paradisestimating@gmail.com</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black mb-4">Location:</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#82E658] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black fill-black" />
                      </div>
                      <span className="text-xl font-bold text-black">898 Bay Ridge Avenue, Brooklyn, NY 11220, USA.</span>
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
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=898+Bay+Ridge+Avenue,Brooklyn,NY+11220,USA&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paradise Estimating Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Form Section */}
        <section className="py-8 lg:py-10 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
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
                    "Turnaround time (9–24 hours)",
                    "A discounted quote — Get 30% OFF today"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#82E658] font-bold text-xl mt-0.5">✔</span>
                      <span className="text-lg text-black/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-700 p-6 lg:p-8 rounded-3xl shadow-lg">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Get in touch.
                </h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Your Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white border-0 h-10 rounded-full px-4 text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border-0 h-10 rounded-full px-4 text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white border-0 h-10 rounded-full px-4 text-black placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium pl-1">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      className="bg-white border-0 min-h-24 rounded-2xl px-4 py-3 text-black placeholder:text-gray-400 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    {selectedFile && (
                      <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-red-500" />
                        </div>
                        <span className="text-sm text-gray-600 truncate flex-1 font-medium">{selectedFile.name}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null);
                            // Reset file input if needed, though hidden input usually clears safely on re-select or we can use ref
                            const input = document.getElementById('file-upload-contact-page') as HTMLInputElement;
                            if (input) input.value = '';
                          }}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="file"
                        id="file-upload-contact-page"
                        className="hidden"
                        accept="application/pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setSelectedFile(file);
                            console.log("File selected:", file.name);
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => document.getElementById('file-upload-contact-page')?.click()}
                        className="flex-1 bg-[#4A4A4A] hover:bg-black text-white font-medium h-10 rounded-full transition-colors"
                      >
                        {selectedFile ? "File Selected" : "Upload Plan"}
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#4A4A4A] hover:bg-black text-white font-medium h-10 rounded-full transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                      </Button>
                    </div>
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
        <section className="py-8 lg:py-12 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-black">
              Areas <span className="text-[#82E658]">We</span> Serve
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
