import React from 'react';

const Hero = () => {
  return (
    <section className="py-24 px-10">
      <div className="container mt-20 lg:mx-auto px-1 md:px-6">
        <div className="flex justify-between md:px-8">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter">
                One Platform,
                <br />
                Two Solutions
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-2xl font-semibold">
                Simplifying Benefits for Retirees and <br /> Employers
              </p>
              <p className="max-w-[450px] text-sm text-gray-500">
                Whether you're a retiree claiming your benefits or an employer
                submitting employee data for verification, we've got you covered with a
                secure and seamless experience
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-green-600 text-white px-2 py-2 md:px-6 md:py-3 rounded-sm hover:bg-green-700 transition-colors">
                Claim Your Benefits
              </button>
              <button className="text-green-600 bg-white px-2 py-2 md:px-6 md:py-3 rounded-sm border-sm border border-green-600 transition-colors">
                Upload Employee Data
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center w-96 justify-center">
            <img
              alt="Hero Image"
              className="w-full"
              src="/src/assets/hero.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

