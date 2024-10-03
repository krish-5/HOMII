import React from 'react';

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-gray-100 pb-8">
      <div className="flex w-full max-w-screen-xl flex-col items-center px-6">
        {/* Grid for links */}
        <div className="grid w-full grid-cols-1 gap-4 py-8 text-sm md:grid-cols-3">
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Support</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Help Center
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Safety Issues
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Air Cover
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Anti-discrimination
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Disability Support
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Cancellation Options
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Report Concern
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Hosting</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Host Your Home
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Air Cover for Hosts
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Hosting Resources
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Community Forum
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Responsible Hosting
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Homii</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Newsroom
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                New Features
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Careers
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Investors
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Emergency Stays
              </span>
            </p>
          </div>
        </div>

        <div className="my-4 w-full border-[1px] border-gray-200"></div>

        <div className="flex w-full flex-col items-center justify-between gap-4 md:gap-0 lg:flex-row">
          <div className="flex w-full flex-col gap-2 px-1 font-normal text-gray-700 md:w-auto md:flex-row md:items-center md:gap-8">
            <p className="text-sm">&copy; 2023 Homii, Inc.</p>
            <div>
              <ul className="flex gap-6 text-sm text-gray-700">
                <li className="cursor-pointer text-gray-700 decoration-1 underline-offset-1 hover:underline md:list-disc">
                  Privacy
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Terms
                </li>
                
                          </ul>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center py-4">
          <div className="flex gap-6">
            {/* GitHub icon */}
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.86 8.15 6.84 9.45.5.09.68-.22.68-.49v-1.85c-2.63.57-3.18-1.27-3.18-1.27-.43-1.1-1.05-1.39-1.05-1.39-.86-.59.07-.58.07-.58.95.07 1.45.97 1.45.97.84 1.43 2.19 1.02 2.72.78.09-.61.33-1.02.6-1.25-2.21-.25-4.53-1.11-4.53-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.26.1-2.63 0 0 .84-.27 2.74 1.03a9.54 9.54 0 0 1 2.49-.34c.84 0 1.68.11 2.49.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.37.1 2.63.63.7 1.02 1.6 1.02 2.69 0 3.84-2.33 4.69-4.56 4.94.33.29.63.87.63 1.76v2.61c0 .27.18.59.68.49C21.14 20.15 24 16.41 24 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>

            {/* LinkedIn icon */}
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0zM4 22v-6h4v6H4zm6-6v-6h4v6h-4zm6 0v-6h4v6h-4z"/>
              </svg>
            </a>

            {/* Instagram icon */}
            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.86 8.15 6.84 9.45.5.09.68-.22.68-.49v-1.85c-2.63.57-3.18-1.27-3.18-1.27-.43-1.1-1.05-1.39-1.05-1.39-.86-.59.07-.58.07-.58.95.07 1.45.97 1.45.97.84 1.43 2.19 1.02 2.72.78.09-.61.33-1.02.6-1.25-2.21-.25-4.53-1.11-4.53-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.26.1-2.63 0 0 .84-.27 2.74 1.03a9.54 9.54 0 0 1 2.49-.34c.84 0 1.68.11 2.49.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.37.1 2.63.63.7 1.02 1.6 1.02 2.69 0 3.84-2.33 4.69-4.56 4.94.33.29.63.87.63 1.76v2.61c0 .27.18.59.68.49C21.14 20.15 24 16.41 24 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
