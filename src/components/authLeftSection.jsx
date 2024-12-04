import React from 'react';

const AuthLeftSection = () => {

    return (
        <div className="hidden lg:flex lg:flex-1 bg-gray-100 flex-col">
            <div className="p-8">
                <a href='/'>
                    <span className="text-2xl font-bold">Logo</span>
                </a>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img
                    src="/src/assets/Group.png"
                    alt="People"
                    className="w-96 max-w-xl h-96 flex self-end object-cover"
                />
            </div>
        </div>
    );
};

export default AuthLeftSection;

