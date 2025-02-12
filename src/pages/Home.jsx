// import React from "react";
// import Footer from "./Footer";

// const aboutMeData = {
//   title: "About Me",
//   content: [
//     "I have business development, proposal writing, technical report preparation, project management, team management and data analytics experience for 12+ years in water, environment and climate consultancy, R&D and partnership oriented projects.",

//     "I am an educator and have given guest lectures and seminar keynote speeches.",

//     "By training I am a Water resources Engineer , and have worked for 12+ years in the sector of water, environment and climate.",
//   ],
// };

// const glanceData = {
//   title: "Me at a Glance",
//   items: [
//     "🎓 MSc. Water Resources Engineering, BSc. in Civil Engineering, Currently pursuing a second Master's in Economics",
//     "🌱 Specialization in Sustainable Water Management",
//     "💼 12+ years of industry experience",
//     "🏆 Published Research Papers in various journals",
//     "🌍 Worked on projects about water management, Climate change and Remote sensing",
//   ],
// };

// const experienceData = {
//   title: "Professional Experience",
//   items: [
//     {
//       role: "Senior Grant Consultant",
//       company: "WhiteDoor Partners Private Limited · Full-time",
//       period: "Nov 2024 - Present",
//       highlights:
//         "Fintech, e-commerce, agri tech, water and environment related tech, climate change finances ",
//     },
//     {
//       role: "Technical Specialist",
//       company: "WaterAid · Full-time",
//       period: "Apr 2024 - Oct 2024",
//       highlights: "Water supply, Sanitation and Hygiene ",
//     },
//     {
//       role: "Consultant",
//       company: "THiNK · Contract",
//       period: "Jan 2024 - Mar 2024 ",
//       highlights:
//         " IOT and AI based solution, Carbon Capture and Carbon Accounting, IOT based monitoring and data collection system ",
//     },
//     {
//       role: "Adjunct Faculty- Civil Engineering",
//       company: "East West University · Part-time",
//       period: "Oct 2021 - May 2022 ",
//       highlights: "Public Speaking · Spoken English · Teaching · Hydrology",
//     },
//   ],
// };

// const projectsData = {
//   title: "Featured Projects",
//   items: [
//     {
//       title: "Proposal Development- emerging contaminants in water ",
//       description: "PFAS detection in water sample ",
//     },
//     {
//       title:
//         "Quality Program Standard for WASH intervention in WaterAid Projects",
//       description: "manual development, orientation ",
//     },
//   ],
// };

// const Home = () => {
//   return (
//     <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <div className="relative bg-gray-900 h-[60vh] overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//           {/* Simple gradient background */}
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
//             Bushra Monowar Duti
//           </h1>
//           <div className="h-1 w-32 bg-blue-400 mb-6 animate-width"></div>

//           {/* Added Role Tags */}
//           <div className="flex flex-wrap justify-center gap-3 mt-6">
//             <span
//               className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
//               style={{ animationDelay: "0.2s" }}
//             >
//               CIVIL ENGINEER
//             </span>
//             <span
//               className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
//               style={{ animationDelay: "0.4s" }}
//             >
//               WATER RESOURCES ENGINEER
//             </span>
//             <span
//               className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
//               style={{ animationDelay: "0.6s" }}
//             >
//               PROJECT MANAGER
//             </span>
//             <span
//               className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
//               style={{ animationDelay: "0.6s" }}
//             >
//               EDUCATOR
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-10 max-w-7xl">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <p className="max-w-5xl mx-auto mb-8 text-3xl md:text-4xl font-semibold text-gray-700 leading-tight tracking-wide">
//             A Water Resources Engineer with 12+ years of expertise in water,
//             environment, and climate sectors, specializing in business
//             development, project management, data analytics, and education.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Left Column - About */}
//           <div className="md:col-span-2 space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-4xl font-bold mb-4 text-gray-800">
//                 {aboutMeData.title}
//               </h2>
//               <div className="space-y-4">
//                 {aboutMeData.content.map((paragraph, index) => (
//                   <p
//                     key={index}
//                     className="text-xl text-gray-600 leading-relaxed"
//                   >
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-4xl font-bold mb-4 text-gray-800">
//                 {experienceData.title}
//               </h2>
//               <div className="space-y-6">
//                 {experienceData.items.map((exp, index) => (
//                   <div
//                     key={index}
//                     className="p-4 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-blue-500"
//                   >
//                     <h3 className="text-2xl font-semibold text-gray-800">
//                       {exp.role}
//                     </h3>
//                     <p className="text-xl text-blue-600 mb-2">
//                       {exp.company} • {exp.period}
//                     </p>
//                     <p className="text-lg text-gray-600">{exp.highlights}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 text-center">
//                 <a
//                   href="/experience"
//                   className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   View Full Experience
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* Right Column */}
//           <div className="space-y-6">
//             {/* At a Glance */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-4xl font-bold mb-4 text-gray-800">
//                 {glanceData.title}
//               </h2>
//               <ul className="space-y-3">
//                 {glanceData.items.map((item, index) => (
//                   <li
//                     key={index}
//                     className="text-xl text-gray-600 flex items-start"
//                   >
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Projects Preview */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-4xl font-bold mb-4 text-gray-800">
//                 {projectsData.title}
//               </h2>
//               <div className="space-y-3">
//                 {projectsData.items.map((project, index) => (
//                   <div
//                     key={index}
//                     className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
//                   >
//                     <h3 className="text-2xl font-semibold text-gray-800">
//                       {project.title}
//                     </h3>
//                     <p className="text-lg text-gray-600">
//                       {project.description}
//                     </p>
//                     <div className="mt-2">
//                       <a
//                         href={project.link}
//                         className="text-blue-600 hover:underline"
//                       ></a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 text-center">
//                 <a
//                   href="/projects"
//                   className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   View All Projects
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from "react"; // Imports the React library, necessary for creating React components
import Footer from "./Footer"; // Imports the Footer component from the "./Footer" file

