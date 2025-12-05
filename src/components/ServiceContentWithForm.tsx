import { Button } from "@/components/ui/button";
import { Upload, FileText, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/services/formService";

interface ServiceContentWithFormProps {
    mainHeading: string;
    heading: string;
    tagline: string;
    description: string[];
    SubDescription?: string;
    items: {
        title: string;
        description: string;
        bullets?: string[];
    }[];
}

const ServiceContentWithForm = ({ mainHeading, heading, tagline, description, items, SubDescription }: ServiceContentWithFormProps) => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        // Map ids to state keys if needed, but here simple mapping is easier if we use name attribute
        // or just use id matching state keys
    };

    // Better change handler using name attribute
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <section className="py-8 lg:py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Content - 60% */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl lg:text-5xl font-black text-black mb-4">
                            {mainHeading}
                        </h2>
                        <p className="text-xl font-semibold text-[#7ED957] mb-8">
                            {tagline}
                        </p>

                        <div className="prose prose-lg max-w-none mb-8">
                            {description.map((para, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                    {para}
                                </p>
                            ))}

                            <Button onClick={() => navigate('/contact')} className="bg-[#7ED957] text-black font-bold text-base px-8 py-6 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all mb-12">
                                Upload Samples
                            </Button>

                            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                                {heading}
                            </h3>


                            <p className="text-gray-700 leading-relaxed mb-6">
                                {SubDescription}
                            </p>




                            <ul className="space-y-6">
                                {items.map((item, index) => (
                                    <li key={index} className="flex flex-col gap-1">
                                        <strong className="text-black text-lg block">{item.title}</strong>
                                        <span className="text-gray-700 block">{item.description}</span>
                                        {item.bullets && (
                                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                                {item.bullets.map((bullet, bulletIndex) => (
                                                    <li key={bulletIndex} className="text-gray-700 text-base">
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Form - 40% with Sticky Behavior */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <div className="bg-gray-700 rounded-2xl p-6 shadow-xl">
                                <div className="flex gap-2 mb-4">
                                    <Button className="flex-1 bg-[#7ED957] text-black font-bold text-xs px-3 py-2 rounded-lg hover:bg-[#6BC847] transition-colors cursor-default">
                                        Get a Quick Price Quote
                                    </Button>
                                    <Button
                                        onClick={() => window.location.href = "tel:+17187196171"}
                                        className="flex-1 bg-gray-600 text-white font-bold text-xs px-3 py-2 rounded-lg hover:bg-gray-500 transition-colors"
                                    >
                                        Book a Consultation Call
                                    </Button>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Get in touch.
                                </h3>

                                <form className="space-y-3" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-white text-xs font-medium mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white text-xs font-medium mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white text-xs font-medium mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                                            placeholder="Enter your phone"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white text-xs font-medium mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            rows={3}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#7ED957] resize-none"
                                            placeholder="Enter your message"
                                            required
                                        />
                                    </div>

                                    {selectedFile && (
                                        <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-200">
                                            <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                                                <FileText className="w-3 h-3 text-red-500" />
                                            </div>
                                            <span className="text-xs text-gray-600 truncate flex-1 font-medium">{selectedFile.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFile(null)}
                                                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                            >
                                                <X className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex gap-2 pt-2">
                                        <input
                                            type="file"
                                            id="file-upload-service-content"
                                            className="hidden"
                                            accept="application/pdf"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setSelectedFile(file);
                                                }
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            onClick={() => document.getElementById('file-upload-service-content')?.click()}
                                            className="flex-1 bg-gray-600 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center gap-1"
                                        >
                                            <Upload className="w-3 h-3" />
                                            Upload Plan
                                        </Button>
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 bg-[#7ED957] text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-[#6BC847] transition-colors disabled:opacity-50"
                                        >
                                            {isSubmitting ? "Sending..." : "Submit"}
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            <div className="mt-6">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Button
                                        onClick={() => window.location.href = "tel:+17187196171"}
                                        className="w-full bg-[#7ED957] text-black font-black text-xl py-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all uppercase"
                                    >
                                        Avail Discount 30% Off
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContentWithForm;
