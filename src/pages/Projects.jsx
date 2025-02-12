// import { motion } from "framer-motion";

// const Projects = () => {
//   const projectsData = [
//     {
//       title: "Urban Water Supply Design",
//       description:
//         "Designed a sustainable water distribution system for an urban area, focusing on reducing waste and increasing efficiency.",
//     },
//     {
//       title: "Flood Risk Assessment",
//       description:
//         "Conducted flood risk analysis using GIS and hydrological models to help develop an effective mitigation plan for flood-prone areas.",
//     },
//     {
//       title: "Proposal Development: Emerging Contaminants in Water",
//       description:
//         "Developed a proposal for PFAS detection in water samples in collaboration with WaterAid.",
//     },
//     {
//       title: "Quality Program Standard for WASH Intervention",
//       description:
//         "Developed a quality program standard and orientation manual for WASH (Water, Sanitation, and Hygiene) interventions with WaterAid.",
//     },
//     {
//       title: "WASH Design Review",
//       description:
//         "Conducted a technical design review of rainwater harvesting and reverse osmosis plant projects for WaterAid.",
//     },
//     {
//       title: "Paikgacha Hydrogeological Study Phase II",
//       description:
//         "Conducted a hydrogeological study for the Paikgacha region, including groundwater and surface water modeling and resource assessment.",
//     },
//     {
//       title: "Carbon Accounting and Trapping",
//       description:
//         "Contributed to carbon accounting and concept note development for carbon trapping projects in collaboration with THiNK.",
//     },
//     {
//       title: "AI-Enabled Mosquito Trap",
//       description:
//         "Contributed to the concept note development for an AI-enabled mosquito trap project with THiNK.",
//     },
//     {
//       title: "Sea Level Rise Assessment for Bangladesh Coastline",
//       description:
//         "Contributed to a project with the Institute of Water Modelling to assess sea level rise along the coastline of Bangladesh.",
//     },
//     {
//       title: "Urban Heat Island Assessment for Dhaka",
//       description:
//         "Contributed to a project with the Institute of Water Modelling to assess the urban heat island effect in Dhaka.",
//     },
//     {
//       title: "Joint Cooperation Program Bangladesh-Netherlands",
//       description:
//         "Contributed to project management, program development, budget preparation, and other tasks for the joint cooperation program between Bangladesh and the Netherlands at the Institute of Water Modelling.",
//     },
//     {
//       title: "Mathematical Modelling for Sonadia Island Eco-tourism",
//       description:
//         "Contributed to GIS mapping, spatial analysis, land use mapping, and eco-tourism development for Sonadia Island at the Institute of Water Modelling.",
//     },
//     {
//       title: "Dredging Feasibility Assessment of Eastern Hill Rivers",
//       description:
//         "Contributed to dredging feasibility assessment, 1D flood modeling, environmental and social impact assessment, dredging calculations, economic feasibility, and DPP preparation for the Eastern Hill Rivers in Bangladesh at the Institute of Water Modelling.",
//     },
//     {
//       title: "Old Brahmaputra River Dredging Feasibility Study",
//       description:
//         "Contributed to technical report preparation, feasibility study with IEE and social study, detailed calculations, economic analysis, and DPP preparation for the Old Brahmaputra River dredging project at the Institute of Water Modelling.",
//     },
//     {
//       title: "Extreme Flow Analysis for Jamuneshwari River Basin",
//       description:
//         "Conducted extreme flow analysis in a climate change scenario for the Jamuneshwari river basin in Bangladesh as part of a master's thesis at KU Leuven.",
//     },
//     {
//       title: "Environmental Flow Assessment Methodology for Sundarbans",
//       description:
//         "Contributed to the development of an environmental flow assessment methodology for the Sundarbans region at the Center for Environmental and Geographic Information Services (CEGIS).",
//     },
//     {
//       title: "WATSAN Assessment for Vulnerable Hotspots in Bangladesh",
//       description:
//         "Contributed to a water supply and sanitation assessment for vulnerable areas in Bangladesh at the Center for Environmental and Geographic Information Services (CEGIS).",
//     },
//     {
//       title: "Dhaka City Master Plan Update",
//       description:
//         "Contributed to the update of the Dhaka City Master Plan at the Institute of Engineers Bangladesh.",
//     },
//   ];

//   return (
//     <section className="bg-blue-50 text-gray-800 py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-900">
//           Key Projects
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <div className="p-6">
//                 <h3 className="font-bold text-2xl text-blue-700 mb-3">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {project.description}
//                 </p>
//                 {/* Add a Learn More button or link if applicable */}
//                 {/*<a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">Learn More</a>*/}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion"; // Imports the 'motion' component from the 'framer-motion' library.  This library is used for creating animations.