// Data for the "About Me" section
const aboutMeData = {
  title: "About Me", // The title of the section
  content: [
    // An array of paragraphs containing information about the person
    "I have business development, proposal writing, technical report preparation, project management, team management and data analytics experience for 12+ years in water, environment and climate consultancy, R&D and partnership oriented projects.", // First paragraph

    "I am an educator and have given guest lectures and seminar keynote speeches.", // Second paragraph

    "By training I am a Water resources Engineer , and have worked for 12+ years in the sector of water, environment and climate.", // Third paragraph
  ],
};

// Data for the "Me at a Glance" section
const glanceData = {
  title: "Me at a Glance", // The title of the section
  items: [
    // An array of bullet points highlighting key information
    "🎓 MSc. Water Resources Engineering, BSc. in Civil Engineering, Currently pursuing a second Master's in Economics", // First bullet point
    "🌱 Specialization in Sustainable Water Management", // Second bullet point
    "💼 12+ years of industry experience", // Third bullet point
    "🏆 Published Research Papers in various journals", // Fourth bullet point
    "🌍 Interested in projects about water management, Climate change and Remote sensing", // Fifth bullet point
  ],
};

// Data for the "Professional Experience" section
const experienceData = {
  title: "Professional Experience", // The title of the section
  items: [
    // An array of objects, each representing a work experience
    {
      role: "Senior Grant Consultant", // The job title
      company: "WhiteDoor Partners Private Limited · Full-time", // The company name and employment type
      period: "Nov 2024 - Present", // The period of employment
      highlights:
        "Fintech, e-commerce, agri tech, water and environment related tech, climate change finances ", // A brief description of the role
    },
    {
      role: "Technical Specialist", // The job title
      company: "WaterAid · Full-time", // The company name and employment type
      period: "Apr 2024 - Oct 2024", // The period of employment
      highlights: "Water supply, Sanitation and Hygiene ", // A brief description of the role
    },
    {
      role: "Consultant", // The job title
      company: "THiNK · Contract", // The company name and employment type
      period: "Jan 2024 - Mar 2024 ", // The period of employment
      highlights:
        " IOT and AI based solution, Carbon Capture and Carbon Accounting, IOT based monitoring and data collection system ", // A brief description of the role
    },
    {
      role: "Adjunct Faculty- Civil Engineering", // The job title
      company: "East West University · Part-time", // The company name and employment type
      period: "Oct 2021 - May 2022 ", // The period of employment
      highlights: "Public Speaking · Spoken English · Teaching · Hydrology", // A brief description of the role
    },
  ],
};

// Data for the "Featured Projects" section
const projectsData = {
  title: "Featured Projects", // The title of the section
  items: [
    // An array of objects, each representing a project
    {
      title: "Proposal Development- emerging contaminants in water ", // The project title
      description: "PFAS detection in water sample ", // A brief description of the project
    },
    {
      title:
        "Quality Program Standard for WASH intervention in WaterAid Projects", // The project title
      description: "manual development, orientation ", // A brief description of the project
    },
  ],
};

