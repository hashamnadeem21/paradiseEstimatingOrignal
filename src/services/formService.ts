import { toast } from "sonner"; // Assuming sonner is used, or I'll check for toast
// If sonner is not installed, I'll use standard alert or console for now, but better to check package.json
// Checking package.json for toast library...

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    file?: File | null;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    const endpoint = import.meta.env.VITE_API_URL;

    // Check for Mixed Content issues (HTTPS page calling HTTP API)
    if (window.location.protocol === 'https:' && endpoint && endpoint.startsWith('http:')) {
        console.warn(
            "Security Warning: You are attempting to make a request from a secure (HTTPS) site to an insecure (HTTP) API endpoint. " +
            "Browsers will block this request due to Mixed Content security policies. " +
            "Please ensure your API is served over HTTPS."
        );
    }

    try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("message", data.message);

        if (data.file) {
            formData.append("blueprint", data.file);
        }

        const response = await fetch(endpoint, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            const isSuccess = result.success !== undefined ? result.success : true;
            if (isSuccess) {
                return { success: true, message: result.message || "Email sent successfully!" };
            }
        }

        console.error("Form submission failed:", result);
        return { success: false, message: result.message || "Failed to send message." };
    } catch (error) {
        console.error("Network or Unexpected Error:", error);

        // Provide a more specific error message for Mixed Content or CORS failures
        if (error instanceof TypeError && error.message === "Failed to fetch") {
            return {
                success: false,
                message: "Connection failed. This might be due to Mixed Content (HTTPS/HTTP), CORS, or a network issue."
            };
        }

        return { success: false, message: "Network error. Please try again later." };
    }
};
