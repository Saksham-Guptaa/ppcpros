// components/FeatureGrid.js
import Image from 'next/image';

const FeatureGrid = () => {
  const features = [
    {
      title: "Attract Customers",
      description:
        "Attract more visitors to your website and use proven strategies to convert visitors into qualified leads and delighted customers.",
      imageSrc: "/workflow.png", // Replace with the actual path to your image
    },
    {
      title: "Engage Prospects",
      description:
        "Engage your contacts and visitors with interactive and high-performance content, email marketing campaigns, and webinars.",
      imageSrc: "/aws.png", // Replace with the actual path to your image
    },
    {
      title: "Convert Clients",
      description:
        "Use advanced marketing predictive analytics to score and convert the right prospects, at precisely the right time.",
      imageSrc: "/export.png", // Replace with the actual path to your image
    },
    {
      title: "Retain Clients",
      description:
        "Keeping your customers happy goes beyond just your product. Engage your customers through various other channels.",
      imageSrc: "/exportcus.png", // Replace with the actual path to your image
    },
  ];

  return (
    <div className="w-full px-10 py-8 bg-white">
      <p className="text-center text-5xl w-[70%] mx-auto p-10">
        Our Ad types are purpose-built around your sales funnel, to help you
        create sustainable, predictable growth
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <div className="flex items-center mb-4">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={25}  // Adjust the width as per your requirement
                height={25} // Adjust the height as per your requirement
                className="mr-2"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <span className="inline-block w-2 h-6 bg-gray-300 rounded-full mr-2"></span>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-left">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
