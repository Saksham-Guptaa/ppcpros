// components/GoogleTrendsIframe.js
const GoogleTrendsIframe = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Trending Searches</h2>
      <iframe
        src="https://trends.google.com/trends/trendingsearches/daily?geo=IN"
        width="100%"
        height="500"
        className="border border-gray-300 text-black rounded-lg"
        title="Google Trends Trending Searches"
      ></iframe>
    </div>
  );
};

export default GoogleTrendsIframe;
