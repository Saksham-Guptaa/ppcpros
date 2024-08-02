import Image from 'next/image';
import FeatureGrid from './parts/grid';

const EllipseImageSection = () => {
  return (
    <div>
      <FeatureGrid/>
    <div className="w-full flex justify-center my-8">
      <div className="relative w-full max-w-4xl">
        <Image
          src="/ellipse.jpeg" // Adjust the path according to where you placed your image
          alt="Ellipse Section"
          layout="responsive"
          width={1000}
          height={860} // Adjust based on your image's aspect ratio
          className="rounded-lg"
        />
      </div>
    </div>
    </div>
  );
};

export default EllipseImageSection;
