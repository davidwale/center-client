import React, { useState } from 'react';


const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('retiree');

  const retireeSteps = [
    {
      title: "Create Your Profile",
      description: "Start by creating an account. You'll be asked to provide basic personal information to get started."
    },
    {
      title: "Submit Employment History",
      description: "Enter relevant employment details, through a simple, guided form. This information helps verify your eligibility for retirement payments."
    },
    {
      title: "Verify and Confirm",
      description: "Once submitted, your information is reviewed for accuracy. Additional verification documents may be required."
    },
    {
      title: "Receive Your Benefits",
      description: "Once your history is confirmed, you can begin receiving your retirement payments seamlessly, right into your bank account."
    }
  ];

  const pfaSteps = [
    {
      title: "Verify Retiree Information",
      description: "As a PFA, your role is to review and verify the employment history submitted by retirees. Cross-check the data provided to ensure it aligns with official records, ensuring accuracy and eligibility."
    },
    {
      title: "Capture Biometric Data",
      description: "Once the retirees employment details have been verified, PFAs are responsible for capturing biometric data, such as fingerprints and facial recognition. This added layer of security helps prevent fraud and ensures the authenticity of the retiree's claims."
    },
    {
      title: "Submit and Approve",
      description: "After validating the information and capturing biometrics, submit the data to the platform for final approval. This step ensures that the retiree can start receiving their payments seamlessly."
    }
  ];

  const mdaSteps = [
    {
      title: "Upload Employee Record",
      description: "Employers can log in and upload employee data for compliance and verification purposes. This helps ensure that former employees records are correctly matched to receive retirement benefits."
    },
    {
      title: "Review and Validate",
      description: "Our platform automatically validates the uploaded records against internal databases, making sure the information is accurate and up to date."
    },
    {
      title: "Ensure Compliance",
      description: "By completing this process, youll meet regulatory requirements while ensuring your employees have access to the benefits they ve earned."
    }
  ];

  const getSteps = () => {
    switch (activeTab) {
      case 'pfa':
        return pfaSteps;
      case 'mda':
        return mdaSteps;
      default:
        return retireeSteps;
    }
  };

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How it <span className="text-green-600">works</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Follow these easy steps to get started
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center overflow-hidden mb-12">
          <div className="inline-flex rounded-xl bg-gray-100 p-2">
            <button
              onClick={() => setActiveTab('retiree')}
              className={`px-10 md:px-16 py-2 rounded-2xl text-xs md:text-sm font-medium transition-colors ${activeTab === 'retiree'
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Retiree
            </button>
            <button
              onClick={() => setActiveTab('pfa')}
              className={`px-10 md:px-16 py-2 rounded-2xl  text-xs md:text-sm font-medium transition-colors ${activeTab === 'pfa'
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              PFA
            </button>
            <button
              onClick={() => setActiveTab('mda')}
              className={`px-10 md:px-16 py-2 rounded-2xl  text-xs md:text-sm font-medium transition-colors ${activeTab === 'mda'
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              MDA
            </button>
          </div>
        </div>
        <div className='flex justify-between'>
          <img
            src="/assets/man-in-suit.png"
            alt=""
            className="hidden lg:flex self-end w-[300px] h-[300px]"
          />
          <div className="space-y-8 mb-20">
            {getSteps().map((step, index) => (
              <div key={index} className="flex gap-4 pl-20 pr-10">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src="/assets/woman.png"
            alt=""
            className="hidden lg:flex self-end w-[300px] h-[300px]"
          />
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