// The main Home component
const Home = () => {
  return (
    // A div that uses a gradient background and covers the entire screen
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Hero Section - The top section of the page */}
      <div className="relative bg-gray-900 h-[60vh] overflow-hidden">
        {/* A div to create a gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Simple gradient background */}
        </div>

        {/* Hero Content - The content within the hero section */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          {/* The main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
            Bushra Monowar Duti
          </h1>
          {/* A decorative line */}
          <div className="h-1 w-32 bg-blue-400 mb-6 animate-width"></div>

          {/* Added Role Tags - Displays different roles/skills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {/* Each span is a role tag */}
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.2s" }} // Adds a slight delay to the animation
            >
              CIVIL ENGINEER
            </span>
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.4s" }} // Adds a slight delay to the animation
            >
              WATER RESOURCES ENGINEER
            </span>
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.6s" }} // Adds a slight delay to the animation
            >
              PROJECT MANAGER
            </span>
            <span
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium tracking-wide animate-fadeIn"
              style={{ animationDelay: "0.6s" }} // Adds a slight delay to the animation
            >
              EDUCATOR
            </span>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Header Section - Introduces the page content */}
        <div className="text-center mb-12">
          {/* A paragraph providing a summary */}
          <p className="max-w-5xl mx-auto mb-8 text-3xl md:text-4xl font-semibold text-gray-700 leading-tight tracking-wide">
            A Water Resources Engineer with 12+ years of expertise in water,
            environment, and climate sectors, specializing in business
            development, project management, data analytics, and education.
          </p>
        </div>

        {/* Main Content Grid - Divides content into columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="md:col-span-2 space-y-6">
            {/* About Me Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Section Title */}
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {aboutMeData.title}
              </h2>
              {/* Section content (paragraphs) */}
              <div className="space-y-4">
                {/* Maps over the content array and renders each paragraph */}
                {aboutMeData.content.map((paragraph, index) => (
                  <p
                    key={index} // React key for efficient rendering
                    className="text-xl text-gray-600 leading-relaxed" // Styling
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Professional Experience Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Section title */}
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {experienceData.title}
              </h2>
              {/* Section content (experience items) */}
              <div className="space-y-6">
                {/* Maps over the experience items and renders each item */}
                {experienceData.items.map((exp, index) => (
                  <div
                    key={index} // React key for efficient rendering
                    className="p-4 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-blue-500" // Styling and hover effect
                  >
                    {/* Job Role */}
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    {/* Company and Period */}
                    <p className="text-xl text-blue-600 mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    {/* Highlights of the role */}
                    <p className="text-lg text-gray-600">{exp.highlights}</p>
                  </div>
                ))}
              </div>
              {/* Link to view full experience */}
              <div className="mt-6 text-center">
                <a
                  href="/experience" // The link destination
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" // Styling
                >
                  View Full Experience
                </a>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            {/* At a Glance Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Section title */}
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {glanceData.title}
              </h2>
              {/* Section content (list of items) */}
              <ul className="space-y-3">
                {/* Maps over the glance items and renders each item */}
                {glanceData.items.map((item, index) => (
                  <li
                    key={index} // React key for efficient rendering
                    className="text-xl text-gray-600 flex items-start" // Styling
                  >
                    <span>{item}</span> {/* The item text */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Preview Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Section title */}
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {projectsData.title}
              </h2>
              {/* Section content (project items) */}
              <div className="space-y-3">
                {/* Maps over the project items and renders each item */}
                {projectsData.items.map((project, index) => (
                  <div
                    key={index} // React key for efficient rendering
                    className="p-3 hover:bg-gray-50 rounded-lg transition-colors" // Styling and hover effect
                  >
                    {/* Project title */}
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    {/* Project description */}
                    <p className="text-lg text-gray-600">
                      {project.description}
                    </p>
                    {/* Project link (if available) */}
                    <div className="mt-2">
                      <a
                        href={project.link} // The link destination
                        className="text-blue-600 hover:underline" // Styling
                      ></a>
                    </div>
                  </div>
                ))}
              </div>
              {/* Link to view all projects */}
              <div className="mt-6 text-center">
                <a
                  href="/projects" // The link destination
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" // Styling
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Includes the Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Home; // Exports the Home component so it can be used in other parts of the application
