import React, { useState } from 'react';
import axios from 'axios';
import { API_PATH } from '../../hooks/config';
import AuthLeftSection from '../../components/authLeftSection';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_PATH}/auth/forget-password`, { email });
            setSuccess(response.data.message);
            localStorage.setItem('email', email);
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <AuthLeftSection />

            {/* Right Section */}
            <div className="flex-1 flex flex-col mt-16 p-8 lg:p-12">
                <div className="max-w-md w-full mx-auto">
                    <div className="flex items-center mb-8">
                        <a href="/login" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to login
                        </a>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Forgot Password</h1>
                    <p className="text-gray-600 mb-8">Enter your email address to reset your password</p>

                    {success && <p className="text-center text-green-500 mb-4">{success}</p>}
                    {error && <p className="text-center text-red-500 mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                placeholder="Your email address"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
