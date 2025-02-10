const Publications = () => {
  const publications = [
    {
      title:
        "Monitoring and predicting the influences of land use/land cover change on cropland characteristics and drought severity using remote sensing techniques",
      authors:
        "BM Duti , BE Taiwo, AA Kafy, AA Samuel, ZA Rahaman, OE Ayowole, M Shahrier, ...",
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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Publications
        </h2>
        <div className="flex justify-center mb-8">
          <a
            href="https://scholar.google.com/citations?user=jkWVzUQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View Google Scholar Profile
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Authors:</span> {pub.authors}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Journal:</span> {pub.journal}
                  {pub.volume && <>, Volume: {pub.volume}</>}
                  {pub.issue && <>, Issue: {pub.issue}</>}
                  {pub.pages && <>, Pages: {pub.pages}</>}
                  {pub.articleId && <>, Article ID: {pub.articleId}</>}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Citations:</span> {pub.citations}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Year:</span> {pub.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
