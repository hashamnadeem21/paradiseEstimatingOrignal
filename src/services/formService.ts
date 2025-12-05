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
            // Content-Type header must NOT be set manually when using FormData
            // The browser will automatically set it to multipart/form-data with the correct boundary
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            // If the API returns success: true, use it. If it's missing but status is 200, assume success.
            const isSuccess = result.success !== undefined ? result.success : true;
            if (isSuccess) {
                return { success: true, message: result.message || "Email sent successfully!" };
            }
        }

        console.error("Form submission failed", result);
        return { success: false, message: result.message || "Failed to send message." };
    } catch (error) {
        console.error("Error submitting form:", error);
        return { success: false, message: "Network error used local server. Please try again later." };
    }
};
