'use client';

import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import ThemeToggle from '../../components/ThemeToggle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Image from 'next/image'; // Import the Image component

const Page = () => {
    const [email, setEmail] = useState(""); // State to hold the email input
    const [loading, setLoading] = useState(false); // State for loading button
    const [notification, setNotification] = useState({ message: "", type: "" }); // Notification state
    const [showNotification, setShowNotification] = useState(false); // Show notification state

    const handleForgotPassword = async (e) => {
        e.preventDefault(); // Prevent page refresh on form submission
        setLoading(true);
        setNotification({ message: "", type: "" });

        try {
            const response = await fetch('https://near-to-you-backend.onrender.com/api/v1/users/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (response.ok) {
                setNotification({ message: "Password reset link sent to your email.", type: "success" });
            } else {
                setNotification({ message: result.message || "Failed to send reset link. Please try again.", type: "error" });
            }
        } catch (error) {
            setNotification({ message: "Network error. Please try again later.", type: "error" });
        } finally {
            setShowNotification(true);
            setLoading(false);
        }
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    return (
        <section className="h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col">
            <div className="absolute top-5 right-5 z-10">
                <ThemeToggle />
            </div>

            <Snackbar
                open={showNotification}
                autoHideDuration={3000}
                onClose={handleCloseNotification}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{
                    transform: 'translateX(-30px)',
                }}
            >
                <Alert
                    onClose={handleCloseNotification}
                    severity={notification.type === "success" ? "success" : "error"}
                    sx={{ width: '100%' }}
                >
                    {notification.message}
                </Alert>
            </Snackbar>

            <div className="flex">
                {/* Left Section */}
                <div className="h-screen w-[50vw] flex justify-center">
                    <div className="w-[35vw]">
                        <h1 className="text-[3.5vw] leading-[4.2vw] font-bold pt-[6vw] pb-[2vw]">Forgot password?</h1>
                        <p className="pb-[6vw]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur autem, quasi saepe ab officiis reprehenderit numquam corporis magni iste eius!
                        </p>
                        <form className="space-y-4" onSubmit={handleForgotPassword}>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className="mb-[0.5vw] font-medium text-gray-700 dark:text-gray-300 text-[1.3vw] flex items-center justify-between"
                                >
                                    <span>Email Address:</span>
                                    <HelpIcon
                                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer ml-[0.3vw]"
                                        fontSize="small"
                                    />
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="p-3 border rounded-[0.5vw] border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col w-[35vw] items-center justify-center mt-[4vw]">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-[24.6vw] h-[3.5vw] rounded-[0.5vw] text-white font-medium hover:brightness-90 ${
                                        loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
                                    }`}
                                    style={{
                                        backgroundColor: !loading ? 'var(--color-primary)' : undefined,
                                    }}
                                >
                                    {loading ? "Processing..." : "Request password change"}
                                </button>

                                <a
                                    href="#"
                                    className="pb-[1.5vw] pt-[1.5vw] text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                                >
                                    Do you need help?
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                                >
                                    Customer support
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div className="h-screen w-[50vw] bg-[#DFD3F2] flex justify-center items-start">
                    <Image
                        src="/forgot.png"
                        alt="Forgot Password Illustration"
                        width={500} // Specify width
                        height={500} // Specify height
                        className="mt-[2vw]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Page;
