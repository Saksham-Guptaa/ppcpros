import React, { useState } from 'react';
import axios from 'axios';

const Section8 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;

    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID&q=${encodeURIComponent(
          searchQuery
        )}`
      );
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const questions = [
    {
      question: "My website isn’t getting enough traffic",
      answer: "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
      points: [
        "Boost your presence in search results",
        "Capture targeted site traffic",
        "Turn site visitors into leads and customers"
      ]
    },
    { question: "My website isn’t generating enough leads", answer: "" },
    { question: "My CPL from digital ad campaigns is too high", answer: "" },
    { question: "We’re unable to hit our SQL and revenue goals", answer: "" },
  ];

  return (
    <div className="flex flex-col lg:flex-row border-2 border-gray-400 border-dashed justify-between items-start w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-4">
        {questions.map((item, index) => (
          <div key={index} className=" p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h3 className="text-lg sm:text-xl font-bold">{item.question}</h3>
              <button className="text-gray-500">{openIndex === index ? '✕' : '+'}</button>
            </div>
            {openIndex === index && (
              <div className="mt-4">
                <p className="text-sm sm:text-base text-gray-600">{item.answer}</p>
                {item.points && (
                  <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base text-gray-600">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Search Component */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
        <div className="border border-gray-300 p-4 rounded-lg">
          <h3 className="text-lg text-center  sm:text-xl font-bold mb-4">Can't find what you're looking for?</h3>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-full p-2">
              <svg className="w-6 h-6 text-gray-400 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M11 2a9 9 0 100 18 9 9 0 000-18zM4.222 9.178A7 7 0 1112 17a7 7 0 01-7.778-7.822zm11.9 9.614a8 8 0 11-1.414-1.414l5.25 5.25a1 1 0 01-1.414 1.414l-5.25-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Ask your problem here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 text-sm sm:text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-full text-sm sm:text-base font-bold hover:bg-blue-600 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Displaying Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-8 space-y-4">
            {searchResults.map((result, index) => (
              <div key={index} className="p-4 border border-gray-300 rounded-lg">
                <h4 className="text-lg font-bold">
                  <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {result.title}
                  </a>
                </h4>
                <p className="text-sm text-gray-600">{result.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section8;
