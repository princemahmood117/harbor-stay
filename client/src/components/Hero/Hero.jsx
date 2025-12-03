
const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/assets/heroImage.png")] bg-no-repeat bg-center bg-cover md:h-screen h-[400px] mt-[-99px]'>
      <p className="bg-[#49B9FF]/80 px-3.5 py-1 rounded-md mt-20">
        The Ultimate Hotel Experience
      </p>

      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[60px] font-bold md:font-extrabold max-w-3xl mt-4">
        Discover Your Perfect Gateway Destination
      </h1>

      <p className="max-w-130 mt-6 md:mt-8 text-sm md:text-base">
        Unparalled luxury and comfort awaits at the world's most exlusive hotels
        and resorts. Start your journey today.
      </p>
    </div>
  );
};

export default Hero;
