import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_PATH } from '../../hooks/config';
import AuthLeftSection from '../../components/authLeftSection';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        } else {
            setError('No email found. Please request a new OTP.');
        }
    }, []);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
        setOtp(newOtp);

        if (element.value !== '' && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const otpCode = otp.join('');
        if (otpCode.length !== 6) {
            setError('Please enter a complete 6-digit code');
            return;
        }

        if (!email) {
            setError('No email found. Please request a new OTP.');
            return;
        }

        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post(`${API_PATH}/auth/verify-otp`, {
                email: email,
                otp: Number(otpCode)
            });
            localStorage.setItem('token', response.data.token)
            setSuccess('Email verified successfully!');
            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Verification failed. Please try again.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
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

                    <h1 className="text-3xl font-bold mb-2">Verify Your Email</h1>
                    <p className="text-gray-600 mb-8">Enter the 6-digit code sent to {email}</p>

                    {success && <p className="text-center text-green-500 mb-4">{success}</p>}
                    {error && <p className="text-center text-red-500 mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-between">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    className="w-12 h-12 border-2 rounded-lg text-center text-xl"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmailVerification;