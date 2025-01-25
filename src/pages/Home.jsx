import React from "react";
import Footer from "./Footer";

const aboutMeData = {
  title: "About Me",
  content: [
    "I have business development, proposal writing, technical report preparation, project management, team management and data analytics experience for 12+ years in water, environment and climate consultancy, R&D and partnership oriented projects.",

    "I am an educator and have given guest lectures and seminar keynote speeches.",

    "By training I am a Water resources Engineer , and have worked for 12+ years in the sector of water, environment and climate.",
  ],
};

const glanceData = {
  title: "Me at a Glance",
  items: [
    "🎓 MSc. Water Resources Engineering, BSc. in Civil Engineering, Currently pursuing a second Master's in Economics",
    "🌱 Specialization in Sustainable Water Management",
    "💼 12+ years of industry experience",
    "🏆 Published Research Papers in various journals",
    "🌍 Worked on projects about water management, Climate change and Remote sensing",
  ],
};

const experienceData = {
  title: "Professional Experience",
  items: [
    {
      role: "Senior Grant Consultant",
      company: "WhiteDoor Partners Private Limited · Full-time",
      period: "Nov 2024 - Present",
      highlights:
        "Fintech, e-commerce, agri tech, water and environment related tech, climate change finances ",
    },
    {
      role: "Technical Specialist",
      company: "WaterAid · Full-time",
      period: "Apr 2024 - Oct 2024",
      highlights: "Water supply, Sanitation and Hygiene ",
    },
    {
      role: "Consultant",
      company: "THiNK · Contract",
      period: "Jan 2024 - Mar 2024 ",
      highlights:
        " IOT and AI based solution, Carbon Capture and Carbon Accounting, IOT based monitoring and data collection system ",
    },
    {
      role: "Adjunct Faculty- Civil Engineering",
      company: "East West University · Part-time",
      period: "Oct 2021 - May 2022 ",
      highlights: "Public Speaking · Spoken English · Teaching · Hydrology",
    },
  ],
};

const projectsData = {
  title: "Featured Projects",
  items: [
    {
      title: "Proposal Development- emerging contaminants in water ",
      description: "PFAS detection in water sample ",
    },
    {
      title:
        "Quality Program Standard for WASH intervention in WaterAid Projects",
      description: "manual development, orientation ",
    },
  ],
};

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Simple gradient background */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
            Bushra Monowar Duti
          </h1>
          <div className="h-1 w-32 bg-blue-400 mb-6 animate-width"></div>

          {/* Added Role Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              CIVIL ENGINEER
            </span>
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              WATER RESOURCES ENGINEER
            </span>
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              PROJECT MANAGER
            </span>
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              EDUCATOR
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="max-w-5xl mx-auto mb-8 text-3xl md:text-4xl font-semibold text-gray-700 leading-tight tracking-wide">
            A Water Resources Engineer with 12+ years of expertise in water,
            environment, and climate sectors, specializing in business
            development, project management, data analytics, and education.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {aboutMeData.title}
              </h2>
              <div className="space-y-4">
                {aboutMeData.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-xl text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {experienceData.title}
              </h2>
              <div className="space-y-6">
                {experienceData.items.map((exp, index) => (
                  <div
                    key={index}
                    className="p-4 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-blue-500"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-blue-600 mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-lg text-gray-600">{exp.highlights}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="/experience"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Full Experience
                </a>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            {/* At a Glance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {glanceData.title}
              </h2>
              <ul className="space-y-3">
                {glanceData.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl text-gray-600 flex items-start"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {projectsData.title}
              </h2>
              <div className="space-y-3">
                {projectsData.items.map((project, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-2">
                      <a
                        href={project.link}
                        className="text-blue-600 hover:underline"
                      ></a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="/projects"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
