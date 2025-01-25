import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Grant Consultant",
      company: "WhiteDoor Partners Private Limited · Full-time",
      duration: "Nov 2024 - Present",
      location: "Singapore, Singapore · Remote",
      highlights: [
        "Worked on Fintech, e-commerce, agri-tech, water and environment-related tech, and climate change finances",
        "Specialized in Business Development, Concept Note Development, and Proposal Writing",
        "Provided technical advisory for innovative grant and funding initiatives",
      ],
    },
    {
      role: "Technical Specialist",
      company: "WaterAid · Full-time",
      duration: "Apr 2024 - Oct 2024",
      location: "Dhaka, Bangladesh · On-site",
      highlights: [
        "Focused on water supply, sanitation, and hygiene (WASH) program delivery",
        "Provided policy advice and ensured adherence to quality program standards",
        "Led training courses and supported youth advocacy initiatives",
        "Conducted technical research including groundwater modeling and WASH design",
      ],
    },
    {
      role: "Consultant",
      company: "THiNK · Contract",
      duration: "Jan 2024 - Mar 2024",
      location: "Dhaka, Bangladesh · Hybrid",
      highlights: [
        "Developed IoT and AI-based solutions for carbon capture and accounting",
        "Designed IoT monitoring systems for data collection and mosquito surveillance",
        "Implemented innovative strategies for dengue onset prediction",
        "Worked on climate change mitigation and adaptation projects",
      ],
    },
    {
      role: "Adjunct Faculty - Civil Engineering",
      company: "East West University · Part-time",
      duration: "Oct 2021 - May 2022",
      location: "Dhaka, Bangladesh · On-site",
      highlights: [
        "Taught hydrology and civil engineering topics",
        "Engaged in public speaking and effective communication in the classroom",
        "Prepared course materials and managed classroom activities",
      ],
    },
    {
      role: "Associate Specialist - Climate Change Cell",
      company: "Institute of Water Modelling · Full-time",
      duration: "Aug 2019 - Sep 2021",
      location: "Dhaka, Bangladesh · On-site",
      highlights: [
        "Worked on spatial planning, coastal processes, and environmental policy",
        "Developed numerical simulations and technical research",
        "Specialized in climate change adaptation, policy research, and proposal writing",
      ],
    },
    {
      role: "Junior Specialist, Climate Change Cell",
      company: "Ministry of Water Resources · Full-time",
      duration: "Mar 2019 - Aug 2019",
      location: "Dhaka, Bangladesh · On-site",
      highlights: [
        "Focused on resource mobilization, strategic planning, and project scope development",
        "Delivered climate change adaptation training courses and workshops",
        "Specialized in proposal development, technical writing, and hydrology",
      ],
    },
    {
      role: "Junior Specialist, Coast-Port and Estuary Division",
      company: "Institute of Water Modelling · Full-time",
      duration: "Oct 2016 - Mar 2019",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Contributed to technical documentation, project planning, and numerical analysis",
        "Developed climate change adaptation strategies and mathematical modeling",
        "Conducted quantitative research and prepared technical reports",
      ],
    },
    {
      role: "Professional, Climate Change Study Division",
      company:
        "Center for Environmental and Geographic Information Services (CEGIS) · Full-time",
      duration: "Jan 2011 - Aug 2013",
      location: "Dhaka, Bangladesh · On-site",
      highlights: [
        "Conducted climate impact assessments, policy analysis, and hazard mapping",
        "Prepared technical reports and engaged in climate model data downscaling",
        "Specialized in climate science literature reviews and vulnerability assessments",
      ],
    },
    {
      role: "Lecturer, Civil Engineering Department",
      company:
        "Military Institute of Science and Technology (MIST) · Part-time",
      duration: "Jun 2011 - Dec 2011",
      location: "Dhaka, Bangladesh · On-site",
      highlights: [
        "Taught fluid mechanics and civil engineering drafting",
        "Developed course materials and delivered engaging lectures",
        "Specialized in public speaking and effective classroom management",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-blue-600">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <p className="text-gray-600">{exp.duration}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start"
                  >
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
