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
    // This section displays a list of publications

    <section className="bg-gray-100 py-16">
      {/*
    This is the main section for displaying publications.
    - `bg-gray-100`: Sets a light gray background color.
    - `py-16`: Adds padding on the top and bottom (16 units).
  */}
      <div className="container mx-auto px-4">
        {/*
      This is a container to center the content and add some horizontal padding.
      - `container`:  A Tailwind CSS class that sets a maximum width for the content.
      - `mx-auto`: Centers the container horizontally.
      - `px-4`: Adds horizontal padding (4 units) on the left and right.
    */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Publications
        </h2>
        {/*
      This is the heading for the publications section.
      - `text-4xl`: Sets a large font size (4xl).
      - `font-extrabold`: Makes the font extra bold.
      - `text-center`: Centers the text horizontally.
      - `text-gray-800`: Sets the text color to a dark gray.
      - `mb-8`: Adds margin at the bottom (8 units).
    */}
        <div className="flex justify-center mb-8">
          {/*
        This div centers the link to the Google Scholar profile.
        - `flex`: Makes this a flex container (for easy centering).
        - `justify-center`: Centers the content horizontally within the flex container.
        - `mb-8`: Adds margin at the bottom (8 units).
      */}
          <a
            href="https://scholar.google.com/citations?user=jkWVzUQAAAAJ&hl=en" // Link to Google Scholar profile
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security when opening new tabs
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" // Styling for the link: blue background, white text, rounded corners, etc.
          >
            View Google Scholar Profile
          </a>
          {/*
        This is the link to the Google Scholar profile.
        - `bg-blue-600`: Sets a blue background color.
        - `hover:bg-blue-700`: Changes the background color to a darker blue on hover.
        - `text-white`: Sets the text color to white.
        - `font-bold`: Makes the font bold.
        - `py-2`: Adds vertical padding (2 units).
        - `px-4`: Adds horizontal padding (4 units).
        - `rounded`: Rounds the corners.
        - `focus:outline-none`: Removes the default outline on focus.
        - `focus:shadow-outline`: Adds a shadow on focus.
      */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*
        This is a grid layout to display the publications.
        - `grid`: Makes this a grid container.
        - `grid-cols-1`: Sets 1 column on extra small screens.
        - `md:grid-cols-2`: Sets 2 columns on medium screens and up.
        - `lg:grid-cols-3`: Sets 3 columns on large screens and up.
        - `gap-6`: Adds a gap of 6 units between the grid items.
      */}
          {publications.map((pub, index) => (
            // This line iterates through each publication in the `publications` array.
            <div
              key={index} // React needs a unique key for each item in a list.
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" // Styling for each publication card
            >
              {/*
            This is the container for each individual publication.
            - `bg-white`: Sets a white background color.
            - `rounded-lg`: Rounds the corners.
            - `shadow-md`: Adds a medium-sized shadow.
            - `overflow-hidden`: Hides any content that overflows the container.
            - `hover:shadow-xl`: Adds a larger shadow on hover.
            - `transition-shadow`: Adds a smooth transition when the shadow changes.
            - `duration-300`: Sets the transition duration to 300ms.
          */}
              <div className="px-6 py-4">
                {/*
              This div adds padding inside the publication container.
              - `px-6`: Adds horizontal padding (6 units).
              - `py-4`: Adds vertical padding (4 units).
            */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pub.title}
                </h3>
                {/*
              This is the title of the publication.
              - `text-xl`: Sets a large font size (xl).
              - `font-semibold`: Makes the font semi-bold.
              - `text-gray-800`: Sets the text color to a dark gray.
              - `mb-2`: Adds margin at the bottom (2 units).
            */}
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Authors:</span> {pub.authors}
                </p>
                {/*
              This displays the authors of the publication.
              - `text-gray-600`: Sets the text color to a lighter gray.
              - `text-sm`: Sets a small font size.
              - `font-bold`: Makes "Authors:" bold.
            */}
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Journal:</span> {pub.journal}
                  {pub.volume && <>, Volume: {pub.volume}</>}
                  {pub.issue && <>, Issue: {pub.issue}</>}
                  {pub.pages && <>, Pages: {pub.pages}</>}
                  {pub.articleId && <>, Article ID: {pub.articleId}</>}
                </p>
                {/*
              This displays the journal information. The volume, issue, pages and articleId are conditionally rendered.
              - `text-gray-600`: Sets the text color to a lighter gray.
              - `text-sm`: Sets a small font size.
              - `font-bold`: Makes "Journal:" bold.
              - `{pub.volume && <>, Volume: {pub.volume}</>}`:  This will only display ", Volume: [volume number]" if `pub.volume` has a value.  The `<>` and `</>` are short for React Fragments, which let you group multiple elements without adding an extra node to the DOM.
            */}
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Citations:</span> {pub.citations}
                </p>
                {/*
              This displays the number of citations.
              - `text-gray-600`: Sets the text color to a lighter gray.
              - `text-sm`: Sets a small font size.
              - `font-bold`: Makes "Citations:" bold.
            */}
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">Year:</span> {pub.year}
                </p>
                {/*
              This displays the publication year.
              - `text-gray-600`: Sets the text color to a lighter gray.
              - `text-sm`: Sets a small font size.
              - `font-bold`: Makes "Year:" bold.
            */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    // In simple words:
    // This code creates a section on a webpage to display a list of publications.
    // It fetches publication data (title, authors, journal, citations, year) and displays them in a visually appealing way using cards within a grid.
    // It also provides a link to the person's Google Scholar profile.
    // The styling is done with Tailwind CSS, making it responsive and visually consistent. The `map` function takes the `publications` data and creates the card structure for each publication.
  );
};

export default Publications;
