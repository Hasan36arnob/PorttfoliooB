import React from "react";

const Contact = () => {
  return (
    <section className="bg-white text-dark py-20">
      {/* Centered container */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center"></h2>

        {/* Contact Information */}
        <div className="max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Email</h3>
          <ul className="space-y-3 mb-6">
            <li>
              <a
                href="mailto:bushra.monowar@gmail.com"
                className="hover:text-orange-500"
              >
                bushra.monowar@gmail.com
              </a>
            </li>
          </ul>
          <h3 className="text-2xl font-bold mb-4">Phone</h3>
          <ul className="space-y-3 mb-6">
            <li>+8801716415528 (Mobile)</li>
          </ul>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/bushra-monowar-d-88b8091b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077b5] text-white px-6 py-2 rounded-lg hover:bg-[#005885] transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=jkWVzUQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ccbb] text-white px-6 py-2 rounded-lg hover:bg-[#00a899] transition duration-300"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
