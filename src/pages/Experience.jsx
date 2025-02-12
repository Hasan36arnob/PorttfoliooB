import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Grant Consultant",
      company: "WhiteDoor Partners Pte. Limited",
      duration: "Nov 2024 - Present",
      location: "Singapore, Singapore (Remote)",
      highlights: [
        "Apply for different grants, call and fundings related to specific product base of WhiteDoor Partners Pte. Limited who specializes in carbon neutral product development (Direct Air Capture- liquid tree), carbon accounting product development (dashboard, software and IoT based Product), AI enabled Machine learning tool development to predict extreme climate induced hazards, disease outbreak prediction tool development, IoT enabled weather data collection and mosquito (vector) control mechanism development.",
        "Write concept notes, technical and financial proposal as well as support in submission of grant applications.",
        "Arrange business meetings and pitch and advocate our products to potential angel investors and funding agencies.",
        "Developing a POC of a BECCS (bioenergy with carbon capture and storage) from where we plan to generate biofuel from biomass.",
      ],
    },
    {
      role: "Technical Specialist",
      company: "WaterAid Bangladesh",
      duration: "Apr 2024 - Oct 2024",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Concept note development for plastic pollution and PFAS study, quality program standard related manual development and workshop design- for maintaining water supply related quality standards across wateraid.",
        "User safeguarding policy implementation- minimum health safety, Gender sensitive issues and institutional capacity building issues in this regard.",
        "Contributing in the hydrogeological study to explore Groundwater and its impact on vulnerable communities.",
        "Climate Resilient WASH (water supply, sanitation and Hygiene) design for the coastal region.",
        "Stakeholder mapping for faecal sludge treatment in municipalities, sanitation service chain review on ongoing FSTP plants of WaterAid.",
        "Social research on gender and vulnerable communities in coastal saline region, advocacy-related work related to Menstrual Hygiene and health, environment friendly hygiene material development for menstruation.",
      ],
    },
    {
      role: "Associate Specialist - Climate Change Cell",
      company: "IWM- Institute of Water Modelling",
      duration: "2016 - Sep 2021",
      location: "Dhaka, Bangladesh",
      projects: [
        {
          client: "Royal Embassy of the Netherlands",
          projectName:
            "Netherlands and Bangladesh Joint Cooperation Program (JCP) between Deltares- WUR (Wageningen University) and IWM",
          years: "(2018-2021)",
        },
        {
          client: "UK Met Office",
          projectName:
            "“Sea Level Rise assessment for Coastal Bangladesh in Changing Climate”",
          years: "(2020-2021)",
        },
        {
          client: "Civil Aviation Authority of Bangladesh (CAAB)",
          projectName:
            "ESIA (Environmental and Social Impact Assessment) of extension of Cox’s Bazar Airport",
          years: "(2018)",
          details: "air pollution modelling and noise pollution modelling",
        },
        {
          client: "Bangladesh Water Development Board (BWDB)",
          projectName:
            "Ecotourism development for coastal islands in Bangladesh: Land Use Planning and Preliminary Design",
          years: "(2018-2019)",
        },
        {
          client: "Bangladesh Water Development Board (BWDB)",
          projectName:
            "Tidal river management planning and social inclusion of TRM concept in Vobodaho region (Jessore)",
          years: "(2018-2019)",
        },
        {
          client: "Bangladesh Inland Water Transport Authority (BIWTA)",
          projectName:
            "dredging assessment and calculation for selected rivers of Bangladesh",
          years: "(2016-2019)",
          details: "map preparation, technical report preparation",
        },
        {
          client:
            "CCTF and DOE (Climate Change Trust Fund and Department of Environment)",
          projectName: "Urban Heat Island Assessment for Dhaka",
          years: "(2020-21)",
        },
      ],
      highlights: [
        "Study report preparation, financial budget preparation, technical and financial proposal development.",
        "Workshop and training arrangement, Client and stakeholder coordination, partner coordination, project budget management, feedback inclusion from client.",
        "Field visits, Focus Group Discussion (FGD), Key Informant Interview (KII).",
        "Data collection, data cleaning, data analysis– use of tools and statistical processes (SPSS, STATA, R), data interpretation, result analysis and discussion, spatial data analysis in GIS (ArcView, ArcGIS Pro, QGIS).",
        "Cross sectional and time series data analysis, panel data analysis, multivariate analysis, linear regression.",
        "Climate data projection (use of R and SDSM- statistical downscaling model), use of hydrological and agricultural modelling tools to predict future simulations of flood (or agricultural harvest) in future climate scenario with proper model parameterization, model calibration and validation.",
        "Using the model for scenario based adaptation strategy development in different options and impact scenarios, risk and vulnerability assessment; land use planning, policy analysis, policy recommendation development for ministries and government departments",
      ],
    },
    {
      role: "Professional, Climate Change Study Division",
      company:
        "CEGIS (Center for Environmental and Geographic Information Services)",
      duration: "Jan 2011 - Sep 2013",
      location: "Dhaka, Bangladesh",
      projects: [
        {
          client: "Department of Environment (DOE), Bangladesh",
          projectName:
            "Second National Communication Report for UNFCCC - United Nations Framework Convention on Climate Change",
          years: "(2011-2012)",
          details:
            "detailed policy analysis related to environment, water and climate",
        },
        {
          client: "Water Resources Planning Organization (WARPO), Bangladesh",
          projectName: "Wetland Reduction Assessment over the years",
          years: "(2012)",
        },
        {
          client: "International Union for Conservation of Nature (IUCN)",
          projectName:
            "“Ecological Flow Assessment of the Sundarbans of Bangladesh”",
          years: "(2012)",
        },
        {
          client: "Bangladesh Water Development Board (BWDB)",
          projectName:
            "Teesta Irrigation Project Phase II– irrigation and drainage design",
          years: "(2012-2013)",
          details: "report preparation",
        },
        {
          client:
            "CDMP-II (Comprehensive Disaster Management Program), United Nations Development Program (UNDP)",
          projectName:
            "Drought risk assessment for selected hotspots in Bangladesh with agricultural model and in different climate change scenarios",
          years: "(2011-2013)",
        },
        {
          client: "WaterAid Bangladesh",
          projectName:
            "WASH (Water supply/ sanitation/ hygiene) Climate vulnerability assessment for selected hotspots in Bangladesh",
          years: "(2012-2013)",
        },
      ],
      highlights: [
        "Study report preparation, financial budget preparation, technical and financial proposal development.",
        "Workshop and training arrangement, Client and stakeholder coordination, partner coordination, project budget management, feedback inclusion from client.",
        "Field visits, Focus Group Discussion (FGD), Key Informant Interview (KII).",
        "Data collection, data cleaning, data analysis– use of tools and statistical processes (SPSS, STATA, R), data interpretation, result analysis and discussion, spatial data analysis in GIS (ArcView, ArcGIS Pro, QGIS).",
        "Cross sectional and time series data analysis, panel data analysis, multivariate analysis, linear regression.",
        "Climate data projection (use of R and SDSM- statistical downscaling model), use of hydrological and agricultural modelling tools to predict future simulations of flood (or agricultural harvest) in future climate scenario with proper model parameterization, model calibration and validation.",
        "Using the model for scenario based adaptation strategy development in different options and impact scenarios, risk and vulnerability assessment; land use planning, policy analysis, policy recommendation development for ministries and government departments",
      ],
    },
    {
      role: "Adjunct Faculty - Civil Engineering",
      company: "East West University",
      duration: "Sep 2021 - May 2022",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Project Management (3 credit hour)",
        "Quantity Surveying (1.5 credit hour)",
        "Hydrology (4 credit hour)",
        "Lecture preparation, Taking lectures, preparing exam papers, quiz and assignments, marking exam papers, quiz and assignments, preparing details mark sheets, publishing grades and submitting grades to the exam controller office",
      ],
    },
    {
      role: "Lecturer, Civil Engineering Department",
      company: "Military Institute of Science and Technology (MIST)",
      duration: "Jul 2011 - Dec 2011",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Fluid Mechanics (4 credit hours)",
        "Civil Engineering Drawing (1.5 credit hours course)",
        "Lecture preparation, Taking lectures, preparing exam papers, quiz and assignments, marking exam papers, quiz and assignments, preparing details mark sheets, publishing grades and submitting grades to the exam controller office",
      ],
    },
  ];

  return (
    // Imports the 'motion' component from the 'framer-motion' library for animations.

    // Functional Component (Arrow Function)
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      {/*
        - `min-h-screen`: Sets the minimum height to fill the entire screen.
        - `bg-gradient-to-b`: Applies a gradient background that goes from top to bottom.
        - `from-gray-50 to-gray-100`: Defines the gradient colors, starting from a light gray (`gray-50`) and ending at a slightly lighter gray (`gray-100`).
        - `py-20`: Adds padding on the top and bottom (20 units).
        - `px-4`: Adds padding on the left and right for extra small screens.
        - `sm:px-6`: On small screens and up, the horizontal padding is 6 units.
        - `lg:px-8`: On large screens and up, the horizontal padding is 8 units.
      */}
      <div className="max-w-7xl mx-auto">
        {/*
          - `max-w-7xl`: Sets the maximum width of the content to a large size (7xl).
          - `mx-auto`: Horizontally centers the content within the parent container.
        */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and moved down 20 pixels.
          animate={{ opacity: 1, y: 0 }} // Animated state: fully visible and in its original position.
          className="text-4xl font-bold text-gray-900 mb-12 text-center" // Text styles
        >
          Professional Journey
        </motion.h2>
        {/*
          - `motion.h2`: An animated heading using framer-motion.
          - `initial`: Sets the initial state of the animation (opacity 0 and moved down).
          - `animate`: Sets the animation that will be played (fade in and move up).
          - `className`: Styles the heading: large text, bold, dark gray, with margin at the bottom, and centered.
        */}

        <div className="space-y-12">
          {/*
            - `space-y-12`: Adds vertical spacing (12 units) between the experience entries.
          */}
          {experiences.map((exp, index) => (
            // `experiences.map()`: Loops through the `experiences` array to create a card for each experience.
            <motion.div
              key={index} // React needs a unique key for each item in a list
              initial={{ opacity: 0, x: -20 }} // Invisible and moved to the left
              animate={{ opacity: 1, x: 0 }} // Fully visible and in place
              transition={{ delay: index * 0.2 }} // Stagger the animations with a delay
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300" // Style: white background, rounded corners, shadow, hover effect, transition
            >
              {/*
                - `motion.div`: Makes the experience card animated.
                - `key={index}`:  Each item in a map needs a unique key for React to efficiently update the list.
                - `initial`: sets the initial animation state
                - `animate`: set the animation that will happen when the component mounts (appears on screen).
                - `transition`: set the animation speed/delay.  The delay is based on the `index` of the experience, to make the items animate in sequence.
                - `className`:
                  - `bg-white`: White background.
                  - `rounded-xl`: Extra large rounded corners.
                  - `shadow-lg`: Large shadow.
                  - `p-8`: Padding of 8 units on all sides.
                  - `hover:shadow-xl`: Adds a larger shadow on hover.
                  - `transition-shadow`: Animates the shadow change on hover.
                  - `duration-300`: Sets the transition duration to 300ms.
              */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                {/*
                  This div arranges the content (role, company, duration, location) in a flexible layout.
                  - `flex flex-col`: Makes it a flex container, arranging items in a column by default.
                  - `md:flex-row`: On medium screens and up, arranges items in a row.
                  - `md:items-center`: On medium screens and up, vertically aligns items to the center.
                  - `md:justify-between`: On medium screens and up, adds space between the items.
                  - `mb-4`: Adds margin at the bottom (4 units).
                */}
                <div>
                  {/* Holds the role and company */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  {/* Role/Job Title */}
                  <p className="text-xl text-blue-600">{exp.company}</p>
                  {/* Company Name */}
                </div>
                <div className="mt-2 md:mt-0">
                  {/* Holds the duration and location. mt-2 = margin top 2, md:mt-0 removes the margin top on medium screens and up */}
                  <p className="text-gray-600">{exp.duration}</p>
                  {/* Employment Duration */}
                  <p className="text-gray-500">{exp.location}</p>
                  {/* Location */}
                </div>
              </div>

              {/* Project List (if available) */}
              {exp.projects && (
                <div className="mt-4">
                  {/* If the experience has projects, display this section */}
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Key Projects:
                  </h4>
                  {/* Heading for the projects list */}
                  <ul className="list-disc pl-5 space-y-1">
                    {/* Unordered list with bullet points.  pl-5 adds padding to the left, space-y-1 adds margin to the bottom. */}
                    {exp.projects.map((project, i) => (
                      // Maps the individual projects
                      <li key={i} className="text-gray-700">
                        {/* Individual project details */}
                        <span className="font-medium">
                          {project.projectName}
                        </span>{" "}
                        ({project.client} {project.years})
                        {/* Displays project name, client, and years */}
                        {project.details && (
                          // Only renders the details if they exist
                          <span className="text-sm text-gray-500">
                            {" "}
                            - {project.details}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="mt-6 space-y-3">
                {/*
                  - `mt-6`: Adds margin at the top (6 units).
                  - `space-y-3`: Adds vertical spacing (3 units) between the list items.
                */}
                {exp.highlights.map((highlight, i) => (
                  // Loops through the 'highlights' array to display key accomplishments.
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }} // invisible and moved to the right
                    animate={{ opacity: 1, x: 0 }} // fully visible and in place
                    transition={{ delay: index * 0.2 + i * 0.1 }} // delay based on parent index + highlight index for sequence
                    className="flex items-start" // Align items vertically at the top
                  >
                    {/*
                      - `motion.li`: An animated list item using framer-motion.
                      - className="flex items-start":  Aligns the icon and text to the top.
                    */}
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" // Styling for the icon: size, color, margin, and prevents it from shrinking.
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
                    {/* The checkmark icon */}
                    <span className="text-gray-700">{highlight}</span>
                    {/* The text of the highlight */}
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
