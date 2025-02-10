import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
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
    <section className="bg-blue-50 text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-900">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="font-bold text-2xl text-blue-700 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
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

export default Projects;
