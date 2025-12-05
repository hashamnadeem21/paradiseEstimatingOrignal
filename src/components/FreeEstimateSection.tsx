import { Phone, Mail, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { submitContactForm } from "@/services/formService";

const FreeEstimateSection = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("quote");
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
        <section className="py-16 lg:py-20 bg-[#1A1F2C]">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                                Ready to Get Your <span className="text-[#7ED957]">Free Estimate?</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                Get accurate construction estimates in 9-24 hours. Our expert team is ready to help you with your next project.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#7ED957] flex items-center justify-center flex-shrink-0 text-black">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">Call Us Now</p>
                                    <p className="text-[#7ED957] text-lg">+1 (718) 719-6171</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#7ED957] flex items-center justify-center flex-shrink-0 text-black">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">Email Us</p>
                                    <p className="text-[#7ED957] text-lg">Paradisestimating@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button onClick={() => navigate('/contact')} className="bg-[#7ED957] hover:bg-[#6BC947] text-black font-bold text-lg px-8 py-6 rounded-lg">
                                Upload Samples
                            </Button>

                        </div>
                    </div>

                    {/* Right Form Card (Matching ContactSection Fields) */}
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

                        {/* FORM - Texture Background */}
                        <div className="relative bg-white rounded-3xl p-8 shadow-lg w-full lg:w-[85%] mx-auto mt-0 overflow-hidden border border-gray-100">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-extrabold text-black mb-4">Get in touch.</h3>

                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border-gray-200 rounded-full h-11 px-4"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border-gray-200 rounded-full h-11 px-4"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <Input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border-gray-200 rounded-full h-11 px-4"
                                        placeholder="Phone Number"
                                        required
                                    />
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border-gray-200 rounded-2xl min-h-[110px] px-4 py-3"
                                        placeholder="Message"
                                        required
                                    />

                                    {selectedFile && (
                                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FileText className="w-4 h-4 text-red-500" />
                                            </div>
                                            <span className="text-sm text-gray-600 truncate flex-1 font-medium">{selectedFile.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFile(null)}
                                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                            >
                                                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex justify-center gap-4 pt-3">
                                        <input
                                            type="file"
                                            id="file-upload-free-estimate"
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
                                            onClick={() => document.getElementById('file-upload-free-estimate')?.click()}
                                            className="bg-[#4A4A4A] text-white px-5 py-2 rounded-full text-sm hover:bg-[#5A5A5A] transition-colors"
                                        >
                                            Upload Plan
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#4A4A4A] text-white px-5 py-2 rounded-full text-sm hover:bg-[#5A5A5A] transition-colors disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Sending..." : "Submit"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-[0.5px] w-full bg-[#7ED957] mt-10 opacity-30" />
            </div>
        </section>

    );
};

export default FreeEstimateSection;
