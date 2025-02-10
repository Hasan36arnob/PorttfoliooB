import React from "react";

const Education = () => {
  const academicData = [
    {
      years: "2013-2016",
      degree: "M.Sc. (Master of Science)",
      subject: "Water Resources Engineering",
      institution:
        "KU Leuven (University of Leuven), Belgium & VUB- Vrije Universiteit Brussels",
      details:
        "IUPWARE Inter-University Program. VLIR UOS scholarship holder, graduation with distinction. Cum Laude (With honors’).",
    },
    {
      years: "2015-2016",
      degree: "Postgraduate Diploma",
      subject: "Climate and Weather Modelling",
      institution: "UGent (Ghent University), Belgium",
    },
    {
      years: "2007-2010",
      degree: "B.Sc. (Bachelor of Science)",
      subject: "Civil Engineering",
      institution:
        "MIST- Military Institute of Science and Technology under Bangladesh University of Professionals (BUP)",
      grade: "3.67 / 4.00",
      finalYearGpa: "3.82 / 4.00",
    },
    {
      years: "2023 - Present",
      degree: "MSc. (Ongoing, Part-time)",
      subject: "Economics",
      institution: "Independent University, Bangladesh",
      details:
        "Evening program. Completed courses: Microeconomics, Macroeconomics, Mathematical Economics, Econometrics, Public Finance, Institutional Development (CGPA 3.4). Expected graduation Summer 2025.",
    },
  ];

  const certificationsData = [
    {
      name: "Climate Risk Insurance",
      issuer: "University of Dhaka",
      issuedDate: "Jan 2025",
    },
    {
      name: "Drone Survey and data collection",
      issuer: "O.CREEDS LTD. (OCL)",
      issuedDate: "Jan 2025",
    },
    {
      name: "SWAT+ workshop",
      issuer: "Texas A&M AgriLife Research",
      issuedDate: "Jan 2025",
    },
    {
      name: "Adaptive Delta Management",
      issuer:
        "General Economics Division (GED) , Bangladesh Planning Commission",
      issuedDate: "Jun 2024",
    },
    {
      name: "Graduate Record Examination (GRE)",
      issuer: "ETS",
      issuedDate: "Sep 2023",
      expiresDate: "Sep 2028",
      credentialId: "305 out of 340",
    },
    {
      name: "TOEFL iBT",
      issuer: "ETS",
      issuedDate: "Apr 2023",
      expiresDate: "Apr 2025",
      credentialId:
        "105 out of 120 (Reading 30/30, Listening 26/30, Writing 26/30, speaking 23/30)",
      skills: ["Academic English"],
    },
    {
      name: "Dr. JSP Yadav Best Paper Award",
      issuer:
        "Indian Society of Coastal Agricultural Research (ISCAR), ICAR-CSSRI Regional Research Station",
      issuedDate: "Mar 2021",
    },
    {
      name: "Sea level rise science and regional sea level projections",
      issuer: "Met Office",
      issuedDate: "Nov 2020",
    },
    {
      name: "english language certification (IELTS)- band score 8 out of 9.",
      issuer: "British Council",
      issuedDate: "Mar 2020",
      skills: ["Spoken English"],
    },
    {
      name: "Adaptive Delta Management & Design -Execution of ToT",
      issuer: "Delta Alliance",
      issuedDate: "Jul 2019",
    },
    {
      name: "Metamodel training",
      issuer: "Deltares",
      issuedDate: "May 2019",
    },
    {
      name: "Climate Change for Developing Economies",
      issuer: "National Institute of Hydrology",
      issuedDate: "Nov 2018",
    },
    {
      name: "Storm surge modeling with Mike 21FM",
      issuer: "Institute of Water Modelling",
      issuedDate: "Sep 2018",
    },
    {
      name: "GIS-RS in IWRM (integrated water resources management)",
      issuer: "Water Resources Planning Organization (WARPO)",
      issuedDate: "Feb 2017",
    },
    {
      name: "SWAT and DSSAT training",
      issuer: "Society of Engineers of Nepal (SEN)",
      issuedDate: "Jun 2013",
    },
    {
      name: "Delft 3D morphological modelling",
      issuer: "IHE Delft Institute for Water Education",
      issuedDate: "Jun 2011",
    },
    {
      name: "Certified Geographic Information Systems Professional (GISP)",
      issuer: "Engineering Staff College, Bangladesh (ESCB)",
      issuedDate: "Jun 2010",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Education & Qualifications
        </h2>

        {/* Academic Qualifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Academic Degrees
          </h3>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-100">
                <tr>
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
              <tbody>
                {academicData.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                  >
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

          {/* Detailed Info */}
          <div className="mt-6 space-y-4">
            {academicData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                <h4 className="text-lg font-semibold text-blue-700">
                  {item.degree} - {item.subject}
                </h4>
                <p className="text-gray-600 text-sm">
                  Institution: {item.institution}
                </p>
                <p className="text-gray-600 text-sm">Years: {item.years}</p>
                {item.grade && (
                  <p className="text-gray-600 text-sm">Grade: {item.grade}</p>
                )}
                {item.finalYearGpa && (
                  <p className="text-gray-600 text-sm">
                    Final Year GPA: {item.finalYearGpa}
                  </p>
                )}
                {item.details && (
                  <p className="text-gray-700 text-sm">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                <h4 className="text-md font-semibold text-gray-800">
                  {cert.name}
                </h4>
                <p className="text-gray-600 text-sm">Issuer: {cert.issuer}</p>
                {cert.issuedDate && (
                  <p className="text-gray-500 text-xs">
                    Issued: {cert.issuedDate}
                  </p>
                )}
                {cert.expiresDate && (
                  <p className="text-gray-500 text-xs">
                    Expires: {cert.expiresDate}
                  </p>
                )}
                {cert.credentialId && (
                  <p className="text-gray-500 text-xs">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {cert.skills && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
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

export default Education;