const Projects = () => {
  // This is the Projects component, a React function that will display a list of projects.

  const projectsData = [
    // An array of objects, where each object represents a project. Each project has a 'title' and a 'description'.
    {
      title: "Urban Water Supply Design",
      description:
        "Designed a sustainable water distribution system for an urban area, focusing on reducing waste and increasing efficiency.",
    },
    {
      title: "Flood Risk Assessment",
      description:
        "Conducted flood risk analysis using GIS and hydrological models to help develop an effective mitigation plan for flood-prone areas.",
    },
    {
      title: "Proposal Development: Emerging Contaminants in Water",
      description:
        "Developed a proposal for PFAS detection in water samples in collaboration with WaterAid.",
    },
    {
      title: "Quality Program Standard for WASH Intervention",
      description:
        "Developed a quality program standard and orientation manual for WASH (Water, Sanitation, and Hygiene) interventions with WaterAid.",
    },
    {
      title: "WASH Design Review",
      description:
        "Conducted a technical design review of rainwater harvesting and reverse osmosis plant projects for WaterAid.",
    },
    {
      title: "Paikgacha Hydrogeological Study Phase II",
      description:
        "Conducted a hydrogeological study for the Paikgacha region, including groundwater and surface water modeling and resource assessment.",
    },
    {
      title: "Carbon Accounting and Trapping",
      description:
        "Contributed to carbon accounting and concept note development for carbon trapping projects in collaboration with THiNK.",
    },
    {
      title: "AI-Enabled Mosquito Trap",
      description:
        "Contributed to the concept note development for an AI-enabled mosquito trap project with THiNK.",
    },
    {
      title: "Sea Level Rise Assessment for Bangladesh Coastline",
      description:
        "Contributed to a project with the Institute of Water Modelling to assess sea level rise along the coastline of Bangladesh.",
    },
    {
      title: "Urban Heat Island Assessment for Dhaka",
      description:
        "Contributed to a project with the Institute of Water Modelling to assess the urban heat island effect in Dhaka.",
    },
    {
      title: "Joint Cooperation Program Bangladesh-Netherlands",
      description:
        "Contributed to project management, program development, budget preparation, and other tasks for the joint cooperation program between Bangladesh and the Netherlands at the Institute of Water Modelling.",
    },
    {
      title: "Mathematical Modelling for Sonadia Island Eco-tourism",
      description:
        "Contributed to GIS mapping, spatial analysis, land use mapping, and eco-tourism development for Sonadia Island at the Institute of Water Modelling.",
    },
    {
      title: "Dredging Feasibility Assessment of Eastern Hill Rivers",
      description:
        "Contributed to dredging feasibility assessment, 1D flood modeling, environmental and social impact assessment, dredging calculations, economic feasibility, and DPP preparation for the Eastern Hill Rivers in Bangladesh at the Institute of Water Modelling.",
    },
    {
      title: "Old Brahmaputra River Dredging Feasibility Study",
      description:
        "Contributed to technical report preparation, feasibility study with IEE and social study, detailed calculations, economic analysis, and DPP preparation for the Old Brahmaputra River dredging project at the Institute of Water Modelling.",
    },
    {
      title: "Extreme Flow Analysis for Jamuneshwari River Basin",
      description:
        "Conducted extreme flow analysis in a climate change scenario for the Jamuneshwari river basin in Bangladesh as part of a master's thesis at KU Leuven.",
    },
    {
      title: "Environmental Flow Assessment Methodology for Sundarbans",
      description:
        "Contributed to the development of an environmental flow assessment methodology for the Sundarbans region at the Center for Environmental and Geographic Information Services (CEGIS).",
    },
    {
      title: "WATSAN Assessment for Vulnerable Hotspots in Bangladesh",
      description:
        "Contributed to a water supply and sanitation assessment for vulnerable areas in Bangladesh at the Center for Environmental and Geographic Information Services (CEGIS).",
    },
    {
      title: "Dhaka City Master Plan Update",
      description:
        "Contributed to the update of the Dhaka City Master Plan at the Institute of Engineers Bangladesh.",
    },
  ];

  return (
    // This is what the component will render (display).
    <section className="bg-blue-50 text-gray-800 py-20">
      {/* A section with a light blue background, dark gray text, and padding at the top and bottom. */}
      <div className="container mx-auto px-4">
        {/* A container to center the content and add padding on the sides. */}
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-900">
          Key Projects
        </h2>
        {/* A main heading that says "Key Projects", in a large font size, bold, centered, and dark blue. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*
            A grid layout to display the projects.
            - On small screens (sm:), it's a single column.
            - On medium screens (md:), it's two columns.
            - On large screens (lg:), it's three columns.
            - There's a gap of 8 units between the grid items.
          */}
          {projectsData.map((project, index) => (
            // This .map() function loops through each project in the projectsData array and creates a card for it.
            <motion.div
              key={index} // A unique key is required by React for each item in a list.
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100" // Styling for the project card: white background, rounded corners, shadow, hover effect, and a light blue border.
              initial={{ opacity: 0, y: 20 }} // Initial animation state: hidden (opacity 0) and moved down 20 pixels.
              animate={{ opacity: 1, y: 0 }} // Final animation state: visible (opacity 1) and in its normal position (y 0).
              transition={{ delay: index * 0.1 }} // Animation transition:  A delay is added based on the index of the project, so the cards animate in one after another.
            >
              {/*
                The motion.div is a special div from the framer-motion library that allows for animations.
                - initial: defines the starting point of the animation
                - animate: defines the end point of the animation
                - transition: defines how the animation happens (delay, duration, etc.)
              */}
              <div className="p-6">
                {/* Padding inside the project card. */}
                <h3 className="font-bold text-2xl text-blue-700 mb-3">
                  {project.title}
                </h3>
                {/* The project title, in bold, a large font size, dark blue, and with some margin at the bottom. */}
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                {/* The project description, in dark gray, with comfortable line height. */}
                {/* Add a Learn More button or link if applicable */}
                {/*<a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">Learn More</a>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; // Exports the Projects component so it can be used in other parts of the application.
