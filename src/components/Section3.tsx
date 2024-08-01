const Section3 = () => {
  return (
    <div className="relative w-full bg-black h-[80vh] overflow-hidden">
      {/* <iframe
        src='https://my.spline.design/portalcopy-f17b3a0392f2766b65bc410c5a76282b/'
        className="absolute top-0 left-0 w-full h-full border-none z-[-1] pointer-events-none"
      ></iframe> */}
      <div className="absolute top-0 left-0 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-full z-0"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Unlocking the growth your company is capable of
          </p>
        </div>
      </div>

      <div className="relative text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl z-10 text-center px-4 sm:px-6 md:px-8 mt-4 sm:mt-6">
        <p>Guess what? You can actually unlock your doors of growth. Zoom in and see the magic!</p>
      </div>
    </div>
  );
};

export default Section3;
