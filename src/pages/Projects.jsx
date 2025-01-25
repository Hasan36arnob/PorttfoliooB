import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Existing projects */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Urban Water Supply Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Designed a sustainable water distribution system for an urban
              area, focusing on reducing waste and increasing efficiency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Flood Risk Assessment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Conducted flood risk analysis using GIS and hydrological models to
              help develop an effective mitigation plan for flood-prone areas.
            </p>
          </div>

          {/* New projects */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Proposal Development: Emerging Contaminants in Water
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Developed a proposal for PFAS detection in water samples in
              collaboration with WaterAid.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Quality Program Standard for WASH Intervention
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Developed a quality program standard and orientation manual for
              WASH (Water, Sanitation, and Hygiene) interventions with WaterAid.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              WASH Design Review
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Conducted a technical design review of rainwater harvesting and
              reverse osmosis plant projects for WaterAid.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Paikgacha Hydrogeological Study Phase II
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Conducted a hydrogeological study for the Paikgacha region,
              including groundwater and surface water modeling and resource
              assessment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Carbon Accounting and Trapping
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to carbon accounting and concept note development for
              carbon trapping projects in collaboration with THiNK.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              AI-Enabled Mosquito Trap
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to the concept note development for an AI-enabled
              mosquito trap project with THiNK.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Sea Level Rise Assessment for Bangladesh Coastline
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to a project with the Institute of Water Modelling to
              assess sea level rise along the coastline of Bangladesh.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Urban Heat Island Assessment for Dhaka
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to a project with the Institute of Water Modelling to
              assess the urban heat island effect in Dhaka.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Joint Cooperation Program Bangladesh-Netherlands
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to project management, program development, budget
              preparation, and other tasks for the joint cooperation program
              between Bangladesh and the Netherlands at the Institute of Water
              Modelling.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Mathematical Modelling for Sonadia Island Eco-tourism
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to GIS mapping, spatial analysis, land use mapping,
              and eco-tourism development for Sonadia Island at the Institute of
              Water Modelling.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Dredging Feasibility Assessment of Eastern Hill Rivers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to dredging feasibility assessment, 1D flood modeling,
              environmental and social impact assessment, dredging calculations,
              economic feasibility, and DPP preparation for the Eastern Hill
              Rivers in Bangladesh at the Institute of Water Modelling.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Old Brahmaputra River Dredging Feasibility Study
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to technical report preparation, feasibility study
              with IEE and social study, detailed calculations, economic
              analysis, and DPP preparation for the Old Brahmaputra River
              dredging project at the Institute of Water Modelling.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Extreme Flow Analysis for Jamuneshwari River Basin
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Conducted extreme flow analysis in a climate change scenario for
              the Jamuneshwari river basin in Bangladesh as part of a master's
              thesis at KU Leuven.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Environmental Flow Assessment Methodology for Sundarbans
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to the development of an environmental flow assessment
              methodology for the Sundarbans region at the Center for
              Environmental and Geographic Information Services (CEGIS).
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              WATSAN Assessment for Vulnerable Hotspots in Bangladesh
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to a water supply and sanitation assessment for
              vulnerable areas in Bangladesh at the Center for Environmental and
              Geographic Information Services (CEGIS).
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500">
            <h3 className="font-bold text-2xl text-orange-500 mb-4">
              Dhaka City Master Plan Update
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contributed to the update of the Dhaka City Master Plan at the
              Institute of Engineers Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
