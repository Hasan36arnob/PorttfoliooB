// const Education = () => {
//   const academicData = [
//     {
//       years: "2013-2016",
//       degree: "M.Sc. (Master of Science)",
//       subject: "Water Resources Engineering",
//       institution:
//         "KU Leuven (University of Leuven), Belgium & VUB- Vrije Universiteit Brussels",
//       details:
//         "IUPWARE Inter-University Program. VLIR UOS scholarship holder, graduation with distinction. Cum Laude (With honors’).",
//     },
//     {
//       years: "2015-2016",
//       degree: "Postgraduate Diploma",
//       subject: "Climate and Weather Modelling",
//       institution: "UGent (Ghent University), Belgium",
//     },
//     {
//       years: "2007-2010",
//       degree: "B.Sc. (Bachelor of Science)",
//       subject: "Civil Engineering",
//       institution:
//         "MIST- Military Institute of Science and Technology under Bangladesh University of Professionals (BUP)",
//       grade: "3.67 / 4.00",
//       finalYearGpa: "3.82 / 4.00",
//     },
//     {
//       years: "2023 - Present",
//       degree: "MSc. (Ongoing, Part-time)",
//       subject: "Economics",
//       institution: "Independent University, Bangladesh",
//       details:
//         "Evening program. Completed courses: Microeconomics, Macroeconomics, Mathematical Economics, Econometrics, Public Finance, Institutional Development (CGPA 3.4). Expected graduation Summer 2025.",
//     },
//   ];

//   const certificationsData = [
//     {
//       name: "Climate Risk Insurance",
//       issuer: "University of Dhaka",
//       issuedDate: "Jan 2025",
//     },
//     {
//       name: "Drone Survey and data collection",
//       issuer: "O.CREEDS LTD. (OCL)",
//       issuedDate: "Jan 2025",
//     },
//     {
//       name: "SWAT+ workshop",
//       issuer: "Texas A&M AgriLife Research",
//       issuedDate: "Jan 2025",
//     },
//     {
//       name: "Adaptive Delta Management",
//       issuer:
//         "General Economics Division (GED) , Bangladesh Planning Commission",
//       issuedDate: "Jun 2024",
//     },
//     {
//       name: "Graduate Record Examination (GRE)",
//       issuer: "ETS",
//       issuedDate: "Sep 2023",
//       expiresDate: "Sep 2028",
//       credentialId: "305 out of 340",
//     },
//     {
//       name: "TOEFL iBT",
//       issuer: "ETS",
//       issuedDate: "Apr 2023",
//       expiresDate: "Apr 2025",
//       credentialId:
//         "105 out of 120 (Reading 30/30, Listening 26/30, Writing 26/30, speaking 23/30)",
//       skills: ["Academic English"],
//     },
//     {
//       name: "Dr. JSP Yadav Best Paper Award",
//       issuer:
//         "Indian Society of Coastal Agricultural Research (ISCAR), ICAR-CSSRI Regional Research Station",
//       issuedDate: "Mar 2021",
//     },
//     {
//       name: "Sea level rise science and regional sea level projections",
//       issuer: "Met Office",
//       issuedDate: "Nov 2020",
//     },
//     {
//       name: "english language certification (IELTS)- band score 8 out of 9.",
//       issuer: "British Council",
//       issuedDate: "Mar 2020",
//       skills: ["Spoken English"],
//     },
//     {
//       name: "Adaptive Delta Management & Design -Execution of ToT",
//       issuer: "Delta Alliance",
//       issuedDate: "Jul 2019",
//     },
//     {
//       name: "Metamodel training",
//       issuer: "Deltares",
//       issuedDate: "May 2019",
//     },
//     {
//       name: "Climate Change for Developing Economies",
//       issuer: "National Institute of Hydrology",
//       issuedDate: "Nov 2018",
//     },
//     {
//       name: "Storm surge modeling with Mike 21FM",
//       issuer: "Institute of Water Modelling",
//       issuedDate: "Sep 2018",
//     },
//     {
//       name: "GIS-RS in IWRM (integrated water resources management)",
//       issuer: "Water Resources Planning Organization (WARPO)",
//       issuedDate: "Feb 2017",
//     },
//     {
//       name: "SWAT and DSSAT training",
//       issuer: "Society of Engineers of Nepal (SEN)",
//       issuedDate: "Jun 2013",
//     },
//     {
//       name: "Delft 3D morphological modelling",
//       issuer: "IHE Delft Institute for Water Education",
//       issuedDate: "Jun 2011",
//     },
//     {
//       name: "Certified Geographic Information Systems Professional (GISP)",
//       issuer: "Engineering Staff College, Bangladesh (ESCB)",
//       issuedDate: "Jun 2010",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-white py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
//           Education & Qualifications
//         </h2>

