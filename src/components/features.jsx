import { Banknote, BookOpen, CircleHelp, ShieldCheck, Users } from 'lucide-react';
import React from 'react';

const Features = () => {
  return (
    <section className="w-full py-12 bg-gray-100 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-2xl font-bold tracking-tighter text-center sm:text-3xl md:text-5xl">
          Retiree data processing <br /> <span className='text-green-600'>made easy!</span>
        </h1>
        <div className="grid gap-8 mt-8 md:grid-cols-3">
          <div className="space-y-4 px-7 pb-7 pt-4 rounded-lg bg-white hover:bg-gray-50 transition cursor-pointer h-60 border border-gray-300">
            <ShieldCheck className='w-8' />
            <h3 className="text-base font-bold">Secure & Reliable</h3>
            <p className="text-gray-500 text-sm">
              We prioritize your data security with advanced encryption and strict privacy protocols,
              ensuring that your information is always protected
            </p>
          </div>
          <div className="space-y-4 px-7 pb-7 pt-4 rounded-lg bg-white hover:bg-gray-50 transition cursor-pointer h-60 border border-gray-300">
            <Users />
            <h3 className="text-base font-bold">User-Friendly Experience</h3>
            <p className="text-gray-500 text-sm">
              Our platform is designed with simplicity in mind. Whether youre a retiree submitting your
              employment history or an employer managing records, the process is quick and easy, with clear
              instructions at every Step
            </p>
          </div>
          <div className="space-y-4 px-7 pb-7 pt-4 rounded-lg bg-white hover:bg-gray-50 transition cursor-pointer h-60 border border-gray-300">
            <Banknote />
            <h3 className="text-base font-bold">Accurate and Timely Payment</h3>
            <p className="text-gray-500 text-sm">
              For retirees, our system ensures that once your employment history is verified, payments are processed promptly
              and accurately. No delays, just the benefits youve earned
            </p>
          </div>
          <div className="space-y-4 px-7 pb-7 pt-4 h-60 rounded-lg bg-white hover:bg-gray-50 transition cursor-pointer border border-gray-300">
            <BookOpen />
            <h3 className="text-base font-bold">Comprehensive Compliance for Employer</h3>
            <p className="text-gray-500 text-sm">
              Employers can rest assured knowing that they are meeting all regulatory
              requirements by securely uploading employee data. Our platform takes the guesswork out of compliance.
            </p>
          </div>
          <div className="space-y-4 px-7 pb-7 pt-4 h-60 rounded-lg bg-white hover:bg-gray-50 transition cursor-pointer border border-gray-300">
            <CircleHelp />
            <h3 className="text-base font-bold">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
              Our dedicated support team is available around the clock to assist with any questions
              or concerns you may have, ensuring a seamless experience from start to finish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

