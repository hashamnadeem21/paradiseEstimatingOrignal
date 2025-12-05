import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Globe, MapPin, FileText, X } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "@/services/formService";

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("quote");
  const [activeCategory, setActiveCategory] = useState<"services" | "trades">("services");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-end">

        {/* LEFT CONTENT */}
        <div className="pb-4">
          <h2 className="text-3xl lg:text-4xl font-black leading-[1.15] text-black mb-6">
            Accurate <span className="text-[#7ED957]">Construction </span>
            Estimating <br />Services
          </h2>

          <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
            Paradise Estimating provides fast and accurate commercial, residential, and industrial construction estimation and takeoff services. We can provide estimates within 9-24 hours with 98% accuracy for small to million-dollar construction projects.
          </p>

          {/* FIXED CATEGORY BUTTONS — ROUND ONLY TOP LEFT + TOP RIGHT */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setActiveCategory("services")}
              className={`px-7 py-2 rounded-t-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                ${activeCategory === "services"
                  ? "bg-[#7ED957] text-black shadow-[#7ED957]/50"
                  : "bg-gray-700 text-white hover:bg-gray-600 shadow-black/50"}`}
            >
              Services
            </button>

            <button
              onClick={() => setActiveCategory("trades")}
              className={`px-7 py-2 rounded-t-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                ${activeCategory === "trades"
                  ? "bg-[#7ED957] text-black shadow-[#7ED957]/50"
                  : "bg-gray-700 text-white hover:bg-gray-600 shadow-black/50"}`}
            >
              Trade
            </button>
          </div>

          {/* SERVICES/TRADES GRID */}
          <ContentGrid activeCategory={activeCategory} />
        </div>

        {/* RIGHT SIDE (FORM + TABS) */}
        <div className="w-full flex flex-col items-center">

          {/* CENTERED SMALL TABS */}
          <div className="flex justify-center gap-4 mb-0">

            <button
              onClick={() => setActiveTab("quote")}
              className={`
      px-4 py-2 text-sm font-semibold rounded-t-xl shadow-lg shadow-black
      ${activeTab === "quote" ? "bg-[#7ED957] text-black" : "bg-[#C9C9C9] text-gray-700"}
    `}
            >
              Get a Quick Price Quote
            </button>

            <button
              onClick={() => window.location.href = "tel:+17187196171"}
              className={`
      px-4 py-2 text-sm font-semibold rounded-t-xl shadow-lg shadow-black
      ${activeTab === "consult" ? "bg-[#484848] text-white" : "bg-[#C9C9C9] text-gray-700"}
    `}
            >
              Book a Consultation Call
            </button>

          </div>
          {/* FORM — NOW FULLY ROUNDED ON ALL CORNERS */}
          <div className="bg-gray-700 rounded-3xl p-8 shadow-lg  w-[85%] mx-auto mt-0">

            <h3 className="text-3xl font-extrabold text-white mb-4">Get in touch.</h3>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white rounded-full h-11 px-4"
                placeholder="Your Name"
                required
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white rounded-full h-11 px-4"
                placeholder="Email Address"
                required
              />
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white rounded-full h-11 px-4"
                placeholder="Phone Number"
                required
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-white rounded-2xl min-h-[110px] px-4 py-3"
                placeholder="Message"
                required
              />

              {selectedFile && (
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm text-gray-600 truncate flex-1 font-medium">{selectedFile.name}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedFile(null)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              )}

              <div className="flex justify-center gap-4 pt-3">
                <input
                  type="file"
                  id="file-upload-contact-section"
                  className="hidden"
                  accept="application/pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setSelectedFile(file);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('file-upload-contact-section')?.click()}
                  className="bg-[#4A4A4A] text-white px-5 py-2 rounded-full text-sm"
                >
                  Upload Plan
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4A4A4A] text-white px-5 py-2 rounded-full text-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
      <div className="bg-black h-[1px] w-full mt-10 opacity-25" />
    </section>
  );
};





const ContentGrid = ({ activeCategory }: { activeCategory: "services" | "trades" }) => {
  const services = [
    "Construction Estimating Services",
    "Construction Cost Estimation",
    "Residential Estimating Services",
    "Preliminary Estimates Services",
    "Virtual Bid Management",
    "CPM Scheduling",
    "Estimating Consultant",
    "BIM Estimating Services"
  ];

  const trades = [
    "Concrete Estimating",
    "Electrical Estimating",
    "Masonry Estimating",
    "MEP Estimating",
    "Roofing  Estimation",
    "Thermal / Moisture Protection",
    "Thermal & Moisture",
    "Metal Estimating",


  ];

  const items = activeCategory === "services" ? services : trades;

  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      {items.map((name, index) => (
        <button
          key={index}
          className="flex items-center gap-3 p-3 rounded-lg bg-[#7ED957]/55 hover:bg-gray-700 border border-[#7ED957]/30 hover:border-gray-700 transition-all duration-300 text-left group"
        >
          <div className="w-2 h-2 rounded-full bg-[#7ED957] group-hover:bg-white flex-shrink-0 group-hover:scale-150 transition-all"></div>
          <p className="font-semibold text-gray-900 group-hover:text-white transition-colors">{name}</p>
        </button>
      ))}
    </div>
  );
};

export default ContactSection;