//         {/* Academic Qualifications */}
//         <div className="mb-12">
//           <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
//             Academic Degrees
//           </h3>
//           <div className="overflow-x-auto shadow-md rounded-lg">
//             <table className="min-w-full bg-white rounded-lg">
//               <thead className="bg-blue-100">
//                 <tr>
//                   <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
//                     Year(s)
//                   </th>
//                   <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
//                     Degree
//                   </th>
//                   <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
//                     Subject
//                   </th>
//                   <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
//                     Institution
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {academicData.map((item, index) => (
//                   <tr
//                     key={index}
//                     className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
//                   >
//                     <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
//                       {item.years}
//                     </td>
//                     <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
//                       {item.degree}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-700">
//                       {item.subject}
//                     </td>
//                     <td className="px-4 py-3 text-sm text-gray-700">
//                       {item.institution}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Detailed Info */}
//           <div className="mt-6 space-y-4">
//             {academicData.map((item, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm p-4">
//                 <h4 className="text-lg font-semibold text-blue-700">
//                   {item.degree} - {item.subject}
//                 </h4>
//                 <p className="text-gray-600 text-sm">
//                   Institution: {item.institution}
//                 </p>
//                 <p className="text-gray-600 text-sm">Years: {item.years}</p>
//                 {item.grade && (
//                   <p className="text-gray-600 text-sm">Grade: {item.grade}</p>
//                 )}
//                 {item.finalYearGpa && (
//                   <p className="text-gray-600 text-sm">
//                     Final Year GPA: {item.finalYearGpa}
//                   </p>
//                 )}
//                 {item.details && (
//                   <p className="text-gray-700 text-sm">{item.details}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Certifications Section */}
//         <div>
//           <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
//             Certifications & Training
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {certificationsData.map((cert, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm p-4">
//                 <h4 className="text-md font-semibold text-gray-800">
//                   {cert.name}
//                 </h4>
//                 <p className="text-gray-600 text-sm">Issuer: {cert.issuer}</p>
//                 {cert.issuedDate && (
//                   <p className="text-gray-500 text-xs">
//                     Issued: {cert.issuedDate}
//                   </p>
//                 )}
//                 {cert.expiresDate && (
//                   <p className="text-gray-500 text-xs">
//                     Expires: {cert.expiresDate}
//                   </p>
//                 )}
//                 {cert.credentialId && (
//                   <p className="text-gray-500 text-xs">
//                     Credential ID: {cert.credentialId}
//                   </p>
//                 )}
//                 {cert.skills && (
//                   <div className="mt-2 flex flex-wrap gap-1">
//                     {cert.skills.map((skill, skillIndex) => (
//                       <span
//                         key={skillIndex}
//                         className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react"; // Imports the React library, necessary for creating React components

const Education = () => {
  // Data for academic qualifications
  const academicData = [
    {
      years: "2013-2016", // Years attended
      degree: "M.Sc. (Master of Science)", // Degree earned
      subject: "Water Resources Engineering", // Subject of study
      institution:
        "KU Leuven (University of Leuven), Belgium & VUB- Vrije Universiteit Brussels", // Name of institution
      details:
        "IUPWARE Inter-University Program. VLIR UOS scholarship holder, graduation with distinction. Cum Laude (With honors’).", // Additional details
    },
    {
      years: "2015-2016", // Years attended
      degree: "Postgraduate Diploma", // Degree earned
      subject: "Climate and Weather Modelling", // Subject of study
      institution: "UGent (Ghent University), Belgium", // Name of institution
    },
    {
      years: "2007-2010", // Years attended
      degree: "B.Sc. (Bachelor of Science)", // Degree earned
      subject: "Civil Engineering", // Subject of study
      institution:
        "MIST- Military Institute of Science and Technology under Bangladesh University of Professionals (BUP)", // Name of institution
      grade: "3.67 / 4.00", // Grade/GPA
      finalYearGpa: "3.82 / 4.00", // GPA for the final year
    },
    {
      years: "2023 - Present", // Years attended
      degree: "MSc. (Ongoing, Part-time)", // Degree earned
      subject: "Economics", // Subject of study
      institution: "Independent University, Bangladesh", // Name of institution
      details:
        "Evening program. Completed courses: Microeconomics, Macroeconomics, Mathematical Economics, Econometrics, Public Finance, Institutional Development (CGPA 3.4). Expected graduation Summer 2025.", // Additional details
    },
  ];

  // Data for certifications and training
  const certificationsData = [
    {
      name: "Climate Risk Insurance", // Name of the certification
      issuer: "University of Dhaka", // Issuing organization
      issuedDate: "Jan 2025", // Date issued
    },
    {
      name: "Drone Survey and data collection", // Name of the certification
      issuer: "O.CREEDS LTD. (OCL)", // Issuing organization
      issuedDate: "Jan 2025", // Date issued
    },
    {
      name: "SWAT+ workshop", // Name of the certification
      issuer: "Texas A&M AgriLife Research", // Issuing organization
      issuedDate: "Jan 2025", // Date issued
    },
    {
      name: "Adaptive Delta Management", // Name of the certification
      issuer:
        "General Economics Division (GED) , Bangladesh Planning Commission", // Issuing organization
      issuedDate: "Jun 2024", // Date issued
    },
    {
      name: "Graduate Record Examination (GRE)", // Name of the certification
      issuer: "ETS", // Issuing organization
      issuedDate: "Sep 2023", // Date issued
      expiresDate: "Sep 2028", // Expiration date
      credentialId: "305 out of 340", // Credential ID
    },
    {
      name: "TOEFL iBT", // Name of the certification
      issuer: "ETS", // Issuing organization
      issuedDate: "Apr 2023", // Date issued
      expiresDate: "Apr 2025", // Expiration date
      credentialId:
        "105 out of 120 (Reading 30/30, Listening 26/30, Writing 26/30, speaking 23/30)", // Credential ID
      skills: ["Academic English"], // Skills acquired
    },
    {
      name: "Dr. JSP Yadav Best Paper Award", // Name of the certification
      issuer:
        "Indian Society of Coastal Agricultural Research (ISCAR), ICAR-CSSRI Regional Research Station", // Issuing organization
      issuedDate: "Mar 2021", // Date issued
    },
    {
      name: "Sea level rise science and regional sea level projections", // Name of the certification
      issuer: "Met Office", // Issuing organization
      issuedDate: "Nov 2020", // Date issued
    },
    {
      name: "english language certification (IELTS)- band score 8 out of 9.", // Name of the certification
      issuer: "British Council", // Issuing organization
      issuedDate: "Mar 2020", // Date issued
      skills: ["Spoken English"], // Skills acquired
    },
    {
      name: "Adaptive Delta Management & Design -Execution of ToT", // Name of the certification
      issuer: "Delta Alliance", // Issuing organization
      issuedDate: "Jul 2019", // Date issued
    },
    {
      name: "Metamodel training", // Name of the certification
      issuer: "Deltares", // Issuing organization
      issuedDate: "May 2019", // Date issued
    },
    {
      name: "Climate Change for Developing Economies", // Name of the certification
      issuer: "National Institute of Hydrology", // Issuing organization
      issuedDate: "Nov 2018", // Date issued
    },
    {
      name: "Storm surge modeling with Mike 21FM", // Name of the certification
      issuer: "Institute of Water Modelling", // Issuing organization
      issuedDate: "Sep 2018", // Date issued
    },
    {
      name: "GIS-RS in IWRM (integrated water resources management)", // Name of the certification
      issuer: "Water Resources Planning Organization (WARPO)", // Issuing organization
      issuedDate: "Feb 2017", // Date issued
    },
    {
      name: "SWAT and DSSAT training", // Name of the certification
      issuer: "Society of Engineers of Nepal (SEN)", // Issuing organization
      issuedDate: "Jun 2013", // Date issued
    },
    {
      name: "Delft 3D morphological modelling", // Name of the certification
      issuer: "IHE Delft Institute for Water Education", // Issuing organization
      issuedDate: "Jun 2011", // Date issued
    },
    {
      name: "Certified Geographic Information Systems Professional (GISP)", // Name of the certification
      issuer: "Engineering Staff College, Bangladesh (ESCB)", // Issuing organization
      issuedDate: "Jun 2010", // Date issued
    },
  ];

  return (
    // Section with a background gradient
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      {/* Container to center content */}
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Education & Qualifications
        </h2>

        {/* Academic Qualifications Section */}
        <div className="mb-12">
          {/* Section heading */}
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Academic Degrees
          </h3>
          {/* Table to display academic data */}
          <div className="overflow-x-auto shadow-md rounded-lg">
            {/* Table element */}
            <table className="min-w-full bg-white rounded-lg">
              {/* Table header */}
              <thead className="bg-blue-100">
                <tr>
                  {/* Table headings */}
                  <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
                    Year(s)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
                    Degree
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700 uppercase tracking-wider">
                    Institution
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {/* Mapping over the academic data to create table rows */}
                {academicData.map((item, index) => (
                  // Table row, with alternating background colors
                  <tr
                    key={index} // React key for efficient rendering
                    className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                  >
                    {/* Table data cells, displaying data from the academicData array */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item.years}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                      {item.degree}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.subject}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.institution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed Info section */}
          <div className="mt-6 space-y-4">
            {/* Mapping over the academic data to create detailed info blocks */}
            {academicData.map((item, index) => (
              // Div for each academic item, with styling
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                {/* Degree and Subject */}
                <h4 className="text-lg font-semibold text-blue-700">
                  {item.degree} - {item.subject}
                </h4>
                {/* Institution */}
                <p className="text-gray-600 text-sm">
                  Institution: {item.institution}
                </p>
                {/* Years */}
                <p className="text-gray-600 text-sm">Years: {item.years}</p>
                {/* Grade (if available) */}
                {item.grade && (
                  <p className="text-gray-600 text-sm">Grade: {item.grade}</p>
                )}
                {/* Final Year GPA (if available) */}
                {item.finalYearGpa && (
                  <p className="text-gray-600 text-sm">
                    Final Year GPA: {item.finalYearGpa}
                  </p>
                )}
                {/* Details (if available) */}
                {item.details && (
                  <p className="text-gray-700 text-sm">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          {/* Section heading */}
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Certifications & Training
          </h3>
          {/* Grid to display certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mapping over the certifications data to create certification cards */}
            {certificationsData.map((cert, index) => (
              // Div for each certification, with styling
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                {/* Certification name */}
                <h4 className="text-md font-semibold text-gray-800">
                  {cert.name}
                </h4>
                {/* Issuer */}
                <p className="text-gray-600 text-sm">Issuer: {cert.issuer}</p>
                {/* Issued date (if available) */}
                {cert.issuedDate && (
                  <p className="text-gray-500 text-xs">
                    Issued: {cert.issuedDate}
                  </p>
                )}
                {/* Expiration date (if available) */}
                {cert.expiresDate && (
                  <p className="text-gray-500 text-xs">
                    Expires: {cert.expiresDate}
                  </p>
                )}
                {/* Credential ID (if available) */}
                {cert.credentialId && (
                  <p className="text-gray-500 text-xs">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {/* Skills (if available) */}
                {cert.skills && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {/* Mapping over skills to create skill tags */}
                    {cert.skills.map((skill, skillIndex) => (
                      // Skill tag element, with styling
                      <span
                        key={skillIndex} // React key for efficient rendering
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; // Exports the Education component
