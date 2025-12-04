import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const TopBar = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set a deadline (e.g., 24 hours from now for demo, or a fixed date)
        // For a "recurring" feel, let's count down to the next midnight or just a fixed 5 hour timer that resets.
        // Let's do a 24-hour countdown that resets daily.
        const calculateTimeLeft = () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);

            const difference = tomorrow.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: 0,
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#7ED957] text-black py-2 px-4 lg:px-6 overflow-hidden relative z-[60]">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4">

                {/* Left - Call Now Button */}
                <div className="flex items-center">
                    <motion.a
                        href="tel:+17187196171"
                        className="bg-gray-700 text-[#7ED957] px-5 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg hover:bg-gray-900 transition-colors text-sm lg:text-base"
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

                {/* Center Text */}
                <div className="text-center font-bold text-sm lg:text-base flex-1 hidden lg:block">
                    Welcome! Check out our latest updates and special offers.
                </div>

                {/* Right - Timer */}
                <div className="flex items-center gap-4">
                    <span className="font-bold text-xs uppercase tracking-wider hidden lg:block">Offer Ends In:</span>
                    <div className="flex gap-2 text-center">
                        {['Days', 'Hours', 'Mins', 'Secs'].map((label, index) => {
                            const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
                            const value = values[index];
                            return (
                                <div key={label} className="bg-black/10 rounded-md p-1 min-w-[40px]">
                                    <div className="font-black text-lg leading-none">
                                        {value.toString().padStart(2, '0')}
                                    </div>
                                    <div className="text-[8px] uppercase opacity-70 font-bold">
                                        {label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
