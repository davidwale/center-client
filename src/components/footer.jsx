import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-green-600 py-12 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="block md:flex justify-between">
          <div className="space-y-4 mb-20 md:mb-0">
            <h3 className="font-bold text-white">Address</h3>
            <p className='text-white'>
              123 Maple Street, Springfield, IL 62704, Lagos
            </p>
          </div>
          <div className='flex gap-20'>
            <div className="space-y-4">
              <h3 className="font-bold text-white">Info</h3>
              <ul className="space-y-2 text-green-100">
                <li>
                  <a className="hover:text-white" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    How it works
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-white">Contact Us</h3>
              <ul className="space-y-2 text-green-100">
                <li>
                  <a className="hover:text-white" href="#">
                    0800-125-500-6266
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    info@abcd.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-green-500 pt-8 text-center text-green-100">
          <div className='flex justify-between'>
            <p>
              Powered by StellarSync Technology © 2024
            </p>
            <p>
              v.1.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

