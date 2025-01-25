import React from "react";

const Publications = () => {
  const publications = [
    {
      title:
        "Monitoring and predicting the influences of land use/land cover change on cropland characteristics and drought severity using remote sensing techniques",
      authors:
        "BE Taiwo, AA Kafy, AA Samuel, ZA Rahaman, OE Ayowole, M Shahrier, ...",
      journal: "Environmental and Sustainability Indicators",
      volume: 18,
      articleId: "100248",
      citations: 55,
      year: 2023,
    },
    {
      title:
        "Integrating forest cover change and carbon storage dynamics: Leveraging Google Earth Engine and InVEST model to inform conservation in hilly regions",
      authors:
        "AA Kafy, M Saha, MA Fattah, MT Rahman, BM Duti, ZA Rahaman, ...",
      journal: "Ecological Indicators",
      volume: 152,
      articleId: "110374",
      citations: 53,
      year: 2023,
    },
    {
      title:
        "Exploring the nexus between land cover change dynamics and spatial heterogeneity of demographic trajectories in rapidly growing ecosystems of south Asian cities",
      authors:
        "MT Miah, JN Fariha, AA Kafy, R Islam, N Biswas, BM Duti, MA Fattah, ...",
      journal: "Ecological Indicators",
      volume: 158,
      articleId: "111299",
      citations: 14,
      year: 2024,
    },
    {
      title: "Climate Change Vulnerability of Drinking Water Supply",
      authors:
        "MH Sarker, EMW Ullah, MFA Khan, F Ahmed, MN Aktar, BM Duti, ...",
      journal:
        "IUCN, International Union for Conservation of Nature, Dhaka, Bangladesh",
      citations: 12,
      year: 2015,
    },
    {
      title:
        "Multivariate multi-step long short-term memory neural network for simultaneous stream-water variable prediction",
      authors: "M Khosravi, BM Duti, MMS Yazdan, S Ghoochani, N Nazemi, ...",
      journal: "Eng",
      volume: 4,
      issue: 3,
      pages: "1933-1950",
      citations: 10,
      year: 2023,
    },
    {
      title:
        "Establishment of co-relation between remote sensing based TRMM data and ground based precipitation data in north-east region of Bangladesh",
      authors: "MMS Yazdan, AZ Rahaman, F Noor, BM Duti",
      journal: "ICWFM",
      citations: 10,
      year: 2014,
    },
    {
      title:
        "Changing Climate and Surface and Ground Water related issues in Dhaka",
      authors: "BM Duti, RQ Alam, MM Hossain",
      journal: "Journal of Engineering Science",
      volume: 3,
      issue: 1,
      pages: "161-169",
      citations: 4,
      year: 2012,
    },
    {
      title:
        "Climate Change Impacts on Water Related Sectors of Dhaka City and Assessing the Plausible Adaptation Options",
      authors: "RQ Alam, BM Duti",
      journal:
        "2nd International Conference on Environmental Technology and Construction",
      citations: 3,
      year: 2012,
    },
    {
      title:
        "Impact of Climate Change on Water Availability and Extreme flows of Jamuneshwari River Basin in Bangladesh",
      authors: "BM Duti, P Willems",
      journal: "ResearchGate",
      citations: 2,
      year: 2020,
    },
    {
      title:
        "Development of environmental flow assessment methodology for the Sundarbans ecosystem",
      authors: "BM Duti, MFA Khan, S Hazra, T Bhadra, Saniruzzaman",
      journal: "5th International Conference on Water & Flood Management",
      citations: 2,
      year: 2015,
    },
    {
      title:
        "Effect of Different HRU Definition on Catchment Runoff Prediction and Climate Change Impact Investigation Using the SWAT Model in the Kleine Nete Basin, Belgium",
      authors:
        "A Belayneh, BM Duti, F Mekuanent, S Biniyam, T Gebrehiwot, W Buruk, ...",
      journal: "3rd Open Water",
      year: 2015,
      citations: 2,
    },
    {
      title:
        "Changes Observed in The Historical Trend Of Local Rainfall As A Climatic Factor And Its Effect On The Streamflow Of The Turag And Buriganga River System",
      authors: "BM DUTI, FH AURIN, DRMDM RAHMAN",
      journal: "ICETCESD",
      citations: 2,
      year: 2011,
    },
    {
      title:
        "Simultaneous Prediction of Stream-Water Variables Using Multivariate Multi-Step Long Short-Term Memory Neural Network",
      authors: "M Khosravi, BM Duti, MMS Yazdan, S Ghoochani, N Nazemi, ...",
      journal: "Preprints",
      citations: 1,
      year: 2023,
    },
    {
      title:
        "Groundwater Salinity Modelling in the South West Region of Bangladesh Considering Climate Change",
      authors: "MDT ISLAM, BM Duti, MDR HASAN, MDA RAHMAN, SM SAHABUDDIN",
      journal: "Indian Society of Coastal Agricultural Research Journal",
      citations: 1,
      year: 2020,
    },
    {
      title: "Mapping Floods in Bangladesh using Satellite Data: An Overview",
      authors: "BM Duti, MM Hossain, FK Khadim, AZ Rahaman, DA Quadir",
      journal: "National Oceanographic and Maritime Institute Journal (NOAMI)",
      citations: 1,
      year: 2017,
    },
    {
      title:
        "Potential of water footprint assessment as a decision support tool for sustainable water allocation option in Dhaka city",
      authors: "RQ Alam, B Monowar, MM Hossain",
      journal: "4th Annual Paper Meet and 1st Civil Engineering Congress",
      year: 2011,
      citations: 1,
    },
  ];

  return (
    <div>
      <nav className="bg-blue-600 text-white p-4"></nav>

      {/* Big Publications Title */}
      <div className="bg-gray-200 py-6 mt-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Publications
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="max-w-sm p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            <p className="text-sm text-gray-600 mb-2">Authors: {pub.authors}</p>
            <p className="text-sm text-gray-600 mb-2">
              Journal: {pub.journal}
              {pub.volume && `, Volume: ${pub.volume}`}
              {pub.issue && `, Issue: ${pub.issue}`}
              {pub.pages && `, Pages: ${pub.pages}`}
              {pub.articleId && `, Article ID: ${pub.articleId}`}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Citations: {pub.citations}
            </p>
            <p className="text-sm text-gray-600 mb-4">Year: {pub.year}</p>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              {pub.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
