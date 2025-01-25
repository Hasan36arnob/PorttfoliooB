import React from "react";

const educationData = {
  degrees: [
    {
      title: "Master's Degree in Water Resources Engineering",
      institution: "KU Leuven",
      years: "2013 - 2016",
      description: `VLIR UOS scholarship holder, graduation with distinction. .`,
      activities: [
        "Voluntary works with Mobile School (streetwize)",
        "Voluntary works with Pangaea",
        "Food waste awareness raising works with KU Leuven",
        "Fairtrade business promotion with Oxfam",
      ],
      skills: [
        "Spoken English",
        "Hydrology",
        "Report Writing",
        "Mathematical Programming",
        "Data Analytics",
        "Microsoft PowerPoint",
        "Irrigation",
        "Academic Research",
      ],
    },
    {
      title: "Master's of Science in Economics",
      institution: "Independent University, Bangladesh",
      years: "Sep 2023 - Sep 2025",
      description:
        "Thesis topic: Climate risk financing and economics of climate change.",
      skills: [
        "Development Economics",
        "Macroeconomics",
        "Microeconomics",
        "Econometrics",
        "Institutional Business Development",
      ],
    },
    {
      title: "Postgraduate Degree in Weather and Climate Modelling",
      institution: "Ghent University",
      years: "Sep 2015 - Sep 2016",
      skills: ["Mathematical Programming", "Data Analytics"],
    },
    {
      title: "Bachelor of Science in Civil Engineering",
      institution: "Military Institute of Science and Technology (MIST)",
      years: "Jan 2007 - Dec 2010",
      grade: "3.67 / 4.00",
      activities: [
        "Dean's merit listed",
        "Table tennis reports activity",
        "Debate club activity",
      ],
      skills: [
        "Hydrology",
        "Report Writing",
        "Environmental Engineering",
        "Microsoft PowerPoint",
        "Irrigation",
        "Academic Research",
      ],
    },
    {
      title: "Short Course in Coastal Systems",
      institution: "IHE Delft Institute for Water Education",
      years: "Feb 2020 - Mar 2020",
      skills: [
        "Coastal Processes",
        "Coastal Zone Management",
        "Coastal Engineering",
        "Coastal Wetland Protection",
        "Nature-Based Solutions (NBS)",
      ],
    },
    {
      title: "English as a Second Language",
      institution: "HOFT Institute, Austin, Texas",
      years: "Feb 2023 - Apr 2023",
      skills: ["Creative Writing", "Spoken English", "Academic English"],
    },
  ],
  certifications: [
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
      credentialId: "105 out of 120",
      scores: {
        reading: "30/30",
        listening: "26/30",
        writing: "26/30",
        speaking: "23/30",
      },
      skills: ["Academic English"],
    },
    {
      name: "Dr. JSP Yadav Best Paper Award",
      issuer:
        "Indian Society of Coastal Agricultural Research (ISCAR), ICAR-CSSRI Regional Research Station",
      issuedDate: "Mar 2021",
    },
    {
      name: "IELTS English Language Certification",
      issuer: "British Council",
      issuedDate: "Mar 2020",
      score: "8 out of 9",
      skills: ["Spoken English"],
    },
    {
      name: "Certified Geographic Information Systems Professional (GISP)",
      issuer: "Institute of Engineers Bangladesh",
      issuedDate: "Apr 2010",
    },
    "Certified Professional in Water Sustainability (2023)",
    "Advanced GIS for Hydrological Applications (2022)",
    "Leadership in Environmental Engineering (2021)",
  ],
};

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-black">
          Education
        </h2>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationData.degrees.map((degree, index) => (
            <div
              key={index}
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 transform hover:-translate-y-2"
            >
              <h3 className="font-bold text-3xl text-dark-400 mb-4 leading-tight">
                {degree.title}
              </h3>
              <p className="text-gray-500 font-semibold mb-4 text-xl">
                {degree.institution}, {degree.years}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {degree.description}
              </p>
              {/* Skills Section with Modern Styling */}
              {degree.skills && (
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-orange-500 mb-3">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {degree.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h2 className="text-5xl font-bold mt-20 mb-16 text-center text-transparent bg-clip-text bg-black">
          Professional Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationData.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="text-xl font-bold text-gray-800">
                {typeof cert === "object" ? cert.name : cert}
              </div>
              {typeof cert === "object" && (
                <div className="text-gray-500 mt-2 text-lg">
                  {cert.issuer}
                  {cert.issuedDate && ` • ${cert.issuedDate}`}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
